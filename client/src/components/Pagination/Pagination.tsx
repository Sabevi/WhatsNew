import {Button, Box, Text} from "@chakra-ui/react";

interface PaginationProps {
  page: number;
  total: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  hasPreviousPage,
  hasNextPage,
  onPreviousPage,
  onNextPage,

}) => {
  return (
      <Box display="flex" justifyContent="center" alignItems="center" gap={5} mt={4}>
        {hasPreviousPage ? (
            <Button onClick={onPreviousPage}>
              Previous
            </Button>
        ) : (
            <Button visibility="hidden">
              Previous
            </Button>
        )}

        <Text>{`${page}/${total}`}</Text>

        {hasNextPage ? (
            <Button onClick={onNextPage}>
              Next
            </Button>
        ) : (
            <Button visibility="hidden">
              Next
            </Button>
        )}
      </Box>
  );
};

export default Pagination;
