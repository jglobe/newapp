import React from 'react';
import ReactDOM from 'react-dom';
import SearchBlock from './components/SearchBlock';
const Header = () => {
  const st = {
    fontSize: '40px',
    color:'aqua',
  }
  return <h1 style={st} className="header">To do list</h1>;
}


const ToDoList = () => {
  const items = ['Learn HTML', 'Learn CSS','Learn React'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  );
}



const App = () => {

const isloged = false;
const loginBlock = <span>sign in</span>;
const welcome = <span>Hello</span>

  return (
    <div>
      {isloged ? welcome : loginBlock}
      <Header />
      <SearchBlock />
      <ToDoList />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));


