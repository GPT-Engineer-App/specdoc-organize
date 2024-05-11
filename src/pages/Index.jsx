import { Box, ChakraProvider, Container, Flex, Heading, IconButton, Input, SimpleGrid, Text, VStack, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [notes, setNotes] = useState([]);
  return (
    <ChakraProvider>
      <Container maxW="container.xl" p={0}>
        <Flex direction="column" h="100vh">
          {/* Header */}
          <Flex align="center" bg="gray.100" p={4} justify="space-between">
            <Heading size="lg">SpecDoc</Heading>
            <Flex>
              <Input placeholder="Search" size="md" mr={2} />
              <IconButton aria-label="Search" icon={<FaSearch />} />
              <IconButton aria-label="Notifications" icon={<FaBell />} ml={4} />
              <IconButton aria-label="User Settings" icon={<FaUserCircle />} ml={2} />
            </Flex>
          </Flex>

          {/* Main Content */}
          <Flex flex={1}>
            {/* Sidebar */}
            <Box w="250px" bg="gray.50" p={4} position="relative">
              <Button onClick={onOpen} colorScheme="blue" position="absolute" top="4" right="4">
                Add Note
              </Button>
              <VStack align="stretch" spacing={4}>
                <Text fontWeight="bold">Notes</Text>
                <Text fontWeight="bold">Databases</Text>
                <Text fontWeight="bold" as="a" href="/notes">
                  All Notes
                </Text>
                <Text fontWeight="bold">Tasks</Text>
                <Text fontWeight="bold">Shared Spaces</Text>
              </VStack>
            </Box>

            {/* Dashboard */}
            <Box flex={1} p={4}>
              <Heading size="md" mb={4}>
                Dashboard
              </Heading>
              <SimpleGrid columns={3} spacing={4}>
                <Box bg="white" p={4} shadow="md">
                  <Text fontWeight="bold">Recent Files</Text>
                  <SimpleGrid columns={1} spacing={4}>
                    {notes.map((note, index) => (
                      <Box key={index} bg="white" p={4} shadow="md">
                        <Text fontWeight="bold">{note.title}</Text>
                        <Text fontSize="sm">{note.content}</Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
                <Box bg="white" p={4} shadow="md">
                  <Text fontWeight="bold">Pinned Items</Text>
                  <Text fontSize="sm">Project Plan</Text>
                  <Text fontSize="sm">Marketing Strategy</Text>
                </Box>
                <Box bg="white" p={4} shadow="md">
                  <Text fontWeight="bold">Workspace Overview</Text>
                  <Text fontSize="sm">25 Active Projects</Text>
                  <Text fontSize="sm">150 Documents</Text>
                </Box>
              </SimpleGrid>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add a New Note</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <Input placeholder="Note Title" id="noteTitle" />
                    <Textarea placeholder="Note Content" id="noteContent" />
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => {
                      setNotes([...notes, { title: document.getElementById("noteTitle").value, content: document.getElementById("noteContent").value }]);
                      onClose();
                    }}
                  >
                    Save Note
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
