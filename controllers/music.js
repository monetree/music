 
const uploadMusic = (req, res, db) => {
  const { title, thumbnail, music, user_id, artist_id } = req.body;
  if (!title || !thumbnail || !music) {
    return res.status(400).json('incorrect form submission');
  }
    db.transaction(trx => {
      trx.insert({
        title:title,
        thumbnail: thumbnail,
        music: music,
        user_id: user_id,
        artist_id: artist_id
      })
      .into('musics')
      .then(music => {
        return res.json({"code":200, "id": music[0]});
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to upload'))
  }

   
const retriveMusic = (req, res, db) => {
    db.select('*').from('musics')
    .then(data => {
      return res.json(data)
    })
    .catch(err => res.status(400).json('unable to fetch'))
  }
  
  module.exports = {
    uploadMusic: uploadMusic,
    retriveMusic: retriveMusic
  }


