<template>
  <div class="testimonials ui segments">
      <div  class="testimonial ui segment" v-for="tst in testimonials" :key="+tst">
        <div class="image">
          <img class="ui tiny centered aligned circular image" :src="tst.image"></img>
        </div>
        <div class="content">
        <span class="testimonial description">"{{ tst.text }}"</span>
        <h4 class="ui heading testimonial name"> </h4>
        </div>
      </div>
  </div>
</template>

<script>
import Amy from '@/assets/pexels1.jpeg'
import Josh from '@/assets/pexels2.jpeg'
import Orest from '@/assets/pexels3.jpeg'

export default {
  data() {
    const amyText = 'Some text for Amy Моделювання систем (лаб) 1 підгрупа / Обробка зображень'
    const joshText = 'Some text for Josh Моделювання систем (лаб) 1 підгрупа / Обробка зображень'
    const orestText = 'Some text for Orest Моделювання систем (лаб) 1 підгрупа / Обробка зображень'

    return {
      testimonials: [{
        name: 'Amy',
        text: amyText,
        image: Amy
      }, {
        name: 'Josh',
        text: joshText,
        image: Josh
      }, {
        name: 'Orest',
        text: orestText,
        image: Orest
      }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
div.testimonials {
  display: block;
  text-align: center; 
}

div.testimonial {
  margin-bottom: 40px;
  background-color: #ADEAEA ; 
}

img.ui.tiny.centered.circular.image {
  margin-top: 1em;
}

span.testimonial.description {
  margin-top: 2em;
}


</style>
 
