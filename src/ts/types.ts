enum T {
    A,B,C
}
/* 编译为js 
    var T;
    (function(TT) {
        TT[TT['A']=0] = 'A';
        ...
    })(TT||(TT={}))
*/