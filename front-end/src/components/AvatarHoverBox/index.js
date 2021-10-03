import React from 'react';
import {Box, Text} from '@chakra-ui/layout';
import {useDispatch, useSelector} from 'react-redux';
import {IconContext} from "react-icons";
import {BiLogOut, FaUserCircle} from "react-icons/all";
import {Button} from "@chakra-ui/react";
import {executeLogout} from "../../controllers/auth";

function Avatar(props) {
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    async function handleLogOut(e){
        await executeLogout(dispatch);
        window.location.reload();
    }

    return (
        <Box display={props.visible?"block":"none"} w="300px" zIndex='99' backgroundColor='#fff' boxShadow="0px 1px 5px #4cbec7" borderRadius='4px'
             display={props.visible ? "block" : "none"} mt='64px' position='absolute' right='4px' p='8px'>
            <Box>
                <MIconProvider display={"inline"} >
                    <FaUserCircle style={{display:"inline"}}/>
                </MIconProvider>
                <Text display={"inline"} ml={'4px'} position={'relative'} color={"#626060"} top={'1px'}>{user.name}</Text>
                <Button onClick={handleLogOut} position={'relative'} right={'-70px'}> <BiLogOut display={"inline"} />&nbsp;&nbsp;Logout</Button>
            </Box>
        </Box>
    );
}

function MIconProvider(props) {
    return (
        <div style={{display: props.display}}>
            <IconContext.Provider value={{color: "grey.300", className: 'emailLock'}}>
                {props.children}
            </IconContext.Provider>
        </div>
    )
}

export default Avatar;
