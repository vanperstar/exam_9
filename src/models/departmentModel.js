import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class DepartmentModel extends Model {}

DepartmentModel.init(
  {
    center_ref_id: {
        type: DataTypes.INTEGER,
        ref: "centers"
    },

    dep_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Department",
    tableName: "department",
    createdAt: "create_at",
    deletedAt: "delete_at",
    updatedAt: false
  }
);

// DepartmentModel.sync({force: true})


export default DepartmentModel;
