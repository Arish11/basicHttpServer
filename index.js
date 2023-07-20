const http = require('http')

function requestHandler(request, response){
   console.log(request.url)

   if(request.url='/'){
    response.writeHead(200, {'content-type':'text/html'})
    response.end("<h1>Hello Homie</h1>")
   }
}

const server = http.createServer(requestHandler)

const port = 8080

server.listen(8080, function(err){
    if(err){
        console.log("Error is",err)
        return
    }else{
        console.log("This server is running on port ",port)
    }
})