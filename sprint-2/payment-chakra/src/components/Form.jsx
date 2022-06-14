import {
  Box,
  Flex,
  Stack,
  Heading,
  Container,
  Input,
  Button,
  SimpleGrid,
  Image,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";

import img from "./../../src/123.png";
export default function JoinOurTeam() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Image boxSize="100%" src={img} alt="Dan Abramov" />

        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              textAlign={"left"}
            >
              Payments Details
            </Heading>
          </Stack>
          <Box
            as={"form"}
            mt={10}
            textAlign={"left"}
            fontSize={{ base: "xl", sm: "xl", md: "xl" }}
            paddingLeft="10px"
          >
            <Stack spacing={4}>
              <h2>Candiate Name</h2>
              <Input
                placeholder="Name"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <h2>Card Number</h2>
              <Input
                placeholder="4325 2323 4543 5656"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Flex gap="20px">
                <Box>
                  <h4>Expiry Month</h4>
                  <Input
                    placeholder="__ __-___"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                </Box>
                <Box>
                  <h4>Expiry Year</h4>
                  <Input
                    placeholder="__ __ __ __"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                </Box>
                <Box>
                  <h4>CVV</h4>
                  <Input
                    placeholder="___ __-___"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                </Box>
              </Flex>
            </Stack>

            <Button
              fontFamily={"heading"}
              mt={8}
              w={"40%"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              size="lg"
              padding="0 40px"
              display={"block"}
              margin={"50px auto"}
            >
              PAY
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    ></Icon>
  );
};
