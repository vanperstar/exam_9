import AdminModel from "../models/adminModel.js";
import jwt from "../utils/jwt.js";
import mailer from '../utils/mailer.js'
import randomNumber from '../utils/randomNumber.js'

const GET = async (req, res) => {
  try {
    res.send(await AdminModel.findAll());
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};



const LOGIN = async(req, res) => {
    try {
        const { email, contact } = req.body

        const newAdmin  = await AdminModel.findOne({
            email,
            contact
        })

        if(newAdmin) {
            res.send({
                status: 200,
                message: "admin exsist!",
                data: {token: jwt.SIGN(newAdmin.id)}
            });
        } else {
            res.send({
                status: 201,
                message: "admin not fount"
            })
        }

    } catch (error) {
        res.send({
            status: 400,
            message: error.message
        })
    }
}

export default {
  GET,
  LOGIN,
};

