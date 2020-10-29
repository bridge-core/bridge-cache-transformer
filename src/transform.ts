export function transform(children: any[]) {
	const res: any = {}

	for (const c of children) {
		if (c.is_disabled) continue

		if (c.is_minified) res[c.key] = c.data || c.children || c.array
		else if (Array.isArray(c.children)) res[c.key] = transform(c.children)
	}

	return res
}
