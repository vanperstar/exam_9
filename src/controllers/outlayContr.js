import OutlayModel from "../models/outlayModel.js";
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
      const date = await OutlayModel.findAll({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.send(date);
    } else {
      const date = await OutlayModel.findAll({
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

    const { reason, amount } = req.body;
    const { id } = jwt.VERIFY(token)

    const newInc = await OutlayModel.create({
      reason,
      amount
    });

    res.send({
      status: 200,
      message: "Outlay added!",
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

    const updateInc = await OutlayModel.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Outlay update!",
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

    const updateInc = await OutlayModel.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: 200,
      message: "Outlay delete!",
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
