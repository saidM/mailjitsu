'use strict'

const {expect} = require('chai')
const request = require('supertest')
const web = require('../lib/web')

describe('Web', () => {
  describe('GET /mails', () => {
    after(() => web.close())

    it('returns 200', done => {
      request(web)
      .get('/mails')
      .expect(200, done)
    })

    it('returns a mails array', done => {
      request(web)
      .get('/mails')
      .end((err, res) => {
        expect(err).to.be.a('null')
        expect(res.body.mails).to.be.an('array')
        done()
      })
    })
  })
})
