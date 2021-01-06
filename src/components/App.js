import React from 'react';
import Contact from './Contact';
// var React = require('react');
//바로 위에 import와 같음

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    // react Hot Loader 사용예제
    // render() {
    //     return (
    //         <div>
    //             <button onClick={()=>{this.setState({name: 'Velopert'});}}>Click Me</button>
    //             <h1>Hello!@!! {this.state.name}</h1>
    //         </div>
    //     );
    // }
    render() {
        return (
            <Contact/>
        );
    }
}

//ES6
export default App;
// module.export = App;
// ES5를 변화하면 바로 위 주석