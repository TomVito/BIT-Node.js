const {currency, currencies}=require('./currency');
const http=require('http');
const fs=require('fs');
const path=require('path');

function generateCurrencySelect(curr){
    let s='<select class="form-control" name="from">';
    curr.forEach((d)=>{
        s+="<option value='"+d.code+"'>"+"("+d.code+") "+d.name+"</option>";
    })
    s+="</select>";
    return s;
}

const server=http.createServer((req,res)=>{
    let url=req.url;

    if (url==='/'){
        currencies((curr)=>{
            let stream=fs.readFileSync('./template/index.html', 'utf-8');
            stream=stream.replace('{{currencies}}', generateCurrencySelect(curr));
            stream=stream.replace('{{currencies2}}', generateCurrencySelect(curr));
            res.setHeader('Content-Type', 'text/html');
            res.write(stream);
            return res.end();
        });
    }

    let getData=url.split('?');
    if (getData[0]==='/convert'){
        let from=getData[1].split('&')[0].split('=')[1];
        let to=getData[1].split('&')[1].split('=')[1];

        currencies((curr)=>{
            currency(from, to, (rates)=>{
                res.setHeader('Content-Type', 'text/html');
                let s='<table class="table">';
                rates.forEach((d)=>{
                s+='<tr><td>'+d.date+'</td><td>'+d.rate+'</td></tr>';
                });
                s+='</table>';
                let stream=fs.readFileSync('./template/temp.html', 'utf-8');
                stream=stream.replace('{{currencies}}', generateCurrencySelect(curr));
                stream=stream.replace('{{currencies2}}', generateCurrencySelect(curr));
                stream=stream.replace('{{currency}}', from+" to "+to);
                stream=stream.replace('{{rates}}', s);
                res.write(stream);
                res.end();
            });
        });
    }
});

server.listen(3000, 'localhost');