var gtw = ClipMenu.require('shared_GivenThenWhen');

var actualText = clipText.replace(/^\s*(When|And)\s*/i, '');
var annotation = annotationFromClipText(actualText, 'When');
var declaration = methodDefinitionFromClipText(actualText, 'When');
var result = annotation + '\n' + declaration;
console.log(result);

return result;
