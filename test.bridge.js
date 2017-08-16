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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("burne", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`burne( Symbol( 'test' ), { } )`", function () {
		it("should be equal to Symbol( 'test' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let symbol = Symbol( "test" );
   					let test = { };
   
   					burne( symbol, test );
   
   					return test[ symbol ].toString( );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(test)");

		});
	});


	describe("`burne with string type marker`", function () {

		it("should return Symbol( 'test' ) for Symbol( 'test' ) property", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let symbol = Symbol( "test" );
   					let test = { };
   
   					burne( symbol, test );
   
   					burne( "test", test );
   
   					return test[ symbol ].toString( );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(test)");

		});

		it("should return undefined for Symbol.for( 'test' ) property", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let symbol = Symbol( "test" );
   					let test = { };
   
   					burne( symbol, test );
   
   					burne( "test", test );
   
   					return test[ Symbol.for( "test" ) ];
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, undefined);

		});

	});


	describe("`burne with Symbol type marker and function type entity`", function () {

		it("should contain Symbol.for( 'extensive' ) property with Symbol.for( 'extensive' ) value", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let Hello = function Hello( ){ };
   					let symbol2 = Symbol.for( "extensive" );
   					burne( symbol2, Hello );
   					return Hello[ symbol2 ].toString( );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(extensive)");

		});

	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUkscUNBQUosRUFBMkMsWUFBTztBQUNqRDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsY0FBdEI7O0FBRUEsR0F0QkQ7QUF1QkEsRUF4QkQ7OztBQTJCQU4sVUFBVSxpQ0FBVixFQUE2QyxZQUFPOztBQUVuREksS0FBSSw4REFBSixFQUFvRSxZQUFPO0FBQzFFO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLGNBQXRCOztBQUVBLEdBeEJEOztBQTBCQUYsS0FBSSwyREFBSixFQUFpRSxZQUFPOztBQUV2RTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCQyxTQUF0Qjs7QUFFQSxHQXhCRDs7QUEwQkEsRUF0REQ7OztBQXlEQVAsVUFBVSwwREFBVixFQUFzRSxZQUFPOztBQUU1RUksS0FBSSx3RkFBSixFQUE4RixZQUFPOztBQUVwRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsbUJBQXRCOztBQUVBLEdBckJEOztBQXVCQSxFQXpCRDs7QUEyQkEsQ0FuSEQ7O0FBcUhBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJidXJuZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYnVybmUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2J1cm5lLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJidXJuZVwiOiBcImJ1cm5lXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiYnVybmVcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGJ1cm5lKCBTeW1ib2woICd0ZXN0JyApLCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAndGVzdCcgKVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJ0ZXN0XCIgKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHsgfTtcblxuXHRcdFx0XHRcdGJ1cm5lKCBzeW1ib2wsIHRlc3QgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0WyBzeW1ib2wgXS50b1N0cmluZyggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIlN5bWJvbCh0ZXN0KVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBidXJuZSB3aXRoIHN0cmluZyB0eXBlIG1hcmtlcmBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gU3ltYm9sKCAndGVzdCcgKSBmb3IgU3ltYm9sKCAndGVzdCcgKSBwcm9wZXJ0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJ0ZXN0XCIgKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHsgfTtcblxuXHRcdFx0XHRcdGJ1cm5lKCBzeW1ib2wsIHRlc3QgKTtcblxuXHRcdFx0XHRcdGJ1cm5lKCBcInRlc3RcIiwgdGVzdCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3RbIHN5bWJvbCBdLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiU3ltYm9sKHRlc3QpXCIgKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGZvciBTeW1ib2wuZm9yKCAndGVzdCcgKSBwcm9wZXJ0eVwiLCAoICkgPT4ge1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sKCBcInRlc3RcIiApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXG5cdFx0XHRcdFx0YnVybmUoIHN5bWJvbCwgdGVzdCApO1xuXG5cdFx0XHRcdFx0YnVybmUoIFwidGVzdFwiLCB0ZXN0ICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdFsgU3ltYm9sLmZvciggXCJ0ZXN0XCIgKSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB1bmRlZmluZWQgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYnVybmUgd2l0aCBTeW1ib2wgdHlwZSBtYXJrZXIgYW5kIGZ1bmN0aW9uIHR5cGUgZW50aXR5YFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKSBwcm9wZXJ0eSB3aXRoIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnICkgdmFsdWVcIiwgKCApID0+IHtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IEhlbGxvID0gZnVuY3Rpb24gSGVsbG8oICl7IH07XG5cdFx0XHRcdFx0bGV0IHN5bWJvbDIgPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cdFx0XHRcdFx0YnVybmUoIHN5bWJvbDIsIEhlbGxvICk7XG5cdFx0XHRcdFx0cmV0dXJuIEhlbGxvWyBzeW1ib2wyIF0udG9TdHJpbmcoICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJTeW1ib2woZXh0ZW5zaXZlKVwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
