import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { blue_color, light_grey_color, white_color } from "../../assets/customColors";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box minW={{ base: "90%", md: "468px" }}>
      <form>
        <Stack spacing={4} p="1rem" backgroundColor={white_color} boxShadow="md">
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CFaUserAlt color={light_grey_color} />}
              />
              <Input type="email" placeholder="email address" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color={light_grey_color}
                children={<CFaLock color={light_grey_color} />}
              />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* use FormHelperText for message errors*/}
          </FormControl>
          <Button
            variant="solid"
            bg={blue_color}
            color={white_color}
            m="0 auto"
            onClick={() => navigate("/")}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
