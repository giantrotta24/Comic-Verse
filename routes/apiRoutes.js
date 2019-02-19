const db = require("../models");

module.exports = function(app) {
  // Get all examples
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

  app.get("/api/heroes/:id" , function(req, res) {
    db.Heroes.findOne({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });
  
  app.get("/api/villains/:id" , function(req, res) {
    db.Villains.findOne({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // Create a new example
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
