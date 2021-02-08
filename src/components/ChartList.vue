<template>
  <div class="chart">
    <div v-for="chart of data" :key="chart.id">
      <component :is="chart.type" :data="chart.data"></component>
    </div>
  </div>
</template>

<script>
import ChartPie from "@/components/charts/ChartPie";
import ChartLine from "@/components/charts/ChartLine";

export default {
  name: "ChartList",
  components: {
    ChartLine,
    ChartPie,
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>