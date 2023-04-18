import PositionModel from "../models/positionModel.js";
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
      const date = await PositionModel.findAll({
        include: [models.UserModel],
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.send(date);
    } else {
      const date = await PositionModel.findAll({
        include: [models.UserModel],
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

    const { dep_ref_id, pos_name, salary } = req.body;

    const newPos = await PositionModel.create({
      dep_ref_id,
      pos_name,
      salary,
    });

    res.send({
      status: 200,
      message: "Positions added!",
      data: newPos,
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

    const updateDir = await PositionModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Position update!",
      data: updateDir,
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

    const updateDep = await PositionModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Position delete!",
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
