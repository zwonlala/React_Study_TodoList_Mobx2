import React, { Component } from 'react';
// import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react'; 

// @inject('counter')
@inject(stores => ({
    number: stores.counter.number,
    increase: stores.counter.increase,
    decrease: stores.counter.decrease,
}))
@observer
class Counter extends Component {
    
    render() {
        // const { counter } = this.props;
        const { number, increase, decrease } = this.props;
        return (
            // <div>
            //     <h1>{counter.number}</h1>
            //     <button onClick={counter.increase}>+1</button>
            //     <button onClick={counter.decrease}>-1</button>
            // </div>
            <div>
                <h1>{number}</h1>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
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