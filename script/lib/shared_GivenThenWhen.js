function upperCaseFirstCharacter(text) {
    return text.replace(/^\w/, function(txt){
        return txt.toUpperCase();
    });
}

function lowerCaseFirstCharacter(text) {
    return text.replace(/^\w/, function(txt){
        return txt.toLowerCase();
    });
}

function parameterDefinitionFromName(name) {
    return '@Named('+name+') String '+name;
}

function methodDefinitionFromClipText(text, type) {
    var methodName = text
        .replace(/\"/g, ' ')  // Drop any double-quotes separately as it doesn't seem to work otherwise
        .replace(/[@()<>']/g, ' ') // Drop any illegal charaters
        .replace(/\w\S+/g, function(txt){// Title-case each word
            return txt.charAt(0).toUpperCase() + txt.substr(1);
        })
        .replace(/\s+/g, ''); // Collapse spaces to a single method name
    var parameters = '';
    var resultArray;
    var paramRegExp = /\<(\w+)\>/g;
    while ((resultArray = paramRegExp.exec(text)) !== null) {
        var name = resultArray[1];
        parameters = parameters + parameterDefinitionFromName(name) + ', ';
    }
    parameters = parameters.replace(/, $/, '');
    return 'public void ' + lowerCaseFirstCharacter(type) + methodName + '('+parameters+') {\n}\n';
};

function annotationFromClipText(text, type) {
    var annotationText = text.replace(/\"/g, '\\"');  // escape any double-quotes
    var annotationName = '@' + type.replace(/^\w/, function(txt){ // Upper-case the first character
            return txt.toUpperCase();
        });
    return annotationName+'("'+annotationText+'")';
};