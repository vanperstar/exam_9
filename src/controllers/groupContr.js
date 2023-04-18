import GroupModel from "../models/groupModel.js";
import models from "../models/associations.js"
import jwt from "../utils/jwt.js";

const GET = async (req, res) => {
  try {
    if (!jwt.VERIFY(req.headers.token)) {
      return res.send({
        status: 401,
        message: "token not fount",
      });
    }
    const { id } = req.params;
    if (id) {
      const date = await GroupModel.findAll({
        include: [models.UserModel, models.CheckModel],
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.send(date);
    } else {
      const date = await GroupModel.findAll({
        include: [models.UserModel, models.CheckModel],
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

    const { dir_ref_id, gr_number } = req.body;

    const newGr = await GroupModel.create({
      dir_ref_id,
      gr_number,
    });

    res.send({
      status: 200,
      message: "Groups added!",
      data: newGr,
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

    const updateGr = await GroupModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Groups update!",
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

    const updateDep = await GroupModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Groups delete!",
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
};
