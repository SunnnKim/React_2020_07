import React, {Component} from 'react';

class Control extends Component {
    // control파트 (CRUD) js 파일로 분리
    render() {
        console.log("Control render...");

        return (
          <ul>
            <li>
              <a
                href="/create"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("create");
                }.bind(this)}
              >
                create
              </a>
            </li>
            <li>
              <a
                href="/update"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("update");
                }.bind(this)}
              >
                update
              </a>
            </li>
            <li>
              <input
                type="button"
                value="delete"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("delete");
                }.bind(this)}
              ></input>
            </li>
          </ul>
        );
    }
}

export default Control;