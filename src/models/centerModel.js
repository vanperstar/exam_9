import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class CenterModel extends Model {}

CenterModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addres: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Center",
    tableName: "centers",
    createdAt: "open_date",
    deletedAt: "close_date",
    updatedAt: false
  }
);

// CenterModel.sync({force: true})


export default CenterModel;
