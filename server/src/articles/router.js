import express from 'express';

import {getAllArticles, getArticleById } from "./handlers.js";

const router = express.Router();

router.get('/',getAllArticles)

router.get('/:id',getArticleById)

export default router;