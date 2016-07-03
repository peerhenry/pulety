/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/chai/index.d.ts" />

import { setMessage, getMessage } from '../scripts/dummyscript'
import chai = require('chai');
var expect = chai.expect;

describe('dummyscript', ()=>{

   it('should return correct string', () =>{
       // arrange
       var expected: string = 'The king in the north!';
       setMessage(expected)
       // act
       var result: string = getMessage();
       // assert
       expect(result).to.be.equal(expected);
   });

});