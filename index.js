const http = require('http')

function requestHandler(request, response){
   console.log(request.url)
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