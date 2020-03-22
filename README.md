# cra-template-typescript-redditech

This is the TypeScript template for [Create React App](https://github.com/facebook/create-react-app) modified by [Redditech](https://redditech.blog) with (useful) additions for bootstrapping a new project.

Modifications include:

1. adding `moment`
2. adding `antd` (Ant Design System)
3. adding `react-router-dom`
4. adding `storybook`
5. adding `appinsights`
6. adding `styled-components`
7. adding sample code for components using Atomic Design 
8. adding sample code for using `REACT_APP_` custom environment variables
9. adding sample Dockerfile

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

## Warning: This does not follow production code best practices
I'm learning by doing, so as much as this is deployed into a production-like environment, it probably isn't production ready from the point of view of following the most scalable or secure practice for deploying. As I learn, it improves, but I welcome the feedback on obvious (and not so obvious) issues with the approaches taken here to get to working code more quickly.