# pa11y-lambda

Run pa11y scans on AWS Lambda.

## Quickstart

Download `pa11y-lambda.zip`, upload to AWS Lambda, and you're good to go.

Currently, the .zip file contains just a proof of concept (displays the results of a scan of nature.com in the logs), but this will soon be updated to be dynamic and customizable.

## Installation/development

Dependencies:

- Docker
- docker-compose

Clone this repo and `cd` into it.

```
docker-compose build
```

To add something to the `package.json` file:

```
docker-compose run web npm install --save [name of module]
```
