import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class UserModel extends Model {}

UserModel.init(
  {
    pos_ref_id: {
      type: DataTypes.INTEGER,
      ref: "positons",
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    group_ref_id: {
      type: DataTypes.INTEGER,
      ref: "groups",
    },
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "users",
    createdAt: "come_data",
    deletedAt: "left_data",
    updatedAt: false,
  }
);

// UserModel.sync({force: true})

export default UserModel;
