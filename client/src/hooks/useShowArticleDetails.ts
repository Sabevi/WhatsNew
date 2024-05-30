import {GET_ARTICLE_BY_ID} from "../mutations/mutations.ts";
import {privateClient} from "../config/apolloClient.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ArticleModel} from "../types/article.ts";

const useShowArticleDetails = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getArticle = async (
        ) => {
            try {
                const { data: response } = await privateClient.mutate({
                    mutation: GET_ARTICLE_BY_ID,
                    variables: {articleId: id},
                });

                if(response.getArticle.code === 200) {
                    setData(response.getArticle.articleDto as ArticleModel);
                }
                 else if(response.getArticle.code === 404) {
                    navigate('/404');
                }

            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        getArticle().then(_ => console.log("finished---------------"));
    }, []);
    return {
        data,
        loading,
    };
}

export default useShowArticleDetails;