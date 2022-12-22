import "./detail.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __commentLike,
  __deleteComment,
  __deleteyPosts,
  __getDetailPost,
  __getPosts,
  __modifyComment,
  __postComment,
  __postLike,
} from "../redux/modules/postSlice";
import FavoriteBorder from "../components/material/FavoriteBorderIcon";
import FavoriteIcon from "../components/material/FavortieIcon";
import { useEffect, useState, useRef } from "react";
import { useInputChange } from "../core/hooks/useInputChange";

const Detail = () => {
  const { state } = useLocation();
  const isCommentLike = useRef(false); //유저가 해당 댓글 좋아요 상태인지
  const [isCodiLike, setIsCodiLike] = useState(false); //유저가 현재 게시글 좋아요 상태인지
  const isCommentupdate = useRef(false); // 현재 댓글 수정 중인지 확인
  const [whatnumComent, setWhatnumComment] = useState(0); //현재 댓글 수정중인 댓글번호
  const { num, title, content, imageUrl, price, likeCount, createdAt } = state;
  const { isLoading, error, postList, detailPost, isSuccess } = useSelector(
    (state) => state.post
  );
  const [commentList, setCommentList] = useState(state.commentList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, onChangeInput, clearInput, setInputs] = useInputChange();
  const { commentContent, updateCommentContent } = inputs;

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch, isCodiLike]);

  useEffect(() => {
    dispatch(__getDetailPost(num));
  }, [dispatch, isCommentLike.current]);

  // useEffect(() => {
  //   //받아온 state에서 현재 게시글 정보 찾기

  //   // let find = detailPost.find((item) => {
  //   //   return item.num === state.num;
  //   // });
  //   let find = detailPost;
  //   if (find === undefined) {
  //     find = state;
  //     //정보를 못찾았다면 useNavigate로 가져온 state로 설정
  //   }

  //   setCommentList(find.commentList);
  // }, [isSuccess]);

  useEffect(() => {
    if (isSuccess === true) {
      setIsCodiLike(detailPost.postLikeCheck);
      setCommentList(detailPost.commentList);
    }
  }, [isSuccess]);

  const onClickModify = () => {
    if (!window.confirm("게시글을 수정하시겠습니까?")) return;
    navigate("/write", { state });
  };

  const onClickDelete = () => {
    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;
    dispatch(__deleteyPosts(num));
    navigate("/main");
  };

  const onClickCommentPost = () => {
    const payload = {
      postId: num,
      content: commentContent,
    };
    dispatch(__postComment(payload));
    clearInput();
  };

  const onClickCommentModifyCheck = (e) => {
    if (!window.confirm("해당댓글을 수정하시겠습니끼?")) return;
    setInputs({
      ...inputs,
      updateCommentContent: e.target.offsetParent.childNodes[3].innerText,
    });
    //현재 댓글 수정 중임을 알리는 값
    isCommentupdate.current = true;
    //현재 수정 중인 댓글 번호를 알려주는 값
    // console.log(Number(e.target.offsetParent.childNodes[1].textContent));
    setWhatnumComment(
      Number(e.target.offsetParent.childNodes[1].textContent) - 1
    );
    e.target.offsetParent.childNodes[3].readOnly = false;
    e.target.offsetParent.childNodes[3].focus();
  };

  const onClickCommentModify = (commentId) => () => {
    const payload = {
      commentId: commentId,
      content: updateCommentContent,
      postId: num,
    };
    dispatch(__modifyComment(payload));
    setInputs({
      ...inputs,
      updateCommentContent: updateCommentContent,
    });
    isCommentupdate.current = false;
  };

  const onClickCommentDelete = (commentId) => () => {
    const payload = {
      commentId: commentId,
      postId: num,
    };
    dispatch(__deleteComment(payload));
  };

  const onClickCodiLike = () => {
    dispatch(__postLike(num));
    setIsCodiLike(!isCodiLike);
  };

  const onClickCommentLike = (commentId) => () => {
    isCommentLike.current = !isCommentLike.current;
    dispatch(__commentLike(commentId));
  };

  if (!isLoading) {
    // console.log(detailPost);
    // console.log(commentArr, "comment");
  }

  return (
    <>
      <Header />
      <div className="detail_inner">
        <p className="detail_title">코디 상세 페이지</p>
        <div className="codi_outter">
          <div className="codi_inform">
            <div className="codi_subform">
              <img className="codi_img" src={imageUrl}></img>
              <div className="codi_subform_subdata">
                <p className="codi_likecount">
                  <FavoriteIcon />
                  {detailPost.likeCount}
                </p>
                <p className="codi_date">
                  작성일:{createdAt[0]}년 {createdAt[1]}월 {createdAt[2]}일
                </p>
              </div>
            </div>

            <div className="codi_input">
              <label>제목 : </label>
              <input type="text" value={title} readOnly />
              <br></br>
              <label>가격 : </label>
              <input type="text" value={price} readOnly />
              <br></br>
              <div className="codi_content">
                <label> 내용</label>
                <br></br>
                <textarea value={content} readOnly></textarea>
              </div>
            </div>
          </div>
          <div className="codi_btn">
            <button onClick={onClickModify}>수정</button>
            <button onClick={onClickDelete}>삭제</button>
            {isCodiLike ? (
              <div className="Favorite_like_btn">
                <button className="coid_btn_like" onClick={onClickCodiLike}>
                  좋아요취소
                  <FavoriteIcon />
                </button>
              </div>
            ) : (
              <div className="Favorite_like_btn">
                <button className="coid_btn_like" onClick={onClickCodiLike}>
                  좋아요 <FavoriteBorder />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="comment">
          <div className="comment_box">
            <div>Comment</div>
            <textarea
              className="comment_text"
              name="commentContent"
              value={commentContent}
              onChange={onChangeInput}
              placeholder="내용을 입력해주세요"
            ></textarea>
            <button onClick={onClickCommentPost}>등록하기</button>
          </div>
        </div>
        <ul className="comment_list">
          {commentList &&
            commentList.map((item, index) => {
              return (
                <li className="comment_li" key={item.num}>
                  Comment {index + 1}
                  <p className="comment_user_inform">{item.nickname}</p>
                  {isCommentupdate.current && whatnumComent === index ? (
                    <input
                      type="text"
                      className="comment_user_text"
                      name="updateCommentContent"
                      value={updateCommentContent}
                      onChange={onChangeInput}
                    />
                  ) : (
                    <p className="comment_user_text"> {item.content}</p>
                  )}
                  <p className="comment_user_date">
                    {item.createAt[0]}.{item.createAt[1]}.{item.createAt[1]}
                  </p>
                  <button
                    className="comment_btn delete"
                    onClick={onClickCommentDelete(item.num)}
                  >
                    삭제하기
                  </button>
                  {isCommentupdate.current && whatnumComent === index ? (
                    <button
                      className="comment_btn modify"
                      onClick={onClickCommentModify(item.num)}
                    >
                      수정완료
                    </button>
                  ) : (
                    <button
                      className="comment_btn modify"
                      onClick={onClickCommentModifyCheck}
                    >
                      수정 하기
                    </button>
                  )}
                  {item.commentLikeCheck ? (
                    <div className="comment_favorite_like_btn">
                      <button
                        className="comment_like_btn"
                        onClick={onClickCommentLike(item.num)}
                      >
                        좋아요취소 <br></br>
                        <FavoriteIcon />
                      </button>
                    </div>
                  ) : (
                    <div className="comment_favorite_like_btn">
                      <button
                        className="comment_like_btn"
                        onClick={onClickCommentLike(item.num)}
                      >
                        좋아요 <FavoriteBorder />
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>

      <Footer />
    </>
  );
};
export default Detail;
