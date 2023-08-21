import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './inventory/brand/brand.entity';
import { Model } from './inventory/model/model.entity';

@Module({
  imports: [
    InventoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'harshil',
      password: 'H@R7S@qE23',
      database: 'inventory',
      entities: [Brand, Model],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
