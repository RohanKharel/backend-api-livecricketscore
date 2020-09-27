var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('User',function(){

	describe('POST user login in test',function(){

		it('the user should be login, unique email and password is provided',function(done){

		chai.request(server)
			.post('/login')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                email:'rohan@gmail.com',
				password:'rohan123'
			})
			.end(function(err,res){

				res.body.should.have.property('status').eql(200)
				done();
			})
		})
	})
})