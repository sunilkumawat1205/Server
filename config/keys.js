
if(process.env.NODE_ENV==='production')
{
    //we are in production return production Keys
    module.exports = require('./prod');
}
else {
  module.exports = require('./dev');
  //we are in dev. return dev keys
}
