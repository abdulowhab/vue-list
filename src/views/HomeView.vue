<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Events v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line
import Events from '@/components/Events.vue';
import EventService from '../../src/services/EventService'

export default {
  name: 'HomeView',
  components: {
    Events
  },
  data(){
    return{
      events: null
    }
  },
  created(){
    EventService.getEvents()
    .then(response => {
      this.events = response.data
    })
    .then(error => {
      console.log(error)
    })

  }
}
</script>
