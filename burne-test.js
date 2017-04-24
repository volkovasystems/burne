
const burne = require( "./burne.js" );
const util = require( "util" );

let x = { };
console.log( util.inspect( burne( Symbol( "hello" ), x ), { "showHidden": true } ) );
