import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot( 'mongodb://127.0.0.1:27017/deep_search_lab_app' )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}