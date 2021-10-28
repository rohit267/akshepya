import {Input} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import {Badge, Box} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {FiDelete, TiTick} from "react-icons/all";
import 'react-quill/dist/quill.snow.css'

function AskQuestionBox(props) {
    return (
        <Box width={props.isSmallerScreen ? "100%" : "65%"}>
            <Badge mb={2}>Ask Your Question: </Badge>
            <Input placeholder="Type your question" size="lg" width="100%" mb={3}/>
            <ReactQuill
                value={props.description || ''}
                onChange={props.handleDescription}
                modules={modules}
                formats={formats}
                placeholder={"Enter your description here"}
            />
            <Box d={"flex"} justifyContent={"space-evenly"} mt={"60px"}>
                <Button colorScheme="red" leftIcon={<FiDelete/>}>Cancel</Button>
                <Button colorScheme={"cyan"} rightIcon={<TiTick/>}>Create Topic</Button>
            </Box>

        </Box>
    )
}

const modules = {
    toolbar: [
        [{'header': '1'}, {'header': '2'}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ["code-block"],
        ['link', 'image'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'code-block',
    'link', 'image'
]

export default AskQuestionBox;
