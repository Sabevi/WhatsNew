import { ArticleListProps } from "../../types/types";
import ArticleCard from "./Content/ArticleCard";

const ArticleList = ({
  articles,
}: ArticleListProps): JSX.Element => {
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
