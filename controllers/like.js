 
const uploadLike = (req, res, db) => {
    const { type, user_id, music_id } = req.body;
    if (!type || !user_id || !music_id) {
      return res.status(400).json('incorrect form submission');
    }
      db.transaction(trx => {
        trx.insert({
            type: type,
            user_id: user_id,
            music_id:music_id
        })
        .into('likes')
        .then(artist => {
          return res.json({"code":200, "id": artist[0]});
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to upload'))
    }
  
     
  const retriveLike = (req, res, db) => {
      db.select('*').from('likes')
      .then(data => {
        return res.json(data)
      })
      .catch(err => res.status(400).json('unable to featch'))
    }
    
    module.exports = {
        uploadLike: uploadLike,
        retriveLike: retriveLike
    }
  
  
  