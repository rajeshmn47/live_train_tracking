import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TodoModule } from './todos/todos.module';

const uri =
  'mongodb+srv://rajeshmn47:uni1ver%40se@cluster0.bpxam.mongodb.net/librarypresent?retryWrites=true&w=majority';

@Module({
  imports: [BooksModule, TodoModule, MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
