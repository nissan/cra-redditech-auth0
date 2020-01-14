# cra-template-typescript-redditech

This is the TypeScript template for [Create React App](https://github.com/facebook/create-react-app) modified by [Redditech](https://redditech.blog) with (useful) additions for bootstrapping a new project.

Modifications include:

1. adding `moment`
2. adding `antd` (Ant Design System)
3. adding `react-router-dom`

To use this template, add `--template typescript-redditech` when creating a new app.

For example:

```sh
npx create-react-app my-app --template typescript-redditech

# or

yarn create react-app my-app --template typescript-redditech
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

# Deployment of `cra-template-typescript-redditech` at `cra-redditech`

A deployment of the generated code is on Github at https://github.com/nissan/cra-redditech

Additionally Docker image can be found at https://hub.docker.com/repository/docker/nissan/cra-redditech
and can be run with `docker run -d --rm -p 8080:80 nissan/cra-redditech`

There is also deployed a sample of the base site generated on Azure at https://cra-redditech.azurewebsites.net/
