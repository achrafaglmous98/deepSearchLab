import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Types  } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {

  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  title: string;

  @Prop({ type: Date })
date: Date;

  @Prop()
  category: string;

  @Prop()
  subcategory: string;

  @Prop()
  topic: number;

  @Prop()
  authors: string[];

  @Prop()
  text: string;

  @Prop()
  images: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);