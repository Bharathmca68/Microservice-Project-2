import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<import("./product.entity").Product[]>;
    create(title: string, image: string): Promise<import("./product.entity").Product>;
    finById(id: string): Promise<import("./product.entity").Product>;
    findUpdate(id: string, title: string, image: string): Promise<any>;
    deleteprod(id: string): Promise<any>;
}
