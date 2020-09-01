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
                        // alert('Submit~');
                        this.props.addPage(
                          e.target.title.value,
                          e.target.desc.value
                        );
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