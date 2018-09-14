/*
包含n个action的模块(本质是创建action的action creator)
1. 同步action
2. 异步action
 */
import {
    RECEIVE_HOME,
    RECEIVE_KNOWLEDGE,
    RECEIVE_CATEGORY
} from './action-types';
import {
    reqHome,
    reqKnowledge,
    reqCategory
} from '../api'

/*获取home的同步action*/
const receiveHome = (home) => ({type : RECEIVE_HOME,data : home})
/*获取knowledge的同步action*/
const receiveKnowledge = (knowledge) => ({type : RECEIVE_KNOWLEDGE,data : knowledge})
/*获取category的同步action*/
const receiveCategory = (category) => ({type : RECEIVE_CATEGORY,data : category})

/*获取home的异步action*/
export function getHome() {
    return async dispatch=>{
        const result =await reqHome();
        if(result.code===0){
            /*console.log(result,'---1')*/
            const home = result.data;
            dispatch(receiveHome(home))
        }
    }

}

/*获取knowledge的异步action*/
export function getKnowledge() {
    return async dispatch=>{
        const result =await reqKnowledge();
        if(result.code===0){
            const knowledge = result.data;
            dispatch(receiveKnowledge(knowledge))
        }
    }

}

/*获取category的异步action*/
export function getCategory() {
    return async dispatch=>{
        const result =await reqCategory();
        if(result.code===0){
            const category = result.data;
            dispatch(receiveCategory(category))
        }
    }

}