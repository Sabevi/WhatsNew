import { ButtonProps } from "./Button.types";
import {
  FieldErrorsImpl,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ArticleFormValues } from "./common/Input.types";

export type ArticleDto = {
  id: string;
  title: string;
  description: string;
  nbComments: number;
  likes: Like[];
};

export type ArticleModel = {
  id: string;
  title: string;
  username: string;
  publishedAt: string;
  description: string;
  comments: CommentModel[];
  likes: Like[];
};

export type ArticleModelDTO = {
  id: string;
  title: string;
  username: string;
  publishedAt: string;
  description: string;
  nbComments: number;
  likes: Like[];
};

export type Pagination = {
  page: number;
  total: number;
};

export type CommentModel = {
  id: string;
  username: string;
  content: string;
  publishedAt: string;
};

export type Like = {
  id: string;
  userId: string;
  articleId: string;
};

export type ArticleDetails = {
  title: string;
  description: string;
}

export type LikeOrDislikeResponse = {
  success: boolean;
  isLiked: boolean;
  likeList: Like[] | null;
};

export interface ArticleCardProps {
  articleDetails: ArticleModel;
}

export interface SelectArticlesProps {
  onParamsChange: (params: [number, boolean, string]) => void;
}
export interface ArticleDTOProps {
  article: ArticleModelDTO;
}

export interface ArticleListProps {
  articles: ArticleModelDTO[];
}

export interface LikeComponentProps extends ButtonProps {
  number: number;
  liked: boolean;
}

export interface CommentComponentProps extends ButtonProps {
  number: number;
}

export interface ArticleInputsProps {
  titleRegister: UseFormRegisterReturn;
  articleRegister: UseFormRegisterReturn;
  errors: FieldErrorsImpl<ArticleFormValues>;
  trigger: (fieldName?: "title" | "description" | ("title" | "description")[]) => void;
}

export interface CommentProps {
  comment: CommentModel;
}

export interface CommentListProps {
  comments: CommentModel[];
}
export type ArticleActionProps = string | undefined;

export type UseDeleteArticleReturn = {
  data: ArticleDetails;
  loading: boolean;
};

export interface PaginationProps {
  page: number;
  total: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export interface UseShowArticleListProps {
  page: number;
  mostLiked: boolean;
  userId: string;
}

export interface CommentFormValues {
  articleId: string;
  comment: string;
}

export interface ArticleFormValues {
  username: string;
  title: string;
  description: string;
  id: string | undefined;
}