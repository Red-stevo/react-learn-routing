import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AddPost} from "../AppStore/PostsStore.js";

const PostInputForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const savePost = () => {
        if(title && content){
            dispatch(AddPost(title, content));

            setTitle("");
            setContent("");
        }
    }

    return (
        <section>
            <Form>
                <Form.Label>Posts Input</Form.Label>

                <Form.Group>
                    <Form.Label htmlFor={"title"}>Title</Form.Label>
                    <Form.Control id={"title"} value={title}
                                  onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor={"content"}>Content</Form.Label>
                    <Form.Control id={"content"} value={content}
                                  onChange={(e) => setContent(e.target.value)} />
                </Form.Group>

                <Button onClick={savePost}>Save</Button>
            </Form>
        </section>
    );
};

export default PostInputForm;