import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import anime from 'animejs';

import styled from 'styled-components';
import { theme, mixins } from '../styles';

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${theme.colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #M {
      opacity: 0;
    }
  }
`;

class Loader extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
  };

  state = {
    isMounted: false,
  };

  componentDidMount() {
    this.setState({ isMounted: true }, () => this.animate());
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  animate() {
    const loader = anime.timeline({
      complete: () => this.props.finishLoading(),
    });
    loader
      .add({
        targets: '#logo path',
        delay: 500,
        duration: 2000,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #path',
        duration: 50,
        easing: 'easeInOutQuart',
        opacity: 0,
      })
      .add({
        targets: '#logo #M',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }

  render() {
    const { isMounted } = this.state;

    return (
      <LoaderContainer className="loader">
        <Helmet>
          <body className={isMounted ? 'hidden' : ''} />
        </Helmet>
        <LogoWrapper isMounted={isMounted}>
          <div className="small square el follow-path" />
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792">
            <title>Loader Logo</title>
            <g>
              <g id="M" transform="translate(11.000000, 5.000000)">
                <path
                  d="M26.5,559.3V334.2c0,0,1.5-123.8,141-132.2c139.6-8.4,274.7,0,274.7,0s136.2-0.9,140.6,132.7s0,224.5,0,224.5
               h-120V364.2c0,0,0.4-49.2-48-48c-44.2,1.1-46.9,48-46.9,48v195.1h-25.1V444.9h-24v114.4h-25.6V444.9h-23.4v114.4h-25.6V364.2
               c0,0,1.1-47.7-47.7-47.7s-46.6,46.6-46.6,46.6v196.2h-25.6V356h-23.4v203.3H74.6V356H52.3v203.3H26.5z"
                  fill="#64FFDA"
                />
              </g>
              <path
                id="path"
                stroke="#64FFDA"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M26.5,559.3V334.2c0,0,1.5-123.8,141-132.2c139.6-8.4,274.7,0,274.7,0s136.2-0.9,140.6,132.7s0,224.5,0,224.5
                h-120V364.2c0,0,0.4-49.2-48-48c-44.2,1.1-46.9,48-46.9,48v195.1h-25.1V444.9h-24v114.4h-25.6V444.9h-23.4v114.4h-25.6V364.2
                c0,0,1.1-47.7-47.7-47.7s-46.6,46.6-46.6,46.6v196.2h-25.6V356h-23.4v203.3H74.6V356H52.3v203.3H26.5z"
              />
            </g>
          </svg>
        </LogoWrapper>
      </LoaderContainer>
    );
  }
}

export default Loader;
