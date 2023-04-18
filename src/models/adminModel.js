import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class AdminModel extends Model {}

AdminModel.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
      },
    },
    code: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: "Admin",
    tableName: "admin",
    createdAt: "create_at",
    deletedAt: false,
    updatedAt: false
  }
);

// AdminModel.sync({force: true})




export default AdminModel;
