import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class CheckModel extends Model {}

CheckModel.init(
  {
    gr_ref_id: {
        type: DataTypes.INTEGER,
        ref: "groups"
    },

    user_ref_id: {
        type: DataTypes.INTEGER,
        ref: "users"
    },

    not_in_class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Check",
    tableName: "checks",
    createdAt: "add_date",
    deletedAt: false,
    updatedAt: false
  }
);

// CheckModel.sync({force: true})


export default CheckModel;
