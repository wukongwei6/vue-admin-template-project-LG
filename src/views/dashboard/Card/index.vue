<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
       <el-card>
         <Detail title="销售总额" count="￥ 126560">
           <template slot="charts">
             <span>周同比&nbsp;&nbsp;56.67  &nbsp;
               <svg t="1657291561179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6394" width="16" height="16"><path d="M512 405.333333L298.666667 618.666667h426.666666L512 405.333333z" fill="#1afa29" p-id="6395"></path></svg></span>
           
             &nbsp;
             <span>日同比&nbsp;&nbsp;19.96% &nbsp;
               <svg t="1657291515684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5240" width="16" height="16"><path d="M512 618.666667L298.666667 405.333333h426.666666L512 618.666667z" fill="#d81e06" p-id="5241"></path></svg>
               </span>
           </template>
           <template slot="footer">
               <span>日销售额￥ 12423</span>
           </template>
         </Detail>
       </el-card>
        </el-col></el-col>
      <el-col :span="6">
         <el-card>
         <Detail title="访问量"  count="88460">
           <template slot="charts">
            <lineCharts></lineCharts>
           </template>
           <template slot="footer">
               <span>日访问量 1234</span>
           </template>
         </Detail>
       </el-card>
      </el-col>
      <el-col :span="6">
         <el-card>
         <Detail title="支付笔数"  count="88460">
           <template slot="charts">
              <barCharts></barCharts>
           </template>
           <template slot="footer">
               <span>转化率64%</span>
           </template>
         </Detail>
       </el-card>
      </el-col>
      <el-col :span="6">
         <el-card>
         <Detail title="运营活动效果"  count="78%">
           <template slot="charts">
               <progressCharts></progressCharts>
           </template>
           <template slot="footer">
             <span>周同比&nbsp;&nbsp;56.67  &nbsp;<svg t="1657291561179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6394" width="16" height="16"><path d="M512 405.333333L298.666667 618.666667h426.666666L512 405.333333z" fill="#1afa29" p-id="6395"></path></svg></span>
             &nbsp;
             <span>日同比&nbsp;&nbsp;19.96% &nbsp;<svg t="1657291515684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5240" width="16" height="16"><path d="M512 618.666667L298.666667 405.333333h426.666666L512 618.666667z" fill="#d81e06" p-id="5241"></path></svg></span>
           </template>
         </Detail>
       </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import lineCharts from "./lineChart";
import barCharts from "./barCharts";
import progressCharts from "./progressCharts";

export default {
  name: "Card",
  components: { Detail, lineCharts, barCharts, progressCharts },
};
</script>

<style>
</style>