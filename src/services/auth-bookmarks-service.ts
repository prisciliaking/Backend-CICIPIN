import { Request, Response } from "express";
import { Bookmarks } from "@prisma/client";
import { bookmarksValidation } from "../validations/bookmarks-service";
import { createBookmark, responseBookmark, requestBookmark, updateBookmark } from "../models/bookmarks-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class BookmarkService {

    
}