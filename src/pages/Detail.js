import "./detail.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useCustomNavigate } from "../core/hooks/useCustomNavigate";
import { useDispatch } from "react-redux";
import { __deleteyPosts } from "../redux/modules/postSlice";

const Detail = () => {
  const { state } = useLocation();
  const { id, title, content, image, price } = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickModify = () => {
    if (!window.confirm("게시글을 수정하시겠습니까?")) return;
    navigate("/write", { state });
  };

  const onClickDelete = () => {
    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;
    dispatch(__deleteyPosts(id));
    navigate("/main");
  };
  return (
    <>
      <Header />
      <div className="detail_inner">
        <p className="detail_title">코디 상세 페이지</p>
        <div className="codi_outter">
          <div className="codi_inform">
            <img className="codi_img" src={image}></img>
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
            <button>좋아요</button>
          </div>
        </div>
        <div className="comment">
          <div className="comment_box">
            <div>Comment</div>
            <textarea className="comment_text"></textarea>
            <button>등록하기</button>
          </div>
        </div>
        <ul className="comment_list">
          <li className="comment_li">
            Comment
            <button className="comment_btn">삭제하기</button>
            <button className="comment_btn">수정하기</button>
            <button className="comment_btn">좋아요</button>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};
export default Detail;
