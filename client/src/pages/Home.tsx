import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ArticleList from "../components/Article/ArticleList";

export default function Home() {
  return (
    <div>
      {/* <SimpleGrid spacing={4} templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
        <Card>
          <CardHeader>
            <Heading size="md"> Title of the article </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Title of the article </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Title of the article </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Title of the article </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Title of the article </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Title of the article </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid> */}

      <ArticleList />
    </div>
  );
}
