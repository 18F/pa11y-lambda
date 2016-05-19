# pa11y-lambda

Run pa11y scans on AWS Lambda.

## Quickstart

### Upload to Lambda

Download `pa11y-lambda.zip` from the releases page, upload to AWS Lambda, and you're good to go.

When you test/run the function, the `event` payload should resemble what's found in `app/run.js`:

```javascript
var event = {
  url: '18f.gsa.gov',
  pa11yOptions: {
    standard: 'WCAG2AA'
  }
}
```

The handler should be configured to be `index.handler`.

## Development

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

To modify the function, edit `app/index.js`.

### Running locally

To run the task locally:

```
docker-compose run web node run.js
```

### Creating a new .zip file

To package it up for upload to AWS Lambda:

```
./build-release.sh
```

The resulting .zip file is suitable for upload to Lambda.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
