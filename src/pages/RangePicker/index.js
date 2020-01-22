/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom';
import moment, { Moment } from 'moment';
import { DatePicker} from 'antd'
const { RangePicker } = DatePicker
// eslint-disable-next-line no-unused-vars
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function getHeader() {
  return <h1>{formatName(user)}</h1>
}
class RangeComponent extends React.Component {
  state = {
    value: [],
    mode:['date','date'],
    isDisable:null
  }
  handlePanelChange=(value,mode)=>{
    this.props.onChange(value)
    this.setState({
      value: value
    })
  }

  handleChange=(value)=>{
    this.props.onChange(value)
    this.setState({
      value: value
    })
  }
  disabledDate=(current) =>{
    // Can not select days before today and today
    return current && current > moment().endOf('day');
  }
  componentDidMount(){
    console.log("componentDidMount")
    let start;
    let end
    let arr=[]
    if(this.props.dataType==='d'||this.props.dataType==='w'){
      start=moment().subtract('days', 6);
      end=moment();
      console.log("start,end",start,end);
    }else if(this.props.dataType==='m'){
      start=moment().subtract('days', 29);
      end=moment().startOf('month');
      console.log("start,end",start,end);
    }else if(this.props.dataType==='y'){
      start=moment(new Date()).add(-1, 'years');
      end=moment(new Date()).get('year');
      console.log("start,end",start,end);
    }
    arr[0]=start;
    arr[1]=end;
    this.setState({
      value:arr
    })
  }

  render() {
    const { state, props } = this
    return (
      <div className="App">
        {getHeader()}
        <RangePicker
          disabledDate={this.disabledDate}
          format={props.format}
          value={state.value}
          mode={props.mode}
          onChange={this.handleChange}
          onPanelChange={this.handlePanelChange}
        />
        {getHeader()}
      </div>
    )
  }
}
export default RangeComponent
