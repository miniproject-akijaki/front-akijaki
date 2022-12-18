import "./detail.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Detail = () => {
  return (
    <>
      <Header />
      <div className="detail_inner">
        <p className="detail_title">코디 상세 페이지</p>
        <div className="codi_outter">
          <div className="codi_inform">
            <img className="codi_img"></img>
            <div className="codi_input">
              <label>제목 : </label>
              <input type="text" readOnly />
              <br></br>
              <label>가격 : </label>
              <input type="text" readOnly />
              <br></br>
              <div className="codi_content">
                <label> 내용</label>
                <br></br>
                <textarea readOnly></textarea>
              </div>
            </div>
          </div>
          <div className="codi_btn">
            <button>수정</button>
            <button>삭제</button>
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
