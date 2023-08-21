import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { ModelModule } from './model/model.module';

@Module({
  imports: [BrandModule, ModelModule]
})
export class InventoryModule {}
