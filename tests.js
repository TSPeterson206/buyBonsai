const chai = require('chai')
const assert = chai.assert
const main = require('./js/tests')
var should = require('chai').should();

describe('item inventory', function () {
  it('should be an array filled with objects', function () {
    main.inventory.should.exist
    assert.typeOf(main.inventory, "object")
  })
})