var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('User',function(){

	describe('POST user registration in test',function(){

		it('the user should be registered, unique email and password is provided',function(done){

		chai.request(server)
			.post('/registration')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                fullname:'Rohan sharma kharel',
                email:'rohan@gmail.com',
                phone:'9876542',
				password:'rohan123'
			})
			.end(function(err,res){

				res.body.should.have.property('status').eql('200')
				done();
			})
		})
	})
})