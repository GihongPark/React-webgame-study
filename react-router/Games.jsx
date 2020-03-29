import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Switch } from 'react-router-dom';
import GameMatcher from './GameMatcher';

// const Games = () => {
//   return (
//     <HashRouter>
//       <div>
//         <Link to="/number-baseball">숫자야구</Link>
//         &nbsp;
//         <Link to="/rock-scissors-paper">가위바위보</Link>
//         &nbsp;
//         <Link to="/lotto-generator">로또생성기</Link>
//       </div>
//       <div>
//         <Route path="/number-bassball" component={NumberBaseball} />
//         <Route path="/rock-scissors-paper" component={RSP} />
//         <Route path="/lotto-generator" component={Lotto} />
//       </div>
//     </HashRouter>
//   )
// }

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        {/* 첫번째로 일치하는것만 라우팅 */}
        <Switch>
          {/* exact : 주소가 정확히 path와 일치할 경우만 나옴 */}
          <Route exact path="/" render={(props) => <GameMatcher {...props} />} />
          {/* render={(props) => <GameMatcher {...props} />} : props 넘기기 */}
          <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Games;
