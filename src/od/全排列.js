/* 
给定参数n，代表1 2 3 ... n
返回按升序排的这n个数字的全排序组合。

比如输入3，返回[“123”, “132”, “213”, “231”, “312”, “321”]
*/
function getL(n) {
    const nums = new Array(n).fill(0).map((i,idx) => idx + 1);
    const res = [];
    const len = nums.length;
    const dfs = (cur) => {
        if (cur.length === len) {
            res.push(cur.slice());
        }
        for (let i=0;i<len;i++) {
            if (nums[i] !== '#') {
                const t = nums[i]
                cur.push(nums[i])
                nums[i] = '#'
                dfs(cur)
                cur.pop();
                nums[i] = t;
            }
        }
    }
    dfs([])
    return res;
}