import React, {Component} from 'react';

class TOC extends Component{
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
                    // function() 에서 가장 처음 인자로 들어가게 된다. 
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