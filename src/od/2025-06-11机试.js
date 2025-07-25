/* 
题目一：
有N个饼，500>N>=3,N是奇数。
A和B两个人轮流选饼。
第一次可以任意选择一个饼。
B每次都选择最大的饼。A知道B的选择方式。
但是如果有缺口，只可以从缺口处进行选择。
问A能吃到饼的最大值。

输入：[8,2,4,10,7,5]
输出：19


重点：想象成一个圆形，这样才能理解什么是缺口！！！！

*/


/* 
题目三：
问题描述
项目组共有 N 个开发人员，项目经理接到了 M 个独立的需求。每个需求的工作量不同，且每个需求只能由一个开发人员独立完成，不能多人合作。假定各个需求之间无任何先后依赖关系，设计算法帮助项目经理进行工作安排，使整个项目能用最少的时间交付。

输入格式
第一行输入为 M 个需求的工作量，单位为天，用空格隔开。例如：

6 2 7 7 9 3 2 1 3 11 4
表示共有 M 个需求，每个需求的工作量分别为 6 天，2 天，7 天，7 天，9 天，3 天，2 天，1 天，3 天，11 天，4 天。其中 0<M<30，0<Xm<200

第二行输入为项目组人员数量 N，例如：

2
表示共有 2 名员工，其中 0<N<100 < N < 100<N<10。

输出格式
输出整个项目最快完成的天数。

样例输入
6 2 7 7 9 3 2 1 3 11 4
2
样例输出
28
样例解释
在样例中，需求可以分配如下：

开发人员1：6 + 7 + 9 + 3 + 3 = 28 天
开发人员2：2 + 7 + 2 + 1 + 11 + 4 = 27 天
所以，最快完成所有工作的天数为28天。

作者：已注销
链接：https://www.nowcoder.com/discuss/664580439838818304
来源：牛客网

*/