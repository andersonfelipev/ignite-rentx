import {Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";


const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});


categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
   return listCategoriesController.hendle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"),(resquest, response) => {
  return importCategoryController.hendle(resquest, response);
});

export { categoriesRoutes };