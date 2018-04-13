const convertCamelToSnakeCase = (text) => {
  const parts = String(text).split(/([A-Z]+[a-z]*)/);
  const snaked =
    parts
      .map(x => x.toLowerCase())
      .reduce(
        (accumulator, part) => {

          if( !part || part === '') {
            return accumulator;
          }

          return accumulator
            ?  `${accumulator}_${part}`
            : part;
        },
        false);
  return snaked;
}

return convertCamelToSnakeCase(clipText);
