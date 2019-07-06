// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(i = 0;i < a.length;i++){
    a[i] *= 2;
}
console.log(a);


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

var colors_result = colors[0];
for(j = 1;j < colors.length;j++){
    colors_result += "+" + colors[j];
}
console.log(colors_result);
console.log(colors.toString());



// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function (a,b) {
    return -(a - b);
});
console.log(a);


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'


var max = 0;
var result = "";
var times = 0;
for(i = 0;i < a.length;i++){
    times = 0;
    for(j = 0;j < a.length;j++){
        if(a[i] === a[j]){
         times++;
        }
    }
    if(times > max){
        result = a[i];
        max = times;
    }
}
console.log(result);
