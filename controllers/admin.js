import Admin from "../models/admin.js";


class Controller{

// for update 
updateAdmin = async(req, res) => {
    
    
    try {
        let body = req.body;
        
        let Admin = Admin(body);
        const admin = await Admin.save();
        return res.status(200).json({ success: true })
    } 
    catch(error){
        return res.json({ error: error.message })
    }
}

// for delete: 
deleteAdmin= async(req, res) => {
    
    const n = req.params.id
    try {
        
        if (n <= Admin.length)
    {
        Admin.splice(n - 1, 1 )
        res.json({ status: 200 , message: Admin})
    
    }
    else 
    {
    return res.status(404).json({status:404, error:true, message:`The admin with id = ${n} does not exist`})
    }
    
    }
     catch(error){
        return res.json({ error: error.message })
    }
}
}

const controller = new Controller()
export default controller;