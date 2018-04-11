import http from 'http';
 
const handleRequest = (request, response) => {
	console.log('Received url: ' + request.url);
	response.writeHead(200);
	response.end('Hello new test')
};

const www = http.createServer(handleRequest);

www.listen(8080);