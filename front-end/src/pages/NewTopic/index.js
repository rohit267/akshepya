import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import { useMediaQuery} from "@chakra-ui/react";
import { Box,} from '@chakra-ui/layout';
import AskQuestionBox from '../../components/AskQuestionBox';
import RecentAsked from "../../components/RecentAksed";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


function NewTopic(props) {
    // const authData = useSelector((state)=>state.auth);
    const [isSmallerScreen] = useMediaQuery("(max-width: 720px)");
    const history = useHistory();

    //
    // useEffect(()=>{
    //     if(!authData.isLoggedIn){
    //         history.push("/login");
    //     }
    // },[]);

    return (
        <Layout>
            <Box d={"flex"} mt={6} ml={6} mr={6} justifyContent={"space-evenly"}>
                <AskQuestionBox isSmallerScreen={isSmallerScreen} />
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
