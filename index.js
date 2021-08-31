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

// [-2,0,1,1,2]
// [-12,0,6,-13,-7,-15,-6,-6,-2,-14,-2,14,1,11,-12,-11,-2,-6,7,2,-5,-9,-11,-13,9,-7,-8,9,-12,-1,5,14,14,-3,8,14,-3,-13,-14,3,10,-1,2,-3,-13,-3,-7,-7,-2,-15,2,8,-9,7,2,8,7,2,2,11,-14,-8,2,7,-4,-5,7,9,-11,0,-11,-15,14,6,-11,9,-11,-3,9,-6,-11,-4,-12,-4,10,5,11,-5,-8,-2,13,-7,-3,0,-14,1,10,0,-5,6,-15,-1,6,6]