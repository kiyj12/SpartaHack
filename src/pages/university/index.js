import UnivMain from '@/components/UnivMain';
import { useRouter } from 'next/router'
import Nav from '@/components/Nav';

export default function Univ_Main () {
  const router = useRouter();
  var univ = router.query.univ;
  var year = router.query.year;

  return (
    <div style={{width:"100%", height:"100vh", backgroundColor:"rgb(72, 97, 97)"}}>
      <Nav/>
      <div className='University_UpperPartZone'>
      <div className='University_SearchZone'>
      <form className='University_SearchForm'>
        <input className='University_Search_Input' list="univs" name="univ" placeholder=' Select University Name' required/>
        <datalist id="univs">
          <option value="MSU">Michigan State University</option>
          <option value="OSU">Ohio State University</option>
          <option value="PSU">Penn State University</option>
          <option value="UOM">University of Michigan</option>
          <option value="IU">Indiana University</option>
          <option value="UOW">University of Wisconsin</option>
          <option value="RU">Rutgers University</option>
        </datalist>

        <input className='University_Search_Input' list="years" name="year" placeholder=' Select Year' required/>
        <datalist id="years">
          <option value="2021"/>
          <option value="2019"/>
          <option value="2017"/>
          <option value="2015"/>
          <option value="2013"/>
          <option value="2011"/>
          <option value="2009"/>
        </datalist>
        <button className="University_SearchButton" type='submit'>Search</button>
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