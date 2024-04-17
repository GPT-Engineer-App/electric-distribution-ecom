// Complete the Index page component for Fuji Electric's Distribution and Controls division
import { Box, Flex, Text, Button, Image, VStack, HStack, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const productBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh">
      <Flex bg="blue.500" p={4} color="white" justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Fuji Electric
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaSearch />} variant="outline" colorScheme="teal">
            Search
          </Button>
          <Button leftIcon={<FaUser />} variant="outline" colorScheme="teal">
            Account
          </Button>
          <Button leftIcon={<FaShoppingCart />} variant="outline" colorScheme="teal">
            Cart
          </Button>
        </HStack>
      </Flex>
      <VStack spacing={8} p={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Distribution and Controls Products
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%">
            <ProductCard image="https://images.unsplash.com/photo-1566417110090-6b15a06ec800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYnJlYWtlcnxlbnwwfHx8fDE3MTMzOTIyODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" title="Circuit Breaker" description="High-performance circuit breakers for industrial applications." />
          </GridItem>
          <GridItem w="100%">
            <ProductCard image="https://images.unsplash.com/photo-1516937941344-00b4e0337589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmVsYXl8ZW58MHx8fHwxNzEzMzkyMjg2fDA&ixlib=rb-4.0.3&q=80&w=1080" title="Industrial Relay" description="Reliable and durable relays for various industrial uses." />
          </GridItem>
          <GridItem w="100%">
            <ProductCard image="https://images.unsplash.com/photo-1635335874521-7987db781153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNvbnRhY3RvcnxlbnwwfHx8fDE3MTMzOTIyODd8MA&ixlib=rb-4.0.3&q=80&w=1080" title="Electric Contactor" description="Efficient contactors for motor control and power switching." />
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

const ProductCard = ({ image, title, description }) => {
  const productBg = useColorModeValue("white", "gray.800");

  return (
    <VStack bg={productBg} p={4} borderRadius="md" boxShadow="md" spacing={4}>
      <Image src={image} borderRadius="md" boxSize="200px" objectFit="cover" />
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
      <Button colorScheme="blue" size="sm">
        View More
      </Button>
    </VStack>
  );
};

export default Index;
