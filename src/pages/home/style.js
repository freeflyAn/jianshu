import styled from 'styled-components';

export const HomeWrapper=styled.div`
  width:960px;
  height:300px;
  margin:0 auto;
`;
export const HomeLeft=styled.div`
  float:left;
  width:625px;
  padding-top:30px;
  padding-left:15px;
  .banner-img{
    width:625px;
    height:270px;
    margin-bottom:30px;
  }
`;
export const HomeRight=styled.div`
  float:right;
  width:280px;
  margin-left:40px;
  padding-top:30px;
`;



export const ListItem = styled.div`
  padding:15px 2px 20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  .pic{
    float:right;
    width:150px;
    height:100px;
    border-radius:4px;
    border:1px solid #f0f0f0;
  }
`;

export const ListInfo = styled.div`
  padding-right:165px;
  .title{
    font-size:18px;
    line-height:27px;
    color:#333;
    font-weight:bold;
  }
  .desc{
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`;
export const LoadMore = styled.div`
  width:100%;
  heigh:40px;
  line-height:40px;
  margin-top:30px;
  margin-bottom:60px;
  text-align:center;
  color:#fff;
  background-color:#a5a5a5;
  border-radius:20px;
  cursor:pointer;
`;

export const RecommendItem = styled.div`
  width:100%;
  height:50px;
  margin-bottom:6px;
  border-radius:4px;  
  background-image:url(${(props) => props.imgUrl});
  background-size:contain;
`;

export const ScrollTop=styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  font-size:13px;
  border:1px solid #999;
  padding:10px 16px;
  cursor:pointer;
`;
