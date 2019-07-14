import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import {actionCreators} from './store';
import {
  HeaderWapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from './style';


class Header extends PureComponent{
  getListArea=()=>{
    const { focused, mouseIn , list , page , totalPage , handleMouseEnter , handleMouseLeave , handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for( let i = (page-1)*10 ; i<page*10 ; i++){
      pageList.push( <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem> );
    }
    if(focused||mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
              <i className='iconfont spin' ref={(icon)=>(this.spinIcon=icon)}>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            { pageList }
          </div>
        </SearchInfo>
      )
    }else{
      return null;
    }
  };
  render(){
    const { focused , list , handleInputFocus , handleInputBlur} = this.props;
    return (
      <HeaderWapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={focused} 
              classNames="slide"
              timeout={200}>
              <NavSearch 
                className={ focused ? "focused" : ""} 
                onFocus={()=>handleInputFocus(list)} 
                onBlur={handleInputBlur}/>
            </CSSTransition>
            <i className={ focused ? "focused iconfont":"iconfont"} >&#xe69d;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe61b;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWapper>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    //focused : state.get('header').get("focused")
    focused : state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn'])
  }
};
const mapDispathcToProps = (dispatch)=>{
  return {
    handleInputFocus:(list)=>{
      list.size === 0 && dispatch( actionCreators.getList() )
      dispatch( actionCreators.searchFocus() );
    },
    handleInputBlur:()=>{
      dispatch( actionCreators.searchBlur() );
    },
    handleMouseEnter:()=>{
      dispatch( actionCreators.mouseEnter() );
    },
    handleMouseLeave:()=>{
      dispatch( actionCreators.mouseLeave() );
    },
    handleChangePage:(page,totalPage,icon)=>{
      let originAngle=icon.style.transform.replace(/[^0-9]/ig,'');
      if( originAngle ){
        originAngle=parseInt(originAngle);
      }else{
        originAngle=0;
      }
      icon.style.transform="rotate("+(originAngle+360)+"deg)";
      dispatch( actionCreators.changePage( page<totalPage ? page+1 : 1 ) )
    }
  }
};
export default connect(mapStateToProps,mapDispathcToProps)(Header);