var config = require('../config')
var neo4j = require('neo4j-driver')
try {
  var driver = neo4j.driver( config.neo4j.uri,neo4j.auth.basic(config.neo4j.username, config.neo4j.password))
  var session = driver.session()
  console.log('success', driver)
} catch (e) {
  console.log(e)
}
module.exports = session
