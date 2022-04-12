import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Country } from './generated/graphql';
import './index.css';

const client = new ApolloClient({
  uri:"https://countries.trevorblades.com/",
  cache: new InMemoryCache({
    typePolicies:{
      Query:{
        fields:{
          sortedCountries:{
            read:(_,{readField})=>{
              const order = sortOrder;
              let countries = [...readField("countries") as Country[] || []];
              return countries.sort((a,b)=>{
                const aName = readField("name",a)!;
                const bName = readField("name",b)!;

                if(order === "DESC"){
                  if(aName < bName) return 1;
                  if(bName < aName) return -1;
                  return 0;
                } else {
                  if(aName < bName) return -1;
                  if(bName < aName) return 1;
                  return 0;
                }
              })

            }
          },
          country:{ // related to other queries to tie them together
            read:(existing,{toReference,args}) => { // fills in any that have existing ref in cache
              const countryRef = toReference({__typename: "Country",code:args?.code})
              return existing ?? countryRef;
            }
          }
        }
      },
      Country:{
        keyFields:['code'],
        fields:{
          nameWithEmoji:{
            read:(_,{readField})=>{ // create new custom field
              const name = readField("name");
              const emoji = readField("emoji");
              return `${name} ${emoji}`;
            }
          }          
        }
      }
    }
  })
});

// variable is not working properly
// export const direction = client.cache.makeVar();
// export const sortOrder = makeVar("DESC");
export const sortOrder:"DESC" | "ASC" = "ASC";

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
