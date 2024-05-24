import {useMutation} from "@apollo/client";
import {GET_ARTICLE_BY_ID} from "../mutations/mutations.ts";
import {privateClient} from "../config/apolloClient.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

const useShowArticleDetails = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [getArticleById] = useMutation(GET_ARTICLE_BY_ID, {
        client: privateClient,
    });


    const toast = useToast();
    const navigate = useNavigate();
    useEffect(() => {
        const getArticle = async (
        ) => {
            try {
                const { data: response } = await privateClient.mutate({
                    mutation: GET_ARTICLE_BY_ID,
                    variables: {articleId: id},
                });

                // const response = await getArticleById({
                //     variables: {articleId: id},
                // });
                console.log("Article details: ", response.getArticle);
                if(response.getArticle.code === 200) {
                    setData(response.getArticle);
                }
                 else if(response.getArticle.code === 404) {
                    toast({
                        title: "Article not found.",
                        description: "The article you are looking for does not exist.",
                        status: "error",
                        duration: 10000,
                        isClosable: true,

                    });
                    navigate('/');
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