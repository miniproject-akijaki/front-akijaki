import "./main.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postSlice";
import { useCustomNavigate } from "../core/hooks/useCustomNavigate";
import { useCarousel } from "../core/hooks/useCarousel";

const Main = () => {
  const dispatch = useDispatch();
  const [customNavigate] = useCustomNavigate();
  const { post, isLoading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const listRef = useRef();
  const sldiesDomLength = useRef(0);

  if (post.length !== 0) {
    sldiesDomLength.current = post.length;
  }

  const [handleClickNavBtn] = useCarousel(post, listRef, sldiesDomLength);

  // extrareducer가 아직 처리중일때
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
            {post.map((item, index) => {
              return (
                <div key={index} className="slider-item">
                  <div
                    className="slider-content"
                    onClick={() => customNavigate("/detail", item)}
                  >
                    <img src={item.image} />
                    <p className="slider_content_title"> {item.title}</p>
                    <p className="slider_content_text">
                      {item.content.length > 50
                        ? item.content.slice(0, 50) + "..."
                        : item.content}
                    </p>
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
          {post.map((item, index) => {
            return (
              <div
                key={index}
                className="codi_list"
                onClick={() => customNavigate("/detail", item)}
              >
                <div className="codi_content">
                  <img src={item.image} />
                  <p className="codi_content_title"> {item.title}</p>
                  <p className="codi_content_text">
                    {item.content.length > 50
                      ? item.content.slice(0, 50) + "..."
                      : item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
