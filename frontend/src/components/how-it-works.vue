<template>
<div class="ui container how-it-works">
  <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="column">
          <h1 class="ui center aligned header">How it works</h1>
          </div>
          </div>  
          <div class="step equal width row">
            <div  class="step column" v-for="step in steps" :key="+step">
              <img class="ui small centered circular image" :src="step.image"/>
              <h2 class="ui header">{{ step.title }}</h2>
              <span>{{ step.description }}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
.how-it-works {
  text-align: center;
  padding: 5em;
}

.step.row {
  margin: 4em 0;
}

.step.column {
  & > h2 {
    font-size: 1.9em;
  }

  & > span {
    font-size: 1.3em;
  }

h1.title {
  font-size: 2.5rem;
}
} 
</style>


<script>

import search from '@/assets/search.svg'
import chat from '@/assets/chat.svg'
import people from '@/assets/people.svg'

export default {
  data() {
    return {
      steps: [{
        title: 'Search',
        description: 'Type what subject you want tutoting on',
        image: search
      }, {
        title: 'Message',
        description: 'Once you\'ve found the right tutor, drop them a message and arrange a lesson',
        image: chat
      }, {
        title: 'Learn',
        description: 'Become an expert through the use of teaching!',
        image: people
      }]
    }
  }
}
</script>

