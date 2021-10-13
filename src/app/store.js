import {configureStore} from '@reduxjs/toolkit';
import {covidApi} from '../services/covidApi';
import { covidNewsApi } from '../services/covidNewsApi';

export default configureStore({
    reducer:{
        [covidApi.reducerPath]:covidApi.reducer,
        [covidNewsApi.reducerPath]:covidNewsApi.reducer,
    },
});