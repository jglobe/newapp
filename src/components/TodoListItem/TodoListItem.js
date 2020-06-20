import React from 'react';
import './TodoListItem.css';




export default class TodoListItem extends React.Component {
    state = {
        done: false,
        important:false,
    }
    oneLabelClick = () => {
        this.setState({done:true});
    }
    render() {
        const{ done, important } = this.state;
        const{ text} = this.props;

            
        let className = 'TodoListItem';
        if (done) {
            className +=' done';
        }
        if (important) {
            className +=' important';
        }

        return ( 
            <div className={className}>
                <span onClick={this.oneLabelClick}>
                    {this.props.text}
                </span>
            <div className="remove_btns">
                    <i className="fa fa-trash-o btn-outline-danger"></i>
                    <i className="fa fa-exclamation btn-outline-primary"></i>
            </div>
            </div>
            );
        }
}

