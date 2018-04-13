const name = String(clipText).replace(" ","_").toUpperCase();
return `"${name}": "${clipText}"`;