## 联动

联动是表单最关心的问题之一，so-form将联动的选择全部都能力全部交给开发者自行通过回调解决，提供了最大限度的自由度

### DEMO

<box>
  <vuecode md>
    <div slot="demo">
      <demos-act></demos-act>
    </div>
    <div slot="code">

```html
<template>
  <iForm label-width="100px" :model="model">
    <p>输入input，选中radio</p>
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</template>

<script>
export default {
  data: () => ({
    model: {
      job: '',
      isNickMsg: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', on: {
            input: (e) => {
              this.model.isNickMsg = 1
            }
          }
        },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]}
      ]
    }
  }
}
</script>

```

  </div>
  </vuecode>
</box>