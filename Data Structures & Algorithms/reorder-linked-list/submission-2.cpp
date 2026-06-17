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
    void reorderList(ListNode* head) {
        if(head == nullptr || head->next == nullptr || head->next->next == nullptr){
            return ;
        }
        ListNode *fast = head;
        ListNode *slow = head;
        while(fast !=NULL && fast->next !=NULL){
            slow = slow->next;
            fast = fast->next->next;
        }
        ListNode *curr = slow->next;
        slow->next = nullptr;

        ListNode *prev = NULL;
        while(curr !=NULL){
            ListNode *tmp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = tmp;
        }
        ListNode *firstHalf = head;
        ListNode *secondHalf = prev;
        while(secondHalf!=nullptr){
            ListNode *temp1 = firstHalf->next;
            ListNode *temp2  = secondHalf->next;
            firstHalf->next = secondHalf;
            secondHalf->next = temp1;

            firstHalf = temp1;
            secondHalf = temp2;
        }

    }
};
