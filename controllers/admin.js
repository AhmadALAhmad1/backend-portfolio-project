import admin from "../models/admin.js"

class Controller{
    
createAdmin = async(req, res) => {
    if(!req.body){
        res.status(400).json({message:error})
    }
    else{
        console.log("admin was created");
        const post_admin= await admin.create(req.body)
        console.log(post_admin)
        return res.status(200).json(post_admin);
    }
    
}


getAdminById = async(req, res) => {
    const id = req.params.id
    try {
        const adminWithChosenId = await admin.findById(id);
        
        return res.status(200).json({
            status:200,
            success:true,
            data:adminWithChosenId 
        })
        
    } catch(error){
        return res.status(500).json({ 
            status:500,
            success:false,
            data:adminWithChosenId
         })
    }
}


listAdmins = async(req, res) => {
    try {
       
        let new_admin = await admin.find();
        console.log("admin ",new_admin)
        return res.status(200).send(new_admin)
    } 
    catch(error)
    { 
        return res.json({ error: error.message })
    }
}
}

const controller = new Controller()
export default controller;