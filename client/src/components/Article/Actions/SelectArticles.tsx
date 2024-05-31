import { Flex, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SelectArticlesProps } from "../../../types/types";

export default function SelectArticles({ onParamsChange } : SelectArticlesProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState("allArticles");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user.id;

  useEffect(() => {
    let newParams: [number, boolean, string];
    switch (selectedOption) {
      case "allArticles":
        newParams = [1, false, ""];
        break;
      case "mostPopularArticles":
        newParams = [1, true, ""];
        break;
      case "myArticles":
        newParams = [1, false, userId];
        break;
      default:
        newParams = [1, false, ""];
    }
    onParamsChange(newParams);
  }, [selectedOption, onParamsChange]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Flex justifyContent="end">
      <Select
        placeholder="Select articles"
        size="lg"
        width="220px"
        onChange={handleChange}
      >
        <option value="allArticles">Show all articles</option>
        <option value="mostPopularArticles">Show most popular</option>
        <option value="myArticles">Show my articles </option>
      </Select>
    </Flex>
  );
}
