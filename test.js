const chai = require('chai')
const assert = chai.assert
const main = require('./js/tests')
var should = require('chai').should();

describe('item inventory', function () {
  it('should be an array filled with objects', function () {
    main.inventory.should.exist
    assert.typeOf(main.inventory, "array")
  })
})
describe('item inventory', function () {
  it('should contain 9 plant items', function () {
    assert.lengthOf(main.inventory, 9)
  })
})
describe('onSale filter', function () {
  it('should filter inventory for all sale items', function () {
    main.onSale.should.exist
    assert.typeOf(main.onSale, "array")
  })
})
describe('onSale filter', function () {
  it('should contain 3 items', function () {
    main.onSale.should.exist
    assert.lengthOf(main.onSale, 3)
  })
})
// describe('item inventory', function () {
//   it('should be an array filled with objects', function () {
//     main.inventory.should.exist
//     assert.typeOf(main.inventory, "array")
//   })
// })
// describe('item inventory', function () {
//   it('should be an array filled with objects', function () {
//     main.inventory.should.exist
//     assert.typeOf(main.inventory, "array")
//   })
// })
// describe('item inventory', function () {
//   it('should be an array filled with objects', function () {
//     main.inventory.should.exist
//     assert.typeOf(main.inventory, "array")
//   })
// })
// describe('item inventory', function () {
//   it('should be an array filled with objects', function () {
//     main.inventory.should.exist
//     assert.typeOf(main.inventory, "array")
//   })
// })