// publicc-router.ts
import express from "express";
import { Router } from 'express';
import { UsersController } from "../controllers/users-controllers";

export const publicRouter = Router();

// Users
publicRouter.get("/cicipin/users", UsersController.getAllUsers);
publicRouter.get("/cicipin/users/:id", UsersController.getUserById);
publicRouter.post("/cicipin/users", UsersController.createUser);
publicRouter.put("/cicipin/users/:id", UsersController.updateUser);
publicRouter.delete("/cicipin/users/:id", UsersController.deleteUser);

