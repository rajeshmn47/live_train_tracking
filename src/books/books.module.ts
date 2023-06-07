import { Module } from '@nestjs/common';
import { BooksController } from './books.contoller';
import { BooksService } from './books.service';
@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
