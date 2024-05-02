<template>
    <Menubar :model="menuItems" />
</template>
<script lang="ts">
    import { defineComponent } from "vue";
    import Menubar from "primevue/menubar";

    export default defineComponent({
        name: "App",
        components: {
            Menubar,
        },
        setup() {
            return {
                menuItems: [
                    {
                        to: "/Store",
                        label: "Store",
                    },
                    {
                        to: "/Mac",
                        label: "Mac",
                    },
                    {
                        to: "/iPad",
                        label: "iPad",
                    },
                    {
                        to: "/iPhone",
                        label: "iPhone",
                    },
                    {
                        to: "/Watch",
                        label: "Watch",
                    },
                    {
                        to: "/AirPods",
                        label: "AirPods",
                    },
                    {
                        to: "/TV & Home",
                        label: "TV & Home",
                    },
                    {
                        to: "/Entertainment",
                        label: "Entertainment",
                    },
                    {
                        to: "/Accessories",
                        label: "Accessories",
                    },
                    {
                        to: "/Support",
                        label: "Support",
                    },
                ],
            };
        },
    });
</script>
<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .app-container {
        text-align: center;
    }

    body #app .p-button {
        margin-left: 0.2em;
    }

    form {
        margin-top: 2em;
    }
</style>