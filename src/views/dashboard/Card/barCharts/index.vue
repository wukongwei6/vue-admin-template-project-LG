<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
  mounted() {
    let lineCharts = echarts.init(this.$refs.charts);
    lineCharts.setOption({
      xAxis: {
        show: false,
        type: "category",
      },
      yAxis: { show: false },
      series: [
        {
          type: "bar",
          // smooth: true,
          data: [88, 123, 99, 77, 55, 61, 44, 55, 99, 44, 55, 21, 175, 22],
          color: "skyblue",
        },
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      toolTip: true,
    });
  },
};
</script>

<style>
.charts {
  width: 100%;
  height: 100%;
}
</style>