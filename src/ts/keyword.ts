/* 对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。 */

// 关键字

/* readonly 全部属性变成readonly */
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

/* partial 全部属性变为可选 */
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

/* NonNullable 去除类型中的null和undefined */
type MyNonNullable<T> = T&{};

/* Exclude 从T中剔除可以赋值给U的类型。 */
type MyExclude<T, U> = T extends U ? never : T /* T可以赋值给U的返回never否则返回T */
type T00 = MyExclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

/* Extract 提取T中可以赋值给U的类型。 */
type MyExtract<T, U> = T extends U ? T : never
type T01 = MyExtract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

/* Pick  */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
} 
type b = MyPick<{a:number;b:boolean;c:string}, 'a' | 'c'>; // {a: number;c:string}

/* Omit */
type MyOmit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
type aa = MyOmit<{a:number;b:boolean;c:string}, 'a'|'c'> // {b:boolean}

/* Record */
type MyRecord<K extends string, T> = {
    [P in K]: T
}
type ThreeStringProps = MyRecord<'prop1' | 'prop2' | 'prop3', string> // { prop1: string;prop2: string;prop3: string;}

/* ReturnType */
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type a = MyReturnType<() => string> // string
