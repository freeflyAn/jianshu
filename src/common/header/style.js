import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWapper=styled.div`
  height:56px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`;
export const Logo=styled.div`
  position:absolute;
  left:0;
  top:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`;
export const Nav=styled.div`
  width:65%;
  height:100%;
  margin:0 auto;
`;
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  &.left{
    float:left;
    color:#333;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a
  }
`;
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .slide-enter{
    transition:all .2s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit{
    transition:all .2s ease-out;
  }
  .slide-exit-active{
    width:160px;
  }
  &>i{
    position: absolute;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    right: 5px;
    top: 12px;
    text-align: center;
    &.focused{
      background:#333;
      color:#fff;
    }
  }
`;
export const SearchInfo=styled.div`
  position:absolute;
  width:220px;
  top:56px;
  background-color:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  padding:0 20px;
`;
export const SearchInfoTitle = styled.div`
  padding-top:20px;
  padding-bottom:15px;
  line-height:20px;
  color:#969696;
  font-size:14px;
`;
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  &:hover{
    color:#333;
  }
  .spin{
    font-size:12px;
    margin-right:1px;
    display:block;
    float:left;
    transition:all .2s ease-in;
    transform-origin:center center;
  }
`;
export const SearchInfoItem=styled.a`
  display:block;
  padding:0 5px;
  line-height:20px;
  border-radius:3px;
  border:1px solid #ddd;
  color:#787878;
  font-size:12px;
  float:left;
  margin-right:8px;
  margin-bottom:10px;
  cursor:pointer;
  &:active,&:hover{
    color:#333;
  }
`;
export const NavSearch=styled.input.attrs({
  'placeholder':'搜索'
})`
  width:160px;
  height:38px;
  font-size:14px;
  padding:0 32px 0 18px;
  background:#eee;
  border:1px solid #eee;
  border-radius:19px;
  margin:8px 0 0 18px;
  box-sizing:border-box;
  outline:none;
  color:#333;
  /*transition:all 0.2s ease-out;*/
  &::placeholder{
    color:#999
  }
  &.focused{
    width:240px;
  }
`;
export const Addition=styled.div`
  position:absolute;
  top:0;
  right:0;
`;
export const Button=styled.div`
  float:right;
  border:1px solid #ea6f5a;
  height:38px;
  line-height:38px;
  margin:8px 10px;
  padding:0 25px;
  border-radius:19px;
  &.writting{
    background:#ea6f5a;
    color:#fff;
  }
  &.reg{
    color:#ea6f5a;
  }
`;


