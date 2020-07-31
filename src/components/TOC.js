import React, {Component} from 'react';

class TOC extends Component{
    render(){
        console.log('TOC render...')

        var list = [];
        var data = this.props.data;
        for (var val of data){
            list.push(<li key={val.id}><a href={val.id + ".html"}>{val.title}</a></li>)
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