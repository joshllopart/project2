var path = require("path")


module.exports = function (app) {

  //ask page
  app.get("/ask", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/ask.html"))
  });

  //answer page
  app.get("/help/:cat/:link?", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/helper.html"))
  });

  //success page for reactivation from email button
  app.get("/success", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/success.html"))
  })

  //home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  //home
  app.get("/decide", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/decide.html"))
  });

 //404
 app.get("*", function(req, res){
   res.redirect("/")
 })

};