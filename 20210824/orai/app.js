const forecast=require('./forecast');
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
    if (getData[0]==='/prognoze'){
        // /prognoze?place=Kaunas
        let place=getData[1].split('=')[1];

        forecast(place, (temp)=>{
            res.setHeader('Content-Type', 'text/html');
            let s='<table class="table">';
            temp.forEach((d)=>{
                s+='<tr><td>'+d.date+'</td><td>'+d.temperature+'</td></tr>';
            });
            s+='</table>';
            let stream=fs.readFileSync('./template/temp.html', 'utf-8');
            stream=stream.replace('{{place}}', place);
            stream=stream.replace('{{temperature}}', s);
            res.write(stream);
            res.end();
        });
    }
});

server.listen(3000, 'localhost');