const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, 'somesupersecretsecret', (err, authorizedData) => {
      if (err) {
        console.log(err, 'error in Admin Access')
      } else {
        const email = authorizedData['email']
        // console.log(authorizedData, 'from Admin Access')
        // console.log(email)
        if (email != 'admin@company.com') {
          res.status(401).json({
            data: [{ message: 'You do not have access to this page' }],
          })
          // console.log('Access not available here')
          return
        }
      }
    })
    next()
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' })
  }
}
