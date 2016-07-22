var lmgtfy = function(message,callback) {
    var query = encodeURIComponent(message)
    var link = 'https://www.google.com/search?site=&source=hp&q=' + query + "&oq=" + query + "&gs_1"
    callback(null,'LMGTFY: ' + link)
}

// respond if the message starts with "how do I"
lmgtfy.match = /^how do I /i

module.exports = lmgtfy


search?site=&source=hp&q=things&oq=things&gs_l