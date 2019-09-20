import React, { Component } from "react";
import styled from "styled-components";
import "./board.scss";
import Boards  from '../../containers/Boards';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
      };
  }

  getProps = () => {
    if(this.props.minicard)  {
       this.state.selected
        ? this.setState({ selected: false })
        : this.setState({ selected: true });

        this.props.handleClick({
        image: this.props.image,
        color: this.props.color
      });
    }else{
      //got to the board :
      console.log('hello larbi')
      



    }

  
  };

  render() {
    const MYBOARD = styled.div`
      border-radius: 4%;
      cursor: pointer;
      padding: 12px 6px;
      height: 140px;
      background: ${this.props.color} url(${this.props.image});
      background-size: cover;
    `;
    const TITLE = styled.h4`
      font-weight: 400;
    `;

    const classname = `uk-card uk-card-default uk-card-body   ${(this.state.selected ? 'selectedBoard' : '')}`
    return (
      <MYBOARD
        className={classname}
        onClick={this.getProps}
      >
        <TITLE className="uk-card-title">{this.props.title}</TITLE>
      </MYBOARD>
    );
  }
}

export default Board;
