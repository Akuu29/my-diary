import type { FC } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";

import { ArticleApi } from "../../services/api/articleApi";

const articleContainer = css({
  height: 600,
  background: "#000000",
  // TBD
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  // TBD
});

const TBD = css({
  color: "#F8F8FF",
  fontSize: "50px"
});

const Article: FC = () => {
  const params = useParams();

  useEffect(() => {

  })
  // const setArticle = async () => {
  //   if(params.articleId) {
  //     const resultGetArticle = await ArticleApi.getArticle(params.articleId);
  //     return resultGetArticle;
  //   }
  //   return undefined;
  // };
  return (
    <div css={articleContainer}>
      <p css={TBD}>
        TBD
      </p>
    </div>
  );
};

export default Article;