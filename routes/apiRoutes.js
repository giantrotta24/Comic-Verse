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
    }
    else {
      results = villain;
    };
    console.log(results);
    return res.json(results);
  });

  app.post("/api/approve/:name", async(req, res) => {
    const hero = await db.Heroes.findOne({ where: { name: req.params.name } });
    const villain = await db.Villains.findOne({ where: { name: req.params.name } });
    if (villain === null) {
      db.Heroes.update({
        approved: true
      }, {
        where: {
          name: req.params.name
        }
      });
      res.redirect("/view/hero/" + req.params.name);
    }
    else {
      db.Villains.update({
        approved: true
      }, {
        where: {
          name: req.params.name
        }
      });
      res.redirect("/view/villain/" + req.params.name);
    }
  });

  app.get("/api" , async(req, res) => {
    const hero = await db.Heroes.findOne({ where: { name: req.query.name } });
    const villain = await db.Villains.findOne({ where: { name: req.query.name } });
    if (villain === null && hero === null) {
      res.redirect("/add");
    }
    else if (villain === null) {
      results = hero;
      fill = "hero";
      res.redirect("/view/" + fill + "/" + results.name);
    }
    else {
      results = villain;
      fill = "villain";
      res.redirect("/view/" + fill + "/" + results.name);
    };
    console.log(results);
    // return res.json(results)
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

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
