import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Countries = {
  __typename?: 'Countries';
  nameWithEmoji: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  nameWithEmoji: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type _Entity = Continent | Country | Language;

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type RegularCountryFragment = { __typename?: 'Country', code: string, name: string, emoji: string, nameWithEmoji: string, native: string, phone: string, capital?: string | null, currency?: string | null, continent: { __typename?: 'Continent', name: string }, languages: Array<{ __typename?: 'Language', name?: string | null }>, states: Array<{ __typename?: 'State', name: string }> };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, emoji: string, nameWithEmoji: string, native: string, phone: string, capital?: string | null, currency?: string | null, continent: { __typename?: 'Continent', name: string }, languages: Array<{ __typename?: 'Language', name?: string | null }>, states: Array<{ __typename?: 'State', name: string }> }> };

export type CountryQueryVariables = Exact<{
  code: Scalars['ID'];
}>;


export type CountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, name: string, emoji: string, nameWithEmoji: string, native: string, phone: string, capital?: string | null, currency?: string | null, continent: { __typename?: 'Continent', name: string }, languages: Array<{ __typename?: 'Language', name?: string | null }>, states: Array<{ __typename?: 'State', name: string }> } | null };

export type SortedCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type SortedCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, emoji: string }> };

export const RegularCountryFragmentDoc = gql`
    fragment RegularCountry on Country {
  code
  name
  emoji
  nameWithEmoji @client
  native
  phone
  continent {
    name
  }
  capital
  currency
  languages {
    name
  }
  states {
    name
  }
}
    `;
export const CountriesDocument = gql`
    query Countries {
  countries {
    ...RegularCountry
  }
}
    ${RegularCountryFragmentDoc}`;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>;
export const CountryDocument = gql`
    query Country($code: ID!) {
  country(code: $code) {
    ...RegularCountry
  }
}
    ${RegularCountryFragmentDoc}`;

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(baseOptions: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
      }
export function useCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountryQueryResult = Apollo.QueryResult<CountryQuery, CountryQueryVariables>;
export const SortedCountriesDocument = gql`
    query SortedCountries {
  countries {
    code
    name
    emoji
  }
}
    `;

/**
 * __useSortedCountriesQuery__
 *
 * To run a query within a React component, call `useSortedCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSortedCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSortedCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSortedCountriesQuery(baseOptions?: Apollo.QueryHookOptions<SortedCountriesQuery, SortedCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SortedCountriesQuery, SortedCountriesQueryVariables>(SortedCountriesDocument, options);
      }
export function useSortedCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SortedCountriesQuery, SortedCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SortedCountriesQuery, SortedCountriesQueryVariables>(SortedCountriesDocument, options);
        }
export type SortedCountriesQueryHookResult = ReturnType<typeof useSortedCountriesQuery>;
export type SortedCountriesLazyQueryHookResult = ReturnType<typeof useSortedCountriesLazyQuery>;
export type SortedCountriesQueryResult = Apollo.QueryResult<SortedCountriesQuery, SortedCountriesQueryVariables>;