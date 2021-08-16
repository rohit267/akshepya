import React from 'react';
import { Badge, Box, Text } from '@chakra-ui/layout';
import { Avatar, useMediaQuery } from "@chakra-ui/react";

function Index(props) {
    const [isSmallerThan600] = useMediaQuery("(max-width:600px)");
    return (
        <Box p='8px' borderBottom='1px solid #aadbe2' display='flex' justifyContent='space-between' overflow='auto'>
            <Box display='inline' minWidth='250px' maxWidth='600px'>
                <Text cursor='pointer' fontSize='18px' fontWeight='semibold'>{props.question}</Text>
                <Box fontSize='12px' color='#a5a5a5' ml='8px'>💡-<span>{props.category}</span></Box>
            </Box>
            <Box maxWidth='450px' display='flex' justifyContent='space-evenly'>
                <Box display={isSmallerThan600 ? 'none' : 'inline'} ml='3' overflowX='none' overflowWrap='false'>
                    {props.commenters.map((d, i) => <Avatar size="xs" ml='1' mr='1' name="Dan Abrahmov" key={i} src={d} />)}
                    {/* <Avatar size="xs" ml='1' mr='1' name="Dan Abrahmov" src={props.commenters[1]} /> */}
                </Box>
                <Box ml='3' mr='3'>
                    <Badge fontWeight='semibold' color='#000'>{props.noOfComments}</Badge>
                </Box>
                <Box ml='3' mr='3'>
                    <Badge fontWeight='semibold' color='#000'>{Number(props.views / 1000).toFixed(1)}k</Badge>
                </Box>
                <Box ml='3' mr='3' >
                    <Badge fontWeight='semibold' color='#000'>{props.timeAgo}</Badge>
                </Box>
            </Box>

        </Box>
    );
}

export default Index;