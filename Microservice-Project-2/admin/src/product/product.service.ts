import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async all(): Promise<Product[]> {
        return await this.productRepository.find()
    }

    async create(data): Promise<Product> {
        return await this.productRepository.save(data)
    }

    async getById(id: string): Promise<Product> {
        return await this.productRepository.findOne({ id })
    }

    async update(id: string, data): Promise<any> {
        return await this.productRepository.update(id, data)
    }

    async deleteProd(id: string): Promise<any> {
        return await this.productRepository.delete(id)
    }
}
