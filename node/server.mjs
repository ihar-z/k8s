import http from 'http';
 
const handleRequest = (request, response) => {
	console.log('Received url: ' + request.url);
	response.writeHead(200);
	response.end('Hello new 3')
};

const www = http.createServer(handleRequest);

//allows to handle
process.on('SIGTERM', function () {
  console.log('SIGTERM');
  process.exit(0);
});
process.on('SIGINT', function () {
  console.log('SIGINT');
  process.exit(0);
});
// we can pass additional params to docker
// docker run -it --rm -p 8080:8080 temp param1 param2
process.argv.forEach(param => console.log(param));

www.listen(8080);