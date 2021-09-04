import { combineReducers } from 'redux'
import StatisticsReducer from './StatisticsReducer'

const reducer = combineReducers({ statistics: StatisticsReducer })

export default reducer
