import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class PositionModel extends Model {}

PositionModel.init(
  {
    dep_ref_id: {
      type: DataTypes.INTEGER,
      ref: "department",
    },

    pos_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Positions",
    tableName: "positons",
    createdAt: false,
    deletedAt: false,
    updatedAt: false,
  }
);

// PositionModel.sync({force: true})


export default PositionModel;
