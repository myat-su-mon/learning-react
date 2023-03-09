<template>
    <div class="d-flex border border-primary p-3 m-3 rounded align-items-center justify-content-between">
    <h1 class="mb-0">Counter : {{ counter }}</h1>
        <div class="">
            <button @click="sub" class="btn btn-primary me-2">-</button>
            <button @click="add" class="btn btn-primary">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: this.start,
        };
    },
    props: ["start", "index"],
    methods: {
        add() {
            // event emit
            this.counter++;
            this.$emit("aaa", this.counter, this.index);
        }, 
        sub() {
            return this.counter--;
        }
    },
}
</script>

<style scoped>
</style>