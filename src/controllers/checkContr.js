import CheckModel from "../models/checksModel.js";
import jwt from "../utils/jwt.js";
// import models from "../models/associations.js"

const GET = async (req, res) => {
  try {
    if (!jwt.VERIFY(req.headers.token)) {
      return res.send({
        status: 401,
        message: "token not fount",
      });
    }
    const date = await CheckModel.findAll({
        raw: true,
    });
    res.send(date);
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

    const {gr_ref_id, user_ref_id, not_in_class  } = req.body;

    const newCheck = await CheckModel.create({
      gr_ref_id,
      user_ref_id,
      not_in_class
    });

    console.log(newCheck);

    res.send({
      status: 200,
      message: "Check added!",
      data: newCheck,
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
    // const { dep_name } = req.body

    const updateCheck = await CheckModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Check update!",
      data: updateCheck,
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

    const updateCheck = await CheckModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Check delete!",
      data: updateCheck,
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
  DELETE
};
