import { Link } from "react-router-dom";

const PostsList = ({ allPosts }) => {
  return (
    <div>
      <div>
        {allPosts.length ? (
          allPosts.map((singlePost) => {
            console.log(singlePost);
            return (
              <div key={singlePost._id}>
                <p>Location: {singlePost.location}</p>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PostsList;
