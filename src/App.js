import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";

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
      mode: 'create',
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
      ],
      selected_content_id: 2  // 기본으로 선택된아이디
    }
  }

  render(){
    // console 에 찍어보기
    console.log('App render...');

    var _title, _content, _article = null;
    // Welcome 모드일 때
    if ( this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _content = this.state.welcome.content;
      _article = <ReadContent title={_title} content={_content}></ReadContent>;
    }
    // Read 모드일 때
    else if( this.state.mode === 'read'){
      var data = this.state.content;
      for( var i in data ){
        if(data[i].id === this.state.selected_content_id){
          _title = this.state.content[i].title;
          _content = this.state.content[i].description;
          break;
        }
      }
      _article = <ReadContent title={_title} content={_content}></ReadContent>;
    }
    // Create 모드일 때 
    else if( this.state.mode === 'create'){
      _article = <CreateContent addPage={function(_title, _desc){
        var arr = this.state.content;
        var data = {
          id : arr.length + 1,
          title : _title,
          description : _desc
        }
        arr.push(data)
        console.log(arr);

        this.setState({
          content : arr
        })
      }.bind(this)}></CreateContent>;
    }


    // props 적용하기
    // Component 태그에 어트리뷰트(props)를 적용하여 성능 개선 가능
    return (
      // JSX ---- JS 문법은 모두 {} 안에 쓰도록 한다
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            // arrow function을 사용하면 this가 자동으로 상위스코프로 바인딩 되기 때문에 bind() 함수를 사용하지 않아도 된다.
            this.setState({
              mode: "welcome",
            });
          }}
        ></Subject>
        {/* subject */}
        <TOC
          onChangePage={(data) => {
            this.setState({
              mode: "read",
              selected_content_id: Number(data),
            });
          }}
          data={this.state.content}
        ></TOC>
        <Control onChangeMode={ function(_mode){
           this.setState({
             mode: _mode,
           });
        }.bind(this)}></Control> {/* CRUD - event handler 실행되도록 bind*/}
        {_article}
        {/* article : mode 에 따라 달라지는 component */}
      </div>
    );
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
