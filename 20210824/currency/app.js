const currency=require('./currency');
const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer((req,res)=>{
    let url=req.url;

    if (url==='/'){
        let stream=fs.readFileSync('./template/index.html');
        res.setHeader('Content-Type', 'text/html');
        res.write(stream);
        return res.end();
    }

    let getData=url.split('?');
    if (getData[0]==='/convert'){
        let from=getData[1].split('&')[0].split('=')[1];
        let to=getData[1].split('&')[1].split('=')[1];

        currency(from, to, (rates)=>{
            res.setHeader('Content-Type', 'text/html');
            let s='<table class="table">';
            rates.forEach((d)=>{
                s+='<tr><td>'+d.date+'</td><td>'+d.rate+'</td></tr>';
            });
            s+='</table>';
            let stream=fs.readFileSync('./template/temp.html', 'utf-8');
            stream=stream.replace('{{currency}}', from+" to "+to);
            stream=stream.replace('{{rates}}', s);
            res.write(stream);
            res.end();
        });
    }
});

server.listen(3000, 'localhost');