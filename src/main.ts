import { parse } from 'https://deno.land/std@0.74.0/flags/mod.ts'
import { join } from 'https://deno.land/std@0.74.0/path/mod.ts'
import { iterateDir } from './iterateDir.ts'

if (import.meta.main) {
	const args = parse(Deno.args, { alias: { folder: 'f' } })
	console.dir(args)

	iterateDir(args.bp, args.bploc, join(args.bp, 'bridge/cache/BP'))
	iterateDir(args.rp, args.rploc, join(args.bp, 'bridge/cache/RP'))
}
