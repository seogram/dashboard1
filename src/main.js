"use strict"
import React from 'react';
import Menu from './components/menu';
import {Footer} from './components/footer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart} from '../src/actions/cartActions';

 class Main extends React.Component{
   componentDidMount() {
     this.props.getCart();
   }
 render(){
 return(

<div>
<Menu currentItemQty = {this.props.qty}/>
    {this.props.children}
<Footer />
</div>


 );
 }
}
function mapStateToProps(state){
  return ({
    qty : state.cart.totalQty
  });
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getCart :  getCart
  },dispatch)

}
 export default connect(mapStateToProps,mapDispatchToProps)(Main);