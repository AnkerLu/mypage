import React, {Component} from 'react';
import SortableTree from 'react-sortable-tree';
import logo from './logo.svg';
import './App.css';

import treeData from './assets/data/site_data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = treeData;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">常用网站地址</h1>
        </header>
        <div className='tree-container'>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({treeData})}/>
        </div>
      </div>
    );
  }
}

export default App;
