import "../Styles/Skill.css"

const Skills = () => {
  return (
    <div id="skillspage">
      <div className="thirdpage">
        <div className="text">
          <p>Skills</p>
          <p>프로젝트 사용 경험이 있는 기술입니다.</p>
        </div>
        <div className="stackimg">
          <div>
            <img src={process.env.PUBLIC_URL + "/react.png"} alt="react" />
            {/* <p>React</p> */}
            <img src={process.env.PUBLIC_URL + "/bootstrap.png"} alt="bootstrap" />
            <img src={process.env.PUBLIC_URL + "/javascript.png"} alt="javascript" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/Node.js_logo.svg.png"} alt="nodejs" />
            <img src={process.env.PUBLIC_URL + "/mongodb.png"} alt="mongodb" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/gitlab.png"} alt="gitlab" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;