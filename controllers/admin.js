import admin from "../models/admin.js"

class Controller{
    
createAdmin = async(req, res) => {
    if(!req.body){
        res.status(400).json({message:error})
    }
    else{
        console.log("hello");
        // const post_admin= await admin.create({
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: req.body.password,
        //         title:req.body.title,
        //         LinkedinUrl: req.body.LinkedinUrl,
        //         InstagramUrl: req.body.InstagramUrl,
        //         GithubUrl:req.body.GithubUrl
        // })
        const post_admin= await admin.create(req.body)
        console.log(post_admin)
        return res.status(200).json(post_admin);
    }
    
}
    /*    try {
        let body = req.body;
        console.log("body ",req.body)
        let new_Admin = new Admin(body);
        const admin = await new_Admin.save();
        return res.status(200).json({ success: true })

    } catch(error){
        return res.json({ error: error.message })
    }
}

// async createAdmin(req, res) {
//     const body = req.body;
//         try {
            
//         const doc = new Admin(body);
//         const new_admin = await doc.save()
//         return res.status(200).json({ success: true , new_admin});
//         }

//     catch(error){
//         return res.status(500).json({ 
//             error: error.message,
//             success:false,
//             data: error.message
//     })
//     }
// }*/



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