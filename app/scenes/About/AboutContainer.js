/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import About from './About';
import Loading from '../../components/Loading';
import {
  Text,
} from 'react-native';

export default class AboutContainer extends Component {
  constructor() {
    super();

    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

    static route = {
    navigationBar: {
      title: 'About',
    }
  }

  componentDidMount() {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';

    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ dataSource: result });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if (this.state.dataSource && this.state.isLoading) {
      this.setState({ isLoading: false, });
    }
  }

  render() {
    const { isLoading, dataSource } = this.state;
    return (
      isLoading ?
      <Loading /> :
      <About isLoading={isLoading} dataSource={dataSource}/>
    )
  }
  }



