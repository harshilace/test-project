import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ModelService } from './model.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateModelDTO } from './dto/create-model.dto';

@Controller('models')
export class ModelController {
    constructor(private modelService: ModelService) { }
    @Get('')
    async getModels() {
        const models = await this.modelService.getModels();
        return models;
    }

    @Get(':modelID')
    async getModel(@Param('modelID', ParseIntPipe) modelID: Number) {
        const model = await this.modelService.getModel(modelID);
        return model;
    }

    @Post('')
    @UseInterceptors(FileInterceptor('file', {}))
    async addModel(
        @Body() createModelDTO: CreateModelDTO) {
        let fields = {
            "title": <String>createModelDTO.title,
            "description": <String>createModelDTO.description
        };
        const model = await this.modelService.addModel(fields);
        return model;
    }

    @Patch(':modelID')
    @UseInterceptors(FileInterceptor('file', {}))
    async updatemodel(@Param('modelID') modelID, @Body() createModelDTO: CreateModelDTO) {
        let fields = {
            "title": <String>createModelDTO.title,
            "description": <String>createModelDTO.description,
        };
        const model = await this.modelService.updateModel(modelID, fields);
        return model;
    }

    @Delete(':modelID')
    async deleteModel(@Param('modelID', ParseIntPipe) modelID) {
        const model = await this.modelService.deleteModel(modelID);
        return model;
    }}
