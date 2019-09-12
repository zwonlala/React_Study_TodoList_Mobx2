import React, { Component } from 'react';
// import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react'; 

@inject('counter')
@observer
class Counter extends Component {
    
    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        );
    }
}

// decorate(Counter, {
//     number: observable,
//     increase: action,
//     decrease: action
// })

// export default observer(Counter); 
export default Counter;