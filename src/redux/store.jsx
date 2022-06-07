import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'
// home 得 reducer仓库
import { homeReducer } from './homeReducer/reducer'
// default 得 reducer仓库
import { defaultReducer } from './defaultReducer/reducer'
// 可以在控制台看到redux得实时变化
import logger from 'redux-logger'
// 异步得
import thunk from 'redux-thunk'
// 合并几个reducer
const concat = combineReducers({ homeReducer, defaultReducer })
const store = createStore(concat, applyMiddleware(thunk, logger))
export default store