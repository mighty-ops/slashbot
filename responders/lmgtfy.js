var lmgtfy = function(message,callback) {
    var query = encodeURIComponent(message)
    var query2 = query.replace(/%20/g, "+")
    var query3 = query2.replace(/how+do+i+/i, "")
    var link = 'https://www.google.com/search?q=' + query3 + "\&btnI"
    callback(null,'LMGTFY: ' + link)
}

// respond if the message starts with "how do I"
lmgtfy.match = /^how do I /i

module.exports = lmgtfy
