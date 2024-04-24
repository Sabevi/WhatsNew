import {
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  StarIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

export default function Menu() {
  return (
    <MenuComponent>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        fontSize="2xl"
        p={6}
      />
      <MenuList>
        <MenuItem icon={<StarIcon />} fontSize="lg">Go to Home</MenuItem>
        <MenuItem icon={<EditIcon />} fontSize="lg">Create new article</MenuItem>
        <MenuItem icon={<ViewIcon />} fontSize="lg">Manage your articles</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} fontSize="lg">Sign out</MenuItem>
      </MenuList>
    </MenuComponent>
  );
}
