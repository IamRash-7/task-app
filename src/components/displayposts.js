import React from 'react'
import Post from './post';
import {VStack , Container} from "@chakra-ui/core";

function DisplayPosts({posts}) {
    return (
        <div>
            <Container maxW="md" centerContent p={8}>
                <VStack spacing={8} w="100%">
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
                </VStack>
            </Container>
        </div>
    )
}

export default DisplayPosts
