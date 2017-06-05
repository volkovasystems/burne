/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "burne",
			"path": "burne/burne.js",
			"file": "burne.js",
			"module": "burne",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/burne.git",
			"test": "burne-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Marks the entity with special symbol.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"impel": "impel",
			"kein": "kein",
			"protype": "protype",
			"wichevr": "wichevr",
			"xcavate": "xcavate",
			"zelf": "zelf"
		}
	@end-include
*/

const falzy = require( "falzy" );
const impel = require( "impel" );
const kein = require( "kein" );
const protype = require( "protype" );
const wichevr = require( "wichevr" );
const xcavate = require( "xcavate" );
const zelf = require( "zelf" );

const burne = function burne( marker, entity ){
	/*;
		"marker:required": [
			"string",
			"symbol"
		],
		"entity": "*"
	*/

	if( falzy( marker ) || !protype( marker, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid marker" );
	}

	if( !protype( marker, SYMBOL ) ){
		marker = Symbol.for( marker );
	}

	entity = wichevr( entity, zelf( this ) );

	let mark = xcavate( marker, entity );
	if( !kein( mark, entity ) && mark === marker ){
		impel( marker, marker, entity );
	}

	return entity;
};

module.exports = burne;
