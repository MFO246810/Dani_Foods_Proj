import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function getAllUsers(){
    const users = await prisma.users.findMany();
    return users;
}

export const TestMessage = async(req: Request, res: Response) => {
    res.status(200).json({"Message": "Api Seems to working good"})
}

export const CreateUser = async (req: Request, res: Response) => {
    try{
        const {FirstName, Lastname, username, email, password} =  req.body;

        const newUser = await prisma.users.create({
            data: {
                FirstName: FirstName,
                LastName: Lastname,
                Username: username,
                Email: email,
                Password: password
            },
        });
        res.status(201).json(newUser)
    } catch(error){
        res.status(500).json({ error: 'Could not create user' });
        console.log(error);
    }
} 

export const PullUser =  async (req: Request, res: Response) => {
    try {
        const { uname } = req.body;
        const User = await prisma.users.findUniqueOrThrow({
          where: {
            Username: uname,
          },
        });
    
        console.log("User found:", uname);
        res.status(200).json(User);
        
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(404).json({ error: "User not found" });
    }
}

export const UpdateUser = async(req: Request, res: Response) => {
    try{
        const {username, firstname, lastname, address, state, zipcode} = req.body;
        const updatedUser = await prisma.users.update({
            where : {Username: username},
            data : {
                FirstName : firstname,
                LastName : lastname,
                Address : address,
                State : state,
                ZipCode : Number(zipcode)
            }
        });
        res.status(200).json({"Message": "Updating User ..."});
    } catch(error){
        console.log(error);
        res.status(500).json({"Message": "Unable to Update"});
    }
}

export const DeleteUser = async(req: Request, res: Response) =>{
    try {
        const { uname } = req.body;
        const User = await prisma.users.delete({
          where: {
            Username: uname,
          },
        });
    
        console.log("User found:", uname);
        res.status(200).json({"Message":"User Deleted Sucessfully"});
        
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(404).json({ "error": "User not found" });
    }
}

export const getUsers = async (_req: Request, res: Response) => {
    try{
        const users = await getAllUsers(); 
        res.json(users);
    } catch(e) {
        console.error(e);
        res.status(500).json({error:'Failed to fetch users from db'})
    }
}