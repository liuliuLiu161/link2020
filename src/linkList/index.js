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
        prevNode.next = new Node(data, prevNode.next);
        this.size++;
        return true;
    }
    insert(node, index) {
        return this.append(node, index);
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
chain.append("kiwis", 0);
chain.append("kiwis1", 1);
chain.append("kiwis2", 2);
chain.toString();


// function append (element) {
//     let node = new Node(element),
//         p = head
//     if (!head){
//         head = node
//     } else {
//         while (p.next) {
//             p = p.next
//         }
//         p.next = node
//     }
//     length += 1
// }
//
// // 测试
// let list = new List()
// for(let i = 0; i < 5; i+=1) {
//     list.append(i)
// }


// 判断链表中是否存在某节点
// function search(element) {
//     let p = head
//     if (!p) return false
//     while(p) {
//         if (p.element === element) return true
//         p = p.next
//     }
//     return false
// }
//
// // 测试
// list.search(4) // true
// list.search(11) // false


// 插入 position 的后继节点,
// 将传入位置next指针指向要插入的节点，要插入节点指向下一个节点

// function insert (position, element) {
//     // 创建插入节点
//     let node = new createNode(element)
//     if (position >= 0 && position <= length) {
//         let prev = head,
//             curr = head,
//             index = 0
//         if(position === 0) {
//             node.next = head
//             head = node
//         } else {
//             while(index < position) {
//                 prev = curr
//                 curr = curr.next
//                 index ++
//             }
//             prev.next = node
//             node.next = curr
//         }
//         length += 1
//     } else {
//         return null
//     }
// }
//
// // 测试
// list.insert(10)


// 删除值为 element 节点
// function remove (element) {
//     let p = head, prev = head
//     if(!head) return
//     while(p) {
//         if(p.element === element) {
//             p = p.next
//             prev.next = p
//         } else {
//             prev = p
//             p = p.next
//         }
//     }
// }


























