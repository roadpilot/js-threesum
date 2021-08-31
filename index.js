/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let i=0,j=0,k=0
    let result = []
    const tester = {}
    for (i in nums){
        if (j!=i){
            for (j in nums){
                if (k!=j){
                    for (k in nums){
                        if (k!=i){
                            if (nums[i]+nums[j]+nums[k]===0){
                                let temp = [nums[i],nums[j],nums[k]].sort()
                                if (!tester[temp]){
                                    tester[temp]=1
                                    result.push(temp)
                                }
                            }
                        }
                    }

                }
            }
        }
    }
    return(result)
};