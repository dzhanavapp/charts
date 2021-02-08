<template>
  <div class="pie">
    <DxPieChart
        :data-source="data"
        palette="Bright"
        title="Pie Chart"
        @point-click="pointClickHandler($event)"
        @legend-click="legendClickHandler($event)"
    >
      <DxSeries
          argument-field="Группа"
          value-field="Доля"
      >
        <DxLabel :visible="true">
          <DxConnector
              :visible="true"
              :width="1"
          />
        </DxLabel>
      </DxSeries>
      <DxSize :width="500"/>
      <DxExport :enabled="true"/>
    </DxPieChart>
  </div>
</template>

<script>

import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport
} from 'devextreme-vue/pie-chart';

export default {
  name: "ChartPie",
  props: {
    data: Array
  },
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport
  },
  methods: {
    pointClickHandler(e) {
      this.toggleVisibility(e.target);
    },
    legendClickHandler(e) {
      let arg = e.target,
          item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
    },
    toggleVisibility(item) {
      item.isVisible() ? item.hide() : item.show();
    }
  },
}
</script>

<style scoped>
.pie {
  height: 440px;
}

.pie >>> * {
  margin: 0 auto;
}
</style>