import React, { Component } from 'react';
// import { WithRouter } from 'react-router-dom';   // route 컴포넌트랑 연결되어있지않은상황에서 사용할때

import NumberBaseball from '../3.숫자야구/NumberBaseballClass';
import RSP from '../5.가위바위보/RSPClass';
import Lotto from '../6.로또/LottoClass';

// this.props.
// history : 페이지이동 정보가 담겨있다 ( 페이지이동 관련 메소드포함 )
// location : 주소에 대한 정보가 들어가있다
// match.params : 동적매치할때 paras 정보가 들어가있다
export default class GameMatcher extends Component {
    render() {
        let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        console.log(urlSearchParams.get('hello'));
        if (this.props.match.params.name === 'number-baseball') {
          return <NumberBaseball />
        } else if (this.props.match.params.name === 'rock-scissors-paper') {
          return <RSP />
        } else if (this.props.match.params.name === 'lotto-generator') {
          return <Lotto />
        }
        return (
          <div>
            일치하는 게임이 없습니다.
          </div>
        );
      }
}


// export default WithRouter(GameMatcher);