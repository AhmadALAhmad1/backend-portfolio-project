import Admin from "../models/admin.js";


class Controller{
//for create 
// async createAdmin(req, res) {

  //   const body = req.body;

  //   try {

  //     const doc = new Admin(body);
  //     const new_date = await doc.save()

  //     return res.status(200).json({ success: true, new_date });
  //   }

  //   catch (err) {
  //     return res.status(500).json({
  //       status: 500,
  //       success: false,
  //       data: err.message
  //     })
  //   }
  // }

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

// for delete: 
// deleteAdmin= async(req, res) => {
    
//     const n = req.params.id
//     try {
        
//         if (n <= Admin.length)
//     {
//         Admin.splice(n - 1, 1 )
//         res.json({ status: 200 ,message:`deleted successfuly`, message: Admin})
    
//     }
//     else 
//     {
//     return res.status(404).json({status:404, error:true, message:`The admin with id = ${n} does not exist`})
//     }
    
//     }
//      catch(error){
//         return res.json({ error: error.message })
//     }
// }
}

const controller = new Controller()
export default controller;