import CategoryController from './CategoryController'
import ProductController from './ProductController'
import TestimonialController from './TestimonialController'

const Dashboard = {
    CategoryController: Object.assign(CategoryController, CategoryController),
    ProductController: Object.assign(ProductController, ProductController),
    TestimonialController: Object.assign(TestimonialController, TestimonialController),
}

export default Dashboard