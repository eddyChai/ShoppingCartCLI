var funcs = require('../funcs.js');
var expect = require('chai').expect;

describe('tests', function() {
   beforeEach(function() {
       funcs.clearCart();
     })
  context('Add 2 apples for $4.95 each and 1 orange for $3.99 each', function() {
    it('should return cart total 13.89', function() {

      funcs.add("apple",2);
      funcs.add("orange",1);
      expect(funcs.cartTotal()).to.equal(13.89);
    })
  })
  context('Add 3 "Apple" products, then remove 1 "Apple" product', function() {
    it('should return cart total of $9.9', function() {
      funcs.add("apple",3);
      funcs.remove("apple",1);
      expect(funcs.cartTotal()).to.equal(9.9);
   })
 })
})
