import {
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Menu(): JSX.Element {
  const { logout } = useAuth();

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
        <MenuItem as={Link} to="/" icon={<StarIcon />} fontSize="lg">
          Home
        </MenuItem>
        <MenuItem as={Link} to="/create" icon={<EditIcon />} fontSize="lg">
          Create a new article
        </MenuItem>
        <MenuItem as={Link} to="/my-articles" icon={<EditIcon />} fontSize="lg">
          Manage your articles
        </MenuItem>
        <MenuItem
          as={Link}
          to="/signin"
          icon={<ExternalLinkIcon />}
          fontSize="lg"
          onClick={logout}
        >
          Logout
        </MenuItem>
      </MenuList>
    </MenuComponent>
  );
}