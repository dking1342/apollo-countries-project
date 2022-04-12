import { useEffect, useState } from 'react';
import './App.css';
import CountryComponent from './Country';
import { CountriesQuery, Country, useCountriesQuery } from './generated/graphql';



const App = () => {
  const [direction,setDirection]=useState<"DESC" | "ASC">("DESC");
  const [countryData,setCountryData]=useState<Country | undefined >(undefined);
  const [countryListSorted,setCountryListSorted]=useState<CountriesQuery | undefined>(undefined);
  // const [code, setCode] = useState("");
  // const [isReady,setIsReady] = useState(false);
  
  // graphql/apollo custom queries
  const { data: countryList, loading, error } = useCountriesQuery();
  // const { data: sortedList } = useSortedCountriesQuery();
  // const { data, loading:countryLoad } = useCountryQuery({
  //   variables:{code},
  //   // skip:!isReady, // used for the input to not fetch every time
  // });


  // first article methods ******
  // const handleCountryChange = (e:any) => {
  //   setIsReady(false);
  //   setCode(e.target.value);
  // }
  // const handleSubmit = () => {
  //   if(code.length === 2){
  //     setCode(code.toUpperCase());
  //     setIsReady(true);
  //   } else {
  //     alert("Please re-enter a country");
  //     setCode("");
  //   }
  // }

  // second article methods
  const handleSelectChange = (e:any) => {
    const selectedCountry = countryList?.countries.filter(country=> country.code === e.target.value)[0] as Country | undefined;
    setCountryData(selectedCountry);
  }


  useEffect(()=>{
    if(countryList?.countries.length){
      let duplicateArr = [...countryList.countries];

      if(direction === "DESC"){
        duplicateArr = duplicateArr.sort((a,b)=> a.name.localeCompare(b.name));
      } else if(direction === "ASC"){
        duplicateArr = duplicateArr.sort((a,b)=> b.name.localeCompare(a.name));
      }

      let sortedCountries = {
        ...countryList,
        countries:duplicateArr
      }
      setCountryListSorted(sortedCountries);      
    }

    // setIsReady(true);
  },[countryList,direction]);
  

  if(loading) return <div>loading...</div>
  if(error) return <div>Oops... something went wrong {error}</div>

  return(
    <section>
      {/* <article>
        <h1>{data?.country !== null && isReady ? `${data?.country?.nameWithEmoji}` : "Enter a country"}</h1>
        <input maxLength="2" type="text" value={code} onChange={(e:any)=>handleCountryChange(e)} placeholder="Example: US" />
        <button onClick={handleSubmit}>Submit</button>
        <p style={{color:"red",fontSize:"12px"}}>{!data?.country && code.length === 2 && isReady ? "Country is invalid" : ""}</p>
      </article> */}
      <article>
        <h1>Countries</h1>
        <button onClick={()=>direction === "DESC" ? setDirection("ASC") : setDirection("DESC")}>Sort {direction === "DESC" ? "⬇" : "⬆"}</button>
        { countryListSorted ? (
            <select name="countries" onChange={e=> handleSelectChange(e)}>
              <option hidden>Select a country</option>
              {
                countryListSorted.countries.map(country=>
                  <option key={country.code} value={country.code}>{country.name}</option>
                )
              }
            </select>
          ) : (
            <p>Country list unavailable</p>
          )
        }
        {
          countryData && (
            <>
              <h2>You selected: {countryData.nameWithEmoji}</h2>
              <CountryComponent 
                country={countryData}
              />            
            </>
          )
        }
      </article>
    </section>
  )  
}

export default App