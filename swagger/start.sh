#!/usr/bin/env bash
# be sure to set the GENERATOR_HOST based on the IP address of your server!
docker run -d -e GENERATOR_HOST=http://172.18.0.1 -p 8080:8080 --name swagger swaggerapi/swagger-generator