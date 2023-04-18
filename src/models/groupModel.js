import sequelize from "../utils/sequalize.js";
import { DataTypes, Model } from "sequelize";

class GroupModel extends Model {}

GroupModel.init(
  {
    dir_ref_id: {
      type: DataTypes.INTEGER,
      ref: "directions",
    },

    gr_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Groups",
    tableName: "groups",
    createdAt: "begin_data",
    deletedAt: "end_data",
    updatedAt: false,
  }
);

// GroupModel.sync({force: true})


export default GroupModel;
