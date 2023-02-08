import multer from "multer";
import Model from "../models/info.js";


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
        success: false,
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



  //update info 
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

  //multer func.



}

const controller = new Controller();

export default controller;


