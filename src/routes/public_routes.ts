// publicc-router.ts
import express from "express";
import { Router } from 'express';
import { UsersController } from "../controllers/users-controllers";

export const publicRouter = Router();

// Users
publicRouter.get("/users", UsersController.getAllUsers);
publicRouter.get("/users/:id", UsersController.getUserById);
publicRouter.post("/users", UsersController.createUser);
publicRouter.put("/users/:id", UsersController.updateUser);
publicRouter.delete("/users/:id", UsersController.deleteUser);

