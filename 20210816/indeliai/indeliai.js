const indeliai = (x,y,m) => {
    for (let i=1; i<=m; i++){
        x = x+x*(y/100);
    }
    return x;
}

module.exports=indeliai;