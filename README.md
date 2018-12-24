# #CMS30

[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/canner/cannercms)

Learn more about `#CMS30` please visit https://cms30.canner.io

# Instuctions

You can host your own CMS of each demo by following the instructions below.

## Development

Serveing and preview in your local machine.

1. Install Canner CLI glablly.
    ```sh
    $ npm i -g @canner/cli
    ```
2. Enter the folder you want to develop.
    ```sh
    cd [project directory]
    ```
3. Serve the CMS in local
    ```sh
    canner script:serve
    ```
4. Edit the schemas!

## Production

You can learn more [here](https://www.canner.io/docs/credential-intro) to connect to different data sources. 

1. Enter the folder you want to deploy
    ```sh
    cd [project directory]
    ```
2. Initialize canner project
    ```js
    canner init
    ```
3. Add the [credentials](https://www.canner.io/docs/credential-intro) in `env.default` of `canner.cloud.js`.
4. Deploy it.
    ```sh
    canner script:deploy`
    ```
