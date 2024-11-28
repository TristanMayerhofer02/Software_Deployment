const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
    let server; 
    let port = 0; 

    before((done) => {
        server = app.listen(0, () => {
            port = server.address().port; 
            done();
        });
    });

    after((done) => {
        server.close(() => {
            done();
        });
    });

    it('should return Hello, Azure DevOps!', (done) => {
        chai.request(`http://localhost:${port}`)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello, Azure DevOps!');
                done();
            });
    });
});
