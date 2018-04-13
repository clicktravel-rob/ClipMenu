const convertSnakeToCamelCase = (text) => {
  const parts = String(text).split('_');
  const camelled =
    parts
      .map(x => x.toLowerCase())
      .reduce(
        (accumulator, part) => {

          if( !part || part === '') {
            return accumulator;
          }

          if( !accumulator ) {
            return part;
          }

          const firstLetter = part.slice(0,1).toUpperCase();
          const theRest = part.slice(1);

          return `${accumulator}${firstLetter}${theRest}`;
        },
        false);
  return camelled;
}

return convertSnakeToCamelCase(clipText);
