import React, {useState} from "react";
import Layout from "../../components/Layout";
import {Input, useMediaQuery} from "@chakra-ui/react";
import {Badge, Box,} from '@chakra-ui/layout';
import AskQuestionBox from '../../components/AskQuestionBox';
import RecentAsked from "../../components/RecentAksed";


function NewTopic(props) {

    const [description, setDescription] = useState("");
    const [isSmallerScreen] = useMediaQuery("(max-width: 720px)");

    return (
        <Layout>
            <Box d={"flex"} mt={6} ml={6} mr={6} justifyContent={"space-evenly"}>
                <AskQuestionBox isSmallerScreen={isSmallerScreen} desctiption={description} handleDescription={setDescription} />
                <RecentAsked isSmallerScreen={isSmallerScreen} recents={Recent} />
            </Box>
        </Layout>
    );
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000000);
}


const Recent= [
    {
        id: generateRandomNumber(),
        topic: "This is topic one",
    },
    {
        id: generateRandomNumber(),
        topic: "This is topic one",
    },
    {
        id: generateRandomNumber(),
        topic: "This is topic one",
    },
    {
        id: generateRandomNumber(),
        topic: "This is topic one",
    },
    {
        id: generateRandomNumber(),
        topic: "This is topic one",
    }

];




export default NewTopic;
