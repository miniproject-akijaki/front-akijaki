import { useEffect, useRef, useState } from "react";

const useSpinner = () => {
  const [limitScroll, setLimitScroll] = useState(900); //댓글3번째의 스크롤값?
  const [scrollY, setScrollY] = useState(0); //스크롤값 저장하기 위한 상태
  const postIndex = useRef(6); //댓글6개씩 보여주기위한 ref값
  const postIsLoding = useRef(false); //댓글3개를 불러올때 사용할 isloding값

  const handleFollow = () => {
    setScrollY(window.pageYOffset); //window 스크롤 값을 ScrollY에 저장
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); //이벤트함수실행
    let timeId = null;
    if (scrollY > limitScroll) {
      postIsLoding.current = true;
      timeId = setTimeout(() => {
        postIndex.current += 6;
        postIsLoding.current = false;
        setLimitScroll(limitScroll + 650);
      }, 500);
    } else {
      postIsLoding.current = false;
    }
    return () => {
      window.removeEventListener("scroll", handleFollow); //이벤트함수 삭제
      clearTimeout(timeId);
    };
  });
  return [limitScroll, postIndex, postIsLoding];
};

export default useSpinner;
