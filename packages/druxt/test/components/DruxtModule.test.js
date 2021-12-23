import 'regenerator-runtime/runtime'
import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue';
import DruxtModule from '../../src/components/DruxtModule.vue'


let mocks

describe('DruxtModule component', () => {
  beforeEach(() => {
    mocks = {
      $createElement: jest.fn(),
      $fetchState: { pending: false },
      $options: { druxt: {} },
      $nuxt: {
        context: {
          isDev: false,
        },
      },
    }
  })
  test('defaults', async () => {
    mocks.$fetchState.pending = true
    const wrapper = shallowMount(DruxtModule, {global: {mocks: mocks }})
    await wrapper.vm.$options.fetch.call(wrapper.vm)

    // Data.
    expect(wrapper.vm.component).toStrictEqual({
      $attrs: {},
      is: 'DruxtWrapper',
      options: [],
      props: {},
      propsData: {},
      settings: {},
      slots: [],
    })

    // Methods.
    const wrapperData = await wrapper.vm.getWrapperData(wrapper.vm.component.is)
    expect(wrapperData).toStrictEqual({ druxt: {}, props: {} })

    expect(wrapper.vm.getModuleComponents()).toStrictEqual([])
    expect(wrapper.vm.getModulePropsData(wrapperData.props)).toStrictEqual({})

    const scopedSlots = wrapper.vm.getScopedSlots()
    expect(Object.keys(scopedSlots)).toStrictEqual([])

    const mock = {
      _init: jest.fn(),
      $options: { components: { test: jest.fn(() => ({ druxt: {}, props: {} })) }
    }}
    expect(await DruxtModule.methods.getWrapperData.call(mock, 'test')).toStrictEqual({ druxt: {}, props: {} })

    // HTML snapshot.
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('defaults - v-model', async () => {

    const Component = {
      template: "<DruxtModule v-model='model' ref='module' />",
      components: { DruxtModule },
      data: () => ({ model: null })
    }
    const wrapper = mount(Component, {global: {mocks, stubs: ['DruxtWrapper'] } })

    // Default state.
    expect(wrapper.vm.model).toStrictEqual(null)
    expect(wrapper.vm.$refs.module.component.props.value).toStrictEqual(undefined)
    expect(wrapper.vm.$refs.module.model).toStrictEqual(null)
    expect(wrapper.vm.$refs.module.value).toStrictEqual(null)

    // Change model value.
    await wrapper.setData({ model: { test: true }})

    expect(wrapper.vm.model).toStrictEqual({ test: true })
    expect(wrapper.vm.$refs.module.component.props.value).toStrictEqual({ test: true })
    expect(wrapper.vm.$refs.module.model).toStrictEqual({ test: true })
    expect(wrapper.vm.$refs.module.value).toStrictEqual({ test: true })
  })

  test('custom module - no wrapper', async () => {
    const CustomModule = {
      name: 'CustomModule',
      extends: DruxtModule,
      druxt: {
        componentOptions: () => {},
        propsData: () => ({ foo: 'bar' }),
        slots: (h) => ({ default: () => h('div', ['test'] )}),
      }
    }

    const wrapper = mount(CustomModule, {global: { mocks }, stubs: ['DruxtWrapper']})
    await wrapper.vm.$options.fetch.call(wrapper.vm)

    // Data.
    expect(wrapper.vm.component).toStrictEqual({
      $attrs: { foo: 'bar' },
      is: 'DruxtWrapper',
      options: [],
      props: {},
      propsData: { foo: 'bar' },
      settings: {},
      slots: ['default'],
    })
    // Methods.
    const wrapperData = await wrapper.vm.getWrapperData(wrapper.vm.component.is)
    expect(wrapperData).toStrictEqual({ druxt: {}, props: {} })

    expect(wrapper.vm.getModuleComponents(wrapperData.props)).toStrictEqual([])
    expect(wrapper.vm.getModulePropsData()).toStrictEqual({
      $attrs: { foo: 'bar' },
      props: {},
      propsData: { foo: 'bar' },
    })
    expect(Object.keys(wrapper.vm.getScopedSlots())).toStrictEqual(['default'])

    // HTML snapshot.
    // expect(wrapper.html()).toMatchSnapshot()
  })
  test('custom module - wrapper', async () => {
    debugger;
    const CustomModuleWrapper = {
      druxt: { foo: 'bar' },
      props: ['foo'],
      render: () => {}
    }
    shallowMount(CustomModuleWrapper, { global: {mocks} })
    const CustomModule = {
      name: 'CustomModule',
      extends: DruxtModule,
      druxt: {
        componentOptions: () => ([['wrapper']]),
        async fetchConfig() {},
        async fetchData(settings) {},
        propsData: () => ({ foo: 'bar' }),
        settings: ({}, settings) => ({ ...settings, custom: true }),
        slots: (h) => ({ default: () => h('div', ['test'] )}),
      }
    }


    const wrapper = shallowMount(CustomModule, { global: {mocks}, stubs: ['CustomModuleWrapper'] })
    await wrapper.vm.$options.fetch.call(wrapper.vm)

    // Data.
    expect(wrapper.vm.component).toStrictEqual({
      $attrs: { "foo": "bar",},
      is: 'CustomModuleWrapper',
      options: ['CustomModuleWrapper'],
      props: { },
      propsData: { foo: 'bar' },
      settings: { custom: true },
      slots: ['default'],
    })
    return;
    // Methods.
    const wrapperData = await wrapper.vm.getWrapperData(wrapper.vm.component.is)
    expect(wrapperData.druxt).toStrictEqual({ foo: 'bar' })
    expect(Object.keys(wrapperData.props)).toStrictEqual(['foo'])

    expect(wrapper.vm.getModuleComponents()).toStrictEqual([{
      global: true,
      name: 'CustomModuleWrapper',
      parts: ['Wrapper']
    }])
    expect(wrapper.vm.getModulePropsData(wrapperData.props)).toStrictEqual({
      $attrs: {},
      props: { foo: 'bar' },
    })
    expect(Object.keys(wrapper.vm.getScopedSlots())).toStrictEqual(['default'])

    // v-model
    expect(wrapper.vm.model).toBe(null)
    await wrapper.setData({ model: { test: 'true' } })
    expect(wrapper.vm.model).toStrictEqual({ test: 'true' })

    wrapper.vm.$refs.component.$emit('input', { test: false })
    expect(wrapper.vm.model).toStrictEqual({ test: false })

    // HTML snapshot.
    expect(wrapper.html()).toMatchSnapshot()
  })
/*
  test('dev mode slot', async () => {
    //mocks.$nuxt.context.isDev = true
    const wrapper = mount(DruxtModule, {global: {  mocks, stubs: ['DruxtDebug'] }})
    // await wrapper.vm.$options.fetch.call(wrapper.vm)

    // Default slot.
    await wrapper.setData({ component: {
      ...wrapper.vm.component,
      options: ['Test'],
    } })
    const slot = wrapper.vm.getScopedSlots().default.call(wrapper.vm)
    expect(slot.tag.endsWith('DruxtDebug')).toBe(true)
  })

  test('custom default slot', async () => {
    const customModule = {
      extends: DruxtModule,
      druxt: {}
    }

    const scopedSlots = { default: jest.fn() }
    const wrapper = mount(customModule, {global: { mocks, scopedSlots } })
    await wrapper.vm.$options.fetch.call(wrapper.vm)

    wrapper.vm.getScopedSlots().default.call(wrapper.vm)
    expect(scopedSlots.default).toHaveBeenCalled()

    await wrapper.setProps({ wrapper: true })
    await wrapper.vm.$options.fetch.call(wrapper.vm)
  })
*/
})
