<template>
    <div>
        <h2>哈哈哈</h2>
        <button @click="count++">笑了{{count}}次</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count:0
            }
        }
    }
</script>

<style scoped>
    h2{
        color: aqua;
    }
</style>