import { Users } from "@prisma/client";

export interface createUser{
    name: string;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    role: string;
}

export interface requestUser{
    name: string;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    role: string;
}

export interface responseUser{
    id: number;
    name: string;
    username: string;
    email: string;
    profile_picture: string;
    role: string;
}

export function toUserResponse(users: Users){
    return {
        name: users.name,
        username: users.username,
        email: users.email,
        profile_picture: users.profile_picture,
        role: users.role
    }
}

export interface updateUser{
    name: string;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    role: string;
}

export interface deleteUser{
    name: string;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    role: string;
}
