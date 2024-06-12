import {
  Box,
  Card,
  CardFooter,
  Container,
  Flex,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import ArticleInputs from "../components/Article/Actions/ArticleInputs";
import BlueButton from "../components/Button/BlueButton";
import { FormValues } from "../types/types";
import { useParams } from "react-router-dom";
import useUpdateArticle from "../services/useUpdateArticle";
import useShowArticleDetails from "../services/useShowArticleDetails";

export default function UpdateArticlePage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useShowArticleDetails(id as string);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const { updateArticle } = useUpdateArticle();

  useEffect(() => {
    if (data && data.title && data.description) {
      reset({
        title: data.title,
        description: data.description,
      });
    }
  }, [data, reset]);

  const titleRegister = register("title", {
    required: "A title is required",
    minLength: {
      value: 5,
      message: "The title must be at least 5 characters long",
    },
    maxLength: {
      value: 50,
      message: "The title cannot be more than 50 characters long",
    },
  });

  const articleRegister = register("description", {
    required: "A description is required",
    minLength: {
      value: 50,
      message: "The article must be at least 50 characters long",
    },
    maxLength: {
      value: 500,
      message: "The article cannot be more than 500 characters long",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
      updateArticle(id!, data);
  };

  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color}>
          What's New - Update Your Article{" "}
        </Heading>
        {loading ? (
          <Flex justify="center" align="center" height="100vh">
            <Spinner
              thickness="4px"
              speed="0.45s"
              emptyColor="gray.200"
              color="blue.500"
              boxSize="100px"
            />
          </Flex>
        ) : (
          <Card p="4" w="full" h="auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ArticleInputs
                titleRegister={titleRegister}
                articleRegister={articleRegister}
                errors={errors}
                trigger={trigger}
              />
              <CardFooter>
                <BlueButton text="Edit article" margin="0 auto" type="submit" />
              </CardFooter>
            </form>
          </Card>
        )}
      </Container>
    </Box>
  );
}
