var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var server = require('../index.js')

describe('Upcomingmatches',function(){

	describe('POST add upcomingmatches in test',function(){

		it('to add upcomingmatches',function(done){

		chai.request(server)
			.post('/addUpcomingmatches')
			.set({"Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwOTMzNTk5fQ.yZKyewYjynQmlPCt0UQwkOcgDjfzXez-sbjcKxrD13o'})
			.set('content-type','application/x-www-form-urlencoded')
			.send({
                country11:"nepal",
                country22:"india",
                matchdetails1:"abudhabi",
                 startdetail:"6"

			})
			.end(function(err,res){

                res.body.should.have.property('status').eql(200)				
                done();
			})
		})
	})
})