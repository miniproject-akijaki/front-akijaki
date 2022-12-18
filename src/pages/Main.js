import "./main.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useState, useLayoutEffect, useRef } from "react";

const Main = () => {
  const slides = [
    "#33a",
    "#8c9",
    "#f3e074",
    "blue",
    "black",
    "red",
    "yellow",
    "green",
    "beige",
  ];
  const listRef = useRef();
  const btnRef = useRef();
  // const [currIndex, setCurrIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const sldiesDomLength = useRef(slides.length);

  useLayoutEffect(() => {
    const getCoordinate = () => {
      const listLeft = listRef.current.getBoundingClientRect().left;
      setTransX(listLeft);
    };
    getCoordinate();
  }, []);

  const handleClickNavBtn = (direction) => {
    let currentX = listRef.current.getBoundingClientRect().x;
    // let btnLeft = btnRef.current.getBoundingClientRect().left;
    // let listWidth = listRef.current.getBoundingClientRect().width;
    let listRef_NodeWidth =
      slides.length > 0
        ? listRef.current.childNodes[0].getBoundingClientRect().width
        : 0;
    //슬라이드에 넣은 데이터 배열의 길이가 0보다 크다면
    //ref속성으로 이어진 돔요소 listRef에 childNode에 제일 첫번째?
    //요소의 넓이값을 세팅
    // console.log(
    //   "노드의 넓이값",
    //   listRef.current.childNodes[0].getBoundingClientRect().width
    // );

    // 슬라이드 되는 박스 하나의 넓이값 * 3 (전체 넓이?를 제한하는 값?)
    const slideDistance = listRef_NodeWidth * 3;
    //버튼으로 눌렀을때 변화하는 현재넓이제한값?
    let calculate_distance = 0;
    // console.log("슬라이드 전체넓이 값?", slideDistance);
    if (direction === "left") {
      const limitTransX = sldiesDomLength.current * listRef_NodeWidth;
      calculate_distance = currentX + slideDistance;
      if (transX < calculate_distance) {
        calculate_distance = 0;
      }
      console.log('left버튼 차일드노드"', listRef.current);
    } else if (direction === "right") {
      calculate_distance = currentX - slideDistance;
      // console.log("현재calculate_distance", calculate_distance);
      const limitTransX = -(
        sldiesDomLength.current * listRef_NodeWidth +
        slideDistance
      );
      // console.log(limitTransX, "limitTransX");
      if (limitTransX >= calculate_distance) {
        calculate_distance = 0;
      }
    }
    listRef.current.style.transform = `translateX(${calculate_distance}px)`;
  };
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
            ref={btnRef}
          >
            {`>`}
          </button>
          <div className="slider-list" ref={listRef}>
            {slides.map((color, index) => {
              return (
                <div key={index} className="slider-item">
                  <div className="slider-content" style={{ background: color }}>
                    {index}
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
          {slides.map((color, index) => {
            return (
              <div key={index} className="codi_list">
                <div className="codi_content" style={{ background: color }}>
                  {index}
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
