const jsToJson =
  (text = '') => text
  .replace(/(\S*):/g, '"$1":')
  .replace(/\'/g,'"') // TODO handle escaped quotes in strings
  .replace(/,\s*([\]})])/gm, '$1');

return jsToJson(clipText);
