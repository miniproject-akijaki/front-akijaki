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
  const { postList, isLoading, error } = useSelector((state) => state.post);
  // console.log(postList, "postList");
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const listRef = useRef();
  const sldiesDomLength = useRef(0);

  if (postList.length !== 0) {
    sldiesDomLength.current = postList.length;
  }

  const [handleClickNavBtn] = useCarousel(postList, listRef, sldiesDomLength);

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
          {postList.map((item) => {
            return (
              <div
                key={item.num}
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
