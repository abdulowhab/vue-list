<template>
    <div>
        <h1> {{event?.title}} </h1>
        <p> {{event?.time}} on {{event?.date}} @ {{event?.location}} </p>
        <p> {{event?.description}} </p>
        <h3>Author: {{event?.organizer}}</h3>

    </div>
</template>
<script>
import EventService from '@/services/EventService';
export default{
    props: ['id'],
    data(){
        return{
            event: null
        }
    },

    methods(){
        console.log(this.event.title)
    },

    created(){
        // Fetch Event Data using id and set data to local event
        EventService.getEvent(this.id)
    .then(response => {
      this.event = response.data
    // console.log(response.data);
    })
    .then(error => {
      console.log(error)
    })
    }

}
</script>
<style>

</style>