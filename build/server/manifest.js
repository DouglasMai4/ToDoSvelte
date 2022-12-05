const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-299cf798.js","imports":["_app/immutable/start-299cf798.js","_app/immutable/chunks/index-8f0aa09d.js","_app/immutable/chunks/singletons-aa4b358b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-cf924a11.js'),
			() => import('./chunks/1-a2a7a67a.js'),
			() => import('./chunks/2-30ae9e87.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
