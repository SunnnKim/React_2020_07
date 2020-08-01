import React, {Component} from 'react';

// 새로운 컴포넌트 생성해보기 
// 컴포넌트는 반드시 하나의 최상위 태그만 사용해야한다.
// 반드시 필요한 랜더링 함수 (ES6 문법에서는 없음)
class Subject extends Component {

    render() {
        // 아래 return 부분은 자바스크립트와 아주 유사하지만 
        // 자바스크립트와는 다른 리액트 언어임 (JSX)
        // 태그를 쿼츠 사용하지 않고 입력가능하지만 자바스크립트에서는 작동하지 않고 오류가 남 
        console.log('Subject render...')

        return (
            <header>
                <h1>
                    <a href="/" onClick={ 
                        e => {
                            e.preventDefault();
                            this.props.onChangePage();
                            
                        }}>
                    {this.props.title}
                    </a>
                </h1>
                {this.props.sub}
            </header>
        )
    }
}

export default Subject;