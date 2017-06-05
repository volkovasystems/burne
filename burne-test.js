
const assert = require( "assert" );
const burne = require( "./burne.js" );

let symbol = Symbol( "test" );
let test = { };

burne( symbol, test );

assert.equal( test[ symbol ], symbol, "should be equal" );

burne( "test", test );

assert.equal( test[ Symbol.for( "test" ) ], undefined, "should be equal" );

assert.equal( test[ symbol ], symbol, "should be equal" );

console.log( "ok" );
