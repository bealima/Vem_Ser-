import React from 'react'
import { useEffect } from 'react'
import { connect } from "react-redux";
// import { handleLoading } from '../store/actions/AuthActions';

function Home({auth, dispatch}) {
  useEffect(()=>{
    // handleLoading(false, dispatch)
  },[])

  return (
    <div className='containerContent'>
      <div>
        <h1>Home</h1>
      </div>
    </div>
  )
}

const mapStateToProps = state =>({
  auth: state.authReducer.auth
})
export default connect(mapStateToProps) (Home);
