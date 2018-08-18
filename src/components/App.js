import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageHeader : 'Naming Contest',
      contests : []
    };
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
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}


export default App;