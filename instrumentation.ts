const nextLogger = require("next/dist/build/output/log");
require("next/dist/server/lib/incremental-cache");

console.log("debug:lol", Object.keys(nextLogger.prefixes));

export async function register() {
  const cachePath = require.resolve("next/dist/server/lib/incremental-cache");
  const cacheObject = require.cache[cachePath];

  if (!cacheObject) {
    console.error("Cache object not found for path:", cachePath);
    return;
  }

  console.log("Cache object found:", cacheObject);

  // Ensure we are not modifying a null/undefined object
  if (!cacheObject.exports) {
    console.error("Cache object exports not found for path:", cachePath);
    return;
  }

  cacheObject.exports = { ...cacheObject.exports };

  console.log("Cache object exports overridden:", cacheObject.exports);

  Object.defineProperty(cacheObject.exports, "IncrementalCache", {
    value: new Proxy(cacheObject.exports.IncrementalCache, {
      construct(target, args) {
        console.log(`Creating an instance of ${target.name}`);
        return new target(...args);
      },
    }),
  });

  console.log(
    "Proxy set up for IncrementalCache:",
    cacheObject.exports.IncrementalCache
  );
}
