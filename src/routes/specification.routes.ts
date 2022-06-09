import { Router } from "express";
import { createSpeficiationCrontroller } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
   return createSpeficiationCrontroller.handle(request, response);
});

export { specificationRoutes };