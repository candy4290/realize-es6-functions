/* 
题目描述
九宫格按键输入，输出显示内容，有英文和数字两个模式，默认是数字模式，数字模式直接输出数字，英文模式连续按同一个按键会依次出现这个按键上的字母，如果输入”/”或者其他字符，则循环中断。

字符对应关系如图：

在这里插入图片描述

要求输入一串按键，输出屏幕显示。

#用于切换模式，默认是数字模式，执行#后切换为英文模式；
/表示延迟，例如在英文模式下，输入 22/222，显示为 bc；
英文模式下，多次按同一键，例如输入 22222，显示为 b；
输入描述
输入范围为数字 0~9 和字符’#’、’/’，输出屏幕显示，例如，

在数字模式下，输入 1234，显示 1234

在英文模式下，输入 1234，显示,adg

输出描述
#用于切换模式，默认是数字模式，执行#后切换为英文模式；

/表示延迟，例如在英文模式下，输入 22/222，显示为 bc；

英文模式下，多次按同一键，例如输入 22222，显示为 b；

示例1
输入

2222/22
输出

222222
说明

默认数字模式，字符直接显示，数字模式下/无序

示例2
输入

123#222235/56
输出

123adjjm
说明

123,#进入英文模式，连续的数字输入会循环选择字母4个2输出a,35输出dj56输出jm

*/

function dealWithBuff(keyMap, buffer) {
    const letters = keyMap[buffer[0]];
    const idx = (buffer.length - 1) % letters.length;
    return letters[idx];
}

function getResult(input) {
    const keyMap = {
        '0': [' '],
        '1': [',', '.'],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    let mode = 'num'; // 初始是数字模式
    let result = '';
    let buffer = ''; // 缓存当前一段重复数字

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === '#') {
            // 切换模式
            if (mode === 'num') {
                mode = 'abc';
            } else {
                if (buffer) {
                    result += dealWithBuff(keyMap, buffer)
                }
                mode = 'num';
                buffer = ''; // 切换时清空buffer
            }
            continue;
        }

        if (mode === 'num') {
            // 数字模式，直接输出数字
            if (char >= '0' && char <= '9') {
                result += char;
            }
            // / 在数字模式下无效，忽略
        } else {
            // 英文模式
            if (char === '/') {
                // 延迟，中断循环
                if (buffer && keyMap[buffer[0]]) {
                    result += dealWithBuff(keyMap, buffer)
                }
                buffer = '';
                continue;
            }

            if (char >= '0' && char <= '9') {
                if (buffer === '' || buffer[0] === char) {
                    buffer += char;
                } else {
                    // 不同按键，处理之前的buffer
                    if (keyMap[buffer[0]]) {
                        result += dealWithBuff(keyMap, buffer)
                    }
                    buffer = char;
                }
            }
        }
    }

    // 处理结尾未处理的 buffer
    if (mode === 'abc' && buffer && keyMap[buffer[0]]) {
        result += dealWithBuff(keyMap, buffer)
    }

    return result;
}

console.log(getResult('123#222235/56'))
console.log(getResult('#2222/22'))
console.log(getResult('#222233'))
console.log(getResult('22#22#22#33'))