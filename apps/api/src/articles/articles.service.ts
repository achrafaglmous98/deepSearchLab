import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Article, ArticleDocument } from 'src/schemas/article.schema';

@Injectable()
export class ArticlesService {

  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async findAll(page: number, limit: number, category?: string, sort?: string): Promise<[Article[], number]> {
    const skip = (page - 1) * limit;
    const query = this.articleModel.find();
    if (category) {
      query.where('category').equals(category);
    }
    if (sort === 'title') {
      query.sort({ title: 1 });
    } else {
      query.sort({ date: -1 });
    }
    const articles = await query.skip(skip).limit(limit).exec();
    const total = await this.articleModel.countDocuments().exec();
    return [articles, total];
  }
  
  async countAll(): Promise<number> {
    return this.articleModel.countDocuments().exec();
  }

  async getArticleCountByCategory(): Promise<any> {
    const articles = await this.articleModel.find({}, { category: 1, _id: 0 });
    const categories = articles.reduce((acc, cur) => {
      if (!acc[cur.category]) {
        acc[cur.category] = 1;
      } else {
        acc[cur.category]++;
      }
      return acc;
    }, {});
    return categories;
  }

  async findOne(_id: Types.ObjectId): Promise<Article> {
    const article = await this.articleModel.findById(_id).exec();
    if (!article) {
      throw new NotFoundException(`Article with ID ${_id} not found`);
    }
    return article;
  }
}
