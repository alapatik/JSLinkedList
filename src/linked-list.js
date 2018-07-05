const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if(this._head == null){
            var newNode = new Node(data);
            this._head = newNode;
            this._tail = newNode;
            this._head.next = this._tail;
        } else{
            var newNode = new Node(data);
            var tempNode = this._head;
            var i = 0;
            while(i < this.length-1){
                tempNode = tempNode.next;
                i++;
            }
            this._tail = newNode;
            tempNode.next = newNode;
            newNode.prev = tempNode;
        }
        this.length++;
    }
    

    head() {
        if(this._head == null){
            return null;
        }
        return this._head.data;
    }

    tail() {
        if(this._tail == null){
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        if(index > this.length){
            throw "index is larger than array length";
        }
        if(index == this.length){
            return this.tail;
        }
        var i = 0;
        var tempNode = this._head;
        while(i != index){
            tempNode = tempNode.next;
            i++;
        }
        return tempNode.data;
    }

    insertAt(index, data) {
        var i = 0;
        var tempNode = this._head;
        var newNode = new Node(data);
        while(i < index){
            tempNode = tempNode.next;
            i++;
        }
        newNode.next = tempNode;
        newNode.prev = tempNode.prev;
        tempNode.prev.next = newNode;
        this.length++;
    }

    isEmpty() {
        if(this.length ==0 ){
            return true;
        }else{
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        var i = 0;
        var tempNode = this._head;
        while(i<index){
            tempNode = tempNode.next;
            i++;
        }
        tempNode.prev.next = tempNode.next;
        tempNode.next.prev = tempNode.prev;
        tempNode = null;
        this.length--;
    }

    reverse() {
        var i = 0;
        var tempNode = this._head;
        while(i < this.length){
            tempNode.prev = tempNode.next;
            tempNode.next.prev = tempNode;
            tempNode = tempNode.next;
            i++;
        }
    }

    indexOf(data) {
        var i = 0;
        var tempNode = this._head;
        while(tempNode.data !== data && i < this.length){
            tempNode = tempNode.next;
            i++;
        }
        if(i >= this.length){
            return -1;
        }
        return i;
    }
}

module.exports = LinkedList;
