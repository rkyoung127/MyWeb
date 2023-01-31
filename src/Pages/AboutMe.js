import SubAbout from "./SubAbout";

const AboutMe = () => {
  return (
    <div id='aboutpage'>
      <div className='secondpage'>
        <div className="simpleInfo">
          <p>다양한 경험을 해보고 싶은 <span style={{ fontWeight: "bold" }} >최가영 입니다 :D !</span></p>
        </div>
        <div className="detailInfo">
          <p>이름: 최가영</p>
          <p>이메일: gyty7@naver.com</p>
          <p>거주지: 경기도 용인시 수지구</p>
        </div>
        <div>
          <button type="button" className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">자세히</button>
        </div>
        <div className="collapse" id="collapseExample">
          <SubAbout />
        </div>
      </div>
    </div>
  )
}

export default AboutMe;