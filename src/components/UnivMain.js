export default function UnivMain (props) {
  console.log(props)
  const univ = props.univ;
  const year = props.year;
  if (year != undefined && univ != undefined) {
    var Data = require("../data/" + univ + "/" + univ + "_" + year + ".json");
    const univ_name = Data.University_Name;
    const tuition = Data.Tuition;
    const acceptance_rate = Math.round(Data.Accepted_Number/Data.Applied_Number * 10000) / 100;
    const grad_rate = Math.round(Data.Graduation_graduated / Data.Graduation_in_Program * 100);


  return(
    <div className="UnivMain_container">
      <ul>
      <li>
        <div className="UnivMain_line">
        University Name : {univ_name}
        </div>
      </li>
      <li>
      <div className="UnivMain_line">
        Tuition : ${tuition}
      </div>
      </li>
      <li>
      <div className="UnivMain_line">
        Acceptance Rate : {acceptance_rate}%
      </div>
      </li>
      <li>
      <div className="UnivMain_line">
        Graduation Rate : {grad_rate}%
      </div>
      </li>
      </ul>
    </div>
  )
  }

  

}