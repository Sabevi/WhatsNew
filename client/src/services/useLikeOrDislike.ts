import {useMutation} from "@apollo/client";
import { LIKE_OR_UNLIKE_ARTICLE} from "../apollo-client/mutations.ts";
import {privateClient} from "../apollo-client/apolloClient.ts";
import {useToast} from "@chakra-ui/react";
import {Like} from "../types/article.ts";

type LikeOrDislikeResponse = {
    success: boolean;
    isLiked: boolean;
    likeList: Like[] | null;
};

export const useLikeOrDislike = (articleId: string) => {
    const [articleLikeOrUnlike] = useMutation(LIKE_OR_UNLIKE_ARTICLE, {
        client: privateClient,
    });
    const toast = useToast();
    const handleLikeOrDislike = async (): Promise<LikeOrDislikeResponse> => {
        try {
            const response = await articleLikeOrUnlike({
                variables: {articleId},
            });
            console.log(response);
            switch (response.data.incrementOrDecrementLikes.code) {
                case 200:
                    console.log('isLiked : ', response.data.incrementOrDecrementLikes.isLiked)
                    console.log('likes when liked : ', response.data.incrementOrDecrementLikes.likes.length)

                    toast({
                        title: response.data.incrementOrDecrementLikes.message,
                        status: "info",
                        duration: 10000,
                        isClosable: true,
                    });
                    return {
                        success: true,
                        isLiked: response.data.incrementOrDecrementLikes.isLiked,
                        likeList: response.data.incrementOrDecrementLikes.likes as Like[],
                    };
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

        return {
            success: false,
            isLiked: false,
            likeList: null,
        };
    };

    return { handleLikeOrDislike };
}