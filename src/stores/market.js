import { observable, action, computed } from 'mobx';

export default class MarketStore {
    @observable selectedItems = [];

    @action put = (name, price) => {
        //존재하는지 먼저 찾는다
        const exists = this.selectedItems.find(item => item.name === name);
        
        if (!exists) {
            //존재하지 않으면 새로 집어넣는다
            this.selectedItems.push({
                name,
                price,
                count: 1,
            });
            return;
        }

        //존재한다면 count 값만 1 증가
        exists.count ++;
    };


    @action
    take = name => {
        const itemToTake = this.selectedItems.find(item => item.name === name);
        itemToTake.count--;
        if (itemToTake.count === 0) {
            //갯수가 0이면 배열에서 제거
            this.selectedItems.remove(itemToTake);
        }
    };

    @computed
    get total() {
        console.log('총합 계산...');
        return this.selectedItems.reduce((previous, current) => {
            return previous + current.price * current.count;
        }, 0);
    }
}