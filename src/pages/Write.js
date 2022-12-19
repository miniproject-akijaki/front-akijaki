import "./write.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useInputChange } from "../core/hooks/useInputChange";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postPosts } from "../redux/modules/postSlice";
import { useCustomNavigate } from "../core/hooks/useCustomNavigate";

const Write = () => {
  const dispatch = useDispatch();
  const [customNavigate] = useCustomNavigate();
  const [inputs, onChangeInput] = useInputChange();
  const [image, setImage] = useState();
  const { title, content, price } = inputs;

  const onChnageImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    let reader = new FileReader(); //비동기 처리
    reader.readAsDataURL(file);
    reader.onload = () => {
      //백엔드서버랑 어떻게 통신을할지 애기해보기
      setImage(reader.result);
    };
  };

  const onSubmitPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: 1,
      title: title,
      content: content,
      image: image,
      price: price,
    };
    console.log(newPost);
    dispatch(__postPosts(newPost));
  };

  return (
    <>
      <Header />
      <div className="write_title">코디 작성하기</div>
      <div className="write_outter">
        <div className="write_inner">
          <form className="write_inform" onSubmit={onSubmitPost}>
            <img className="write_img"></img>
            <div className="write_input">
              <label>제목 : </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={onChangeInput}
                placeholder="제목을 입력해주세요"
                required
              />
              <br></br>
              <label>가격 : </label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={onChangeInput}
                placeholder="가격을 입력해주세요(숫자만)"
                required
              />
              <br></br>
              <label className="write_file">이미지 파일:</label>
              <input type="file" name="image" onChange={onChnageImage} />
              <br></br>
              <div className="write_content">
                <label>내용</label>
                <br></br>
                <textarea
                  name="content"
                  value={content}
                  onChange={onChangeInput}
                  placeholder="내용을 입력해주세요"
                  required
                ></textarea>
              </div>
            </div>
            <div className="write_btn">
              <button className="write_submit" type="submit">
                등록
              </button>
              <button
                type="button"
                className="write_cancle"
                onClick={() => {
                  customNavigate("/main");
                }}
              >
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
