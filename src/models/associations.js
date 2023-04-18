import CenterModel from "./centerModel.js";
import AdminModel from "./adminModel.js";
import DepartmentModel from "./departmentModel.js";
import DirectionModel from "./directionModel.js";
import PositionModel from "./positionModel.js";
import GroupModel from "./groupModel.js";
import UserModel from "./userModel.js";
import CheckModel from "./checksModel.js";
import IcomesModel from "./incomesModel.js";

// CenterModel.hasOne(AdminModel, { foreignKey: "admin_ref_id" });
CenterModel.hasMany(DepartmentModel, { foreignKey: "center_ref_id" });
DepartmentModel.hasMany(DirectionModel, { foreignKey: "dep_ref_id" });
DepartmentModel.hasMany(PositionModel, { foreignKey: "dep_ref_id" });
DirectionModel.hasMany(GroupModel, { foreignKey: "dir_ref_id" });
PositionModel.hasMany(UserModel, { foreignKey: "pos_ref_id" });
GroupModel.hasMany(UserModel, { foreignKey: "group_ref_id" });
GroupModel.hasMany(CheckModel, { foreignKey: "gr_ref_id" });
UserModel.hasMany(CheckModel, { foreignKey: "user_ref_id" });
UserModel.hasMany(IcomesModel, { foreignKey: "user_ref_id" });

export default {
  CenterModel,
  AdminModel,
  DepartmentModel,
  DirectionModel,
  PositionModel,
  GroupModel,
  UserModel,
  CheckModel,
  IcomesModel
};
