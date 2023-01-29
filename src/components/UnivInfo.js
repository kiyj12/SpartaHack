export default function UnivInfo(props) {
  const univ = props.univ;

  if (univ != undefined) {
    var Data = require("../data/" + univ + "/" + univ + "_2021.json");
    const univ_name = Data.University_Name;
    const tuition = Data.Tuition;
    const acceptance_rate = Math.round(Data.Accepted_Number/Data.Applied_Number * 10000) / 100;
    const grad_rate = Math.round(Data.Graduation_graduated / Data.Graduation_in_Program * 100);

  return(
    <div className="UnivInfo_Container">
      <div>
        University Name : {univ_name}
      </div>
      <div>
        Tuition : ${tuition}
      </div>
      <div>
        Acceptance Rate : {acceptance_rate}%
      </div>
      <div>
        Graduation Rate : {grad_rate}%
      </div>
    </div>
  )
  }

 
}