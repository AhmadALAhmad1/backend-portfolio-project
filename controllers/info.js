import Model from "../models/info.js";


//fix create response
//fix updateone func


class Controller {

  //get All
  async getAll(req, res, next) {
    try {
      const respon = await Model.find({});
      return res.status(200).json({
        status: 200,
        success: true,
        data: respon
      })

    } catch (err) {
      return res.status(500).json({
        status: 500,
        success: true,
        data: err
      })
    }
  }

  //get an info by id
  async get(req, res, next) {
    let { id } = req.params;

    try {
      const findingInfo = await Model.findById(id);

      if (!findingInfo)
        return res.status(404).json({
          status: 404,
          success: false,
          data: `Info with this ${id} does not exist`
        })
      return res.status(200).json({
        status: 200,
        success: true,
        data: findingInfo
      })

    }
    catch (err) {
      return res.status(500).json({
        status: 500,
        success: false,
        data: findingInfo
      })
    }
  }

  // creating new info
  async post(req, res) {

    const body = req.body;

    // if (!body.title) res.status(400).send({ success: false, response: "title is required" });
    // if (!body.description) res.status(400).send({ success: false, response: "description is required" });
    // if (!body.name) res.status(400).send({ success: false, response: "name is required" });
    // if (!body.Url) res.status(400).send({ success: false, response: "Url is required" });
    // if (!body.section) res.status(400).send({ success: false, response: "section is required" });

    try {

      const doc = new Model(body);
      const new_date = await doc.save()

      return res.status(200).json({ success: true, new_date });
    }

    catch (err) {
      return res.status(500).json({
        status: 500,
        success: false,
        data: err.message
      })
    }
  }



  //update an author by _id
  put(req, res, next) {
    let { id } = req.params; let body = req.body;
    Model.updateOne({ _id: id }, {
      $set: body
    },

      (err, response) => {
        if (err) return next(err);
        res.status(200).json({ success: true, data: body, message: `Updated successfuly` });
      });
  }

  // update an info by _id

  // async put(req, res, next) {
  //   let { id } = req.params;
  //   let body = req.body;

  //   try {
  //     await Model.updateOne({ _id: id }, { $set: body }, (err, response) => {
  //       if (err) return next(err);
  //       res.status(200).send({ success: true, message: `updated successfuly`, response });
  //     });

  //   }
  //   catch (err) {
  //     return res.status(500).json({
  //       status: 500,
  //       success: false,
  //       data: err
  //     })
  //   }
  // }


  //delete info by id

  async delete(req, res, next) {
    let { id } = req.params;
    const findingInfo = await Model.findById(id);
    if (!findingInfo) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "not found"
      })
    }
    const result = await findingInfo.delete();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "deleted successfully"
    })
  }


}

const controller = new Controller();

export default controller;


