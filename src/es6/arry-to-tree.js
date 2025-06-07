/* 
[
{id:1,parentId:0,name: '1'},
{id:2,parentId:1,name: '2'},
{id:3,parentId:2,name: '3'},
]
返回 [
{
id:1,
parentId:0,
name: '1',
children: [
    {id:2,parentId:1,name: '2',children: [
        {id:3,parentId:2,name: '3'},
    ]}
]
}
]
*/

function arrToTree(arr) {
    const temp = arr.reduce((p,c) => {
        p[c.id] = c;
        return p;
    }, {})
    const res = [];
    arr.forEach(i => {
        if (temp[i.parentId]) {
            if (!temp[i.parentId].children) {
                temp[i.parentId].children = []
            }
            temp[i.parentId].children.push(i);
        } else {
            res.push(i);
        }
    })
    return res;
}

const r = arrToTree([
    {id:1,parentId:0,name: '1'},
    {id:2,parentId:1,name: '2'},
    {id:3,parentId:2,name: '3'},
])
console.log(r)