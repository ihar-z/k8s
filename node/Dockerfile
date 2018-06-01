FROM node:9.10.1-alpine
EXPOSE 8080
COPY server.mjs .

LABEL test.label="test value"

# CMD preferred for general use
# this form allows to run container w/o starting server.mjs
# docker run -it --rm -p 8080:8080 temp /bin/ash   ----executes /bin/bash INSTEAD OF server.mjs
#CMD node --experimental-modules server.mjs

# this forms DOESN'T allow to pass aditional params to server.mjs
#ENTRYPOINT node --experimental-modules server.mjs

# this forms allows to pass aditional params to server.mjs
# docker run -it --rm -p 8080:8080 temp param1 param2
# The best use for ENTRYPOINT is to set the image’s main command, allowing that image to be run as though it was that command (and then use CMD as the default flags).
ENTRYPOINT ["node", "--experimental-modules", "server.mjs"]