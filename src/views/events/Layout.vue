<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if = "event">
        <h1> {{event.title}} </h1>
        <div id = "nav">
            <router-link :to = "{name: 'EventDetails'}">
                Details
            </router-link> |
            <router-link :to = "{name: 'EventRegister'}">
                Register
            </router-link> |
            <router-link :to = "{name: 'EventEdit'}">
                Edit
            </router-link>

        </div>
        <router-view :event = "event" />
        
    </div>
</template>
<script>
import EventService from '@/services/EventService';
export default{
    components: [
    ],
    props: ['id'],
    data(){
        return{
            event: null,
            error: null
        }
    },

    methods(){
        // console.log(this.event.title)
    },

    created(){
        // Fetch Event Data using id and set data to local event
        EventService.getEvent(this.id)
    .then(response => {
      this.event = response.data
    // console.log(response.data);
    })
    .then(error => {
        this.error = error
    //   console.log(error)
    })
    }

}
</script>
<style>

</style>