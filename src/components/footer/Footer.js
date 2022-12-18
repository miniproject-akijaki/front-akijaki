import "./footer.modules.css";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="inner">
        <li className="maker">
          <ul>
            <li>(주) AKIJAKI</li>
            <li>대표이사:중꺽마</li>
            <li>경거도 부천시 오정로 428,1층</li>
            <li>개인 정보 관리 책임자:홍길동</li>
          </ul>
        </li>
        <li className="contact">
          <ul className="contact_inner">
            <li>CONTACT</li>
            <li className="contact_img">
              <a
                href="https://github.com/miniproject-akijaki"
                className="github"
              >
                github
              </a>
              <a
                href="https://www.figma.com/file/v5ih0rbjFiZeuUOdMZqzSP/Untitled?t=wtViUIzONBBDoKZx-0"
                className="figma"
              >
                figma
              </a>
              <a
                href="https://wheat-ziconium-ae8.notion.site/b897d2309b6548aabfe4e00818409b1f"
                className="notion"
              >
                notion
              </a>
            </li>
            <li class="inquiry">
              <ul>
                <li className="inquiry__title">전화문의</li>
                <li className="inquiry__inform">070-2312-1124</li>
              </ul>
              <ul>
                <li className="inquiry__title">이메일 문의</li>
                <li className="inquiry__inform">abc123@naver.com</li>
              </ul>
            </li>
            <li className="working">
              MON - FRI 09:00 ~ 18:00 &nbsp; 주말,공휴일 휴무 &nbsp; BREAK TIME
              : 12:30 ~ 13:30
            </li>
          </ul>
        </li>
        <li className="processing">
          <ul>
            <li className="processing__title">개인정보 처리 방침</li>
            <li>
              <a href="javscript:void(0)" target="/">
                이용약관
              </a>
            </li>
            <li>
              <a href="javscript:void(0)" target="/">
                고객센터
              </a>
            </li>
            <li>
              <a href="javscript:void(0)" target="/">
                이벤트
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
