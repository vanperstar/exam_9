import UserModel from "../models/userModel.js";
import { Op } from "sequelize";
import jwt from "../utils/jwt.js";
import models from "../models/associations.js"


const GET = async (req, res) => {
  try {
    if (!jwt.VERIFY(req.headers.token)) {
      return res.send({
        status: 401,
        message: "token not fount",
      });
    }
    const { id } = req.params;
    if ( id) {
      const data = await UserModel.findAll({
        include: [models.CheckModel, models.IcomesModel],
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.send(data);
    } else {
      const date = await UserModel.findAll({
        include: [models.CheckModel, models.IcomesModel],
        raw: true,
      });
      res.send(date);
    }
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};

const POST = async (req, res) => {
  try {
    if (!jwt.VERIFY(req.headers.token)) {
      return res.send({
        status: 401,
        message: "token not fount",
      });
    }

    const { pos_ref_id, first_name, last_name, gender, contact, email, group_ref_id } = req.body;

    const newUser = await UserModel.create({
      pos_ref_id,
      first_name,
      last_name,
      gender,
      contact,
      email,
      group_ref_id
    });

    res.send({
      status: 200,
      message: "Users added!",
      data: newUser,
    });
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};

const PUT = async (req, res) => {
  try {
    if (!jwt.VERIFY(req.headers.token)) {
      return res.send({
        status: 401,
        message: "token not fount",
      });
    }

    const { id } = req.params;

    const updateGr = await UserModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "User update!",
      data: updateGr,
    });
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};

const DELETE = async (req, res) => {
  try {
    if (!jwt.VERIFY(req.headers.token)) {
      return res.send({
        status: 401,
        message: "token not fount",
      });
    }

    const { id } = req.params;

    const updateDep = await UserModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "User delete!",
    });
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};


const LOGIN = async (req, res) => {
  try {

    const { contact, email, } = req.body;

    const newUser = await UserModel.findOne({
      contact,
      email,
    });

    res.send({
      status: 200,
      message: "Users added!",
      data: {token: jwt.SIGN(newUser.id)},
    });
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
    });
  }
};


export default {
  GET,
  POST,
  PUT,
  DELETE,
  LOGIN
};



