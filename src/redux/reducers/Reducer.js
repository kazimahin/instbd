import {combineReducers} from "redux"
 

import UserAuth from './UserAuth.reducer';
import WebBasic from './WebBasic.reducer';
import SetSession from './SetSession.reducer';
 
const Reducer =  combineReducers({UserAuth,WebBasic,SetSession})

export default Reducer