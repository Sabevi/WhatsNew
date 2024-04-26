import {MutationResolvers} from "../../types";
import {hashPassword} from "../../module/auth.js";

export const createUser: MutationResolvers['createUser'] = async (_, {username, password}, {dataSources}) => {
    try {
        const createdUser = await dataSources.db.user.create({
            data: {
                username,
                password: await hashPassword(password)
            }
        })

        return {
            code: 201,
            message: "User created",
            success: true,
            user: createdUser
        }
    } catch (e) {
        return {
            code: 403,
            message: 'User not created',
            success: false,
            user: null
        }
    }
}