"use strict";var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                           			"mrkd": "mrkd",
                                                                                                                                                                                                           			"protype": "protype",
                                                                                                                                                                                                           			"transyl": "transyl",
                                                                                                                                                                                                           			"wichevr": "wichevr",
                                                                                                                                                                                                           			"xcavate": "xcavate",
                                                                                                                                                                                                           			"zelf": "zelf"
                                                                                                                                                                                                           		}
                                                                                                                                                                                                           	@end-include
                                                                                                                                                                                                           */

var falzy = require("falzy");
var impel = require("impel");
var mrkd = require("mrkd");
var protype = require("protype");
var transyl = require("transyl");
var wichevr = require("wichevr");
var xcavate = require("xcavate");
var zelf = require("zelf");

var burne = function burne(marker, entity) {
	/*;
                                            	"marker:required": [
                                            		"string",
                                            		"symbol"
                                            	],
                                            	"entity": "*"
                                            */

	if (falzy(marker) || !protype(marker, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid marker");
	}

	if (!protype(marker, SYMBOL)) {
		marker = (0, _for2.default)(marker);
	}

	entity = wichevr(entity, zelf(this));

	var mark = xcavate(marker, entity);
	if (transyl(mark, marker) && !mrkd(mark, entity, true)) {
		impel(marker, marker, entity);
	}

	return entity;
};

module.exports = burne;

//# sourceMappingURL=burne.support.js.map