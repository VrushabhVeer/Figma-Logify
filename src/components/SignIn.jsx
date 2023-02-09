import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import sign from "../assets/sign.svg";
import facebook from "../assets/Facebook.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

const SignIn = () => {
  return (
    <>
      <Flex h="100vh" w="100%" pt="21px" pr="21" pb="21px">
        <Box
          w="100%"
          h="100%"
          pl="115px"
          pt="110px"
          pb="115px"
          textAlign="left"
        >
          <Text fontSize="30px" fontWeight="600">
            Sign in
          </Text>
          <Text mt="12px">If you don’t have an account register</Text>
          <Text mt="6px">
            You can <span className="register"> Register here !</span>
          </Text>
          <Box mt="33px" w="75%">
            <Box>
              <FormLabel>
                Enter your username or email address
              </FormLabel>
              <Input borderColor="#4285F4" h="55px" color="#999999" fontSize="14px" placeholder="Username or email address" />
            </Box>
            <Box mt="30px">
              <FormLabel>
                Enter your password
              </FormLabel>
              <Input borderColor="#4285F4" h="55px" color="#999999" fontSize="14px" placeholder="Password" />
            </Box>
            <Button
              mt="40px"
              bg="#0C21C1"
              w="100%"
              border="none"
              rounded="full"
              color="#FFFFFF"
              fontWeight="light"
              _hover={{ bg: "#0C21C1" }}
            >
              Login
            </Button>
            <Text textAlign="center" mt="33px" color="#B5B5B5">
              or continue with
            </Text>
            <Flex
              alignItems="center"
              gap="20px"
              mt="23px"
              justifyContent="center"
            >
              <Box>
                <Image w="36px" src={facebook} alt="facebook" />
              </Box>
              <Box>
                <Image w="36px" src={apple} alt="apple" />
              </Box>
              <Box>
                <Image w="36px" src={google} alt="google" />
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          w="100%"
          h="100%"
          bg="#000842"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="15px"
        >
          <Image src={sign} alt="signin" />
        </Box>
      </Flex>
    </>
  );
};

export default SignIn;
