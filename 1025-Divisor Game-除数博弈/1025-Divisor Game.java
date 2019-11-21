class Solution {
    public boolean divisorGame(int N) {
        return (N&1) == 0 ? true:false;
    }
}

//这里借鉴评论区大神的算法，因该是最优解了。
//分析可以得知N=奇数的话第一个人必输，因为奇数的因子任然是奇数，a最终会得到最小的奇数，也就是说a只能进行-1的操作，b必得偶数，这样一直循环，b最终会获得2这个最小的偶数，a就输了。反之亦反。

//另外一个知识是判断偶数的方式可以为 N&1 如果为1则为偶数，否则为奇数
//因为偶数的二进制最后一位为0，奇数二进制最后一位为1

