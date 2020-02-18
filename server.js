const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const multer = require('multer');

const upload = multer({
  dest: 'uploads/' 
}); 


const register = require('./controllers/register');
const signin = require('./controllers/signin');
const music = require('./controllers/music');

const app = express();

app.use('/uploads', express.static('uploads'));

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
app.post('/music', (req, res) => { music.uploadMusic(req, res, db ) })
app.get('/music', (req, res) => { music.retriveMusic(req, res, db ) })
app.post('/thumbnail', upload.single('thumbnail'), (req, res) => {
  res.json(req.file)
});
app.post('/audio', upload.single('audio'), (req, res) => {
  res.json(req.file)
});


app.listen(5000, ()=> {
  console.log(`App is running on port 5000`);
})