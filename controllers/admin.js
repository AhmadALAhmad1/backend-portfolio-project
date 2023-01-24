import Admin from "../models/admin.js"

// this is for create admin: 
class Controller{
    
createAdmin = async(req, res) => {
    // if(!req.query.name) return res.status(200).json({ status:404, message:'name is required' })
    // if(!req.query.email) return res.status(200).json({ status:404, message:'email is required' })
    // if(!req.query.password) return res.status(200).json({ status:404, message:'password is required' })
    // if(!req.query.title) return res.status(200).json({ status:404, message:'title is required' })
        try {
            let body = req.body;
            console.log("body ",req.body)
        // const newAdminData = {
       //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password,
        //     title: req.body.title,
        //     LinkedinUrl: req.body.LinkedinUrl,
        //     InstagramUrl: req.body.InstagramUrl,
        //     GithubUrl: req.body.GithubUrl
        // }
        let new_Admin = new Admin(body);
        const admin = await new_Admin.save();
        return res.status(200).json({ success: true })

    } catch(error){
        return res.json({ error: error.message })
    }
}

// this is for get admin by id: 
getAdminById = async(req, res) => {
    const id = req.params.id
    try {
        const adminWithChosenId = await Admin.find(function(item){
            return item.id == id
        })
        
        if(!adminWithChosenId) return res.status(404).json({status:404, error:true, message:`the adminWithChosenId ${id} does not exist`})
        return res.status(200).send(adminWithChosenId)
    } catch(error){
        return res.json({ error: error.message })
    }
}

// this is for list all admins: 

listAdmins = async(req, res) => {
    try {
       
        let admin = await Admin.find();
        return res.status(200).send(admin)
    } 
    catch(error)
    { 
        return res.json({ error: error.message })
    }
}
}
const controller = new Controller()
export default controller;