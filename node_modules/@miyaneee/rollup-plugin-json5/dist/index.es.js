import { createFilter, dataToEsm } from '@rollup/pluginutils';
import json5 from 'json5';

function json5Plugin(options) {
  if ( options === void 0 ) options = {};

  var filter = createFilter(options.include, options.exclude);
  var indent = 'indent' in options ? options.indent : '\t';

  return {
    name: 'json5',
    transform: function transform(json, id) {
      if (!/\.json5$/.test(id) || !filter(id)) { return null }

      try {
        var parsed = json5.parse(json, options.reviver);
        return {
          code: dataToEsm(parsed, {
            preferConst: options.preferConst,
            compact: options.compact,
            namedExports: options.namedExports,
            includeArbitraryNames: options.includeArbitraryNames,
            indent: indent
          }),
          map: { mappings: '' }
        }
      } catch (err) {
        var message = 'Could not parse JSON5 file';
        var position = parseInt(/[\d]/.exec(err.message)[0], 10);
        this.warn({ message: message, id: id, position: position });
        return null
      }
    }
  }
}

export { json5Plugin as default };
//# sourceMappingURL=index.es.js.map
