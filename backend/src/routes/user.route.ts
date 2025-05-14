import { Router } from "express";
import {getUsers, CreateUser, UpdateUser} from '../controllers/user.controller'

const allUsers = Router();
allUsers.get("/CreateUsers", getUsers);
allUsers.post("/CreateUsers", CreateUser);
allUsers.get("/UpdateUsers", UpdateUser);
export default allUsers;
