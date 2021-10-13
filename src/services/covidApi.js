import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const covidApiHeaders = {
    'x-rapidapi-host': 'covid-19-v1.p.rapidapi.com',
    'x-rapidapi-key': 'UogVWI5hRimshntTCs93EGVJEZiup1jtXgGjsnaUsU08pcCQGR'
}

const baseUrl = "https://covid-19-v1.p.rapidapi.com";

const createRequest = (url)=>({url,headers:covidApiHeaders});

export const covidApi = createApi({
    reducerPath:'covidApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getHistory:builder.query({
            query:()=>createRequest("/v1/india"),
        }),
        getDistricts:builder.query({
            query:()=>createRequest("/v1/india/district"),
        }),
    }),
});

export const {useGetHistoryQuery,useGetDistrictsQuery} = covidApi; 