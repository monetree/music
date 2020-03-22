 
const uploadPlaylist = (req, res, db) => {
  const { name, thumbnail,user_id } = req.body;
  if (!name || !thumbnail || !user_id) {
    return res.status(400).json('incorrect form submission');
  }
    db.transaction(trx => {
      trx.insert({
        name:name,
        thumbnail: thumbnail,
        user_id: user_id
      })
      .into('playlist')
      .then(playlist => {
        return res.json({"code":200, "id": playlist[0]});
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to upload'))
  }

   
const retrivePlaylist = (req, res, db) => {
    db.select('*').from('playlist')
    .then(data => {
      return res.json(data)
    })
    .catch(err => res.status(400).json('unable to fetch'))
  }
  
  module.exports = {
    uploadPlaylist: uploadPlaylist,
    retrivePlaylist: retrivePlaylist
  }


