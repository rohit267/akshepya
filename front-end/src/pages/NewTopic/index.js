import React, {useState} from "react";
import Layout from "../../components/Layout";
import {Divider, Input} from "@chakra-ui/react";
import {Box, Center, Container} from '@chakra-ui/layout';
import ReactQuill from 'react-quill';
import Editor from 'react-quill'
import 'react-quill/dist/quill.snow.css';

function NewTopic(props) {

    const [description, setDescription] = useState("");

    function handleDescription(value) {
        setDescription(value);
    }

    return (
        <Layout>
            <Container>
                <Center mt='16' boxSize='xlg' height='auto'>
                    <Box>
                        <Input placeholder="Enter your questions" size="lg" width="100%"/>
                        <Divider />
                        <ReactQuill
                            value={description}
                            onChange={handleDescription}
                        />
                    </Box>
                </Center>

            </Container>
        </Layout>
    );
}

export default NewTopic;
