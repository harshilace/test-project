import { HttpException, Injectable } from '@nestjs/common';
import { Model } from './model.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModelService {
    constructor(@InjectRepository(Model) private modelRepository: Repository<Model>) { }

    async getModels(): Promise<Model[]> {
        return await this.modelRepository.find();
    }

    async getModel(modelID): Promise<Model | null> {
        let id = Number(modelID);
        const model = await this.modelRepository.findOneBy({id});
        if (model) {
            return model;
        }
        throw new HttpException('Model does not exist!', 404);
    }

    async addModel(model): Promise<any> {
        return new Promise(resolve => {
            const data = this.modelRepository.save(model);
            resolve(data);
        });
    }

    async updateModel(model: Model, modelData): Promise<any> {
        const updateModel =  await this.modelRepository.update(model, modelData);
        if (updateModel.affected) {
            return {
                'message' : 'Model updated successfully'
            }
        }
        throw new HttpException('Model does not exist!', 404);
    }

    async deleteModel(model: Model) {
        const deletedModel = await this.modelRepository.delete(model);
        if (deletedModel.affected) {
            return {
                'message' : 'Model deleted successfully'
            }
        }
        throw new HttpException('Model does not exist!', 404);
    }}
