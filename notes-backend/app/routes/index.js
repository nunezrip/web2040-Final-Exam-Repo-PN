module.exports = function (app) {
  var Note = require('../models/note');

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function (req, res) {
    Note.find({}, function (err, notes) {
      if (err) {
        console.log(err)
      } else {
        res.render('index.ejs', {
          notes: notes
        }); // load the index.ejs file
      }
    })
  });

  app.post('/createnote', function (req, res) {
    console.log(req.body);

    var newNote = new Note();

    newNote.author = req.body.author;
    newNote.description = req.body.description;
    newNote.date = req.body.date;

    newNote.save();

    res.redirect('/');
  })

}