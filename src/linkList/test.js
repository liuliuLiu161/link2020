// https://juejin.cn/post/6844903846217515016#heading-2

    // https://juejin.cn/post/6844904118708879367#heading-5
// 无头链表
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkChain {
    constructor() {
        this.header = new Node(null, null);
        this.size = 0;
    }
    find(header, currentIndex, index) {
        if (currentIndex === index) {
            return header;
        }
        return this.find(header.next, ++currentIndex, index);
    }
    append(data, index) {
        const prevNode = this.find(this.header, 0, index);
        // 这里直接将指针向后移动了
        prevNode.next = new Node(data, prevNode.next);
        this.size++;
        return true;
    }
    insert(data, index) {
        return this.append(data, index);
    }
    remove(index) {
        const prevNode = this.find(this.header, 0, index);
        const node = prevNode.next;
        prevNode.next = node.next;
        node.next = null;
        this.size--;
        return node;
    }
    length() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    toString() {
        console.log(JSON.stringify(this));
    }
}

const chain = new LinkChain();
chain.append('kiwis', 0);
chain.append('kiwis1', 1);
chain.append('kiwis2', 2);
chain.insert('kiwis3', 2)
chain.toString();
















