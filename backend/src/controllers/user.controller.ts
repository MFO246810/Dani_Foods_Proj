import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function getAllUsers(){
    const users = await prisma.users.findMany();
    return users;
}

export const CreateUser = async (req: Request, res: Response) => {
    try{
        const {Firstname, Lastname, username, password} =  req.body;

        const newUser = await prisma.users.create({
            data: {
                FirstName: Firstname,
                LastName: Lastname,
                Username: username, 
                Password: password
            },
        });
        res.status(201).json(newUser)
    } catch(error){
        res.status(500).json({ error: 'Could not create user' });
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