'use strict'

var request = require('supertest')

describe('Home Controller', function () {

	describe('GET /', function () {

		it ('should send proper response', function (done) {

			request(TestServer)
				.get('/')
				.expect('Hello!', done)

		})

	})

})
