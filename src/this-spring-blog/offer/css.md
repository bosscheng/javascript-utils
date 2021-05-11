<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-15 20:15:22
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-14 19:46:06
-->
### positioin  

1. static（默认）：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时**top, right, bottom, left 和 z-index 属性无效**。
2. fixed：元素移除文档流，整个定位针对于viewport定位，也就是整个窗口。不会随着页面滚动而滚动。
3. relative：元素相对于文档本来位置进行定位。不脱离文档流（占据原来空间）。left、top等都是相对于原来位置进行移动。
4. absolute：元素相对于position定位非static的最近父元素进行定位。脱离文档流(不占据原有空间)  
5. inherit：从父元素继承该属性  

<a href="https://segmentfault.com/a/1190000018921229">blog</a>  

### 垂直居中  
<a href="./mid.html">css垂直居中</a>

### Flex布局  

设置flex布局后float，clear，vertical-align将失效  

main-start: 盒子的最左侧  
main-end: 盒子的最右侧  
cross-start: top  
cross-end: bottom  

属性:  

#### flex-direction  
row: 1 2 3 4 5....  

reverse-row: ....5 4 3 2 1  

column:   
        1    
        2  
        3  
        4  
        5  
        .  
        .  
        .    

column-reverse:  
        .  
        .  
        .  
        5  
        4  
        3  
        2    
        1  

#### flex-wrap  



<a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">blog</a>  

#### justify-content  

定义了项目在主轴的对齐方式（main-start,main-end）  

flex-start（默认值）：左对齐  
flex-end：右对齐  
center： 居中  
space-between：两端对齐，项目之间的间隔都相等。  
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。  

#### align-items  

定义项目在交叉轴的对其方式（cross-start, cross-end）  

flex-start：交叉轴的起点对齐。  
flex-end：交叉轴的终点对齐。  
center：交叉轴的中点对齐。  
baseline: 项目的第一行文字的基线对齐。  
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。  

### css选择器优先级  

1. 第零等：!important， 大过了其它任何设置。
2. 第一等：内联样式，如: style=””，权值为1000。
3. 第二等：ID选择器，如：#content，权值为100。
4. 第三等：类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）权值为10。
5. 第四等：类型选择器（例如，h1）和伪元素（例如，::before），权值为1。  
通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。  

### css3  

#### 2D转换（transform）  

transform: translage(x, y); // 从当前位置x和y的平移距离  
transform: rotate(xdeg); // 绕中心点顺时针旋转x度，如果是负值就是逆时针旋转x度  
transform: scale(x, y); // x轴和y轴放大的倍数  
transform: skew(x, y); // 延x轴和y轴倾斜角度

#### 3D转换（transf）  
非重点
transform: translate3d(x,y,z); // 
transform: scale3d(x,y,z); // 
transform: rotate3d(x,y,z,angle); //  

#### 过渡（tansition）  

CSS3中，我们为了添加某种效果可以从一种样式转变到另一个的时候。  

transition: property duration timing-function delay  

分别代表：属性，持续时间，过渡效果时间曲线，过渡效果何时开始  
#
#### 动画（animation @keyframe）  

分为两步：  

第一步规定animation:  name, duration, 过渡效果时间曲线，过渡效果何时开始，animation-iteration-count（动画次数），animation-direction（动画方向，默认normal，reverse，alternate（动画在奇数正向播放，偶数反向播放），alternate-reverse（跟alternate相反），initial），animation-play-state（动画是否正在运行或暂停。默认是 "running"还有一个属性paused）  

第二步编写@keyframe：  
```
@keyframe name {
    0% {
        width: 0px;
        ....
    };
    .....
    100% {
        width: 100px;
        ....
    }
}
```
 
<a href="./animation-keyframe.html">demo</a>  

#### text-shadow  
为文字添加阴影  
text-shadow: offset-x px,offset-y px,blur-radius px,color  

偏离x，偏离y，模糊半径，颜色  

<a href="./text-shadow.html">demo</a>  

#### box-shadow  
用于在元素的框架上添加阴影效果  

text-shadow: offset-x px,offset-y px,blur-radius px， spread-radius,color  

偏离x，偏离y，模糊半径，扩散半径，颜色    

<a href="./box-shadow.html">demo</a>


#### background-image  

background-image: linear-gradient(direction, color-stop1, color-stop2, ...)  
direction如果是xdeg：  是基于自颜色自上而下排序后然后进行顺时针旋转。  

direction如果是to right...,就是按照那个方向进行排列颜色。  
<a href="./">demo</a>

### 盒子模型