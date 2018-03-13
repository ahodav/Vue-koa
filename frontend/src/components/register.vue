<template>
<div class="register">
    <div class="ui center aligned container content"> 
        <h1 class="ui header">We are getting ready to launch!</h1>
        <p>Share your contact information.</p>
    </div>
    <transition name="fade" mode="out-in">
    <div class="ui center aligned container details" v-if="hasRegistered" key="para">
        <p>Thanks for your registering</p>
    </div>
    <div class="ui container details" key="form" v-else>
        <form class="ui form" @submit.stop.prevent="postInterest" novalidate>
           
                <div class="field">
                    <label>Name</label>
                    <input type="text" placeholder="Name" v-model="name">
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" v-model="email">
                </div>
                
            <button class="ui button" type="submit">Keep me notified</button>
        </form>
    </div>
    </transition>
</div>  
</template>

<script>
import Analytics from '@/utils/analytics'

export default {
  data() {
    return {
      name: '',
      email: '',
      hasRegistered: false
    }
  },
  methods: {
    async postInterest() {
      const subject = this.$route.path.query
      const data = {
        name: this.name,
        email: this.email,
        type: 'student',
        subject: subject
      }

      const eventData = subject ? { subject } : {}
      Analytics.track('Student registered', eventData)

      try {
        await this.$http.post('/api/interests', data)
      } catch (err) {
        console.log(err)
      }

      this.hasRegistered = true
    }
  }
}
</script>


<style lang="less" scoped>
@import '~@/styles/transitions.less';


div.register {
    padding-top: 5em; 
    min-height: 79vh;
    margin-bottom: -8vh;
    background-image: linear-gradient(to right, #BBDEFB, #E3F2FD);
    & > div.content {
        & > h1.ui.header {
            margin-top: 1em;
            font-size: 1.8em;
        }

        & > p {
            font-size: 1.2em;
        } 
    } 
}

div.ui.container.details {
    padding: 5em;
    & > form {
        margin-left: auto;
        margin-right: auto;
        max-width: 450px;
    } 
    & > p {
        padding-top: 2.8em;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.4em;
    }
}

.ui.button {
    background-color: #BDBDBD
}
</style>

