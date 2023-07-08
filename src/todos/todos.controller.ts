import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodosService) {}

  @Get('/all')
  async index() {
    return await this.service.findAll();
  }

  @Get('/between/:from/:to')
  async getBook(@Param('from') from, @Param('to') to) {
    const book = await this.service.stationsBW(from, to);
    return book;
  }
  @Get('/traindetail/:id')
  async getBooke(@Param('id') id) {
    const book = await this.service.traindetail(id);
    return book;
  }
}
