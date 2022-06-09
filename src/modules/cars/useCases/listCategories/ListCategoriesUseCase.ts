import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


class ListCategoriesUseCase{
    constructor(private categoriesReository: ICategoryRepository){}

    execute(): Category[] {
        const categories = this.categoriesReository.list()

        return categories;
    }
}

export { ListCategoriesUseCase };