const db = require("../models");

module.exports = function(app) {
  app.get("/api/heroes", function(req, res) {
    db.Heroes.findAll({}).then((results) => {
      res.json(results);
    });
  });

  app.get("/api/villains", function(req, res) {
    db.Villains.findAll({}).then((results) => {
      res.json(results);
    });
  });

  app.get("/api/:name" , async(req, res) => {
    const hero = await db.Heroes.findOne({ where: { name: req.params.name } });
    const villain = await db.Villains.findOne({ where: { name: req.params.name } });
    if (villain === null) {
      results = hero;
    }
    else {
      results = villain;
    };
    console.log(results);
    return res.json(results);
  });

  app.post("/api/heroes", function(req, res) {
    db.Heroes.create({
      name: req.body.name,
      secretIdentity: req.body.secretIdentity,
      earlyLife: req.body.earlyLife,
      currentHistory: req.body.currentHistory,
      personalLife: req.body.personalLife
    }).then((results) => {
      res.json(results);
    });
  });

  app.post("/api/villains", function(req, res) {
    db.Villains.create({
      name: req.body.name,
      secretIdentity: req.body.secretIdentity,
      earlyLife: req.body.earlyLife,
      currentHistory: req.body.currentHistory,
      personalLife: req.body.personalLife
    }).then((results) => {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
