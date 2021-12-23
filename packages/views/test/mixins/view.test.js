import { shallowMount } from '@vue/test-utils'

import { DruxtViewsViewMixin } from '../../src'

const component = {
  name: 'DruxtViewTest',
  mixins: [DruxtViewsViewMixin],
  render: () => ({})
}

test('DruxtViewsViewMixin', async () => {
  const wrapper = shallowMount(component);
  expect(wrapper.vm.value).toStrictEqual({ page: null })

  wrapper.vm.model = { page:  1 }
  expect(wrapper.vm.model).toStrictEqual({ page: 1 })

  await wrapper.vm.$nextTick()
  expect(wrapper.emitted().input).toBeTruthy()
})
