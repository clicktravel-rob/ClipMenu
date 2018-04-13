const allDoubleQuoteStringsRegEx = /\"((?:(?:\\")|[^"])*)\"/g;
const allSingleQuoteStringsRegEx = /'((?:(?:\\')|[^'])*)\'/g;
const allTemplateStringConcatsRegEx = /`\s*\+\s*`/g;

const replaceEscapedQuotesAndWrapInBackticks = (part) => {
  const deEscaped = part.slice(1, -1).replace(/\\"/g, `"`).replace(/\\'/g, `'`);
  return '`' + deEscaped + '`';
};

return clipText
  .replace( allDoubleQuoteStringsRegEx, replaceEscapedQuotesAndWrapInBackticks )
  .replace( allSingleQuoteStringsRegEx, replaceEscapedQuotesAndWrapInBackticks )
  .replace( allTemplateStringConcatsRegEx, '' );
