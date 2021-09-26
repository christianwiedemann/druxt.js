import consola from 'consola'
import { resolve } from 'path'

import { DruxtSchema } from './schema'

/**
 * The Nuxt.js module function.
 *
 * - Adds the Schema plugin to Nuxt.js.
 * - Adds the Schema Vuex store to Nuxt.js.
 * - Builds the Schema data via the `builder:prepared` hook.
 *
 * The module function should not be used directly, but rather installed via yout Nuxt.js configuration file.
 *
 * Options are set on the root level `druxt` Nuxt.js config object.
 *
 * @example @lang js
 * // `nuxt.config.js`
 * module.exports = {
 *   modules: [
 *     'druxt-schema'
 *   ],
 *   druxt: {
 *     baseUrl: 'https://example.com'
 *   }
 * }
 *
 * @todo Document options.
 *
 * @param {object} moduleOptions - Nuxt.js module options object.
 */
const DruxtSchemaNuxtModule = function (moduleOptions = {}) {
  // Set default options.
  const options = {
    baseUrl: moduleOptions.baseUrl,
    ...(this.options || {}).druxt || {},
    schema: {
      ...((this.options || {}).druxt || {}).schema || {},
      ...moduleOptions,
    }
  }

  // Add plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/plugin.js'),
    fileName: 'druxt-schema.js',
    options
  })

  // Enable Vuex Store.
  this.options.store = true

  // Add Vuex plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/store.js'),
    fileName: 'store/druxt-schema.js',
    options
  })

  this.nuxt.hook('builder:prepared', async () => {
    // Generate schemas.
    const druxtSchema = new DruxtSchema(options.baseUrl, options)
    const { schemas } = await druxtSchema.get()

    for (const name in schemas) {
      const schema = schemas[name]
      if (typeof schema === 'undefined') continue

      this.addTemplate({
        src: resolve(__dirname, '../nuxt/schema.json'),
        fileName: `schemas/${name}.json`,
        options: { schema }
      })
    }

    consola.success('Druxt schema generated')
  })
}

DruxtSchemaNuxtModule.meta = require('../package.json')

export { DruxtSchemaNuxtModule }
