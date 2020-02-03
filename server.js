const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');

const app = express();

app.use(cors())
app.use(bodyParser.json());

var db = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Thinkonce',
      database : 'music'
    }
});


app.get('/', (req, res)=> { res.send("api root") })
app.post('/signin', signin.handleSignin(db))
app.post('/register', (req, res) => { register.handleRegister(req, res, db) })

app.listen(5000, ()=> {
  console.log(`App is running on port 5000`);
})