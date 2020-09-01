const sinon = require('sinon');
const { assert } = require('chai');
const request = require('supertest');
const { app } = require('./app');
const { Books } = require('../DAO/Books');
const { Magazines } = require('../DAO/Magazines');
const { Authors } = require('../DAO/Authors');

/* eslint-env mocha */
describe('app', () => {

  it('should invoke console.log method with "Hello world!" when calling route "/" and render "Hello world!" as content', () => {
    const expected = 'Hello world!';
    const stub = sinon.stub(console, 'log');
    request(app())
      .get('/')
      .expect(200)
      .then(response => {
          assert(response.body, expected);
          expect(stub.calledOnce).to.eq(true);
          expect(stub.firstCall.args[0]).to.eq('Hello world!');
          stub.restore();
      });
  });
  it('should invoke getAll method from Books DAO when calling route "/books"', () => {
    const expected = ['some books'];
    const stub = sinon.stub(Books.prototype, 'getAll').returns(expected);
    request(app())
      .get('/books')
      .expect(200)
      .then(response => {
          assert(response.body, expected);
          stub.restore();
      });
  });

  it('should invoke getAll method from Magazines DAO when calling route "/magazines"', () => {
    const expected = ['some magazines'];
    const stub = sinon.stub(Magazines.prototype, 'getAll').returns(expected);
    request(app())
      .get('/magazines')
      .expect(200)
      .then(response => {
          assert(response.body, expected);
          stub.restore();
      });
  });

  it('should invoke getAll method from Authors DAO when calling route "/authors"', () => {
    const expected = ['some authors'];
    const stub = sinon.stub(Authors.prototype, 'getAll').returns(expected);
    request(app())
      .get('/authors')
      .expect(200)
      .then(response => {
          assert(response.body, expected);
          stub.restore();
      });
  });
});