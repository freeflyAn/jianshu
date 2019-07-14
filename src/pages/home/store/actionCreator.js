
import axios from 'axios';
import { fromJS } from 'immutable';

import * as constants from './constants';
const getHomeData = data=>({
  type:constants.CHANGE_HOME_DATA,
  articleList:data.articleList,
  recommendList:data.recommendList
});
const addArticleList = (data,articlePage) =>({
  type:constants.ADD_ARTICLE_LIST,
  list:fromJS(data),
  articlePage
})
export const getHomeInfo = ()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then( res => {
      const action=getHomeData(res.data.data);
      dispatch(action);
    })
  } 
};
export const getMoreList=(articlePage)=>{
  return (dispatch)=>{
    axios.get('/api/list.json?page='+articlePage).then( res => {
      console.log( res.data );
      const action = addArticleList( res.data.data , articlePage+1);
      dispatch(action);
    })
  }
};
export const getChangeShowScrollAction=(showScroll)=>({
  type:constants.CHANGE_SHOW_SCROLL,
  showScroll
});