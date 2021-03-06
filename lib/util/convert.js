'use strict';

/**
 * @param {*} data
 * @param {*} type
 * @param {Object} [options]
 * @param {*} [options.default]
 * @param {boolean} [options.required]
 * @returns {*}
 */
function convert(data, type, options) {
  if (typeof type === 'function' && data instanceof type) {
    return data;
  }
  options = options || {};
  if (typeof data === 'undefined') {
    if (options.hasOwnProperty('default')) {
      return convert(options.default, type);
    }
    if (options.hasOwnProperty('required') && options.required) {
      throw new Error('Required data not found.'); // @todo: Proper error message
    }
    return null;
  }
  switch (type) {
    case Boolean:
      if (typeof data === 'string') {
        const _data = data.toLowerCase().trim();
        if (_data === 'false' || parseInt(_data) === 0) {
          return false;
        }
      }
      return Boolean(data);
    case Number:
      return parseFloat(data);
    case String:
      return String(data);
    case Date:
      return new Date(String(data));
    case Object:
      return data;
    default:
      if (typeof type === 'function') {
        if (/^\s*class\s+/.test(type.toString())) {
          return new type(data);
        }
        return type(data);
      } else if (Array.isArray(type)) {
        if (type.length === 1) {
          const itemType = type[0];
          return data.map(function (item) {
            return convert(item, itemType);
          });
        } else if (type.length === 2) {
          const keyType = type[0];
          const valueType = type[1];
          const result = {};
          for (let key in data) {
            if (data.hasOwnProperty(key)) {
              const keyData = convert(key, keyType);
              result[keyData] = convert(data[key], valueType);
            }
          }
          return result;
        }
      } else if (typeof type === 'object') {
        const result = {};
        Object.keys(type).forEach(function(key) {
          const valueType = type[key];
          result[key] = convert(data[key], valueType);
        });
        return result;
      }
      return data;
  }
}

convert.Integer = parseInt;
convert.Float = parseFloat;

exports = module.exports = convert;
