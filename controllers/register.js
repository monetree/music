const handleRegister = (req, res, db) => {
    const { firstname, username, password } = req.body;
    if (!firstname || !username || !password) {
      return res.status(400).json('incorrect form submission');
    }
      db.transaction(trx => {
        trx.insert({
          firstname:firstname,
          username: username,
          password: password,
        })
        .into('login')
        .then(loginUser => {
          res.json({"code":200, "id": loginUser[0]});
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to register'))
  }
  
  module.exports = {
    handleRegister: handleRegister
  };