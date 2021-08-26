const http=require('http');

const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;

    console.log("Įvyko įvykis");
    console.log(url);
    console.log(method);
    resp.setHeader('Content-Type', 'text/html');
    resp.write("<html>");
    resp.write("<head><title>Puslapis</title></head>");
    resp.write("<body>");
    resp.write("<h1>Daugybos lentele</h1>")
    resp.write("<table border='1' text-align:'center'>");
    for (let i = 1; i < 11; i++) {
        resp.write("<tr>");
        for (let x = 1; x < 11; x++) {
            resp.write("<td style='text-align:center; padding:3px'>"+(x*i)+"</td>")
        }
    }
    resp.write("</table>");
    resp.write("</body></html>");
    resp.end();

});

server.listen(3000, 'localhost');