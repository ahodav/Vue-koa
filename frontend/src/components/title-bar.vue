<template>
<div class='ui top fixed menu'>
    <div class='ui container' v-if="mainPage">
        <a class='title item' to="/" @click.stop="scrollTo('#hero')">Site</a>
        <a class='item' to="/" @click.stop="scrollTo('#how-it-works')">How it works</a>
        <div class='right menu'>
            <a class='title item'>Sign up</a>
            <a class='title item'>Login in</a>
            <a class='title item' @click.stop="scrollTo('#tutorial')">Tutorial</a>
        </div>
    </div>
    <div class="ui container" v-else>
        <router-link class="title item" :to="{path: '/', query:{elem: 'hero'}}">Site</router-link>
        <router-link class="item" :to="{path: '/', query:{elem: 'how-it-works'}}">How it works</router-link>
        <div class="right menu">
            <router-link class="item" :to="{path: '/', query:{elem: 'signup'}}">Sign up</router-link>
            <router-link class="item" :to="{path: '/', query:{elem: 'loginin'}}">Login in</router-link>
            <router-link class="item" :to="{path: '/', query:{elem: 'tutorial'}}">Tutorial</router-link>

        </div>
    </div> 
</div> 
</template>


<script>
import Analytics from '@/utils/analytics'
import scroll from '@/scripts/scroll'

export default {
  computed: {
    mainPage() {
      return this.$route.path === '/'
    }
  },
  watch: {
    $route() {
      const elem = this.$route.query.elem
      if (elem) {
        this.scrollTo(`#${elem}`)
      }
    }
  },
  methods: {
    scrollTo(elementId) {
      Analytics.track('Navbar Item Clicked', {element: elementId})
      scroll(elementId)
    }
  }
}
</script>


<style class='less' scoped>
div.top.fixed.menu{
        background-image: linear-gradient(to right, #8863ff, #67dbff);
}

.ui.menu a.item:hover {
    color:#e3e3e3;
}

.ui.menu .item{
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
}
</style>
