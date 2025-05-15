import { Router } from "express";
import {getUsers, CreateUser, UpdateUser, PullUser, TestMessage, DeleteUser} from '../controllers/user.controller'

const allUsers = Router();
allUsers.get("/CreateUsers", getUsers);
allUsers.post("/CreateUsers", CreateUser);
allUsers.post("/PullUser", PullUser);
allUsers.get("/PullUser", TestMessage);
allUsers.post("/UpdateUser", UpdateUser);
allUsers.get("/UpdateUser", TestMessage);
allUsers.post("/DeleteUser", DeleteUser);
allUsers.get("/DeleteUser", TestMessage);
export default allUsers;