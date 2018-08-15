import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageHeader : 'Naming Contest'};
  }
  UNSAFE_componentWillMount(){

  }
  componentWillUnmount(){

  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          .....
        </div>
      </div>
    );
  }
}


export default App;