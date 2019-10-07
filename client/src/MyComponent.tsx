import React from 'react';

class MyComponent extends React.Component {
    temp: string;

    constructor(props:any){
        super(props);
        this.temp = "Hello";
    } 

    render() {
        return (
            <h1>Hello React</h1>
        );
    }
}

export default MyComponent;