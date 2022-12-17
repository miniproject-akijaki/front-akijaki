import "./write.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Write = () => {
  return (
    <>
      <Header />
      <div className="write_title">코디 작성하기</div>
      <div className="write_outter">
        <div className="write_inner">
          <form className="write_inform">
            <img className="write_img"></img>
            <div className="write_input">
              {/* title 인풋 state만들기 */}
              <label>제목 : </label>
              <input type="text" />
              <br></br>
              <labe>가격 : </labe>
              {/* price 인풋 state만들기/*/}
              <input type="number" />
              <br></br>
              {/* file은 보류 */}
              <input type="file" />
              <br></br>
              <div className="write_content">
                <label>내용</label>
                <br></br>
                {/* textarea 부분도 content라는 이름으로 state만들기 */}
                <textarea></textarea>
              </div>
            </div>
            <div className="write_btn">
              {/* 이 등록 버튼을 만들깨 onclick dispatch요청 만들기 */}
              <button className="write_submit" type="submit">
                등록
              </button>
              <button className="write_cancle">취소</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Write;
