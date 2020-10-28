/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import React , { Component} from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'


class SignedInLinks extends Component   {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
  return (
    <div>
      <ul className="right">
       
        <li><NavLink to='/files'>My Files</NavLink></li>
        <li><NavLink to='/upload'>Upload File</NavLink></li>
        <li><a onClick={this.props.signOut} href="/"><i class="material-icons">exit_to_app</i></a></li>
        <li><NavLink to='#!' className="btn btn-floating waves-light blue"> {this.props.profile.initials}</NavLink></li>
        <li>
              <ul id="slide-out" class="sidenav ">
              <li>
                 <div class="user-view">
                        <a href="#name"><span class="white-text name">{this.props.profile.firstName + ' '+ this.props.profile.lastName}</span></a>
                        <a href="#email"><span class="white-text email">{this.props.profile.email}</span></a>
                </div>
                </li>     
              </ul>
       </li>
      </ul>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)