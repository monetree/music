 
const uploadMyplaylist = (req, res, db) => {
    const { user_id, playlist_id } = req.body;
    if (!user_id || !playlist_id) {
      return res.status(400).json('incorrect form submission');
    }
      db.transaction(trx => {
        trx.insert({
            user_id: user_id,
            playlist_id:playlist_id
        })
        .into('myplaylist')
        .then(artist => {
          return res.json({"code":200, "id": artist[0]});
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to upload'))
    }
  
     
  const retriveMyplaylist = (req, res, db) => {
      db.select('*').from('myplaylist')
      .then(data => {
        return res.json(data)
      })
      .catch(err => res.status(400).json('unable to featch'))
    }
    
    module.exports = {
        uploadMyplaylist: uploadMyplaylist,
        retriveMyplaylist: retriveMyplaylist
    }
  
  
  