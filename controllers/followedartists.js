 
const uploadFollowedartists = (req, res, db) => {
    const { artist_id, user_id } = req.body;
    if (!artist_id || !user_id ) {
      return res.status(400).json('incorrect form submission');
    }
      db.transaction(trx => {
        trx.insert({
            artist_id: artist_id,
            user_id: user_id
        })
        .into('followedartists')
        .then(artist => {
          return res.json({"code":200, "id": artist[0]});
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to upload'))
    }
  
     
  const retriveFollowedartists = (req, res, db) => {
      db.select('*').from('followedartists')
      .then(data => {
        return res.json(data)
      })
      .catch(err => res.status(400).json('unable to featch'))
  }


  const unfollowArtists = (req, res, db) => {
    db('followedartists')
    .where('artist_id', req.query.artist_id)
    .del()
    .then(data => {
      return res.json({"code":200})
    })
    .catch(err => {
      console.log(err)
    })
  }
    
    module.exports = {
        uploadFollowedartists: uploadFollowedartists,
        retriveFollowedartists: retriveFollowedartists,
        unfollowArtists: unfollowArtists
    }
  
  
  