import { Country } from "./generated/graphql";

interface Props {
    country:Country
}

const CountryComponent = (props:Props) => {
    const { name, native, phone, continent, capital, currency,languages, states } = props.country;
    return (
        <>
            <ul>
                <li>Continent: {continent.name}</li>
                <li>Name: {name!} / {native}</li>
                {capital && <li>Capital: {capital}</li>}
                <li>Currency: {currency} </li>
                <li>Phone prefix: +{phone}</li>
                <li>Number of languages: {languages?.length}</li>
                {
                    languages?.length ? (
                        <li>
                            Languages:
                            <ul>
                                {languages?.map((l,i)=> <li key={l.name}>{l.name}</li>)}
                            </ul>
                        </li>
                    ) : ""
                }
                <li>Number of states: {states?.length}</li>
                {
                    states?.length ? (
                        <li>
                            States:
                            <ul>
                                {states?.map(s=><li key={s.name}>{s.name}</li>)}
                            </ul>
                        </li>
                    ) : ""
                }
            </ul>
        </>
    )
}

export default CountryComponent