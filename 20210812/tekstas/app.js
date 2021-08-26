const http=require('http');
const fs=require('fs');

const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;

    if (url==='/rezultatas' && method==='POST'){
        const body=[];
        req.on('data', (dalis)=>{   
            body.push(dalis);
        });
        req.on('end', ()=>{
            let bs=Buffer.concat(body).toString();
            let x=bs.split('=')[1];
            x = x.replace(/\+/g, " ");
            fs.appendFileSync('text.txt', x +"\n");
            resp.setHeader('Content-Type', 'text/html');
            resp.write('<html>');
            resp.write('<head>');
            resp.write('<meta charset="UTF-8" />')
            resp.write('<title>Užrašų knygutė</title>')
            resp.write('</head>');
            resp.write('<body>');
            resp.write("Įrašyta: "+x+' ');
            resp.write('<form action="/" method="get">');
            resp.write('<button type="submit" style="margin-top:5px">Grįžti</button>');
            resp.write('</form>')
            resp.write('</body>');
            resp.write('</html>');
            return resp.end();
        });
    }else{

    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<meta charset="UTF-8" />')
    resp.write('<title>Užrašų knygutė</title>')
    resp.write('</head>');
    resp.write('<body>');

    resp.write('<form action="rezultatas" method="post">');
    resp.write('<input type="text" name="text">');
    resp.write('<button type="submit" style="margin-left:5px">Išsaugoti</button>');
    resp.write('</form>')

    resp.write('</body>');
    resp.write('</html>');
    resp.end();
    }
});

server.listen(3000, 'localhost');