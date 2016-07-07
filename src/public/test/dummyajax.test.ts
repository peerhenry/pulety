/// <reference path="../../typings/globals/chai/index.d.ts" />
/// <reference path="../../typings/globals/sinon/index.d.ts" />

// import sinon = require('sinon');
// import chai = require('chai');
// import { executeAjax } from '../scripts/dummyscript' // the module we are testing
// var assert: Chai.AssertStatic = chai.assert;
// var expect: Chai.ExpectStatic = chai.expect;

// var xhr: Sinon.SinonFakeXMLHttpRequest;
// var requests: Array<Sinon.SinonFakeXMLHttpRequest>;

// before(function(){
//   xhr = sinon.useFakeXMLHttpRequest();
//   requests = [];
//   xhr.onCreate = function(req: Sinon.SinonFakeXMLHttpRequest){
//     requests.push(req);
//   }
// });

// after(function(){
//   xhr.restore();
// });

// describe('dummyscript', () => {
//   it('should make a get request to /dummy/forajax', () => {
//     // arrange
//     // act
//     executeAjax();
//     // assert
//     assert.equal(requests.length, 1);
//     expect( requests[0].url ).to.equal("/dummy/forajax");
//   });
// });