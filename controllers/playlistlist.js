 
const uploadPlaylistlist = (req, res, db) => {
    const { music_id, playlist_id } = req.body;
    if (!music_id || !playlist_id) {
      return res.status(400).json('incorrect form submission');
    }
      db.transaction(trx => {
        trx.insert({
          music_id: music_id,
          playlist_id: playlist_id
        })
        .into('playlistlist')
        .then(playlist => {
          return res.json({"code":200, "id": playlist[0]});
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to upload'))
    }
  
     
  const retrivePlaylistlist = (req, res, db) => {
      db.select('*').from('playlistlist')
      .then(data => {
        return res.json(data)
      })
      .catch(err => res.status(400).json('unable to fetch'))
    }
    
    module.exports = {
        uploadPlaylistlist: uploadPlaylistlist,
        retrivePlaylistlist: retrivePlaylistlist
    }
  
  
  