var app = module.exports = require("koa")();

// Use the config-object with the argument passed to node
var config = require("./config")();

app.use(function *(){
  this.body = 'Running configuration: ' + config.mode;
});

// start it
app.listen(config.port);
console.log("The app is stared. Listening on port "+ config.port);
console.log("This is the configuration we're running:")
console.log(config)