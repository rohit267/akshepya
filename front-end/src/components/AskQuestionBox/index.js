import {Input} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import {Badge, Box} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {FiDelete, TiTick} from "react-icons/all";
import 'react-quill/dist/quill.snow.css';
import {saveQuestion} from '../../controllers/question';
import {useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function AskQuestionBox(props) {
    const [isSaving, setIsSaving] = useState(false);
    const authData = useSelector(store => store.auth);
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");

    function handleCancel() {
       history.push("/");
    }

    async function handleSave() {
        setIsSaving(true);
        const mBody = {
            title: title,
            body: description
        }
        await saveQuestion(authData.accessToken, mBody);
        setIsSaving(false);
    }

    return (
        <Box width={props.isSmallerScreen ? "100%" : "65%"}>
            <Badge mb={2}>Ask Your Question: </Badge>
            <Input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Type your question" size="lg"
                   width="100%" mb={3}/>
            <ReactQuill
                value={description}
                onChange={setDescription}
                modules={modules}
                formats={formats}
                placeholder={"Enter your description here"}
            />
            <Box d={"flex"} justifyContent={"space-evenly"} mt={"60px"}>
                <Button onClick={handleCancel} colorScheme="red" leftIcon={<FiDelete/>}>Cancel</Button>
                <Button isLoading={isSaving} onClick={handleSave} colorScheme={"cyan"} rightIcon={<TiTick/>}>Save
                    Question</Button>
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
