import {combineReducers} from "redux"
 

import UserAuth from './UserAuth.reducer';
import WebBasic from './WebBasic.reducer';
 
const Reducer =  combineReducers({UserAuth,WebBasic})

export default Reducer