const http=require('http');
const fs=require('fs');
const plotas=require('./plotas');

const server=http.createServer((req, res)=>{
    const url=req.url;
    const method=req.method;

    if (method==='POST' && url==='/skaiciuoti'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            let d=Buffer.concat(body).toString();
            let v=d.split('&');
            let plotis=parseFloat(v[0].split('=')[1]);
            let ilgis=parseFloat(v[1].split('=')[1]);
            let p=plotas(plotis, ilgis);
            let data=fs.readFileSync('result.html', 'UTF-8');
            data=data.replace("{{rezultatas}}", p);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
        });
    }else{

    let data=fs.readFileSync('./index.html', 'UTF-8');
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
    }
});

server.listen(3000, 'localhost');