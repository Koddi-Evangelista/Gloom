<template>
  <div class="container">
    <service-header />
    <service-infos />
  </div>
</template>
<script>
import ServiceInfos from "@/components/ServiceInfos.vue";
import ServiceHeader from "@/components/ServiceHeader.vue";
export default {
  name: "Services",
  components: {
    ServiceInfos,
    ServiceHeader
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #faf8f8;
  color: #496a61;
}
</style>
