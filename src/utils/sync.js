import models from "../models/associations.js";

const {
  AdminModel,
  CenterModel,
  DepartmentModel,
  DirectionModel,
  PositionModel,
  GroupModel,
  UserModel,
  CheckModel,
  IcomesModel
} = models;

[
  CenterModel,
  AdminModel,
  DepartmentModel,
  DirectionModel,
  PositionModel,
  GroupModel,
  UserModel,
  CheckModel,
  IcomesModel
].map(async (model) => await model.sync());
