import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class DirectionModel extends Model {}

DirectionModel.init(
  {
    dep_ref_id: {
      type: DataTypes.INTEGER,
      ref: "department",
    },

    dir_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Directions",
    tableName: "directions",
    createdAt: "start_date",
    deletedAt: "end_date",
    updatedAt: false,
  }
);

// DirectionModel.sync({force: true})

export default DirectionModel;
