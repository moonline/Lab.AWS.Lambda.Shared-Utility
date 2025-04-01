# Lab.AWS.Lambda.Shared-Utility

Shared utility for TS based Lambda functions


## Usage

1. Add dependency:

    ```sh
    yarn add --dev "https://github.com/moonline/Lab.AWS.Lambda.Shared-Utility"
    ```

2. If the repository is not public, Visual Studio Code will request to login to GitHub and download dependency.
3. Import utility:

    ```ts
    import { jsonParseWithDecimal } from 'shared-utility/json';

    export const handler = async event => {
        const { multiplicand, multiplicator } = jsonParseWithDecimal(event.body);
        return multiplicand.times(multiplicator).toString();
    };
    ```

1. `shared-utility` should be included when bundling for Lambda:

    ```yaml
    CalculatorFunction:
        Type: AWS::Serverless::Function
        Properties:
            # ...
        Metadata:
            BuildMethod: esbuild
            BuildProperties:
                EntryPoints:
                    - index.ts
                External:
                    # Don't include `shared-utility` here so it get's bundled together with the Lambda code
                    # Include all other dependencies listed in package.json
                    - "@types/*"
                    - "decimal.js"
                    # ...
    ```

2. For test execution: All dependencies, except `shared-utility`, should be excluded when building tests:

    ```jsonc
    {
        // ...
        "scripts": {
            "build-tests": "esbuild ./test/test.ts --platform=node --target=es2020 --format=esm --bundle --outfile=./test/test.mjs --external:@types/* --external:chai --external:decimal.js --external:lossless-json --external:mocha"
        }
    }
    ```


