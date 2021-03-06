# bridge-cache-transformer

Transform a project with [bridge.'s](https://bridge-core.github.io/) cache to a project that can be used with the [bridge-compiler](https://github.com/bridge-core/compiler). Custom syntax such as custom components will continue working as expected given that the compiler was setup correctly.

## Usage

1. Install [Deno](https://deno.land/)
2. Run `deno run --allow-read --allow-write https://raw.githubusercontent.com/bridge-core/bridge-cache-transformer/main/src/main.ts --bp [bp path] --rp [rp path] --bploc [transformed bp location] --rploc [transformed rp location]`
3. Done! :)
