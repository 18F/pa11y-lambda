FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y nodejs npm git git-core
RUN apt-get install -y phantomjs
WORKDIR /app
COPY app/ .
