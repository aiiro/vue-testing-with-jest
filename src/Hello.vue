<template>
    <div>
        <h1>{{ message }}, {{ name }}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                message: 'Hello',
            }
        },
        computed: {
            greet() {
                return this.message + ', ' + this.name;
            }
        },
        methods: {
            greetToUpper() {
                return this.greet.toUpperCase();
            }
        }
    }
</script>