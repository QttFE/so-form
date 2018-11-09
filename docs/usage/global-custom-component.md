## 注册全局组件type

在复杂业务中，不可避免会有很多个性化的需求，需要个性化的组件，q-form提供了注册全局自定义组件的能力，能够应付各种场景。

::: tip
ps: 组件双向数据绑定能力跟组件的各种状态都需要自行编写
:::

<box>
  <vuecode md>
    <div slot="demo">
      <demos-global-custom-component/>
    </div>
    <div slot="code">

```js
  //  main.js 内
  Vue.use(qform, {
    source: Element,
    // 注册全局组件type
    components: {
      customComponent: custom
    }
  })

  function custom (h) {
    return (
    <div>
      <div>这块区域是全局组件</div>
      <input type="text"/>
      <span>custom global component</span>
    </div>)
  }

```
---

```html
  <template>
    <iForm label-width="100px" :model="model">
      <iFormRows :rows="rows"></iFormRows>
    </iForm>
  </template>

  <script>
  export default {
    name: 'app',
    data: () => ({
      model: {
      }
    }),
    computed: {
      rows (h) {
        return [
          // name不写也无妨
          { label: '全局组件', name: 'job', type: 'customComponent' },
        ]
      }
    }
  }
  </script>
```

  </div>
  </vuecode>
</box>