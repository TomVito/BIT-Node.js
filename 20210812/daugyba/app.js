const http=require('http');

const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;

    console.log("Įvyko įvykis");
    console.log(url);
    console.log(method);

    resp.setHeader('Content-Type', 'text/html');
    resp.write("<html>");
    resp.write("<head><title>Puslapis</title>");
    resp.write("<style>")
    resp.write("td {padding:5px; text-align:center;}")
    resp.write("td.red {background-color:#f99;}")
    resp.write("</style>")
    resp.write("</head>")
    resp.write("<body>");
    resp.write("<h1>Daugybos lentele</h1>")
    resp.write("<table border=1px;>");
    for (let i = 1; i < 11; i++) {
        resp.write("<tr>");
        for (let x = 1; x < 11; x++)
        if ((x === 1 || i === 1)) {
            resp.write("<td class='red'>"+(x*i)+"</td>")
         }else{
             resp.write("<td>"+(x*i)+"</td>")
         }
    resp.write("</tr>");
    }
    resp.write("</table>");
    resp.write("</body></html>");
    resp.end();

});

server.listen(3000, 'localhost');