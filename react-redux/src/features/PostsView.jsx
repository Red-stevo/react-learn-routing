import {useSelector} from "react-redux";

const PostsView = () => {
    const posts = useSelector(state => state.posts)

    const mapedPosts = posts.map((post) => { return(
        // eslint-disable-next-line react/jsx-key
        <section key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </section>
    )});


    return (
        <div>
            <h1>Posts</h1>
            {mapedPosts}
        </div>
    );
};

export default PostsView;