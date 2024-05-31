import ArticleCard from "./Content/ArticleCard";

const ArticleList = ({ data }): JSX.Element => {
  console.log("ArticleList data: ", data)
  // Prevoir aussi un cas ou data est null
  if (!data) {
    return  <p>"No articles found."</p>
  }
  return (
    <>
    {data.map((article) => 
      <ArticleCard key={article.id} article={article} />)}
    </>
  );
};

export default ArticleList;
