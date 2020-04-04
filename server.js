const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const multer = require('multer');
const path = require("path") 


const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
      cb(null, "uploads") 
  }, 
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now()+"." + file.originalname.split(".")[1]) 
  } 
}) 

const maxSize = 100 * 1000 * 1000; 


var upload = multer({  
  storage: storage, 
  limits: { fileSize: maxSize }, 
  fileFilter: function (req, file, cb){ 
      var filetypes = /jpeg|jpg|png|mp3/; 
      var mimetype = filetypes.test(file.mimetype); 

      var extname = filetypes.test(path.extname( 
                  file.originalname).toLowerCase()); 
      
      if (mimetype && extname) { 
          return cb(null, true); 
      } 
    
      cb("Error: File upload only supports the "
              + "following filetypes - " + filetypes); 
    }  

}).single("image");


const storage2 = multer.diskStorage({ 
  destination: function (req, file, cb) { 
      cb(null, "uploads") 
  }, 
  filename: function (req, file, cb) { 
    cb(null, file.fieldname + "-" + Date.now()+"." + file.originalname.split(".")[1])
  } 
})


var upload2 = multer({  
  storage: storage2, 
  limits: { fileSize: maxSize }, 
  fileFilter: function (req, file, cb){ 
      var filetypes = /wav|mp3/; 
      var mimetype = filetypes.test(file.mimetype); 

      var extname = filetypes.test(path.extname( 
                  file.originalname).toLowerCase()); 
      
      if (mimetype && extname) { 
          return cb(null, true); 
      } 
    
      cb("Error: File upload only supports the "
              + "following filetypes - " + filetypes); 
    }  

}).single("audio");


const register = require('./controllers/register');
const signin = require('./controllers/signin');
const music = require('./controllers/music');
const artist = require('./controllers/artist');
const playlist = require('./controllers/playlist');
const playlistlist = require('./controllers/playlistlist');
const like = require('./controllers/like');
const myplaylist = require('./controllers/myplaylist');
const followedartists = require('./controllers/followedartists');


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
app.post('/artist', (req, res) => { artist.uploadArtist(req, res, db ) })
app.get('/artist', (req, res) => { artist.retriveArtist(req, res, db ) })
app.post('/playlist', (req, res) => { playlist.uploadPlaylist(req, res, db ) })
app.get('/playlist', (req, res) => { playlist.retrivePlaylist(req, res, db ) })
app.post('/playlistlist', (req, res) => { playlistlist.uploadPlaylistlist(req, res, db ) })
app.get('/playlistlist', (req, res) => { playlistlist.retrivePlaylistlist(req, res, db ) })
app.post('/like', (req, res) => { like.uploadLike(req, res, db ) })
app.get('/like', (req, res) => { like.retriveLike(req, res, db ) })
app.post('/myplaylist', (req, res) => { myplaylist.uploadMyplaylist(req, res, db ) })
app.get('/myplaylist', (req, res) => { myplaylist.retriveMyplaylist(req, res, db ) })
app.post('/followedartists', (req, res) => { followedartists.uploadFollowedartists(req, res, db ) })
app.get('/followedartists', (req, res) => { followedartists.retriveFollowedartists(req, res, db ) })
app.delete('/followedartists', (req, res) => { followedartists.unfollowArtists(req, res, db ) })



app.post("/thumbnail",function (req, res, next) { 
  upload(req,res,function(err) { 
      if(err) { 
        console.log(err)
      } 
      else { 
        res.json(req.file)
      } 
  }) 
}) 

app.post("/audio",function (req, res, next) { 
  upload2(req,res,function(err) { 
      if(err) { 
          console.log(err)
      } 
      else { 
        res.json(req.file)
      } 
  }) 
}) 


app.listen(5000, ()=> {
  console.log(`App is running on port 5000`);
})


