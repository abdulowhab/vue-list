<!-- eslint-disable vue/multi-word-component-names -->
<template>
        <p> {{event.time}} on {{event.date}} @ {{event.location}} </p>
        <p> {{event.description}} </p>
        <h3>Author: {{event.organizer}}</h3>
</template>
<script>
export default{
    components: [
    ],
    props: ['event'],
    

}
</script>
<style>

</style>