const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const { expect } = chai;

describe('Task API', () => {
    it('GET /tasks should return all tasks', (done) => {
        chai.request(app)
            .get('/tasks')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(3);
                done();
            });
    });

    it('GET /tasks/:id should return a specific task', (done) => {
        chai.request(app)
            .get('/tasks/1')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('task', 'Do the dishes');
                done();
            });
    });

    it('GET /tasks/:id should return 404 if task not found', (done) => {
        chai.request(app)
            .get('/tasks/999')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('error', 'Task with ID 999 not found');
                done();
            });
    });

    it('POST /tasks should add a new task (dummy response)', (done) => {
        chai.request(app)
            .post('/tasks')
            .send({ task: 'Learn Node.js' })
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message', 'Task added successfully');
                done();
            });
    });
});
