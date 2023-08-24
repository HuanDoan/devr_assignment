# DEVR offline assignment

An assignment for Software Engineer position

## Table of Contents

- [Requirements](#Requirements)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Tests](#tests)

## Requirements

**Task 1**: Develop an API (`<api-link>/exchange_rates`) that asynchronously retrieves exchange rate information for multiple Forex info from at least 3 external APIs. The developed API should use asynchronous calls and return the results in JSON format. Please make sure to include TOKEN of external APIs in your submission codes for verification.

**Task 2**: Develop a basic API (`<api-link>/calculate`) that performs a calculation of the sum of provided numbers (a+b+c+...). Make sure to:  
1) Write unit tests to ensure functionality;
2) Create a script for conducting concurrent performance tests; 
3) Allow users to configure the number of connections.

## Features

Because of limitation of submission time, I decicded to build a simple API app with the `Express JS`. It's fast, powerful, and providing almost what I need for this project.

This source code provides 2 api endpoints corresponding to 2 tasks of the requirements.

1) `GET /api/exchange-rates`: Retrive the exchange rates from 3 different api providers. The configurations of 3 providers can be updated in `.env` and config file.
2) `POST /api/calculate`: The api to calculate sum of array of numbers and response the result.

Besides that, I provide a script to stress-test the sum function. It makes sure that the api can resolve multiple concurrent connections at a time, as well as monitoring the performance of it self.

## Installation

**Notice**: Please make sure that `Nodejs` has been intalled in your host.

```bash
# Install all packages and dependencies
yarn install

# Preparing the environment
cp .env.example .env
```

Update file `.env` with the configurations.

## Usage

To run the API server:
```bash
yarn start
```
To perform stress test of calculate api:
```bash
yarn performance
```

## Configuration

To customize the behavior of the application, you can utilize a .env file placed at the root of the project. This file allows you to set various environment variables, making it easy to adapt the app to your needs. Below is an example of how to structure the .env file:

```
APP_HOST="http://localhost"
APP_PORT=3000

# FOREX API PROVIDERS
API_PROVIDER_1_HOST=
API_PROVIDER_1_ACCESS_TOKEN=
API_PROVIDER_1_CLIENT_SECRET=
API_PROVIDER_1_EXCHANGE_RATE_ENDPOINT=

API_PROVIDER_2_HOST=
API_PROVIDER_2_ACCESS_TOKEN=
API_PROVIDER_2_CLIENT_SECRET=
API_PROVIDER_2_EXCHANGE_RATE_ENDPOINT=

API_PROVIDER_3_HOST=
API_PROVIDER_3_ACCESS_TOKEN=
API_PROVIDER_3_CLIENT_SECRET=
API_PROVIDER_3_EXCHANGE_RATE_ENDPOINT=

```

Please note that the placeholders such as API_PROVIDER_X represent the necessary configuration for integrating Forex API providers. While these placeholders are provided as samples due to the complexity of Forex APIs and the need for research, you would need to replace them with actual details obtained from real Forex API providers to enable accurate exchange rate data retrieval.

Remember, this configuration flexibility allows you to seamlessly adapt the application to your specific use case, ensuring it operates flawlessly with the chosen API providers.

One more thing, incase you changes the config related to the Forex API providers in the `.env` file, **don't forget to update it in the `config.js` file also**.

## API Documentation

### `GET /api/exchange-rate`:

```bash
curl -i -H 'Accept: application/json' \
-H 'Content-Type: application/json' \ 
-X GET 'http://localhost:3000/api/exchange-rate'

```

### `POST /api/calculate`:
```bash
curl --location 'http://localhost:3000/api/calculate' \
--header 'Content-Type: application/json' \
--data '{
    "numbers": [1,2,3,4,5,6,7,8,9,10]
}'
```

## Tests

To run the test:
```bash
yarn test
```

Due to the API exchange rate is lacking of placeholders in configurations, I skipped it. Incase you have the information of providers, just remove the method `.skip()` in `exchange-rate.test.js` file to perform a test.
