# DruxtMenu

[![npm](https://badgen.net/npm/v/druxt-menu)](https://www.npmjs.com/package/druxt-menu)
[![CircleCI](https://circleci.com/gh/druxt/druxt-menu.svg?style=svg)](https://circleci.com/gh/druxt/druxt-menu)
[![Known Vulnerabilities](https://snyk.io/test/github/druxt/druxt-menu/badge.svg?targetFile=package.json)](https://snyk.io/test/github/druxt/druxt-menu?targetFile=package.json)
[![codecov](https://codecov.io/gh/druxt/druxt-menu/branch/develop/graph/badge.svg)](https://codecov.io/gh/druxt/druxt-menu)

> Decoupled Drupal Menus Vue.js component system.

```vue
<DruxtMenu name="main" depth="2" />
```

## Links

- DruxtJS: https://druxtjs.org
- Documentation: https://menu.druxtjs.org/
- Community Discord server: https://discord.druxtjs.org

## Install

`$ npm install druxt-menu`

## Usage

Add module to `nuxt.config.js`

```js
module.exports = {
  modules: [
    'druxt-menu',
  ],

  druxt: {
    baseUrl: 'https://demo-api.druxtjs.org',
    menu: {
      query: {
        requiredOnly: true,
        fields: [],
      },
    },
  },
}
```

## Options

### Druxt Menu options

These options are specific to this module.

| Option | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `menu.jsonApiMenuItems` | `boolean` | No | `false` | Use the Drupal [JSON:API Menu Items](https://www.drupal.org/project/jsonapi_menu_items) module resource. |
| `menu.query.fields` | `string[]` | No | `false` | An array of fields to filter all JSON:API Menu queries.
| `menu.query.requiredOnly` | `boolean` | No | `false` | Whether to automatically filter to module defined minimum required fields. |

### Base Druxt options

These options are available to all Druxt modules.

| Option | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `axios` | `object` | No | `{}` | [Axios instance settings](https://github.com/axios/axios#axioscreateconfig). |
| `baseUrl` | `string` | Yes | `null` | Base URL for the Drupal installation. |
| `endpoint` | `string` | No | `/jsonapi` | JSON:API Endpoint of the Drupal installation. |
