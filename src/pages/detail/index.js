import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  DetailWrapper,
  Header,
  Content
} from './style';
import { actionCreators } from './store';

class Detail extends PureComponent{
  componentDidMount(){
    this.props.getDetailData( this.props.match.params.id );
  }
  render(){
    const { title , content } = this.props;
    console.log( this.props.match.params.id )
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}} />
      </DetailWrapper>
    )
  }
}
const mapState=state=>({
  'title':state.getIn(['detail','title']),
  'content':state.getIn(['detail','content'])
});
const mapDispatch=dispatch => {
  return {
    getDetailData : (id)=>{
      dispatch( actionCreators.getDetailDataAction(id) );
    }
  }
}
export default connect(mapState,mapDispatch)(Detail);