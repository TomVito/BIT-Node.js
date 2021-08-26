const http=require('http');
const fs=require('fs');
const path=require('path');
const metai=require('./metai');

const server=http.createServer((req, res)=>{
    const url=req.url;
    const method=req.method;
    let file='./public'+url;

    if (fs.existsSync(file) && fs.lstatSync(file).isFile()){
        let stream=fs.readFileSync(file);
        const ext=path.parse(file).ext;
        if (ext=='.css') res.setHeader('Content-Type', 'text/css');
        if (ext=='.png') res.setHeader('Content-Type', 'image/png');
        if (ext=='.jpg') res.setHeader('Content-Type', 'image/jpeg');
        if (ext=='.ico') res.setHeader('Content-Type', 'image/jpeg');
        res.write(stream);
        return res.end();
    }

    if (method==='POST' && url==='/metai'){
        let data=[];
        req.on('data', (chunk)=>{
            data.push(chunk);
        });
        req.on('end', ()=>{
            const d=Buffer.concat(data).toString();
            const m=parseInt(d.split('=')[1]);
            const spalva=metai(m);
            let stream=fs.readFileSync('./template/index.html', 'utf-8');
            stream=stream.replace("{{result}}", m+" metų spalva yra: <b>"+spalva+"</b>");
            res.setHeader('Content-Type', 'text/html');
            res.write(stream);
            return res.end();
        });
    }else{
    let stream=fs.readFileSync('./template/index.html', 'utf-8');
    stream=stream.replace("{{result}}", "Iveskite metus ir paspauskite skaičiuoti");
    res.setHeader('Content-Type', 'text/html');
    res.write(stream);
    return res.end();
    }
});

server.listen(3000, 'localhost');