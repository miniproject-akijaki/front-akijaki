import "./main.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postSlice";
import { useCustomNavigate } from "../core/hooks/useCustomNavigate";
import { useCarousel } from "../core/hooks/useCarousel";
import FavoriteIcon from "../components/material/FavortieIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import useSpinner from "../core/hooks/useSpinner";

const Main = () => {
  const dispatch = useDispatch();
  const [customNavigate] = useCustomNavigate();
  const { postList, isLoading, error, isSuccess } = useSelector(
    (state) => state.post
  );
  const [allPostLists, setAllPostLists] = useState(postList);

  const listRef = useRef();
  const sldiesDomLength = useRef(0);

  if (postList.length !== 0) {
    sldiesDomLength.current = postList.length;
  }
  const [limitScroll, postIndex, postIsLoding] = useSpinner();
  const [handleClickNavBtn] = useCarousel(postList, listRef, sldiesDomLength);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  useEffect(() => {
    setAllPostLists(postList.slice(0, postIndex.current));
  }, [limitScroll]);

  useEffect(() => {
    if (isSuccess === true) {
      setAllPostLists(postList.slice(0, 6));
    }
  }, [isSuccess]);

  if (isLoading) {
    return;
  }

  return (
    <>
      <Header />
      <div className="main_title">최고의 아기자기</div>
      <div className="slider-area">
        <div className="slider">
          <button
            type="button"
            onClick={() => handleClickNavBtn("left")}
            className="carousel__btn left-btn"
          >
            {`<`}
          </button>
          <button
            type="button"
            onClick={() => handleClickNavBtn("right")}
            className="carousel__btn right-btn"
          >
            {`>`}
          </button>
          <div className="slider-list" ref={listRef}>
            {postList.map((item) => {
              return (
                <div key={item.num} className="slider-item">
                  <div
                    className="slider-content"
                    onClick={() => customNavigate("/detail", item)}
                  >
                    <img src={item.imageUrl} />
                    <p className="slider_content_title">
                      제목:
                      {item.title.length > 10
                        ? item.title.slice(0, 10) + "..."
                        : item.title}
                    </p>
                    <p className="slider_content_text">
                      내용:
                      {item.content.length > 30
                        ? item.content.slice(0, 30) + "..."
                        : item.content}
                    </p>
                    <p className="slider_content_text">
                      작성자:{item.username} <br></br>작성일:
                      {item.createdAt[0]}년 {item.createdAt[1]}월{" "}
                      {item.createdAt[2]}일
                    </p>
                    <div className="slider_content_like">
                      <FavoriteIcon className="slider_content_like_favorite" />
                      {item.likeCount}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="main">
        <div className="codi_title">아기자기들</div>
        <div className="main_inner">
          {allPostLists.map((item) => {
            return (
              <div
                key={item.num}
                className="codi_list"
                onClick={() => customNavigate("/detail", item)}
              >
                <div className="codi_content">
                  <img src={item.imageUrl} />
                  <p className="codi_content_title"> {item.title}</p>
                  <p className="codi_content_text">
                    내용:
                    {item.content.length > 20
                      ? item.content.slice(0, 20) + "..."
                      : item.content}
                    <p className="codi_content_text">
                      작성자:{item.username}
                      <br></br>작성일:
                      {item.createdAt[0]}년 {item.createdAt[1]}월
                      {item.createdAt[2]}일
                    </p>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {postIsLoding.current ? (
          <Spinner className="spinner" />
        ) : (
          <Spinner className="spinner" style={{ display: "none" }} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Main;
