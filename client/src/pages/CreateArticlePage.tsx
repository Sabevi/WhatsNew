import { Box, Card, CardFooter, Container, Heading } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateArticle from "../hooks/useCreateArticle";
import ArticleInputs from "../components/Article/Actions/ArticleInputs";
import BlueButton from "../components/Button/BlueButton";
import { FormValues } from "../types/types";
import { useState } from "react";
import errorDisplayed from "../config/error";

export default function CreateArticlePage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({ mode: "onSubmit" });
  const { createArticle } = useCreateArticle();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitError, setSubmitError] = useState("");

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
    required: "An description is required",
    minLength: {
      value: 50,
      message: "The article must be at least 50 characters long",
    },
    maxLength: {
      value: 500,
      message: "The article cannot be more than 500 characters long",
    },
  });

  const showServerError = () => {
    setSubmitError(errorDisplayed.server);
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    createArticle(data, showServerError);
  };

  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color}>
          What's New - Create Article{" "}
        </Heading>
        <Card p="4" w="full" h="auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <ArticleInputs 
            titleRegister={titleRegister}
            articleRegister={articleRegister}
            errors={errors}
            trigger={trigger}
            />
            <CardFooter>
              <BlueButton
                text="Publish article"
                margin="0 auto"
                type="submit"
              />
            </CardFooter>
          </form>
        </Card>
      </Container>
    </Box>
  );
}