<div align="center">

# f-<%= name.default %></h1>

<img width="125" alt="Fozzie Bear" src="../../../../bear.png" />

<%= description %>

</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-<%= name.default %>.svg)](https://badge.fury.io/js/%40justeat%2Ff-<%= name.default %>)
[![CircleCI](https://circleci.com/gh/justeat/fozzie-components.svg?style=svg)](https://circleci.com/gh/justeat/workflows/fozzie-components)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-<%= name.default %>/badge.svg)](https://coveralls.io/github/justeat/f-<%= name.default %>)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-<%= name.default %>/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-<%= name.default %>?targetFile=package.json)

---

## Usage

### Installation

Install the module using npm or Yarn:

```sh
yarn add @justeat/f-<%= name.default %>
```

```sh
npm install @justeat/f-<%= name.default %>
```

<% if (config.isComponent) { %>

### Vue Applications

You can import it in your Vue SFC like this (please note that styles have to be imported separately):

```js
import <%= name.component %> from '@justeat/f-<%= name.default %>';
import '@justeat/f-<%= name.default %>/dist/f-<%= name.default %>.css';

export default {
    components: {
        <%= name.component %>
    }
}
```

If you are using Webpack, you can import the component dynamically to separate the `<%= name.template%>` bundle from the main `bundle.client.js`:

```js
import '@justeat/f-<%= name.default %>/dist/f-<%= name.default %>.css';

export default {
    components: {
        // …
        <%= name.component %>: () => import(/* webpackChunkName: "<%= name.template%>" */ '@justeat/f-<%= name.default %>')
    }
}
```

## Configuration

### Props

There may be props that allow you to customise its functionality.

The props that can be defined are as follows (if any):

| Prop  | Type  | Default | Description |
| ----- | ----- | ------- | ----------- |

### Events

The events that can be subscribed to are as follows (if any):

| Event | Description |
| ----- | ----------- |

## Development

Start by cloning the repository and installing the required dependencies:

```sh
$ git clone git@github.com:justeat/fozzie-components.git
$ cd fozzie-components
$ yarn
```

Change directory to the `<%= name.component %>` package:

```sh
$ cd packages/components/<%= componentCategory %>/<%= name.component %>
```

## Testing

### Unit, Integration and Contract

To test all components, run from root directory.
To test only `f-<%= name.default %>`, run from the `./fozzie-components/packages/f-<%= name.default %>` directory.

```sh
yarn test
```

### Component Tests

```bash
# Run Component tests for all components
# Note: Ensure Storybook is not running when running the following commands
cd ./fozzie-components

yarn storybook:build
yarn storybook:serve-static
yarn test-component:chrome
```

OR

```bash
# Run Component tests for f-<%= name.default %>
# Note: Ensure Storybook is not running when running the following commands
cd ./fozzie-components/packages/f-<%= name.default %>
yarn test-component:chrome
```
## Documentation to be completed once module is in stable state.

<% } %>
