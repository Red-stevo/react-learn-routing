import {useSelector} from "react-redux";
import {AllPosts} from "../AppStore/PostsStore.js";

const PostsView = () => {
    const posts = useSelector(AllPosts);

    const mappedPosts = posts.map((post) => { return(
        // eslint-disable-next-line react/jsx-key
        <section key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </section>
    )});


    return (
        <div>
            <h1>Posts</h1>
            {mappedPosts}
        </div>
    );
};

export default PostsView;