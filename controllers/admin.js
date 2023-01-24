import Admin from "../models/admin.js";


class Controller{

// for update 
updateAdmin = async(req, res) => {
    
    const id = parseInt(req.params.id)
    
    try {
        
        const adminToBeUpdated = await Admin.find((item) => 
        item.id === id);
        if(!adminToBeUpdated) return res.status(404).json({status:404, error:true, message:`the admin ${id} does not exist`});
        adminToBeUpdated.email= req.query.email;
        adminToBeUpdated.password= req.query.password;
        adminToBeUpdated.name= req.query.name;
        adminToBeUpdated.LinkedinUrl= req.query.LinkedinUrl;
        adminToBeUpdated.InstagramUrl= req.query.InstagramUrl;
        adminToBeUpdated.GithubUrl= req.query.GithubUrl;
        adminToBeUpdated.title=req.query.title;
     
        return res.status(200).json({status:200 , message: Admin})
        
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