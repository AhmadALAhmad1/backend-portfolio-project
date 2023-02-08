import admin from "../models/admin.js"

class Controller {
    // to creat an admin 
    createAdmin = async (req, res) => {
        if (!req.body) {
            res.status(400).json({ message: error })
        }
        else {
            console.log("admin was created");
            const createdAdmin = await admin.create(req.body)
            console.log(createdAdmin)
            return res.status(200).json(createdAdmin);
        }

    }

    // for geting an admin
    getAdminById = async (req, res) => {
        const { id } = req.params
        try {
            const adminWithChosenId = await admin.findById(id);
            if (!id)
                return res.status(404).json({
                    status: 404,
                    success: false,
                    data: `admin with id=${id} doesn't exist`
                })
            return res.status(200).json({
                status: 200,
                success: true,
                data: adminWithChosenId
            })

        } catch (error) {
            return res.status(500).json({   //why 500 ? error with internal server
                status: 500,
                success: false,
                data: adminWithChosenId     // do we want all these returned? 
            })
        }
    }
    // for update
    updateAdmin = async (req, res) => {

        const id = parseInt(req.params.id)

        try {


            return res.status(200).json({ status: 200, message: `${Admin()}` })

        }
        catch (error) {
            return res.json({ error: error.message })
        }
    }

    // for delete
    async deleteAdmin(req, res, next) {
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
    // for listing all admins
    async listAdmins(req, res) {
        try {

            const allAdmins = await admin.find();
            console.log("admin ", allAdmins)
            return res.status(200).json({
                status: 200,
                success: true,
                data: allAdmins
            })
        }
        catch (error) {
            return res.json({
                status: 500,
                success: false,
                data: error
            })
        }
    }
}
const controller = new Controller()
export default controller;