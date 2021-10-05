import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    all(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    getById(id: string): Promise<Product>;
    update(id: string, data: any): Promise<any>;
    deleteProd(id: string): Promise<any>;
}
