<<template>
    <div class='hero'>
        <div class='content ui container stackable grid'>
            <div class='two column row'>
                <div class='column'>
                    <div class="copy">
                        <h1>looking to learn 
                            <transition name="fade" mode="out-in">
                            <span class="subject" :key="subject">{{ subject }}</span>
                            </transition>
                            ?</h1>
                        <span>Send Email</span> 
                    </div>
                    <div class="sign-up-container">
                     <sign-up placeholder='Type your subject' :onSubmit="onSearchPressed"></sign-up>
                    </div>
                </div>
                <div class='column'>
                  <testimonials></testimonials>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SignUp from '@/components/signup'
import Testimonials from '@/components/testimonials'
import Analytics from '@/utils/analytics'
import NProgress from 'nprogress'

export default {
  data() {
    return {
      subjects: ['first', 'second', 'third'],
      curentIndex: 0
    }
  },

  computed: {
    subject() {
      const length = this.subjects.length
      const index = this.curentIndex % length
      return this.subjects[index]
    }
  },

  methods: {
    incrementSubject() {
      this.curentIndex = this.curentIndex + 1
    },
    onSearchPressed(value) {
      NProgress.start()
      Analytics.track('Subject searched', { subject: value })
      window.setTimeout(() => {
        NProgress.done()
        this.$router.push({ path: '/register', query: { subject: value } })
      }, 1000)
    }
  },

  components: {
    SignUp,
    Testimonials
  },

  created() {
    window.setInterval(this.incrementSubject, 3.3 * 500)
  }
}
</script>


<style lang="less" scoped>

@import '~@/styles/defaults.less';
@import '~@/styles/transitions.less';

div.hero{
    background-image: linear-gradient(to right, #8863ff, #67dbff);
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5em;
    padding-top: 5em;
    position: relative;
    box-sizing: normal;
    padding-bottom: @slant-height;
  &:after{
      content: '';
      position: absolute;
      z-index: 1;
      pointer-events: none;
      bottom: 0;
      left: 0;
      width: 100%;
      background-size: cover;
      border-bottom: @slant-height solid white;
      border-left: 100vw solid transparent;
  }

.hero > .content {
  display: flex;
  align-items: center;
}

.ui.grid > .row > div.column {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
}

div.copy{
  font-size: 1.5em;
  color: white;
  flex-direction: column;
  margin-bottom: 2em;
}
span.subject {
    color: black;
}

}
</style>
