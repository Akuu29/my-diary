// import axios, { AxiosResponse, AxiosError } from "axios";
import type { Article } from "../../views/Articles/ArticlesPage";

import { articlesSample } from "../data";

export class ArticleApi {
  static async getArticles(): Promise<Array<Article>> {
    return articlesSample;
  }
  static async getArticle(id: string): Promise<Article> {
    return articlesSample.filter((article) => article.id == id)[0];
  }
}