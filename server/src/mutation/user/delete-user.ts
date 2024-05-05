import { getUser } from "../../module/auth";
import { MutationResolvers } from "../../types";

export const deleteUser: MutationResolvers['deleteUser'] = async (_, {token, userId}, {dataSources}) => {
    
    // get user from token
    const user = getUser(token);

    // If the user is not found (i.e., the token is invalid), return an error response
    if (!user) {
        return {
            code: 403,
            message: "Unauthorized",
            success: false,
            userId: null
        }
    }

    const userToDelete = await dataSources.db.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userToDelete) {
        return {
            code: 403,
            message: "user not found",
            success: false,
            userId: null
        }
    }

    await dataSources.db.like.deleteMany({
        where: {
            userId: userId
        }
    })

    await dataSources.db.comment.deleteMany({
        where: {
            userId: userId
        }
    })

    await dataSources.db.article.deleteMany({
        where: {
            userId: userId
        }
    })

    await dataSources.db.user.delete({
        where: {
            id: userId
        }
    })

    return {
        code: 200,
        message: "user deleted",
        success: true,
        userId: userId
    }

}