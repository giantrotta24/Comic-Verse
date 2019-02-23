const db = require("../models");

module.exports = (app) => {
  app.get("/api/heroes", (req, res) => {
    db.Heroes.findAll({}).then((results) => {
      res.json(results);
    });
  });

  app.get("/api/villains", (req, res) => {
    db.Villains.findAll({}).then((results) => {
      res.json(results);
    });
  });

  app.get("/api/:name" , async(req, res) => {
    const hero = await db.Heroes.findOne({ where: { name: req.params.name } });
    const villain = await db.Villains.findOne({ where: { name: req.params.name } });
    if (villain === null) {
      results = hero;
      fill = "hero";
    }
    else {
      results = villain;
      fill = "villain";
    };
    console.log(results);
    return res.json(results);
  });

  app.get("/api" , async(req, res) => {
    const hero = await db.Heroes.findOne({ where: { name: req.body.name } });
    const villain = await db.Villains.findOne({ where: { name: req.body.name } });
    if (villain === null) {
      results = hero;
      fill = "hero";
    }
    else {
      results = villain;
      fill = "villain";
    };
    console.log(results);
    res.redirect("/view/" + fill + "/" + req.body.name);
  });

  app.post("/api/heroes", (req, res) => {
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

  app.post("/api/villains", (req, res) => {
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

};
