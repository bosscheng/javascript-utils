<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-14 01:24:22
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-14 01:34:43
-->
## 前言  
最近在学编译原理，看了看一些源码，有一点思路实现ast到codegenerator的过程  

## js版本实现  
首先我们需要有一个抽象语法树，也就是对token进行parser生成的ast。对ast进行层次遍历即可看作是一个codegenerator的过程  

源代码:  
```
let z = 10 + 20;
```

对应的ast:  

```
const ast = {
    body: [
        {
            type: 'VariableDeclaration',
            kind: 'let',
            descrip: [
                {
                    id: {
                        type: 'Identifier',
                        name: 'z'
                    },
                    init: {
                        type: 'BinaryExpression',
                        left: {
                            type: 'Literal',
                            value: 10
                        },
                        opration: {
                            type: 'Opration',
                            value: '+',
                        },
                        right: {
                            type: 'Literal',
                            value: 20,
                        }
                    }
                }
            ]
        }
    ]
;
```  

注：https://astexplorer.net/ 这个网站可以在线进行code到ast  

接下来就是编写ast生成code的过程，我们知道树的遍历有很多种，这里我们采用层次遍历完成由ast生成code的过程  
```
const codeGenerator = (t) => {
    const node = t;
    console.log(node);
    const type = node.type;
    switch (type) {
        case 'VariableDeclaration':
            return `${node.kind} ${codeGenerator(node.descrip[0].id)} = ${codeGenerator(node.descrip[0].init)};` 
        case 'Identifier':
            return node.name;
        case 'BinaryExpression':
            return `${codeGenerator(node.left)} ${codeGenerator(node.opration)} ${codeGenerator(node.right)}`;
        case 'Literal':
            return node.value;
        case 'Opration':
            return node.value;
        default:
            console.log(node.type);
            throw new TypeError(node.type);
    } 
}
```

调用  
```
const str = codeGenerator(ast.body[0]);
console.log(str, eval(str));
```

## 总结
1. 了解了简单的ast生成code的过程
2. 通过简单的例子可以意识到数据结构和算法在底层的工程实践中还是十分重要的（这里就利用了树的广度优先搜索，后面还会有递归等算法，树、二叉树等数据结构）

## 地址  
持续更新自己学编译原理知识，所有demo都在这里（水平有限，希望大佬指点）。<a href="https://github.com/this-spring/bbaabbeell/tree/main/c2js">github</a>