import { Box, Card, CardFooter, Container, Heading } from "@chakra-ui/react";
import { blue_color } from "../assets/customColors";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateArticle from "../services/useCreateArticle";
import ArticleInputs from "../components/Article/Actions/ArticleInputs";
import BlueButton from "../components/Button/BlueButton";
import { ArticleFormValues } from "../types/Article.types";

export default function CreateArticlePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<ArticleFormValues>({ mode: "onSubmit" });
  const { createArticle } = useCreateArticle();

  const titleRegister = register("title", {
    required: "A title is required",
    minLength: {
      value: 10,
      message: "Your title is too short. It must be at least 10 characters long",
    },
    maxLength: {
      value: 130,
      message: "The title cannot be more than 130 characters long",
    },
  });

  const articleRegister = register("description", {
    required: "An article is required",
    minLength: {
      value: 1000,
      message: "The article must be at least 300 characters long",
    },
    maxLength: {
      value: 3000,
      message: "The article cannot be more than 2000 characters long",
    },
  });

  const onSubmit: SubmitHandler<ArticleFormValues> = (data) => {
    createArticle(data);
  };

  return (
    <Box as="main">
      <Container maxW="7xl" p="12">
        <Heading textAlign="center" as="h1" color={blue_color} marginBottom="20px">
          What's New - Create Article{" "}
        </Heading>
        <Card p="4" w="full" shadow="lg">
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
