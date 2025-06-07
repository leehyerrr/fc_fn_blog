import { Link } from "react-router-dom";

interface postListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: postListProps) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">작성자 닉넴</div>
                <div className="post__date">2025.02.04</div>
              </div>
              <div className="post__title">게시글{index}</div>
              <div className="post__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet, doloribus. Itaque rem voluptas ducimus earum, esse iste
                modi exercitationem expedita sit facere temporibus suscipit
                alias laudantium libero eos ipsam iusto.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
