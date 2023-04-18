import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class IcomesModel extends Model {}

IcomesModel.init(
  {
    user_ref_id: {
      type: DataTypes.INTEGER,
      ref: "users",
    },

    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Income",
    tableName: "income",
    createdAt: "inc_time",
    deletedAt: false,
    updatedAt: false,
  }
);

// IcomesModel.sync({force: true})

export default IcomesModel;
