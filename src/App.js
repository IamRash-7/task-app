import {Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  useDisclosure } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import db from "./lib/firebase";
import DisplayPosts from "./components/displayposts";
import  Navbar  from "./components/navbar";



const App = () => {
  const [posts, setPosts] = useState([]);

  

  const { isOpen, onOpen, onClose } = useDisclosure();
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isSaving, setSaving] = useState(false);
    const [access,setAccess] = useState(false);

    const handleSubmit = ()=>{
      console.log(username,password);
      onClose();
      setUsername("");
      if ((username=="test@gmail.com")&&(password=="password")) {
          setAccess(true);
      }
      else{
        alert("You don't have access!")
      }
    }

    useEffect(() => {

      db.collection("news")
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setPosts(data);
        });
    }, []);
  
    useEffect(() => {
  
      db.collection("news")
        .orderBy("createdAt", "desc")
        .onSnapshot((querySnapshot) => {
          const _posts = [];
  
          querySnapshot.forEach((doc) => {
            _posts.push({
              id: doc.id,
              ...doc.data(),
            });
          });
  
          setPosts(_posts);
        });
    }, []);

  return (
    <>
    {! access && <><Button onClick={onOpen} colorScheme="blue">
          Login
        </Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl id="post-title">
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="email"
                    value={username}
                    placeholder="test@gmail.com"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <HStack spacing={4}>
                  <Button onClick={onClose}>Close</Button>
                  <Button
                    onClick={handleSubmit}
                    colorScheme="blue"
                    disabled={!username.trim()}
                    isLoading={isSaving}
                  >
                    Login
                  </Button>
                </HStack>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal></>}
        {access ?<Navbar posts={posts}/> : <DisplayPosts posts={posts}/>}
    </>
  );
};

export default App;