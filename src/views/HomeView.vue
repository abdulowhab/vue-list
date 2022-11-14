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
import axios from 'axios';

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
    axios.get("https://my-json-server.typicode.com/Owhab/fake-api/events")
    .then(response => {
      console.log(response.data);
    })

  }
}
</script>
