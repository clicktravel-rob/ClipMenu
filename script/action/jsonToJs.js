const jsToJson =
  (text = '') => text
  .replace(/([^\\])\"([^"\\]+)\":/g, '$1$2:')
  .replace(/([^\\])"/g,'$1\'')
  .replace(/\\"/g, '"');

return jsToJson(clipText);
