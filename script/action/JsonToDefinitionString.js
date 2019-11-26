const escapedQuote = '\\"';

const jsonToDefinitionString = (input) => {
  const lines = input.split('\n');

  const quotesEscaped = lines.map(line => line.replace(/"/g, escapedQuote));

  const wrappedLines = quotesEscaped.map(line => `"${line}",`);

  return wrappedLines.join('\n')
}

return jsonToDefinitionString(clipText)
