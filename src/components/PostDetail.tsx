import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            orem ipsum, dolor sit amet consectetur adipisicing
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">작성자 닉넴</div>
            <div className="post__date">2025.02.04</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            doloribus. Itaque rem voluptas ducimus earum, esse iste modi
            exercitationem expedita sit facere temporibus suscipit alias
            laudantium libero eos ipsam iusto.
          </div>
        </div>
      </div>
    </>
  );
}
