import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from "./components/TOC";
import Content from "./components/Content";

// import logo from './logo.svg';
// import './App.css';


// TOC 태그부분 만들기 (함수)
// import 해서 사용

// 콘텐츠 부분 만들기 (ES6 함수)

class App extends Component {

  // 생성자 : props와 state 값을 정의함, 초기화
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: {
        title: 'WEB',
        sub: 'World Wide Web. this is writing from state'
      },
      welcome : {
        title : 'Welcome' , content : 'Welcome to React World!'
      },
      content : [
        { id: 1, title: 'HTML', description: 'HTML is mark-up language..' },
        { id: 2, title: 'CSS', description:'CSS is stylesheet for web..'},
        { id: 3, title: 'JavaScript', description: 'JavaScript is script language..' }
      ]
    }
  }

  render(){
    // console 에 찍어보기
    console.log('App render...')

    var _title, _content ;
    if ( this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _content = this.state.welcome.content;
    }else if( this.state.mode === 'read'){
      _title = this.state.content[0].title;
      _content = this.state.content[0].description;
    }


    // props 적용하기
    // Component 태그에 어트리뷰트(props)를 적용하여 성능 개선 가능
    return (  // JSX ---- JS 문법은 모두 {} 안에 쓰도록 한다 
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub = {this.state.subject.sub}
          onChangePage = { function() {
            // alert('hihi');
            this.setState({
                mode: 'welcome'
              });
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.content}></TOC>
        <Content title={_title} content={_content}></Content>
      </div>
    )
  }
}

// 함수형 프로그래밍 코드
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
