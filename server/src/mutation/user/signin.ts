import { MutationResolvers } from "../../types";
import { comparePasswords, createJWT, JWTUser } from "../../module/auth.js";

export const signIn: MutationResolvers["signIn"] = async (
  _,
  { username, password },
  { dataSources }
) => {
  const userExist = await dataSources.db.user.findUnique({
    where: {
      username,
    },
  });

  if (
    userExist != null &&
    (await comparePasswords(password, userExist.password))
  ) {
    return {
      code: 200,
      message: "User signed in",
      success: true,
      token: createJWT(userExist as JWTUser),
    };
  } else {
    return {
      code: 403,
      message: "Unable to sign in user",
      success: false,
      token: null,
    };
  }
};
