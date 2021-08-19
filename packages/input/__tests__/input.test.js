import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('lg-input', () => {
  test('input-text', () => {
    const wrapper = mount(input)
    expect(wrapper.html()).toContain('input type="text"')
  })
  
  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    //生成属性props的value值。
    //使用toBe判断props的value值是否是admin
    expect(wrapper.props('value')).toBe('admin')
  })

  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    //第一次调用的时候生成一个快照文件__snapshots__，第二次运行的时候就会和快照的文件对比
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
