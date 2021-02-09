import { Box, Container, Flex ,Button} from "@chakra-ui/core";
import React from "react";
import AddNewPost from "./add-new-post";
import  DisplayPosts  from "./displayposts";

const Navbar = ({posts,access,setAccess}) => {
  function handleLogout() {
    setAccess(false);
  }

  return (
    <>
    <Box position="sticky" top={0} p={4} bg="gray.100" zIndex={1}>
      <Container maxW="md" centerContent>
        <Flex justifyContent="flex-end" w="100%" position="sticky" top={0}>
          <AddNewPost />
          <div>
            <Button onClick={handleLogout} >Logout</Button>
          </div>
        </Flex>
      </Container>
    </Box>
    <DisplayPosts posts={posts}/>
    </>
  );
};

export default Navbar;