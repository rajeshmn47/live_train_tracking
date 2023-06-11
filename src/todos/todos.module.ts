import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Train, TrainSchema } from 'src/schemas/train.schema';

@Module({
  providers: [TodosService],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([{ name: Train.name, schema: TrainSchema }]),
  ],
})
export class TodoModule {}
