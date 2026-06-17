/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode *l1 = list1;
        ListNode *l2 = list2;
        ListNode *temp = new ListNode(0);
        ListNode *move  = temp;

        while(l1 !=NULL && l2 !=NULL){
            if(l1->val <=l2->val){
                move->next = l1;
                l1 = l1->next;
                move = move->next;
            }else{
                move->next = l2;
                l2 = l2->next;
                move = move->next;
            }
        }
        if(l1 !=NULL){
            move->next = l1;
        }else{
            move->next = l2;
        }
        return temp->next;
    }
};
