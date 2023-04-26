import React from 'react';

import RequestHome from '../../custom-components/RequestHome/index.js';
import RequestForm from '../../custom-components/RequestForm/index.js';

class Service extends React.Component {
  state = {
    home: true
  }

  render() {
    return (
      this.state.home
        ? <RequestHome action={() => this.setState({ home: false })} />
        : <RequestForm action={() => this.setState({ home: true })} lang={this.props.lang} />
    );
  }
}

export default Service;
