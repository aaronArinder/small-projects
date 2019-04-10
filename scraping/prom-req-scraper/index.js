const reqProm = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: 'http://webscraper.io/test-sites/e-commerce/allinone',
  transform: function(body){
    return cheerio.load(body)}
}

reqProm(options)
  .then(function(data){
    console.log(data('.title').text())
    console.log(data('.price').text())
})
  .catch(function(err){
    console.log(err)})

