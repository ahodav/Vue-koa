<template>
<div class="tutorial">
    <div class="ui container">
        <div class="content">
            <h1 class="ui center aligned inverted header">Tutorial</h1>
        </div>
        <transition name="fade" mode="out-in">
        <div v-if="signedUp">
            <p class="submit message">Thanks for siging up.</p>
        </div>
        <form class="ui inverted form" novalidate @submit.stop.prevent="postInterest" v-else>
            <div class="two fields">
                <div class="field">
                    <label>Name</label>
                    <input type="text" placeholder="First Name" v-model="name">
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" v-model="email">
                </div>
            </div>  
            <div class="two fields">
                <div class="field">
                    <label>Location</label>
                    <input type="text" placeholder="Nearest City" v-model="location">
                </div>
                <div class="field">
                    <label>Subject</label>
                    <input type="text" placeholder="I Teach..." v-model="subject">
                </div>
            </div>
            <div class="field">
                    <button class="ui right floated button">Sign me up</button>
            </div>    
        </form>
        </transition>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      location: '',
      subject: '',
      signedUp: false
    }
  },

  methods: {
    postInterest: async function() {
      const data = {
        name: this.name,
        email: this.email,
        location: this.location,
        subject: this.subject,
        type: 'tutor'
      }

      try {
        const result = await this.$http.post('/api/interests', data)
        console.log(result)
      } catch (error) {
        console.log(error)
      }

      this.signedUp = true
    }
  }
}
</script>


<style lang="less" scoped>
@import '~@/styles/slices.less';
@import '~@/styles/transitions.less';


@tutorColor: #006978;

div.tutorial {
    background-image: linear-gradient(to bottom, @tutorColor,#4DB6AC);
    padding: 5em;
    padding-bottom: 13em;
    margin-bottom: -5em;
    .sliceTop(@tutorColor);
}

div.content {
    text-align: center;
    color: white;
    font-size: 1.3em;
}

form.ui.form {
    margin-top: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;  
}

h1.ui.header {
    font-size: 2.5rem;
}

p.submit.message {
    color: white;
    text-align: center; 
    margin-top: 3em;
    font-size: 1.4em;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}

</style>
