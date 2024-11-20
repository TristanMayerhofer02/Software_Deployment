const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const tasks = [
    { id: 1, task: 'Do the dishes', completed: false },
    { id: 2, task: 'Clean the room', completed: true },
    { id: 3, task: 'Write a report', completed: false }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find(t => t.id === id);
    
    if (!task) {
        res.status(404).send({ error: `Task with ID ${id} not found` });
    } else {
        res.json(task);
    }
});


app.post('/tasks', (req, res) => {
    res.status(201).send({ message: 'Task added successfully' });
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server läuft unter http://localhost:${port}`);
    });
}
