const http=require('http');

const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;

    if (url==='/rezultatas' && method==='POST'){
        console.log("Atliksime skaičiavimą");
        const body=[];
        req.on('data', (dalis)=>{   
            body.push(dalis);                //dalis= "chunk"
            console.log("Gavau:"+dalis);
        });
        req.on('end', ()=>{
            let bs=Buffer.concat(body).toString();
            console.log("Gavau visą informaciją:"+bs);
            let x=(bs.split('=')[1]);
            resp.setHeader('Content-Type', 'text/html');
            resp.write('<html>');
            resp.write('<head>');
            resp.write('<meta charset="UTF-8" />')
            resp.write('<title>Skaičiuoklė</title>')
            resp.write('</head>');
            resp.write('<body>');
            resp.write('<form action="rezultatas" method="post">');
            resp.write('<input type="text" name="skaicius">');
            resp.write('<button type="submit">Kvadratu</button>');
            resp.write('</form>')
            resp.write("Skaičius pakeltas kvadratu: "+(x*x));
            resp.write('</body>');
            resp.write('</html>');
            return resp.end();
        });
    }else{

    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<meta charset="UTF-8" />')
    resp.write('<title>Skaičiuoklė</title>')
    resp.write('</head>');
    resp.write('<body>');

    resp.write('<form action="rezultatas" method="post">');
    resp.write('<input type="text" name="skaicius">');
    resp.write('<button type="submit">Kvadratu</button>');
    resp.write('</form>')

    resp.write('</body>');
    resp.write('</html>');
    resp.end();
    }
});

server.listen(3000, 'localhost');