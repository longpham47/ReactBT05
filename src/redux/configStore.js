

import {combineReducers,createStore} from "redux";
import { QLSVreducer } from "./reducer/QLSVreducer";



const rootReducer = combineReducers({
    QLSVreducer,

})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());