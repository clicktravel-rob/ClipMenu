// TODO: Identify any nested objects and sort _them_
const processArray =
  (items = []) =>
'[' + items.join(', ') + ']';

// TODO: Identify fields and sort _them_
const processObject =
  (fields = []) => {
  const body = fields
    .sort((a,b) => (a.key>b.key? 1 : -1))
.map(({
    key,
    value
  }) => (value
    ? `${key}:${value}`
    : key);

  return '{' + body.join(', ') + '}';
}


const findBookendedSection =
  ({
    text,
    startIndex,
    terminator,
  }) => {
  const endIndex = text.lastIndexOf(terminator);

  return text.substr(startIndex+1, endIndex-startIndex-1);
}


const findFirstArray = ({
  startIndex,
  text
}) => {
  const preamble = text.substr(0, startIndex);

  const body = findBookendedSection({
    text,
    startIndex,
    terminator: ']',
  });

  return {
    preamble,
    body,
  };
}


const findFirstObject = ({
  startIndex,
  text
}) => {
  const preamble = text.substr(0, startIndex);

  const body = findBookendedSection({
    text,
    startIndex,
    terminator: '}',
  });

  return {
    preamble,
    body,
  };
}


const findOpeningBookends = (text = '') => {
  const firstParenthesis = text.indexOf('(');
  const firstCurly = text.indexOf('{');
  const firstArray = text.indexOf('[');

  const array = (firstArray >= 0)
    ? {
      start: firstArray,
    }
    : undefined;

  const object = (firstCurly >= 0)
    ? {
      start: firstCurly,
    }
    : undefined;

  const list = (firstParenthesis >= 0)
    ? {
      start: firstParenthesis,
    }
    : undefined;

  return {
    array,
    object,
    list,
  };
}


const processFirstArray = ({
  startIndex,
  text
}) => {
  const {
    preamble,
    body,
  } =
    findFirstArray({
      startIndex: array.start,
      text
    });

  const items = findArrayItems(body);

  return preamble + processArray(items);
}


const processFirstObject = ({
  startIndex,
  text
}) => {
  const {
    preamble,
    body,
  } =
    findFirstObject({
      startIndex: object.start,
      text
    });

  return preamble + processObject(body);
}


const alphabetizeItBitches =
  (text = '') =>
{
  const {
    array,
    object,
    list,
  } =
    findOpeningBookends(text);

  if( !array && !object ) {
    return text;
  }

  if( array && object ) {
    if(array.start < object.start) {
      return processFirstArray({
        startIndex: array.start,
        text
      });
    } else {
      return processFirstObject({
        startIndex: object.start,
        text
      });
    }
  } else if(array) {
    return processFirstArray({
      startIndex: array.start,
      text
    });
  } else {
    return processFirstObject({
      startIndex: object.start,
      text
    });
  }

};

return alphabetizeItBitches(clipText);
