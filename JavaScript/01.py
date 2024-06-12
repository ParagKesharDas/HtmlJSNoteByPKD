from typing import List

class Solution:
    def xorPairs(self, N: int, A1: List[int], A2: List[int], Q: int, query: List[List[int]]) -> List[int]:
        ans = []
        for q in query:
            k, l1, r1, l2, r2 = q
            cnt = 0
            # iterate through the relevant segments of A1 and A2 and compute XOR values on-the-fly
            for i in range(l1-1, r1):
                for j in range(l2-1, r2):
                    xor_val = A1[i] ^ A2[j]
                    if (xor_val >> (k-1)) & 1:
                        cnt += 1
            ans.append(cnt)
        
        return ans