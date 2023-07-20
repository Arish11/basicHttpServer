const http = require('http')
const port = 8080
const fs = require('fs')

function requestHandler(request, response){
   console.log(request.url)

//    if(request.url='/'){
//     response.writeHead(200, {'content-type':'text/html'})
//     response.end("<h1>Hello Homie</h1>")
//    }

    fs.readFile('./index.html',(err,data)=>{
        if(err){
            return response.end("<h1>Error</h1>")
        }else{
            return response.end(data)
        }
    })
}

const server = http.createServer(requestHandler)

server.listen(8080, function(err){
    if(err){
        console.log("Error is",err)
        return
    }else{
        console.log("This server is running on port ",port)
    }
})