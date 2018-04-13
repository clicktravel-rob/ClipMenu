var gtw = ClipMenu.require('shared_GivenThenWhen');
if (!gtw) {
    throw new Error('Could not find the library: shared_GivenThenWhen.js');
}

var actualText = clipText.replace(/^\s*(Given|And)\s*/i, '');
var annotation = annotationFromClipText(actualText, 'Given');
var declaration = methodDefinitionFromClipText(actualText, 'Given');
var result = annotation + '\n' + declaration;
console.log(result);

return result;
