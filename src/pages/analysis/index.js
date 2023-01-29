import UnivInfo from "@/components/UnivInfo";
import ComparingUniv from "@/components/ComparingUniv";
import { useRouter } from 'next/router'
import Nav from "@/components/Nav";


export default function Analysis_Main() {
  const router = useRouter();
  const univ1 = router.query.univ1;
  const univ2 = router.query.univ2;
  const attr = router.query.attr;

  if (univ1 != undefined && univ2 != undefined && attr != undefined) {

  return (
    <div className="Analysis_Page_container">
      <Nav/>
      <div className="Analysis_Search_Zone">
        <form className="Analysis_Search_Form">
          <div className="Analysis_Search_Attribute">
            <input list="univs" name="univ1" className="Anlysis_SearchInput" placeholder="Select First University"/>
            <datalist id="univs">
              <option value="MSU">
              Michigan State University
              </option>
              <option value="OSU">Ohio State University</option>
              <option value="PSU">Penn State University</option>
              <option value="UOM" >University of Michigan</option>
              <option value="IU" >Indiana University</option>
              <option value="UOW" >University of Wisconsin</option>
              <option value="RU" >Rutgers University</option>
            </datalist>
          </div>
          <div className="Analysis_Search_Attribute">
            <input className="Anlysis_SearchInput" list="univs" name="univ2"  placeholder="Select Second University"/>
            <datalist id="univs">
              <option value="MSU">
              Michigan State University
              </option>
              
              <option value="OSU">Ohio State University</option>
              <option value="PSU">Penn State University</option>
              <option value="UOM" >University of Michigan</option>
              <option value="IU" >Indiana University</option>
              <option value="UOW" >University of Wisconsin</option>
              <option value="RU">Rutgers University</option>
            </datalist>
          </div>
          
          <div className="Analysis_Search_Attribute">
            <input className="Anlysis_SearchInput" list="attrs" name="attr"  placeholder="Select Attribute"/>
            <datalist id="attrs">
              <option value="Tuition"/>
              <option value="Acceptance Rate"/>
              <option value="Graduation Rate"/>
              <option value="Retention Rate" />
              <option value="Cost of Room and Board" />
            </datalist>
          </div>
          <button className="Analysis_SearchButton" type="submit">Search</button>
        </form>
      </div>
      <div className="Analysis_container">
      <div style={{width: "25%", margin: "0"}}> 
      <UnivInfo univ={univ1}/>
      </div>

      <div style={{width: "50%"}}>
        <ComparingUniv univ1={univ1} univ2={univ2} attr={attr}/>
      </div>

      <div style={{width: "25%"}}> 
      <UnivInfo univ={univ2}/>
      </div>
      </div>
      
    </div>
  )
  }
  

}