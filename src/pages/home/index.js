import React ,{ Component } from 'react';
import { connect } from 'react-redux';

import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import { actionCreators } from './store';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  ScrollTop,
} from './style';

class Home extends Component{
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillMount(){
    window.removeEventListener('scroll',this.props.changeShowScroll);
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeShowScroll);
  }
  toScrollTop(){
    window.scrollTo(0,0);
  }
  render(){
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4678/1a394b3d5db36759b404d224eba778d753b6d629.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          showScroll ? <ScrollTop onClick={this.toScrollTop}>回到顶部</ScrollTop> : null
        }
        
      </HomeWrapper>
    )
  }
};
const mapState = state=>({
  showScroll:state.getIn(['home','showScroll'])
});
const mapDispatch=dispatch=>{
  return {
    changeHomeData:()=>{
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
    changeShowScroll:()=>{
      if( document.documentElement.scrollTop > 100 ){
        dispatch( actionCreators.getChangeShowScrollAction(true) );
      }else{
        dispatch( actionCreators.getChangeShowScrollAction(false) );
      }
    }
  }
};
export default connect(mapState,mapDispatch)(Home);