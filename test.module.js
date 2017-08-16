"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "burne",
			"path": "burne/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/burne.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"burne": "burne"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const burne = require( "./burne.js" );
//: @end-server

//: @client:
const burne = require( "./burne.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "burne", ( ) => {

	describe( "`burne( Symbol( 'test' ), { } )`", ( ) => {
		it( "should be equal to Symbol( 'test' )", ( ) => {

			let symbol = Symbol( "test" );
			let test = { };

			burne( symbol, test );

			assert.equal( test[ symbol ], symbol );

		} );
	} );

	describe( "`burne with string type marker`", ( ) => {

		it( "should return Symbol( 'test' ) for Symbol( 'test' ) property", ( ) => {

			let symbol = Symbol( "test" );
			let test = { };

			burne( symbol, test );

			burne( "test", test );

			assert.equal( test[ symbol ], symbol );

		} );

		it( "should return undefined for Symbol.for( 'test' ) property", ( ) => {

			let symbol = Symbol( "test" );
			let test = { };

			burne( symbol, test );

			burne( "test", test );

			assert.equal( test[ Symbol.for( "test" ) ], undefined );

		} );

	} );

	describe( "`burne with Symbol type marker and function type entity`", ( ) => {

		it( "should have Symbol.for( 'extensive' ) property with Symbol.for( 'extensive' ) value", ( ) => {

			let Hello = function Hello( ){ };
			let symbol2 = Symbol.for( "extensive" );
			burne( symbol2, Hello );

			assert.equal( Hello[ symbol2 ], symbol2 );

		} );

	} );

} );

//: @end-server


//: @client:

describe( "burne", ( ) => {
} );

//: @end-client


//: @bridge:

describe( "burne", ( ) => {
} );

//: @end-bridge
