import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

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
    this.max_content_id = 3;  // Ui와 관련없는 부분은 state 밖으로 뺴기
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

  //getReadContent() : 업데이트 시 상태값을 불러옴
  getReadContent(){
    for(var data of this.state.content){
      if(data.id === this.state.selected_content_id){
        return data;
      }
    }

  }
  // getContent 함수 : artical 부분의 코드를 옮겨 적는다
  getContent(){
    var _title,
      _content,
      _article = null;
    // Welcome 모드일 때
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _content = this.state.welcome.content;
      _article = <ReadContent title={_title} content={_content}></ReadContent>;
    }
    
    // Read 모드일 때
    else if (this.state.mode === "read") {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} content={_content.description}></ReadContent>;
    }

    // Create 모드일 때
    else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          addPage={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            console.log(this.max_content_id);
            var data = {
              id: this.max_content_id,
              title: _title,
              description: _desc,
            };
            var _contents = this.state.content.concat(data);
            // concat은 원본 배열에 데이터를 추가하는 것이 아니고 새로운 배열에 복제해서 보여준다
            // push는 원본 배열에 직접 데이터를 추가하는 방식으로 원본 데이터가 훼손될 수 있다.
            // concat을 사용하면 변화가 있을 때만 rendering이 진행되도록 만들 수 있고
            // 성능개선시 조금 더 편할 수 있음

            this.setState({
              content: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    }

    // update 모드일 때
    else if (this.state.mode === "update") {
      // 현재 선택된 content값을 가져온다
      var _contents = this.getReadContent();
      // console.log(_contents);
      _article = (
        <UpdateContent
          selected_content={_contents}
          updatePage ={function (_id, _title, _desc) {
            // this.state.content를 복사하기 : Array.from(배열)
            var _content = Array.from(this.state.content);
            for(var i in _content){
              if( _content[i].id === _id){
                _content[i] = {
                  id : _id,
                  title : _title,
                  description : _desc
                }
                break;
              }
            }
            this.setState({
              content : _content,
              mode: 'read',
            })
          }.bind(this)}
        ></UpdateContent>
      );
       
    }
    return _article;
  }

  // rendering 함수
  render(){
    // console 에 찍어보기
    console.log('App render...');

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
        {this.getContent()}
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
