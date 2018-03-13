<template>
    <div>
       <hero id="hero"></hero>
       <how-it-works id="how-it-works"></how-it-works>
       <tutorial id="tutorial"></tutorial>
    </div>
</template>

<script>
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import Tutorial from '@/components/tutorial'
import scroll from '@/scripts/scroll'

export default {
  components: {
    Hero,
    HowItWorks,
    Tutorial
  },
  watch: {
    $route() {
      this.checkElem()
    }
  },
  methods: {
    checkElem() {
      const elem = this.$route.query.elem
      if (elem) {
        scroll(`{#${elem}}`)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.checkElem()
    })
  }
}
</script>
