import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDTO } from './dto/create-brand.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('brands')
export class BrandController {
    constructor(private brandService: BrandService) { }
    @Get('')
    async getBrands() {
        const brands = await this.brandService.getBrands();
        return brands;
    }

    @Get(':brandID')
    async getBrand(@Param('brandID', ParseIntPipe) brandID: Number) {
        const brand = await this.brandService.getBrand(brandID);
        return brand;
    }

    @Post('')
    @UseInterceptors(FileInterceptor('file', {}))
    async addBrand(
        @Body() createBrandDTO: CreateBrandDTO) {
        let fields = {
            "title": <String>createBrandDTO.title,
            "description": <String>createBrandDTO.description
        };
        const brand = await this.brandService.addBrand(fields);
        return brand;
    }

    @Patch(':brandID')
    @UseInterceptors(FileInterceptor('file', {}))
    async updatebrand(@Param('brandID') brandID, @Body() createBrandDTO: CreateBrandDTO) {
        let fields = {
            "title": <String>createBrandDTO.title,
            "description": <String>createBrandDTO.description,
        };
        const brand = await this.brandService.updateBrand(brandID, fields);
        return brand;
    }

    @Delete(':brandID')
    async deleteBrand(@Param('brandID', ParseIntPipe) brandID) {
        const brand = await this.brandService.deleteBrand(brandID);
        return brand;
    }
}
