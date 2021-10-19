import React from "react";
import Layout from "../../components/Layout";
import { Input } from "@chakra-ui/react";
import { Container,Center} from '@chakra-ui/layout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
function NewTopic(props){
    return(
      <Layout>
          <Container>
              <Center mt='16' pt='5' pl='50' pr='2' pb='6' boxSize='lg' height='auto'  borderRadius='8px'>
                <Input placeholder="Enter your questions" size="lg" width="100%" />
              </Center>

          </Container>
      </Layout>
    );
}

export default NewTopic;
