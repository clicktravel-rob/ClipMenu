const sortObjectKeys = (text) => {
  const matchesCurlies = /^\s*\{((:?\n|.)*)}\s*$/m.exec(text);

  const toProcess = matchesCurlies
    ? matchesCurlies[1]
    : text;

  const lines = toProcess
    .split(/^\n|,\n?/)
    .map(s => s.trim())
    .filter(Boolean)
    .sort((a,b) => (a>b? 1 : -1));

  const sortedKeys = lines.join(',\n');

  return matchesCurlies
    ? '{\n'+sortedKeys+'\n}'
    : sortedKeys;
}

return sortObjectKeys(clipText);
