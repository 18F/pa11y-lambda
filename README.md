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

To modify the function, edit `app/index.js` inside `exports.handler`.

To package it up for upload to AWS Lambda:

```
cd app
zip -r ../pa11y-lambda.zip .
```

The resulting .zip file is suitable for upload to Lambda.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
