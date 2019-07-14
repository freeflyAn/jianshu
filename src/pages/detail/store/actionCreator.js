import axios from 'axios';

import * as constants from './constants';
const changeDetailData=(title,content)=>({
  type:constants.CHANGE_DETAIL_DATA,
  title,
  content
})
export const getDetailDataAction=(id)=>{
  return (dispatch)=>{
    axios.get("/api/detail.json?id="+id).then((res)=>{
      dispatch( changeDetailData( res.data.data.title,res.data.data.content ) );
    })
  }
}