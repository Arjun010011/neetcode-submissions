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
        ListNode *temp1 = list1;
        ListNode *temp2 = list2;
        ListNode *temp = new ListNode(0);
        ListNode *move = temp;
        while(temp1!=NULL && temp2!=NULL){
            if(temp1->val<=temp2->val){
                move->next = temp1;
                temp1=temp1->next;
                move = move->next;
                
            }else{
                move->next = temp2;
                temp2 = temp2->next;
                move = move->next;
                
            }
        }
        if(temp1!=NULL){
            move->next = temp1;
        }else{
            move->next = temp2;
        }
        return temp->next;
    }
};
