import { css } from "@emotion/css";
import CommentsInput from "./CommentsInput";
import CommentsList from "./CommentsList";

function Comments() {
  return (
    <div>
      <CommentsList />
      <CommentsInput />
    </div>
  );
}

export default Comments;
