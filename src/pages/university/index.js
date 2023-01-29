import UnivMain from '@/components/UnivMain';
import { useRouter } from 'next/router'

export default function Univ_Main () {
  const router = useRouter();
  var univ = router.query.univ;
  var year = router.query.year;

  return (
    <>
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
      <UnivMain year={year} univ={univ}/>
    </>

  )
}