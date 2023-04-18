import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class OutlayModel extends Model {}

OutlayModel.init(
  {
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Outlay",
    tableName: "outlay",
    createdAt: "out_time",
    deletedAt: false,
    updatedAt: false,
  }
);

// OutlayModel.sync({force: true})


export default OutlayModel;
