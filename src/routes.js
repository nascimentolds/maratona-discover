const express = require('express');
const routes = express.Router();

const profile = {
    name: 'Marcelo Nascimento',
    avatar: 'https://github.com/nascimentolds.png',
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 4
}

const jobs = [];

const views = __dirname + "/views/";

routes.get('/', (req, res) => res.render(views + "index"));
routes.get('/job', (req, res) => res.render(views + "job"));
routes.post('/job', (req, res) => {
    // req.body = { name: 'Nada', 'daily-hours': '4', 'total-hours': '5' }

    const lastId = jobs[jobs.length -1]?.id || 1;

    jobs.push({
        id: lastId +1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now(),
    });
    return res.redirect('/');
});
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"));
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }));

module.exports = routes;