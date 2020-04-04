 
const handleSignin = (db, bcrypt) => (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json('incorrect form submission');
  }
  db.select('username', 'id').from('login')
    .where({username: username, password: password})
    .then(data => {
      return res.json(data)
    })
    .catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
  handleSignin: handleSignin
}