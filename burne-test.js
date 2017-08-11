
const assert = require( "assert" );
const burne = require( "./burne.js" );

let symbol = Symbol( "test" );
let test = { };

burne( symbol, test );

assert.equal( test[ symbol ], symbol, "should be equal to Symbol( 'test' )" );

burne( "test", test );

assert.equal( test[ Symbol.for( "test" ) ], undefined, "should be equal to undefined" );

assert.equal( test[ symbol ], symbol, "should be equal to Symbol( 'test' )" );

let Hello = function Hello( ){ };
let symbol2 = Symbol.for( "extensive" );
burne( symbol2, Hello );

assert.equal( Hello[ symbol2 ], symbol2, "should be equal to Symbol.for( 'extensive' )" );

console.log( "ok" );
