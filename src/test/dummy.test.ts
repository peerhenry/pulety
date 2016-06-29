/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />

import { Router } from "express-serve-static-core";

import chai = require('chai');
import dummy = require('../controllers/dummy');
var expect = chai.expect;

describe('my dummy test', () => {
  it('should set and get dummy message', () => {
    // arrange
    var expected: string = "eyo!"; 
    dummy.setDummyMessage(expected);

    // act
    var result: string = dummy.getDummyMessage(); 

    // assert
    expect(result).to.be.equal(expected);
  });
});