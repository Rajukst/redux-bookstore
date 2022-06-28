import { createStore , combineReducers} from "redux";
import bookReducer from "../Reducer/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer= combineReducers({

books: bookReducer,
    
})

const store = createStore(rootReducer, composeWithDevTools())

export default store;