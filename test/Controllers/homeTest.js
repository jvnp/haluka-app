'use strict'

var request = require('supertest')

describe('Home Controller', function () {

	describe('GET /', function () {

		it ('should send proper response', function () {

			request(TestServer)
			// 	.get('/')
			// 	.expect('Hello!', done)

		})

	})

})
