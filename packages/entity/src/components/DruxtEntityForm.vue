<script>
import { default as DruxtEntity } from './DruxtEntity.vue'

/**
 * Renders a Drupal Content Entity form with submission and validation support.
 *
 * @example @lang vue
 * <DruxtEntityForm
 *   :type="resourceType"
 *   :uuid="uuid"
 *   mode="displayMode"
 *   v-on:error="onError()"
 *   v-on:reset="onReset()"
 *   v-on:submit="onSubmit()"
 * />
 *
 * @extends DruxtEntity
 * @see {@link ./DruxtEntity|DruxtEntity}
 */
export default {
  name: 'DruxtEntityForm',

  /**
   * @see {@link ./DruxtEntity|DruxtEntity}
   */
  extends: DruxtEntity,

  /**
   * Vue.js Properties.
   */
  props: {
    /**
     * Drupal display schema type, 'view' or 'form'.
     *
     * @type {('view'|'form')}
     * @default form
     */
    schemaType: {
      type: String,
      default: 'form',
    },
  },

  /**
   * Vue.js Data object.
   *
   * @property {object} response - The form submission response data.
   * @property {boolean} submitting - Whether the form is currently being submitted.
   */
  data: () => ({
    response: undefined,
    submitting: false,
  }),

  /**
   * Vue.js Computed properties.
   */
  computed: {
    /**
     * An array of errors if present in the form submission response data.
     *
     * @return {object[]}
     */
    errors: ({ response }) => (response || {}).errors,
  },

  methods: {
    /**
     * Reset event handler:
     * - Sets `model` back to `entity` value.
     * - Unsets `response` data.
     * - Emits `reset`.
     */
    onReset() {
      this.model = JSON.parse(JSON.stringify(this.entity)),
      this.response = undefined
      this.$emit('reset')
    },

    /**
     * Submit event handler:
     * - Sends data to backend via POST or PATCH.
     * - Catches errors.
     * - Emits `submit` or `error` event.
     */
    async onSubmit() {
      if (this.submitting) return false
      this.submitting = true

      let method = 'createResource'
      if (this.model.id) {
        method = 'updateResource'
      }
      this.response = await this.$druxt[method](this.model)

      // Handle the response
      if (!this.response.errors) {
        const resource = this.response.data.data
        // Update the Vuex store.
        this.$store.commit('druxt/addResource', { resource })
        this.$emit('submit', resource)
      }
      else {
        this.$emit('error', this.response)
      }

      this.submitting = false
    },
  },

  druxt: {
    ...DruxtEntity.druxt,

    /**
     * Adds a `buttons` slot to the DruxtEntity scope slots.
     *
     * @return {object}
     */
    slots(h) {
      // Use DruxtEntity to build the Field based slots.
      const scopedSlots = DruxtEntity.druxt.slots.call(this, h)

      scopedSlots.buttons = (attrs) => h(
        'DruxtEntityFormButtons',
        {
          attrs,
          on: {
            reset: this.onReset,
            submit: this.onSubmit,
          },
          props: {
            schema: this.schema || {},
          },
          ref: 'buttons',
        },
      )

      // Build default slot.
      scopedSlots.default = (attrs) => [
        ...Object.entries(this.fields).map(([id]) => scopedSlots[id](attrs)),
        scopedSlots.buttons(attrs)
      ]

      return scopedSlots
    },
  },
}
</script>
