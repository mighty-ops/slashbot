
var shoutPattern = /^shout/i

/**
 * A simple responder. Listens for "shout <phrase>", and shouts it back.
 */
var shout = function(message,callback){
  callback(null, message.replace(shoutPattern,'').toUpperCase())
}

shout.match = shoutPattern

module.exports = shout
