import React, { Component } from 'react';

class CreateContent extends Component {

    render() {
        console.log("CreateContent render...");

        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={ function(e){ // submit버튼 누른 후의 이벤트 정의
                        e.preventDefault();
                        alert('Submit~');
                        var _title = document.querySelector("input[name=title]").value;
                        var _desc = document.querySelector("textarea[name=desc]").value;
                        this.props.addPage(_title, _desc);
                        document.querySelector("input[name=title]").value = ""
                        document.querySelector("textarea[name=desc]").value = ""   
                    }.bind(this) }
                >
                    <p><input type="text" name="title" placeholder="title.."></input></p>
                    <p>
                        <textarea name="desc" placeholder="descripton.."></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;