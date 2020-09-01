import React, {Component} from 'react';

class TOC extends Component{
    // shouldComponentUpdate : 원본과 바뀐 데이터를 확인하는 메소드
    // false를 리턴하면 render함수가 실행되지 않는다
    // immutable 라이브러리를 사용하면 객체는 절대 원본을 바꾸지 않고 복제해서 배열과 객체를 사용하게된다

    shouldComponentUpdate(newProps, newState){
        console.log('TOc check........>');
        console.log(this.props.data, newProps.data)
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render(){
        console.log('TOC render...')
        var list = [];
        var data = this.props.data;
        for (var val of data){
            list.push(
            <li key={val.id}>
                <a 
                    data-id = {val.id}  
                    // 이렇게 어트리뷰트를 data-이름 으로 표기하면 e의 target의 dataset 하위에 저장되므로 꺼내 사용하면 된다.
                    onClick = {function(__id, e){
                        e.preventDefault();
                        var id = e.target.dataset.id;
                        this.props.onChangePage(id);
                    }.bind(this, val.id)}   // 또는 bind 의 인자값으로 전달하면
                    // function() 에서 가장  처음 인자로 들어가게 된다. 
                    href={val.id + ".html"}
                >{val.title}
                </a>
            </li>)
        }
        
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        )
    }
}

export default TOC;

// props의 경우,
// 외부 컴포넌트로부터 값을 전달 받은 것이기 때문에 (input) 
// 내부에서 값을 변경하는 것이 불가능하다.값을 변경하고 싶을때는 event를 사용해서 변경함
// state를 통해서 내부적인 값을 변경하고
// UI가 바뀌어야하는 작업에서는 적절하게 섞어서 사용해야함
 