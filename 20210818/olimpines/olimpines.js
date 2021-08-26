const olimpiniaim=(metai)=>{
    if (metai % 4 === 0 && metai >= 1896){
        return true;
    }else{
        return false;
    }
};

const olimpinisnr=(metai)=>{
    return (metai - 1896) / 4 + 1;
}

module.exports={olimpiniaim, olimpinisnr};