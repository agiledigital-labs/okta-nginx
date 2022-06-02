const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const jwtDecode = require('jwt-decode')
const port = 3000

app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies)

  const oktaJwt = req.cookies['okta-jwt']

  const decoded = jwtDecode(oktaJwt)

  res.send(decoded)
})

app.listen(port, () => {
  console.log(`Toy COP Express Server listening on port ${port}`)
})
