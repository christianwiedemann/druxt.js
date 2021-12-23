import { shallowMount } from '@vue/test-utils'

import { DruxtViewsSortsMixin } from '../../src/mixins/sorts'

// Setup local vue instance.

const component = {
  name: 'DruxtViewsSortsTest',
  mixins: [DruxtViewsSortsMixin],
  render: () => ({})
}



test('DruxtViewsSortsMixin', async () => {
  const wrapper = shallowMount(component, {
    global: {
      plugins: [Vuex],

      // OR:
      mocks: {
        $store: store,
      }
    }
  })
  //const wrapper = mount(component, { localVue })
  expect(wrapper.vm.value).toStrictEqual(undefined)

  wrapper.vm.model = 'title'
  expect(wrapper.vm.model).toStrictEqual('title')

  await wrapper.vm.$nextTick()
  expect(wrapper.emitted().input[0]).toStrictEqual(['title'])
})
