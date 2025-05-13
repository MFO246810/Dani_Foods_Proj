import { Router } from "express";
import {getUsers, CreateUser} from '../controllers/user.controller'

const allUsers = Router();
allUsers.get("/", getUsers);
allUsers.post("/CreateUsers", CreateUser);
export default allUsers;
