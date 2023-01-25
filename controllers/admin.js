import Admin from "../models/admin.js";


class Controller{
// for update 
updateAdmin = async(req, res) => {
    
    const id = parseInt(req.params.id)
    
    try {
        
     
        return res.status(200).json({status:200 , message:`${Admin()}`})
        
    } 
    catch(error){
        return res.json({ error: error.message })
    }
}

// for delete
async deleteAdmin (req, res, next) {
    let { id } = req.params;
    const find = await Admin.findById(id);
    if (!find) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "not found"
      })
    }
    const result = await find.delete();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "deleted successfully"
    })
  }
}

const controller = new Controller()
export default controller;