import ArticleCard from "./Content/ArticleCard";
import MyArticleCard from "./Content/MyArticleCard";

const ArticleList = (): JSX.Element => {
  return (
    <>
      <MyArticleCard />
      <ArticleCard />
      <ArticleCard />
    </>
  );
};

export default ArticleList;
