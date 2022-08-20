import './App.css';
import {Nav, Navbar, Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Genre from './jabda/genre.js'
import Main from './main.js'
import Genrecopy from './genrecopy2.js';
import Login from './Login.js';
import Join from './join.js';

import Action from './Genrepage/genreAction';
import Love from './Genrepage/genreLove';
import Gag from './Genrepage/genreGag';
import Fantasy from './Genrepage/genreFantasy';
import Sport from './Genrepage/genreSport';
import Thrill from './Genrepage/genreThrill';

import Detail from './detail.js';

function App() {

  return (
    <div className="App">
      <div className = "Nave_bar">
        <Navbar bg="" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#MYPAGE">MYPAGE</Nav.Link>
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/join">JOIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>

      <Routes>
        <Route path="/genre" element={ <Genre/>} />
      </Routes>

      {/* 메인 화면 이동 */}
      <Routes>
        <Route path="/" element={ <Main/>} />
      </Routes>

      {/* 로그인 화면 이동 */}
      <Routes>
        <Route path="/login" element={ <Login/>} />
      </Routes>

      {/* 회원가입 화면 이동 */}
      <Routes>
        <Route path="/join" element={ <Join/>} />
      </Routes>

      <Routes>
        <Route path="/genrecopy" element={ <Genrecopy/>} />
      </Routes>

      {/* 장르별 화면 */}
      <Routes>
        <Route path="/genre/action" element={ <Action/>} />
      </Routes>

      <Routes>
        <Route path="/genre/love" element={ <Love/>} />
      </Routes>

      <Routes>
        <Route path="/genre/gag" element={ <Gag/>} />
      </Routes>

      <Routes>
        <Route path="/genre/fantasy" element={ <Fantasy/>} />
      </Routes>

      <Routes>
        <Route path="/genre/sport" element={ <Sport/>} />
      </Routes>

      <Routes>
        <Route path="/genre/thrill" element={ <Thrill/>} />
      </Routes>

      {/* 웹툰 세부 정보 페이지 */}
      <Routes>
        <Route path="/detail/:id" element={ <Detail/>} />
      </Routes>

    </div>
  );
}

export default App;
