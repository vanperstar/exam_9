import DepartmentModel from "../models/departmentModel.js";
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
    const date = await DepartmentModel.findAll({
        include: [models.DirectionModel, models.PositionModel],
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

    const { dep_name, center_ref_id } = req.body;

    const newDep = await DepartmentModel.create({
      dep_name,
      center_ref_id
    });

    console.log(newDep);

    res.send({
      status: 200,
      message: "Center added!",
      data: newDep,
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

    const updateDep = await DepartmentModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Center update!",
      data: updateDep,
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

    const updateDep = await DepartmentModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Center delete!",
      data: updateDep,
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
