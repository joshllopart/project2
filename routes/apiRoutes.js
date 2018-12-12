var db = require("../models")
var email = require("../email/email.js")

module.exports = function (app) {

  //Get call for getting random category
  app.get("/api/get/random/:cat", function (req, res) {
    var queryObj = {}
    
    if (req.params.cat !== "All") {

      queryObj = {
        where: {
          category: req.params.cat,
          answered: false,
        }
      }
    }
    else {
      queryObj = {
        where: {
          answered: false
        }
      }
    }
    // console.log(queryObj)
    db.Requests.findAll(queryObj).then(function (result) {
      // console.log(result)
      requestIndex = Math.floor(Math.random() * result.length)
      try {
      res.json(result[requestIndex].dataValues)
      }
      catch(err) {
         res.json("no results")
      }
    });
  });

  //Post call for submitting gift help requests
  app.post("/api/post/new", function (req, res) {
    db.Requests.create(req.body).then(function (result) {
      console.log(result)
      email.conf({
        "req_msg": req.body.req_msg,
        "email": req.body.req_email
      })
    });
  });

  //Post call for chrome extenstion links
  app.post("/api/post/chromeExt", function (req, res) {
    console.log("It worked")
  });

  //Post call for submitting answers
  app.post("/api/post/answer", function (req, res) {

    //create answer row in db
    db.Answers.create(req.body).then(function (result) {
      var answerId = result.dataValues.id

      //update request answered to true
      db.Requests.update({ answered: true }, { where: { id: req.body.req_id } }).then(function (response) {

        //grab request data 
        db.Requests.hasMany(db.Answers, { foreignKey: 'req_id' })
        db.Answers.belongsTo(db.Requests, { foreignKey: 'id' })
        db.Requests.findOne({
          include: {
            model: db.Answers,
            on: {
              id: answerId
            }
          },
          where: {
            id: req.body.req_id
          }
        }).then(function (response) {
          
          //prepare and send email
          var emailObj = {
            email: response.dataValues.req_email,
            req_msg: response.dataValues.req_msg,
            res_msg: response.dataValues.Answers[0].res_msg,
            shop_link: response.dataValues.Answers[0].shop_link,
            id: response.dataValues.id
          }

          email.answer(emailObj)
        });
      })
    })
  });

  //for reactivating accounts (when user clicks button on email)
  app.get("/api/reactivate/:id", function (req, res) {
    db.Requests.update({ answered: false }, { where: { id: req.params.id } }).then(function (response) {
      res.redirect(req.baseUrl + "/success")
    })
  });

}
