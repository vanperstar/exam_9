import IncomesModel from "../models/incomesModel.js";
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
      const date = await IncomesModel.findAll({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.send(date);
    } else {
      const date = await IncomesModel.findAll({
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

    const { user_ref_id, reason, amount } = req.body;

    const newInc = await IncomesModel.create({
      user_ref_id,
      reason,
      amount
    });

    res.send({
      status: 200,
      message: "Income added!",
      data: newInc,
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

    const updateInc = await IncomesModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Income update!",
      data: updateInc,
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

    const updateInc = await IncomesModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Income delete!",
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
