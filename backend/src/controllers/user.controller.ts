import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function getAllUsers(){
    const users = await prisma.users.findMany();
    return users;
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

export const UpdateUser =  async (req: Request, res: Response) => {
    try{
        const { uname } = req.body;
        const User = await prisma.users.findUnique({
            where: {
                Username: uname
            },
        });

        if (!User) {
            res.status(404).send("User Cannot be found");
        } else{
            res.json(User);
        }
        
    } catch(error){
        res.status(500).json({ error: 'Could not Find User' });
        console.log(error);
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