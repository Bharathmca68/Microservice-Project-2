import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    all() {
        return this.productService.all()
    }

    @Post()
    create(
        @Body('title') title: string,
        @Body('title') image: string
    ) {
        return this.productService.create({ title, image })
    }

    @Get('/product/:id')
    finById(
        @Param('id') id: string
    ) {
        return this.productService.getById(id)
    }


    @Put('/product/:id')
    findUpdate(
        @Param('id') id: string,
        @Body('title') title: string,
        @Body('image') image: string
    ) {
        return this.productService.update(id, { title, image })
    }

    @Delete('/product/:id')
    deleteprod(
        @Param('id') id: string,
    ) {
        return this.productService.deleteProd(id)
    }
}
