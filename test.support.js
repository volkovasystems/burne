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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var burne = require("./burne.support.js");
//: @end-client







//: @client:

describe("burne", function () {

	describe("`burne( Symbol( 'test' ), { } )`", function () {
		it("should be equal to Symbol( 'test' )", function () {

			var symbol = (0, _symbol2.default)("test");
			var test = {};

			burne(symbol, test);

			assert.equal(test[symbol], symbol);

		});
	});

	describe("`burne with string type marker`", function () {

		it("should return Symbol( 'test' ) for Symbol( 'test' ) property", function () {

			var symbol = (0, _symbol2.default)("test");
			var test = {};

			burne(symbol, test);

			burne("test", test);

			assert.equal(test[symbol], symbol);

		});

		it("should return undefined for Symbol.for( 'test' ) property", function () {

			var symbol = (0, _symbol2.default)("test");
			var test = {};

			burne(symbol, test);

			burne("test", test);

			assert.equal(test[(0, _for2.default)("test")], undefined);

		});

	});

	describe("`burne with Symbol type marker and function type entity`", function () {

		it("should contain Symbol.for( 'extensive' ) property with Symbol.for( 'extensive' ) value", function () {

			var Hello = function Hello() {};
			var symbol2 = (0, _for2.default)("extensive");
			burne(symbol2, Hello);

			assert.equal(Hello[symbol2], symbol2);

		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYnVybmUiLCJkZXNjcmliZSIsIml0Iiwic3ltYm9sIiwidGVzdCIsImVxdWFsIiwidW5kZWZpbmVkIiwiSGVsbG8iLCJzeW1ib2wyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERDLEtBQUkscUNBQUosRUFBMkMsWUFBTzs7QUFFakQsT0FBSUMsU0FBUyxzQkFBUSxNQUFSLENBQWI7QUFDQSxPQUFJQyxPQUFPLEVBQVg7O0FBRUFKLFNBQU9HLE1BQVAsRUFBZUMsSUFBZjs7QUFFQU4sVUFBT08sS0FBUCxDQUFjRCxLQUFNRCxNQUFOLENBQWQsRUFBOEJBLE1BQTlCOztBQUVBLEdBVEQ7QUFVQSxFQVhEOztBQWFBRixVQUFVLGlDQUFWLEVBQTZDLFlBQU87O0FBRW5EQyxLQUFJLDhEQUFKLEVBQW9FLFlBQU87O0FBRTFFLE9BQUlDLFNBQVMsc0JBQVEsTUFBUixDQUFiO0FBQ0EsT0FBSUMsT0FBTyxFQUFYOztBQUVBSixTQUFPRyxNQUFQLEVBQWVDLElBQWY7O0FBRUFKLFNBQU8sTUFBUCxFQUFlSSxJQUFmOztBQUVBTixVQUFPTyxLQUFQLENBQWNELEtBQU1ELE1BQU4sQ0FBZCxFQUE4QkEsTUFBOUI7O0FBRUEsR0FYRDs7QUFhQUQsS0FBSSwyREFBSixFQUFpRSxZQUFPOztBQUV2RSxPQUFJQyxTQUFTLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLE9BQUlDLE9BQU8sRUFBWDs7QUFFQUosU0FBT0csTUFBUCxFQUFlQyxJQUFmOztBQUVBSixTQUFPLE1BQVAsRUFBZUksSUFBZjs7QUFFQU4sVUFBT08sS0FBUCxDQUFjRCxLQUFNLG1CQUFZLE1BQVosQ0FBTixDQUFkLEVBQTRDRSxTQUE1Qzs7QUFFQSxHQVhEOztBQWFBLEVBNUJEOztBQThCQUwsVUFBVSwwREFBVixFQUFzRSxZQUFPOztBQUU1RUMsS0FBSSx3RkFBSixFQUE4RixZQUFPOztBQUVwRyxPQUFJSyxRQUFRLFNBQVNBLEtBQVQsR0FBaUIsQ0FBRyxDQUFoQztBQUNBLE9BQUlDLFVBQVUsbUJBQVksV0FBWixDQUFkO0FBQ0FSLFNBQU9RLE9BQVAsRUFBZ0JELEtBQWhCOztBQUVBVCxVQUFPTyxLQUFQLENBQWNFLE1BQU9DLE9BQVAsQ0FBZCxFQUFnQ0EsT0FBaEM7O0FBRUEsR0FSRDs7QUFVQSxFQVpEOztBQWNBLENBM0REOztBQTZEQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImJ1cm5lXCIsXG5cdFx0XHRcInBhdGhcIjogXCJidXJuZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYnVybmUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImJ1cm5lXCI6IFwiYnVybmVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGJ1cm5lID0gcmVxdWlyZSggXCIuL2J1cm5lLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJidXJuZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBidXJuZSggU3ltYm9sKCAndGVzdCcgKSwgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ3Rlc3QnIClcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJ0ZXN0XCIgKTtcblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXG5cdFx0XHRidXJuZSggc3ltYm9sLCB0ZXN0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdFsgc3ltYm9sIF0sIHN5bWJvbCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJ1cm5lIHdpdGggc3RyaW5nIHR5cGUgbWFya2VyYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBTeW1ib2woICd0ZXN0JyApIGZvciBTeW1ib2woICd0ZXN0JyApIHByb3BlcnR5XCIsICggKSA9PiB7XG5cblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwidGVzdFwiICk7XG5cdFx0XHRsZXQgdGVzdCA9IHsgfTtcblxuXHRcdFx0YnVybmUoIHN5bWJvbCwgdGVzdCApO1xuXG5cdFx0XHRidXJuZSggXCJ0ZXN0XCIsIHRlc3QgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0WyBzeW1ib2wgXSwgc3ltYm9sICk7XG5cblx0XHR9ICk7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgU3ltYm9sLmZvciggJ3Rlc3QnICkgcHJvcGVydHlcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJ0ZXN0XCIgKTtcblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXG5cdFx0XHRidXJuZSggc3ltYm9sLCB0ZXN0ICk7XG5cblx0XHRcdGJ1cm5lKCBcInRlc3RcIiwgdGVzdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RbIFN5bWJvbC5mb3IoIFwidGVzdFwiICkgXSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBidXJuZSB3aXRoIFN5bWJvbCB0eXBlIG1hcmtlciBhbmQgZnVuY3Rpb24gdHlwZSBlbnRpdHlgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBTeW1ib2wuZm9yKCAnZXh0ZW5zaXZlJyApIHByb3BlcnR5IHdpdGggU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKSB2YWx1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgSGVsbG8gPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblx0XHRcdGxldCBzeW1ib2wyID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXHRcdFx0YnVybmUoIHN5bWJvbDIsIEhlbGxvICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggSGVsbG9bIHN5bWJvbDIgXSwgc3ltYm9sMiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
