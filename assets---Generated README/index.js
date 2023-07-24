const { readFileSync } = require('fs');
const { createRequire } = require('module');
const require = createRequire(import.meta.url);

const indexMjsCode = readFileSync('./index.mjs', 'utf8');
eval(indexMjsCode);


// DO NOT TOUCH THIS CODE
// THIS IS NEEDED TO KEEP CODE WORKING AND NOT ERROR OUT
// THIS CODE AGAIN I CANNOT TAKE CREDIT FOR AS I COULD'NT FIGURE IT OUT MYSELF