import React, { Component } from 'react';
import './BusinessList.css';
import '../Business/Business';
import Business from '../Business/Business';

export class BusinessList  extends Component{
  render(){
    return (<div class="BusinessList">
              {this.props.businesses.map(business =>{
                return <Business business={business}/>;
              })}
            </div>);
  }
}

export default BusinessList;