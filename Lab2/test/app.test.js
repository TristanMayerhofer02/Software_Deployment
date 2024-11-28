const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
    let server; // Server-Instanz
    let port = 0; // Dynamischer Port

    before((done) => {
        // Server auf einem zufälligen freien Port starten
        server = app.listen(0, () => {
            port = server.address().port; // Dynamisch zugewiesener Port
            console.log(`Test server started on port ${port}`);
            done();
        });
    });

    after((done) => {
        // Server stoppen
        server.close(() => {
            console.log('Test server stopped');
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
