<template>
  <div id="app">
    <md-button class="md-primary md-raised" @click="showDialog = true">Создать график</md-button>

    <ChartList :data="chartsList"/>

    <md-dialog class="dialog" :md-active.sync="showDialog">
      <md-dialog-title>Создать график</md-dialog-title>

      <md-dialog-content>
        <md-field>
          <label for="chart">Выберите тип графика</label>
          <md-select @input="dataUrl = ''" v-model="chartType" name="chart" id="chart">
            <md-option value="ChartPie">Pie Chart</md-option>
            <md-option value="ChartLine">Line Chart</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label for="data">Выберите источник данных</label>
          <md-select v-model="dataUrl" name="data" id="data">
            <md-option :disabled="chartType !== 'ChartPie'" value="https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047">Pie</md-option>
            <md-option :disabled="chartType !== 'ChartLine'" value="https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2" >Line</md-option>
          </md-select>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false" >Закрыть</md-button>
        <md-button :disabled="!dataUrl" class="md-primary md-raised" @click="fetchChartData" >Создать график</md-button>
      </md-dialog-actions>
      <md-progress-bar v-if="isLoading" md-mode="indeterminate"></md-progress-bar>
    </md-dialog>
  </div>
</template>

<script>
import ChartList from "@/components/ChartList";

export default {
  name: 'App',
  components: {
    ChartList,
  },

  data: () => ({
    showDialog: false,
    chartType: 'ChartPie',
    dataUrl: '',
    isLoading: false,
    chartsList: [
    ]
  }),

  methods:{
    async fetchChartData(){
      const {chartType, dataUrl} = this

      this.isLoading = true;

      await fetch(dataUrl).then(res=>res.json()).then(data=>{
        this.chartsList.unshift({type: chartType, data, id: +this.chartsList.length + 1})
      })

      this.isLoading = false;
      this.showDialog = false;
    }
  }
}
</script>

<style>

.dialog .md-dialog-container {
  min-width: 320px;
}
</style>
