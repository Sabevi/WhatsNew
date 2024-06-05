import {useMutation} from "@apollo/client";
import { LIKE_OR_UNLIKE_ARTICLE} from "../apollo-client/mutations.ts";
import {privateClient} from "../apollo-client/apolloClient.ts";
import {useEffect, useState} from "react";
import {useToast} from "@chakra-ui/react";
import {Like} from "../types/article.ts";

export const useLikeOrDislike = (articleId: string) => {
    const [articleLikeOrUnlike] = useMutation(LIKE_OR_UNLIKE_ARTICLE, {
        client: privateClient,
    });
    const [likeList, setLikes] = useState<Like[]>([]);
    const [isLiked, setIsLiked] = useState(false);
    const toast = useToast();
    const handleLikeOrDislike = async () => {


        try {
            const response = await articleLikeOrUnlike({
                variables: {articleId},
            });
            console.log(response);
            switch (response.data.incrementOrDecrementLikes.code) {
                case 200:
                    console.log('isLiked : ', response.data.incrementOrDecrementLikes.isLiked)
                    console.log('likes when liked : ', response.data.incrementOrDecrementLikes.likes)
                    setLikes(response.data.incrementOrDecrementLikes.likes as Like[]);
                    console.log('likeList : ', likeList);
                    setIsLiked(response.data.incrementOrDecrementLikes.isLiked);
                    toast({
                        title: response.data.incrementOrDecrementLikes.message,
                        status: "info",
                        duration: 10000,
                        isClosable: true,
                    });

                    break;
                case 404:
                    console.error("Article not found.");
                    toast({
                        title: `Unable to like this post, try again later.`,
                        status: "error",
                        duration: 10000,
                        isClosable: true,
                    });
                    break;
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { likeList, isLiked, handleLikeOrDislike };
}