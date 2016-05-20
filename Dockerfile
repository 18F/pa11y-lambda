FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y nodejs-legacy npm git git-core phantomjs curl
RUN curl -O https://bootstrap.pypa.io/get-pip.py
RUN python get-pip.py
RUN pip install awscli
WORKDIR /app
COPY app/ .
