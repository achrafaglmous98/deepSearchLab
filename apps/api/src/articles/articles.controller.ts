import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('category') category?: string,
    @Query('sort') sort?: string,
  ) {
    const articlesPerPage = 15; // Change this number as needed
    const [articles, totalArticles] = await this.articlesService.findAll(
      page,
      articlesPerPage,
      category,
      sort,
    );
    const totalPages = Math.ceil(totalArticles / articlesPerPage);
    return { articles, totalPages };
  }

  @Get('categories')
  async getArticleCountByCategory() {
    return this.articlesService.getArticleCountByCategory();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    const _Id = new Types.ObjectId(_id);
    return this.articlesService.findOne(_Id);
  }
}
