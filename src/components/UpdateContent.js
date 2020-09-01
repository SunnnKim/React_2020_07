import React, { Component } from 'react';

class UpdateContent extends Component {
  // constructor로 props로 들어온 데이터를 state로 만들어 가공할 수 있는 상태로 만든다
    constructor(props){
        super(props);
        this.state = {
            id : this.props.selected_content.id,
            title : this.props.selected_content.title,
            desc : this.props.selected_content.description
        }
        // bind를 매번 하기 힘든 경우는 이렇게 constructor에 bind를 한번 시켜서 쭉 사용가능
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    // update 시 데이터를 form 태그안에 넣는 함수
    inputFormHandler(e){
        this.setState({
            [e.target.name] : e.target.value
            // [] 문법은 최신 JS 문법임(찾아볼것)
        });
    }

    render() {
        console.log("UpdateContent render...");

        return (
          <article>
            <h2>Update</h2>
            <form
              action="/update_process"
              method="post"
              onSubmit={function (e) {
                // submit버튼 누른 후의 이벤트 정의
                e.preventDefault();
                // alert('Submit!');
                this.props.updatePage(
                  this.state.id,
                  this.state.title,
                  this.state.desc
                );
              }.bind(this)}
            >
              {console.log(this.props.selected_content)}
              <p>
                <input type="hidden" name="id" value={this.state.id}></input>
                <input
                  type="text"
                  name="title"
                  //   placeholder="title.."
                  value={this.state.title}
                  onChange={   // 수정이 가능하도록 하려면 onChange
                      this.inputFormHandler}
                ></input>
              </p>
              <p>
                <textarea
                  name="desc"
                  placeholder="descripton.."
                  value={this.state.desc}
                  onChange={this.inputFormHandler}
                ></textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
          </article>
        );
    }
}

export default UpdateContent;