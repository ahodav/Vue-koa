<template>
  <div>
      <form class="ui form" @submit.stop.prevent="onSubmitPressed">
          <div class="inline fields">
              <div class="field" id="email">
                  <input type="text" :placeholder="placeholder" v-model="value">
              </div>
              <div class="field" id="submit">
                  <button class="ui animated button" type="submit">
                     <div class="visible content">
                      Let's Go
                     </div>
                     <div class="hidden content">
                         <i class="right arrow icon"></i>
                     </div>
                  </button>
              </div>
          </div>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props: ['placeholder', 'onSubmit'],
  methods: {
    onSubmitPressed() {
      if (this.onSubmit && typeof this.onSubmit === 'function') {
        this.onSubmit(this.value)
      }
      console.log('preventing submit')
    }
  }

}
</script>


<style lang="less" scoped>

.field#email{
    flex-grow: 2;
    & > input {
        width: 100;
    }
}

.field#submit{
    flex-grow: 1;
}
</style>

