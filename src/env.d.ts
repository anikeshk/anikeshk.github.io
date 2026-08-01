/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.yaml" {
	// biome-ignore lint: parsed YAML is untyped by design
	const data: any;
	export default data;
}
