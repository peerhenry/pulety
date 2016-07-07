/// <reference path="../../typings/globals/sinon/index.d.ts" />

import sinon = require('../../../build/node_modules/sinon/pkg/sinon');

describe("sinon example test", function () {
    var time2013_10_01: number;
 
    time2013_10_01 = (new Date(2013, 10-1, 1)).getTime();
 
    var fakeTimer: Sinon.SinonFakeTimers;

    before(function() {
        // sinon was defined in global scope 
        fakeTimer = sinon.useFakeTimers(time2013_10_01);
    });
 
    it("some test", function() {
        //test 
    });
 
    after(function() {
        fakeTimer.restore();
    });
 
});