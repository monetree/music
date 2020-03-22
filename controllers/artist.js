 
const uploadArtist = (req, res, db) => {
    const { name, photo, user_id } = req.body;
    if (!name || !photo || !user_id) {
      return res.status(400).json('incorrect form submission');
    }
      db.transaction(trx => {
        trx.insert({
            name:name,
            photo: photo,
            user_id: user_id,
        })
        .into('artist')
        .then(artist => {
          return res.json({"code":200, "id": artist[0]});
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to upload'))
    }
  
     
  const retriveArtist = (req, res, db) => {
      db.select('*').from('artist')
      .then(data => {
        return res.json(data)
      })
      .catch(err => res.status(400).json('unable to featch'))
    }
    
    module.exports = {
      uploadArtist: uploadArtist,
      retriveArtist: retriveArtist
    }
  
  
  