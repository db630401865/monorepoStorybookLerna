import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  //注册依赖的组件
  components: { LgInput },
  template: '<lg-input v-model="value"></lg-input>',
  //绑定数据
  data () {
    return {
      value: 'admin'
    }
  } 
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
