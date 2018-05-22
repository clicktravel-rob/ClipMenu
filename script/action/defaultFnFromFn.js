const convertFunctionNameToDefaultFunctionName = (text) => {
  const initiallyCapitalised =
    (text && text.length)
      ? text.substring(0,1).toUpperCase() + text.substring(1)
      : '';

  return `default${initiallyCapitalised}`;
}

return convertFunctionNameToDefaultFunctionName(clipText);
