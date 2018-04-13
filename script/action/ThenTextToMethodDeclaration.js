var gtw = ClipMenu.require('shared_GivenThenWhen');

var actualText = clipText.replace(/^\s*(Then|And)\s*/i, '');
var annotation = annotationFromClipText(actualText, 'Then');
var declaration = methodDefinitionFromClipText(actualText, 'Then');
var result = annotation + '\n' + declaration;
console.log(result);

return result;
