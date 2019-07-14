import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { actionCreators } from '../store';

class List extends PureComponent{
  render(){
    const { list , getMoreList , articlePage } = this.props;
    return (
      <div>
        {
          list && list.map( item => {
            return (
              <Link key={item.get('id')} to={"/detail/"+item.get('id')}>
                <ListItem>
                  <img className='pic' alt='' src={item.get('pic')}/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>getMoreList(articlePage)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState=(state)=>({
  list:state.getIn(['home','articleList']),
  articlePage:state.getIn(['home','articlePage'])
});
const mapDispatch=(dispatch)=>{
  return {
    getMoreList:(articlePage)=>{
      const action = actionCreators.getMoreList(articlePage);
      dispatch(action);
    }
  }
}
export default connect(mapState,mapDispatch)(List);