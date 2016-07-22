var lmgtfy = function(message,callback) {
    var link = 'https://www.google.com/?#q=' + encodeURIComponent(message)
    callback(null,'LMGTFY: ' + link)
}

// respond if the message starts with "how do I"
lmgtfy.match = /^how do I /i

module.exports = lmgtfy
