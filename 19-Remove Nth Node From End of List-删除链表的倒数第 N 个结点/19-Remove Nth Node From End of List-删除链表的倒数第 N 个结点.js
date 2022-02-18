
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let virtualHead = new ListNode(0, head)
    let count = n 
    let p = virtualHead
    let targetParent = virtualHead
    while(p != null){
        p = p.next
        if(count > 0){
            count--
        }else if(count === 0){
            targetParent = virtualHead
            count = -1
        }else{
            targetParent = targetParent.next
        }
    }
    

    if(targetParent.next){
        targetParent.next =targetParent.next.next
    }
    
    return virtualHead.next
};