<template>
    <div class="flex flex-row justify-between">
        <div class="text-3xl font-bold">
            iPhone
        </div>
        <div class="align-bottom">
            <h4>Designed to be loved.</h4>
        </div>
    </div>
    <video autoplay muted loop>
        <source src="../assets/images/xlarge.mp4" type="video/mp4" />
    </video>
    <div class="text-3xl font-bold">
        Get to know iPhone.
    </div>
    <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2  p-3">
                <div class="mb-3">
                    <div class="relative mx-auto">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px" />
                    </div>
                </div>
                <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
                <div class="flex justify-content-between align-items-center">
                    <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                    <span>
                        <Button icon="pi pi-heart" severity="secondary" outlined />
                        <Button icon="pi pi-shopping-cart" class="ml-2" />
                    </span>
                </div>
            </div>
        </template>
    </Carousel>
</template>


<script setup lang="ts">
</script>