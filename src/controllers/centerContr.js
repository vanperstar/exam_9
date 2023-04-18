import CenterModel from "../models/centerModel.js"
import models from "../models/associations.js"



const GET = async(req, res) => {
    try {
        const date =  await CenterModel.findAll({
            include: [models.DepartmentModel],
            raw: true
        })
        res.send(date)
    } catch (error) {
        res.send({
            status: 400,
            message: error.message
        })
    }
}

const POST = async(req, res) => {
    try {
        const { name, addres } = req.body

        const newCenter  = await CenterModel.create({
            name,
            addres
        })
    
        console.log(newCenter);
    
        res.send({
            status: 200,
            message: "Center added!",
            data: newCenter,
        });
    } catch (error) {
        res.send({
            status: 400,
            message: error.message
        })
    }
}

export default {
    GET,
    POST
}