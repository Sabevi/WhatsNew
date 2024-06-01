import { ArticleListProps } from "../../types/types";
import ArticleCard from "./Content/ArticleCard";

const ArticleList = ({ articles }: ArticleListProps): JSX.Element => {
  if (!articles) {
    return  <p>"No articles found."</p>
  }
  return (
    <>
    {articles.map((article) => 
      <ArticleCard key={article.id} article={article} />)}
    </>
  );
};

export default ArticleList;
