import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpeficiationCrontroller = new CreateSpecificationController(createSpecificationUseCase);

export { createSpeficiationCrontroller }