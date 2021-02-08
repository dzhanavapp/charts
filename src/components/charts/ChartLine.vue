<template>
  <DxChart
      id="chart"
      :data-source="data"
      palette="Violet"
  >
    <DxCommonSeriesSettings
        type="line"
        argument-field="Дата"
    />
    <DxSeries
        name="Процент"
        value-field="Процент"
    />
    <DxMargin :bottom="20"/>
    <DxArgumentAxis
        :value-margins-enabled="false"
        discrete-axis-division-mode="crossLabels"
    >
      <DxGrid :visible="true"/>
    </DxArgumentAxis>
    <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="bottom"
    />
    <DxExport :enabled="true"/>
    <DxTitle text="Line Chart">
      <DxSubtitle text="Percentage-to-month ratio"/>
    </DxTitle>
    <DxTooltip :enabled="true"/>
  </DxChart>
</template>

<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
} from 'devextreme-vue/chart';

export default {
  name: "ChartLine",
  props:{
    data: Array
  },
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip,
  }
}
</script>

<style scoped>

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.option {
  margin-top: 10px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option >>> span {
  margin-right: 14px;
}

.option >>> .dx-widget {
  display: inline-block;
  vertical-align: middle;
}
</style>