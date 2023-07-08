import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Train, TrainDocument } from '../schemas/train.schema';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Train.name) private readonly model: Model<TrainDocument>,
  ) {}

  async findAll(): Promise<Train[]> {
    return await this.model.find().exec();
  }
  async stationsBW(from, to): Promise<Train[]> {
    //return await this.model.find({"stations.stationName":from});
    return await this.model
      .find({
        $and: [
          { 'stations.stationName': { $regex: from, $options: 'i' } },
          { 'stations.stationName': { $regex: to, $options: 'i' } },
        ],
      })
      .exec();
  }
  async traindetail(id): Promise<Train[]> {
    //return await this.model.find({"stations.stationName":from});
    return await this.model
      .find({ trainNumber:id})
      .exec();
  }
}
