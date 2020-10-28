const expensiveCalculation = require('../../../common')

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    expensiveCalculation: expensiveCalculation()
  })
}