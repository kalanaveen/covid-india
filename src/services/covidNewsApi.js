import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const covidNewsHeaders = {
    'x-rapidapi-host': 'covid-19-news.p.rapidapi.com',
    'x-rapidapi-key': ''
}

const baseUrl = "https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&country=in&media=true&sort_by=date";

const createRequest = (url)=>({url,headers:covidNewsHeaders});

export const covidNewsApi = createApi({
    reducerPath:'covidNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCovidNews:builder.query({
            query:()=>createRequest(baseUrl),
        }),
    }),
});

export const {useGetCovidNewsQuery} = covidNewsApi; 
