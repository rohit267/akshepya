import {Badge, Box} from "@chakra-ui/layout";
import {Heading} from "@chakra-ui/react";
import {AiFillQuestionCircle, FaFire, FiRefreshCcw} from "react-icons/all";
import {IconContext} from "react-icons";

function RecentAsked({isSmallerScreen, recents}) {
    return (
        <Box minW={"25%"} pl={6} d={isSmallerScreen ? "none" : "block"}>
            <Badge>Hot Questions: </Badge>
            <Box>
                {
                    recents.map((item, index) => {
                        return (
                            <Box background={"#f5f5f5"} p={1} m={2}>
                                <Heading d={"inline-flex"} cursor={"pointer"} as="h4" size="l"
                                         key={index}> <FaFire style={{position:"relative", top:"4px"}} />&nbsp;{item.topic}</Heading>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    );
}

export default RecentAsked;
