1.BFC是什么？特点？触发方式？

含义：Block Formatting Content,块级格式化上下文。  
特点：一块单独的渲染区域，内部元素不受外部元素布局影响，反之亦然。  
<font color="yellow">作用：1>外边距合并 2>高度坍塌 3>排除外部浮动</font>  

触发方式：
- 根元素body
- float值不为none  
- overflow值不为visible、clip的块元素  
- display值为flex或inline-flex  
- display值为table  
- <font color="yellow">绝对定位元素(position为absolute或fixed)</font>

***

2.哪些属性可以继承？哪些不可继承
可：字体系列font-size,color,font-weight,font-family;visibility;cursor;
不：width,height,boder,padding,margin

***

3.文本超出显示省略号，单行，多行。
- 单：white-space:nowrap;text-overflow:ellipsis;<font color="yellow">overflow:hidden</font>
- 多行: <font color="red">
    display: '-webkit-box';-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;
</font>

***

4.如何隐藏一个元素，有什么区别？  

| 方法 | 是否影响布局 | 是否可点击 | 是否可继承 |
| --- | --- | --- | --- |
| display:none | 是 | 否 | 否 |
| visibility:hidden | 否 | 否 | 是 |
| opacity:0 | 否 | 是 | 否 |
|position:absolute;top:-99999px; | 是 | 是 | 否 |

***

5.伪类、伪元素。:与::区别。
1>伪类: :hover,<font color="red">:active,:focus,:disabled,:nth-child</font>
2>伪元素: ::before,::after,::placeholder,<font color="red">::first-line,::first-letter,::section</font>  
css3引入::来区分伪元素。

***

6.css选择器有哪些？优先级？权重计算方式？
- 行类选择器，1000
- id选择器，100
- 类选择器<font color="red">、伪类选择器、属性选择器</font>，10
- 元素，<font color="red">伪元素选择器，</font>1

权重叠加

***
7.为元素设置background,颜色会填充哪些区域？
content+padding+border

***

8.css实现动画步骤
1>@keyframes定义关键帧  
2>
- animation-name关联刚定义的关键帧。
- animation-duration定义周期时长。
- animation-timing-function定义运行速度。
- <font color="red">animation-delay定义动画开始前延迟时长</font>
- <font color="red">animation-iteration-count定义播放次数</font>
- <font color="red">animation-play-state定义动画运行还是暂停</font>
- <font color="red">animation-fill-mode定义动画结束之前和之后如何将样式应用于目标</font>

***

9.块级元素、内联元素、置换元素
1>div,h,p
2>span,<font color="red">a,strong,em,img</font>
3>video,image,iframe

***

10.语义化标签
header,footer,aside,main,figure、figcation、time
<font color="red">、article、section、nav</font>

***

11.html5中，input元素的type属性有哪些？至少10个  
password、button、radio、number、checkbox、<font color="red">file、color、date、range、text</font>

***

12.sticky 和 fixed 的区别  

| 定位 | 是否跟随页面滚动 | 是否受父元素限制 | 是否脱离文档流 |
| --- | --- | --- | --- |
| sticky | 一开始随页面滚动，到达指定位置后固定 | 是，不会超出父元素区域 | 否 |
| fixed | 否 | 否 | 是 |
