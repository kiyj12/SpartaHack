import UnivMain from '@/components/UnivMain';
import { useRouter } from 'next/router'

export default function Univ_Main () {
  const router = useRouter();
  var univ = router.query.univ;
  var year = router.query.year;

  return (
    <div style={{width:"100%", height:"100vh"}}>
          <div className='University_Toolbar'>
            | COLLEGESTATSFAST.COM | 
            </div>
            <div className='University_Toolbar'>
              ABOUT US | 
              </div>
            <div className='University_Toolbar'>
              COMPARE SCHOOLS | 
              </div>
            <div className='University_Toolbar'> 
              SEARCH SCHOOLS |
            </div>
      <div className='University_UpperPartZone'>
      <div className='University_SearchZone' style={{backgroundColor:"rgb(72, 97, 97)"}}>
      <form>
        <input list="univs" name="univ" />
        <datalist id="univs">
          <option value="MSU">Michigan State University</option>
          <option value="OSU">Ohio State University</option>
          <option value="PSU">Penn State University</option>
          <option value="UOM">University of Michigan</option>
          <option value="IU">Indiana University</option>
          <option value="UOW">University of Wisconsin</option>
          <option value="RU">Rutgers University</option>
        </datalist>

        <input list="years" name="year" />
        <datalist id="years">
          <option value="2021"/>
          <option value="2019"/>
          <option value="2017"/>
          <option value="2015"/>
          <option value="2013"/>
          <option value="2011"/>
          <option value="2009"/>
        </datalist>
        <button type='submit'>Search</button>
        </form>
        </div>
        <div className='University_UnivNameZone'>
          <h2 className='University_h2'>UNIVERSITY: {univ}</h2>
          <h2 classname='University_h2'>YEAR: {year}</h2>
        </div>
      </div>
      <div className='University_BottomPartZone'>
        <div className="University_Text">
            <UnivMain year={year} univ={univ}/>
        </div>
      </div>
    </div>
  )
}