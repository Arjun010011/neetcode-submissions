class MinStack {
   
    constructor() {
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        let len = this.minStack.length -1;
        return this.minStack[len];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Infinity;
        for(let i=0;i<this.minStack.length;i++){
            if(this.minStack[i]< min){
                min = this.minStack[i];
            }

        }
        return min;

    }
}
