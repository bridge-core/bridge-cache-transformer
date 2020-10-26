import { join } from 'https://deno.land/std@0.74.0/path/mod.ts'
import { transform } from './transform.ts'

export async function iterateDir(
	fromFolder: string,
	toFolder: string,
	cachePath: string
) {
	await Deno.mkdir(toFolder, { recursive: true })

	const dirents = await Deno.readDir(fromFolder)

	for await (const dirent of dirents) {
		if (dirent.isDirectory) {
			iterateDir(
				join(fromFolder, dirent.name),
				join(toFolder, dirent.name),
				join(cachePath, dirent.name)
			)
			continue
		}

		// File
		try {
			// Try reading the file from its cache
			const { cache_content: cacheContent } = JSON.parse(
				await Deno.readTextFile(join(cachePath, dirent.name))
			)

			Deno.writeTextFile(
				join(toFolder, dirent.name),
				JSON.stringify(transform(cacheContent.children), null, '\t')
			)
		} catch {
			// No cache, just copy file over
			await Deno.copyFile(
				join(fromFolder, dirent.name),
				join(toFolder, dirent.name)
			)
		}
	}
}
