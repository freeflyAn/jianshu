import { fromJS } from 'immutable';

import * as constants from './constants';

const defaultState = fromJS({
  list:[1,2],
  articleList:[],
  recommendList:[],
  articlePage:1,
  showScroll:false
});

export default ( state = defaultState , action ) => {
  switch( action.type ){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      });
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage':action.articlePage
      });
    case constants.CHANGE_SHOW_SCROLL:
      return state.set('showScroll',action.showScroll);
    default:
      return state;
  }
}