import Model from "../models/info.js";

class Controller {
  // callback functions used in in routes
  //get all the info
  getAll(req, res, next) {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //get an info  id
  get(req, res, next) {
    let { id } = req.params;
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  // post(req, res, next) {
  //   let body = req.body;
  //   let doc = new Model(body);
  //   doc.save((err, response) => {
  //     if (err) return next(err);
  //     res.status(200).send({ success: true, response });
  //   });
  // }

  // creating new info
  async addInfo(req, res) {
    const body = req.body;

    try {
      const doc = new Model(body);
      const new_admin = await doc.save();

      return res.status(200).json({ success: true, new_admin });
    } 
    catch (err) {
      return res.status(500).json({
        status: 500,
        success: false,
        data: err.message,
      });
    }
  }
}

const controller = new Controller();

export default controller;
