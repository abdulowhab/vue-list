<template>
  <router-link class="event-link" :to="{name: 'EventDetails', params: {id: event.id}}">
    <div class="event-card">
      <span>@ {{event.time}} on {{event.date}}</span>
      <h1>{{event.title}}</h1>
  </div>
  </router-link>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Events',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.event-card{
  padding: 20px;
  width: 40%;
  cursor: pointer;
  border: 1px solid black;
  margin: 10px auto;
}

.event-card:hover{
  transform: scale(1.01);
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2);
}

.event-link{
  color: #2c3e50;
  text-decoration: none;
}
</style>
