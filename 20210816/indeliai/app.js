const http=require('http');
const indeliaiHtml=require('./indeliaiHtml');

const server=http.createServer((req,res) => {
    const url=req.url;
    const method=req.method;
    if (url==='/skaiciuoti' && method=='POST'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const d=Buffer.concat(body).toString();
            console.log(d);
            const v=d.split('&');
            const x=parseFloat(v[0].split('=')[1]);
            const y=parseFloat(v[1].split('=')[1]);
            const m=parseFloat(v[2].split('=')[1]);
            res.setHeader('Content-Type', 'text/html');
            res.write(indeliaiHtml.result(x,y,m));
            return res.end();
        });
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write(indeliaiHtml.index());
        res.end();
    }
});

server.listen(3000, 'localhost');