import { ArticleListProps } from "../../types/Article.types";
import ArticleCard from "./Content/ArticleCard";

const ArticleList = ({
  articles,
}: ArticleListProps) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </>
  );
};

export default ArticleList;
