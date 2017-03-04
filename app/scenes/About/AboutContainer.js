import React, { Component } from 'react';
import { connect } from 'react-redux';

import About from './About';
import Loading from '../../components/Loading';

import { fetchConducts } from '../../redux/modules/conductsActions';

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchConducts());
  }

  render() {
    const { isLoading, conducts } = this.props;
    return (
      isLoading ?
        <Loading /> :
        <About isLoading={isLoading} conducts={conducts} />
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    conducts: state.conducts,
  }
}

export default connect(mapStateToProps)(AboutContainer);

