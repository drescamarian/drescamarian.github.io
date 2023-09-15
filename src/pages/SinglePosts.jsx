import { useFetch, useFeacthPostComents } from "../api";
import { useParams } from "react-router-dom";
import { users, posts } from "../ApiConfig";
import "../css/SinglePosts.css";

function SinglePosts(){
    const { postid, userid } = useParams();
    const { data, loading, error } = useFetch(posts + postid);
    const { data:user, loading:userLoad, error:userError } = useFetch(users + userid);
    const { comments, commentsLoad, commentsError } = useFeacthPostComents(posts + postid);
    const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const firstword = (str) => {
      let word = str.split(" ")[0] + " " + str.split(" ")[1] + " " + str.split(" ")[2];
      return capitalize(word);
    }
    
    return(
      <section className="single__post">
        <div className="single__post">
            {data && <h1>{firstword(data.title)}</h1>}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>{capitalize(data.title)}</h2>
                    <p>{capitalize(data.body)}</p>
                </div>
            )}
            {userLoad && <p>Loading...</p>}
            {userError && <p>Error: {userError}</p>}
            {user && (
              <div>
                <h2>From: {user.username}</h2>
              </div>
            )}
        </div>
        <div className="comments">
            <h2>Comments</h2>
            {commentsLoad && <p>Loading...</p>}
            {commentsError && <p>Error: {commentsError}</p>}
            {comments && (
              <div>
                {comments.map((comment) => (
                  <div key={comment.id}>
                    <h3>{capitalize(comment.name)} <span>{comment.email}</span></h3>
                    <p>{capitalize(comment.body)}</p>
                  </div>
                ))}
              </div>
            )}
        </div>
        </section>
    )
}

export default SinglePosts;