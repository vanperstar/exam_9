import DirectionModel from "../models/directionModel.js";
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
      const date = await DirectionModel.findAll({
        include: [models.GroupModel],
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.send(date);
    }else {
      const date = await DirectionModel.findAll({
        include: [models.GroupModel],
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

    const { dep_ref_id, dir_name, duration, salary } = req.body;

    const newDir = await DirectionModel.create({
        dep_ref_id,
        dir_name,
        duration,
        salary
    });

    res.send({
      status: 200,
      message: "Directions added!",
      data: newDir,
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

    const updateDir = await DirectionModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Direction update!",
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

    const updateDep = await DirectionModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Directions delete!",
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
