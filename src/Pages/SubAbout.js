const SubAbout = () => {
  const info = ["천천히, 꾸준하게 걸어가는 것을 지향합니다.", "항상 성장하려고 노력하며 발전하는 것을 지향합니다.", "끊임없이 질문하고 호기심을 갖고 고민합니다.", "사람들에게 도움을 주는 것을 좋아합니다.", "효율적으로 행동하는 것을 좋아합니다."]
  // const education = [
  //   {
  //     school: "고려대학교 세종캠퍼스",
  //     major: "응용수리과학부 데이터계산과학전공",
  //     minor: "컴퓨터융합소프트웨어학과",
  //     date: "2018.03~2023.02"
  //   }]


  return (
    <div className="card">
      <div className="card-body">
        <ul>
          {
            info.map((item) => {
              <li>{item}</li>
              console.log("item", item)
            }
            )
          }
        </ul>
      </div>

    </div>

  )
}

export default SubAbout;