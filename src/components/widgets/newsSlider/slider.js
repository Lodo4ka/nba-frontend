import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplate from './sliderTemplate';

export default class NewsSlider extends Component {
  state = {
    news: [],
  };

  componentWillMount() {
    axios
      .get('http://localhost:3004/articles? start=0&_end=3')
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return <SliderTemplate data={this.state.news} type="featured" />;
  }
}
