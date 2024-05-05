import { GraphQLResolveInfo } from 'graphql';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ArticleDto = {
  __typename?: 'ArticleDto';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nbComments: Scalars['Int']['output'];
  nbLikes: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type CreateArticleResponse = {
  __typename?: 'CreateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrDeleteComment: AddOrDeleteCommentResponse;
  createArticle: CreateArticleResponse;
  createUser: CreateUserResponse;
  deleteArticle: DeleteArticleResponse;
  deleteUser: DeleteUserResponse;
  getArticles: GetArticlesResponse;
  incrementOrDecrementLikes: IncrementOrDecrementLikeResponse;
  signIn: SignInResponse;
};


export type MutationAddOrDeleteCommentArgs = {
  articleId: Scalars['ID']['input'];
  commentId: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  articleId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  token: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationGetArticlesArgs = {
  token: Scalars['String']['input'];
};


export type MutationIncrementOrDecrementLikesArgs = {
  articleId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  users: Array<User>;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type AddOrDeleteCommentResponse = {
  __typename?: 'addOrDeleteCommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteArticleResponse = {
  __typename?: 'deleteArticleResponse';
  articleId?: Maybe<Scalars['ID']['output']>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteUserResponse = {
  __typename?: 'deleteUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type GetArticlesResponse = {
  __typename?: 'getArticlesResponse';
  articlesDto?: Maybe<Array<Maybe<ArticleDto>>>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IncrementOrDecrementLikeResponse = {
  __typename?: 'incrementOrDecrementLikeResponse';
  code: Scalars['Int']['output'];
  like?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  ArticleDto: ResolverTypeWrapper<ArticleDto>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateArticleResponse: ResolverTypeWrapper<CreateArticleResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  addOrDeleteCommentResponse: ResolverTypeWrapper<AddOrDeleteCommentResponse>;
  deleteArticleResponse: ResolverTypeWrapper<DeleteArticleResponse>;
  deleteUserResponse: ResolverTypeWrapper<DeleteUserResponse>;
  getArticlesResponse: ResolverTypeWrapper<GetArticlesResponse>;
  incrementOrDecrementLikeResponse: ResolverTypeWrapper<IncrementOrDecrementLikeResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  ArticleDto: ArticleDto;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateArticleResponse: CreateArticleResponse;
  CreateUserResponse: CreateUserResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  User: User;
  addOrDeleteCommentResponse: AddOrDeleteCommentResponse;
  deleteArticleResponse: DeleteArticleResponse;
  deleteUserResponse: DeleteUserResponse;
  getArticlesResponse: GetArticlesResponse;
  incrementOrDecrementLikeResponse: IncrementOrDecrementLikeResponse;
};

export type ArticleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleDtoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ArticleDto'] = ResolversParentTypes['ArticleDto']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nbComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nbLikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateArticleResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateArticleResponse'] = ResolversParentTypes['CreateArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addOrDeleteComment?: Resolver<ResolversTypes['addOrDeleteCommentResponse'], ParentType, ContextType, RequireFields<MutationAddOrDeleteCommentArgs, 'articleId' | 'commentId' | 'token'>>;
  createArticle?: Resolver<ResolversTypes['CreateArticleResponse'], ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'description' | 'title' | 'token'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  deleteArticle?: Resolver<ResolversTypes['deleteArticleResponse'], ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'articleId' | 'token'>>;
  deleteUser?: Resolver<ResolversTypes['deleteUserResponse'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'token' | 'userId'>>;
  getArticles?: Resolver<ResolversTypes['getArticlesResponse'], ParentType, ContextType, RequireFields<MutationGetArticlesArgs, 'token'>>;
  incrementOrDecrementLikes?: Resolver<ResolversTypes['incrementOrDecrementLikeResponse'], ParentType, ContextType, RequireFields<MutationIncrementOrDecrementLikesArgs, 'articleId' | 'token'>>;
  signIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'password' | 'username'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SignInResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddOrDeleteCommentResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['addOrDeleteCommentResponse'] = ResolversParentTypes['addOrDeleteCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteArticleResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['deleteArticleResponse'] = ResolversParentTypes['deleteArticleResponse']> = {
  articleId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['deleteUserResponse'] = ResolversParentTypes['deleteUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetArticlesResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['getArticlesResponse'] = ResolversParentTypes['getArticlesResponse']> = {
  articlesDto?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleDto']>>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementOrDecrementLikeResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['incrementOrDecrementLikeResponse'] = ResolversParentTypes['incrementOrDecrementLikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleDto?: ArticleDtoResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CreateArticleResponse?: CreateArticleResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  addOrDeleteCommentResponse?: AddOrDeleteCommentResponseResolvers<ContextType>;
  deleteArticleResponse?: DeleteArticleResponseResolvers<ContextType>;
  deleteUserResponse?: DeleteUserResponseResolvers<ContextType>;
  getArticlesResponse?: GetArticlesResponseResolvers<ContextType>;
  incrementOrDecrementLikeResponse?: IncrementOrDecrementLikeResponseResolvers<ContextType>;
};

