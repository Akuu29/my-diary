import type { FC } from "react";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { ArticleApi } from "../../services/api/articleApi";

const articlesContainer = css({
  height: 1400,
  background: "#000000",
});

const articlesMain = css({
  width: 1000,
  margin: "auto",
});

const title = css({
  fontFamily: "Arial Black",
  fontSize: 30,
  color: "#ffffff",
  paddingTop: 30,
});

const articleList = css({

});

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  created_at: Date;
  updated_at: Date;
}

const Articles: FC = () => {
  const [articles, setArticles] = useState<Array<Article> | undefined>();

  useEffect(() => {
    setInitializeArticles();
  }, [])

  // 初期表示用のarticlesの取得、セット
  const setInitializeArticles = async () => {
    const initializeArticles = await ArticleApi.getArticles();
    if(initializeArticles) {
      setArticles(initializeArticles);
    }
  };

  return (
    <div css={articlesContainer}>
      <div css={articlesMain}>
        <h1 css={title}>Articles</h1>
        <div css={articleList}>
          {articles?.map((article: Article) => (
              <Link
                to={`/articles/${article.id}`}
                key={article.id}>
                <h3>{article.title}</h3>
                <time>{article.updated_at.toString()}</time>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;