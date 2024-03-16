import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import SideBar from './components/SideBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=20
  api="1fc5176edcaa4c54b8d21acacd8c810b"
  state ={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar/>
      <div className='container'>
      <div className='row'>
        <div className='col-md-2'>
          <SideBar/>
        </div>
        <div className='col-md-10'>
          <Routes>
              <Route exact path="/"  element={ <News api={this.api} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={'in'} category={'general'}/>}/>
              <Route exact path="/Business" element={ <News api={this.api} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country={'in'} category={'business'}/>}/>
              <Route exact path="/Entertainment"  element={ <News api={this.api} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'}/>}/>
              <Route exact path="General" element={ <News api={this.api} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country={'in'} category={'general'}/>}/>
              <Route exact path="Health"  element={ <News api={this.api} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={'in'} category={'health'}/>}/>
              <Route exact path="Science" element={ <News api={this.api} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={'in'} category={'science'}/>}/>
              <Route exact path="Sport" element={ <News api={this.api} setProgress={this.setProgress} key="sport" pageSize={this.pageSize} country={'in'} category={'sport'}/>}/>
              <Route exact path="Technology" element={ <News api={this.api} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={'in'} category={'technology'}/>}/>
          </Routes>
        </div>
      </div>
      </div>
      </Router>
       
      </>
    )
  }
}
