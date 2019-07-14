import React , { PureComponent } from 'react';

import { connect } from 'react-redux';
 
import {
  RecommendItem
} from '../style';

class Recommend extends PureComponent{
  render(){
    const { list } = this.props;
    return (
      <div>
        {
          list.map( item => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('pic')}></RecommendItem>
            )
          })
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  list : state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);