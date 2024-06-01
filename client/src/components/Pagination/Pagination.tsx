import { Button, Box } from "@chakra-ui/react";

interface PaginationProps {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  hasPreviousPage,
  hasNextPage,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      {hasPreviousPage ? (
        <Button onClick={onPreviousPage}>
          Previous
        </Button>
      ) : (
        <Button visibility="hidden">
          Previous
        </Button>
      )}
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
