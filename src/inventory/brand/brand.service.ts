import { HttpException, Injectable } from '@nestjs/common';
import { Brand } from './brand.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BrandService {
    constructor(@InjectRepository(Brand) private brandRepository: Repository<Brand>) { }

    async getBrands(): Promise<Brand[]> {
        return await this.brandRepository.find();
    }

    async getBrand(brandid): Promise<Brand | null> {
        let id = Number(brandid);
        const brand = await this.brandRepository.findOneBy({brandid});
        if (brand) {
            return brand;
        }
        throw new HttpException('Brand does not exist!', 404);
    }

    async addBrand(brand): Promise<any> {
        return new Promise(resolve => {
            const data = this.brandRepository.save(brand);
            resolve(data);
        });
    }

    async updateBrand(brand: Brand, brandData): Promise<any> {
        const updateBrand =  await this.brandRepository.update(brand, brandData);
        if (updateBrand.affected) {
            return {
                'message' : 'Brand updated successfully'
            }
        }
        throw new HttpException('Brand does not exist!', 404);
    }

    async deleteBrand(brand: Brand) {
        const deletedBrand = await this.brandRepository.delete(brand);
        if (deletedBrand.affected) {
            return {
                'message' : 'Brand deleted successfully'
            }
        }
        throw new HttpException('Brand does not exist!', 404);
    }
}
