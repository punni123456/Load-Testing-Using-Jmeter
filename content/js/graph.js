/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1620.0, "minX": 0.0, "maxY": 80952.0, "series": [{"data": [[0.0, 1620.0], [0.1, 1620.0], [0.2, 1620.0], [0.3, 1620.0], [0.4, 1620.0], [0.5, 1620.0], [0.6, 1620.0], [0.7, 1620.0], [0.8, 2033.0], [0.9, 2033.0], [1.0, 2033.0], [1.1, 2033.0], [1.2, 2033.0], [1.3, 2033.0], [1.4, 2033.0], [1.5, 2508.0], [1.6, 2508.0], [1.7, 2508.0], [1.8, 2508.0], [1.9, 2508.0], [2.0, 2508.0], [2.1, 2508.0], [2.2, 2508.0], [2.3, 3626.0], [2.4, 3626.0], [2.5, 3626.0], [2.6, 3626.0], [2.7, 3626.0], [2.8, 3626.0], [2.9, 3626.0], [3.0, 3685.0], [3.1, 3685.0], [3.2, 3685.0], [3.3, 3685.0], [3.4, 3685.0], [3.5, 3685.0], [3.6, 3685.0], [3.7, 3685.0], [3.8, 4227.0], [3.9, 4227.0], [4.0, 4227.0], [4.1, 4227.0], [4.2, 4227.0], [4.3, 4227.0], [4.4, 4227.0], [4.5, 4650.0], [4.6, 4650.0], [4.7, 4650.0], [4.8, 4650.0], [4.9, 4650.0], [5.0, 4650.0], [5.1, 4650.0], [5.2, 4894.0], [5.3, 4894.0], [5.4, 4894.0], [5.5, 4894.0], [5.6, 4894.0], [5.7, 4894.0], [5.8, 4894.0], [5.9, 4894.0], [6.0, 5345.0], [6.1, 5345.0], [6.2, 5345.0], [6.3, 5345.0], [6.4, 5345.0], [6.5, 5345.0], [6.6, 5345.0], [6.7, 5887.0], [6.8, 5887.0], [6.9, 5887.0], [7.0, 5887.0], [7.1, 5887.0], [7.2, 5887.0], [7.3, 5887.0], [7.4, 5887.0], [7.5, 6137.0], [7.6, 6137.0], [7.7, 6137.0], [7.8, 6137.0], [7.9, 6137.0], [8.0, 6137.0], [8.1, 6137.0], [8.2, 8163.0], [8.3, 8163.0], [8.4, 8163.0], [8.5, 8163.0], [8.6, 8163.0], [8.7, 8163.0], [8.8, 8163.0], [8.9, 8237.0], [9.0, 8237.0], [9.1, 8237.0], [9.2, 8237.0], [9.3, 8237.0], [9.4, 8237.0], [9.5, 8237.0], [9.6, 8237.0], [9.7, 8452.0], [9.8, 8452.0], [9.9, 8452.0], [10.0, 8452.0], [10.1, 8452.0], [10.2, 8452.0], [10.3, 8452.0], [10.4, 8522.0], [10.5, 8522.0], [10.6, 8522.0], [10.7, 8522.0], [10.8, 8522.0], [10.9, 8522.0], [11.0, 8522.0], [11.1, 8522.0], [11.2, 8570.0], [11.3, 8570.0], [11.4, 8570.0], [11.5, 8570.0], [11.6, 8570.0], [11.7, 8570.0], [11.8, 8570.0], [11.9, 8907.0], [12.0, 8907.0], [12.1, 8907.0], [12.2, 8907.0], [12.3, 8907.0], [12.4, 8907.0], [12.5, 8907.0], [12.6, 8940.0], [12.7, 8940.0], [12.8, 8940.0], [12.9, 8940.0], [13.0, 8940.0], [13.1, 8940.0], [13.2, 8940.0], [13.3, 8940.0], [13.4, 9673.0], [13.5, 9673.0], [13.6, 9673.0], [13.7, 9673.0], [13.8, 9673.0], [13.9, 9673.0], [14.0, 9673.0], [14.1, 9702.0], [14.2, 9702.0], [14.3, 9702.0], [14.4, 9702.0], [14.5, 9702.0], [14.6, 9702.0], [14.7, 9702.0], [14.8, 9702.0], [14.9, 10099.0], [15.0, 10099.0], [15.1, 10099.0], [15.2, 10099.0], [15.3, 10099.0], [15.4, 10099.0], [15.5, 10099.0], [15.6, 10237.0], [15.7, 10237.0], [15.8, 10237.0], [15.9, 10237.0], [16.0, 10237.0], [16.1, 10237.0], [16.2, 10237.0], [16.3, 10370.0], [16.4, 10370.0], [16.5, 10370.0], [16.6, 10370.0], [16.7, 10370.0], [16.8, 10370.0], [16.9, 10370.0], [17.0, 10370.0], [17.1, 10545.0], [17.2, 10545.0], [17.3, 10545.0], [17.4, 10545.0], [17.5, 10545.0], [17.6, 10545.0], [17.7, 10545.0], [17.8, 10799.0], [17.9, 10799.0], [18.0, 10799.0], [18.1, 10799.0], [18.2, 10799.0], [18.3, 10799.0], [18.4, 10799.0], [18.5, 10799.0], [18.6, 10859.0], [18.7, 10859.0], [18.8, 10859.0], [18.9, 10859.0], [19.0, 10859.0], [19.1, 10859.0], [19.2, 10859.0], [19.3, 11519.0], [19.4, 11519.0], [19.5, 11519.0], [19.6, 11519.0], [19.7, 11519.0], [19.8, 11519.0], [19.9, 11519.0], [20.0, 12330.0], [20.1, 12330.0], [20.2, 12330.0], [20.3, 12330.0], [20.4, 12330.0], [20.5, 12330.0], [20.6, 12330.0], [20.7, 12330.0], [20.8, 13021.0], [20.9, 13021.0], [21.0, 13021.0], [21.1, 13021.0], [21.2, 13021.0], [21.3, 13021.0], [21.4, 13021.0], [21.5, 13373.0], [21.6, 13373.0], [21.7, 13373.0], [21.8, 13373.0], [21.9, 13373.0], [22.0, 13373.0], [22.1, 13373.0], [22.2, 13373.0], [22.3, 13858.0], [22.4, 13858.0], [22.5, 13858.0], [22.6, 13858.0], [22.7, 13858.0], [22.8, 13858.0], [22.9, 13858.0], [23.0, 13895.0], [23.1, 13895.0], [23.2, 13895.0], [23.3, 13895.0], [23.4, 13895.0], [23.5, 13895.0], [23.6, 13895.0], [23.7, 13895.0], [23.8, 14441.0], [23.9, 14441.0], [24.0, 14441.0], [24.1, 14441.0], [24.2, 14441.0], [24.3, 14441.0], [24.4, 14441.0], [24.5, 14492.0], [24.6, 14492.0], [24.7, 14492.0], [24.8, 14492.0], [24.9, 14492.0], [25.0, 14492.0], [25.1, 14492.0], [25.2, 14651.0], [25.3, 14651.0], [25.4, 14651.0], [25.5, 14651.0], [25.6, 14651.0], [25.7, 14651.0], [25.8, 14651.0], [25.9, 14651.0], [26.0, 14680.0], [26.1, 14680.0], [26.2, 14680.0], [26.3, 14680.0], [26.4, 14680.0], [26.5, 14680.0], [26.6, 14680.0], [26.7, 14800.0], [26.8, 14800.0], [26.9, 14800.0], [27.0, 14800.0], [27.1, 14800.0], [27.2, 14800.0], [27.3, 14800.0], [27.4, 14800.0], [27.5, 15284.0], [27.6, 15284.0], [27.7, 15284.0], [27.8, 15284.0], [27.9, 15284.0], [28.0, 15284.0], [28.1, 15284.0], [28.2, 15525.0], [28.3, 15525.0], [28.4, 15525.0], [28.5, 15525.0], [28.6, 15525.0], [28.7, 15525.0], [28.8, 15525.0], [28.9, 15802.0], [29.0, 15802.0], [29.1, 15802.0], [29.2, 15802.0], [29.3, 15802.0], [29.4, 15802.0], [29.5, 15802.0], [29.6, 15802.0], [29.7, 16940.0], [29.8, 16940.0], [29.9, 16940.0], [30.0, 16940.0], [30.1, 16940.0], [30.2, 16940.0], [30.3, 16940.0], [30.4, 16943.0], [30.5, 16943.0], [30.6, 16943.0], [30.7, 16943.0], [30.8, 16943.0], [30.9, 16943.0], [31.0, 16943.0], [31.1, 16943.0], [31.2, 17110.0], [31.3, 17110.0], [31.4, 17110.0], [31.5, 17110.0], [31.6, 17110.0], [31.7, 17110.0], [31.8, 17110.0], [31.9, 17110.0], [32.0, 17110.0], [32.1, 17110.0], [32.2, 17110.0], [32.3, 17110.0], [32.4, 17110.0], [32.5, 17110.0], [32.6, 17229.0], [32.7, 17229.0], [32.8, 17229.0], [32.9, 17229.0], [33.0, 17229.0], [33.1, 17229.0], [33.2, 17229.0], [33.3, 17229.0], [33.4, 17235.0], [33.5, 17235.0], [33.6, 17235.0], [33.7, 17235.0], [33.8, 17235.0], [33.9, 17235.0], [34.0, 17235.0], [34.1, 17276.0], [34.2, 17276.0], [34.3, 17276.0], [34.4, 17276.0], [34.5, 17276.0], [34.6, 17276.0], [34.7, 17276.0], [34.8, 17276.0], [34.9, 17927.0], [35.0, 17927.0], [35.1, 17927.0], [35.2, 17927.0], [35.3, 17927.0], [35.4, 17927.0], [35.5, 17927.0], [35.6, 18092.0], [35.7, 18092.0], [35.8, 18092.0], [35.9, 18092.0], [36.0, 18092.0], [36.1, 18092.0], [36.2, 18092.0], [36.3, 18492.0], [36.4, 18492.0], [36.5, 18492.0], [36.6, 18492.0], [36.7, 18492.0], [36.8, 18492.0], [36.9, 18492.0], [37.0, 18492.0], [37.1, 18552.0], [37.2, 18552.0], [37.3, 18552.0], [37.4, 18552.0], [37.5, 18552.0], [37.6, 18552.0], [37.7, 18552.0], [37.8, 18560.0], [37.9, 18560.0], [38.0, 18560.0], [38.1, 18560.0], [38.2, 18560.0], [38.3, 18560.0], [38.4, 18560.0], [38.5, 18560.0], [38.6, 18810.0], [38.7, 18810.0], [38.8, 18810.0], [38.9, 18810.0], [39.0, 18810.0], [39.1, 18810.0], [39.2, 18810.0], [39.3, 18888.0], [39.4, 18888.0], [39.5, 18888.0], [39.6, 18888.0], [39.7, 18888.0], [39.8, 18888.0], [39.9, 18888.0], [40.0, 19022.0], [40.1, 19022.0], [40.2, 19022.0], [40.3, 19022.0], [40.4, 19022.0], [40.5, 19022.0], [40.6, 19022.0], [40.7, 19022.0], [40.8, 19045.0], [40.9, 19045.0], [41.0, 19045.0], [41.1, 19045.0], [41.2, 19045.0], [41.3, 19045.0], [41.4, 19045.0], [41.5, 19065.0], [41.6, 19065.0], [41.7, 19065.0], [41.8, 19065.0], [41.9, 19065.0], [42.0, 19065.0], [42.1, 19065.0], [42.2, 19065.0], [42.3, 19112.0], [42.4, 19112.0], [42.5, 19112.0], [42.6, 19112.0], [42.7, 19112.0], [42.8, 19112.0], [42.9, 19112.0], [43.0, 19383.0], [43.1, 19383.0], [43.2, 19383.0], [43.3, 19383.0], [43.4, 19383.0], [43.5, 19383.0], [43.6, 19383.0], [43.7, 19383.0], [43.8, 19705.0], [43.9, 19705.0], [44.0, 19705.0], [44.1, 19705.0], [44.2, 19705.0], [44.3, 19705.0], [44.4, 19705.0], [44.5, 20055.0], [44.6, 20055.0], [44.7, 20055.0], [44.8, 20055.0], [44.9, 20055.0], [45.0, 20055.0], [45.1, 20055.0], [45.2, 20390.0], [45.3, 20390.0], [45.4, 20390.0], [45.5, 20390.0], [45.6, 20390.0], [45.7, 20390.0], [45.8, 20390.0], [45.9, 20390.0], [46.0, 21007.0], [46.1, 21007.0], [46.2, 21007.0], [46.3, 21007.0], [46.4, 21007.0], [46.5, 21007.0], [46.6, 21007.0], [46.7, 21332.0], [46.8, 21332.0], [46.9, 21332.0], [47.0, 21332.0], [47.1, 21332.0], [47.2, 21332.0], [47.3, 21332.0], [47.4, 21332.0], [47.5, 21371.0], [47.6, 21371.0], [47.7, 21371.0], [47.8, 21371.0], [47.9, 21371.0], [48.0, 21371.0], [48.1, 21371.0], [48.2, 21544.0], [48.3, 21544.0], [48.4, 21544.0], [48.5, 21544.0], [48.6, 21544.0], [48.7, 21544.0], [48.8, 21544.0], [48.9, 21831.0], [49.0, 21831.0], [49.1, 21831.0], [49.2, 21831.0], [49.3, 21831.0], [49.4, 21831.0], [49.5, 21831.0], [49.6, 21831.0], [49.7, 21881.0], [49.8, 21881.0], [49.9, 21881.0], [50.0, 21881.0], [50.1, 21881.0], [50.2, 21881.0], [50.3, 21881.0], [50.4, 22007.0], [50.5, 22007.0], [50.6, 22007.0], [50.7, 22007.0], [50.8, 22007.0], [50.9, 22007.0], [51.0, 22007.0], [51.1, 22007.0], [51.2, 22930.0], [51.3, 22930.0], [51.4, 22930.0], [51.5, 22930.0], [51.6, 22930.0], [51.7, 22930.0], [51.8, 22930.0], [51.9, 23412.0], [52.0, 23412.0], [52.1, 23412.0], [52.2, 23412.0], [52.3, 23412.0], [52.4, 23412.0], [52.5, 23412.0], [52.6, 23488.0], [52.7, 23488.0], [52.8, 23488.0], [52.9, 23488.0], [53.0, 23488.0], [53.1, 23488.0], [53.2, 23488.0], [53.3, 23488.0], [53.4, 23977.0], [53.5, 23977.0], [53.6, 23977.0], [53.7, 23977.0], [53.8, 23977.0], [53.9, 23977.0], [54.0, 23977.0], [54.1, 24238.0], [54.2, 24238.0], [54.3, 24238.0], [54.4, 24238.0], [54.5, 24238.0], [54.6, 24238.0], [54.7, 24238.0], [54.8, 24238.0], [54.9, 24450.0], [55.0, 24450.0], [55.1, 24450.0], [55.2, 24450.0], [55.3, 24450.0], [55.4, 24450.0], [55.5, 24450.0], [55.6, 24538.0], [55.7, 24538.0], [55.8, 24538.0], [55.9, 24538.0], [56.0, 24538.0], [56.1, 24538.0], [56.2, 24538.0], [56.3, 24647.0], [56.4, 24647.0], [56.5, 24647.0], [56.6, 24647.0], [56.7, 24647.0], [56.8, 24647.0], [56.9, 24647.0], [57.0, 24647.0], [57.1, 24834.0], [57.2, 24834.0], [57.3, 24834.0], [57.4, 24834.0], [57.5, 24834.0], [57.6, 24834.0], [57.7, 24834.0], [57.8, 24992.0], [57.9, 24992.0], [58.0, 24992.0], [58.1, 24992.0], [58.2, 24992.0], [58.3, 24992.0], [58.4, 24992.0], [58.5, 24992.0], [58.6, 25206.0], [58.7, 25206.0], [58.8, 25206.0], [58.9, 25206.0], [59.0, 25206.0], [59.1, 25206.0], [59.2, 25206.0], [59.3, 25756.0], [59.4, 25756.0], [59.5, 25756.0], [59.6, 25756.0], [59.7, 25756.0], [59.8, 25756.0], [59.9, 25756.0], [60.0, 25847.0], [60.1, 25847.0], [60.2, 25847.0], [60.3, 25847.0], [60.4, 25847.0], [60.5, 25847.0], [60.6, 25847.0], [60.7, 25847.0], [60.8, 26235.0], [60.9, 26235.0], [61.0, 26235.0], [61.1, 26235.0], [61.2, 26235.0], [61.3, 26235.0], [61.4, 26235.0], [61.5, 26787.0], [61.6, 26787.0], [61.7, 26787.0], [61.8, 26787.0], [61.9, 26787.0], [62.0, 26787.0], [62.1, 26787.0], [62.2, 26787.0], [62.3, 27007.0], [62.4, 27007.0], [62.5, 27007.0], [62.6, 27007.0], [62.7, 27007.0], [62.8, 27007.0], [62.9, 27007.0], [63.0, 27584.0], [63.1, 27584.0], [63.2, 27584.0], [63.3, 27584.0], [63.4, 27584.0], [63.5, 27584.0], [63.6, 27584.0], [63.7, 27584.0], [63.8, 27991.0], [63.9, 27991.0], [64.0, 27991.0], [64.1, 27991.0], [64.2, 27991.0], [64.3, 27991.0], [64.4, 27991.0], [64.5, 28415.0], [64.6, 28415.0], [64.7, 28415.0], [64.8, 28415.0], [64.9, 28415.0], [65.0, 28415.0], [65.1, 28415.0], [65.2, 28773.0], [65.3, 28773.0], [65.4, 28773.0], [65.5, 28773.0], [65.6, 28773.0], [65.7, 28773.0], [65.8, 28773.0], [65.9, 28773.0], [66.0, 29152.0], [66.1, 29152.0], [66.2, 29152.0], [66.3, 29152.0], [66.4, 29152.0], [66.5, 29152.0], [66.6, 29152.0], [66.7, 29270.0], [66.8, 29270.0], [66.9, 29270.0], [67.0, 29270.0], [67.1, 29270.0], [67.2, 29270.0], [67.3, 29270.0], [67.4, 29270.0], [67.5, 30224.0], [67.6, 30224.0], [67.7, 30224.0], [67.8, 30224.0], [67.9, 30224.0], [68.0, 30224.0], [68.1, 30224.0], [68.2, 30324.0], [68.3, 30324.0], [68.4, 30324.0], [68.5, 30324.0], [68.6, 30324.0], [68.7, 30324.0], [68.8, 30324.0], [68.9, 32381.0], [69.0, 32381.0], [69.1, 32381.0], [69.2, 32381.0], [69.3, 32381.0], [69.4, 32381.0], [69.5, 32381.0], [69.6, 32381.0], [69.7, 32755.0], [69.8, 32755.0], [69.9, 32755.0], [70.0, 32755.0], [70.1, 32755.0], [70.2, 32755.0], [70.3, 32755.0], [70.4, 32904.0], [70.5, 32904.0], [70.6, 32904.0], [70.7, 32904.0], [70.8, 32904.0], [70.9, 32904.0], [71.0, 32904.0], [71.1, 32904.0], [71.2, 32934.0], [71.3, 32934.0], [71.4, 32934.0], [71.5, 32934.0], [71.6, 32934.0], [71.7, 32934.0], [71.8, 32934.0], [71.9, 32981.0], [72.0, 32981.0], [72.1, 32981.0], [72.2, 32981.0], [72.3, 32981.0], [72.4, 32981.0], [72.5, 32981.0], [72.6, 33616.0], [72.7, 33616.0], [72.8, 33616.0], [72.9, 33616.0], [73.0, 33616.0], [73.1, 33616.0], [73.2, 33616.0], [73.3, 33616.0], [73.4, 33669.0], [73.5, 33669.0], [73.6, 33669.0], [73.7, 33669.0], [73.8, 33669.0], [73.9, 33669.0], [74.0, 33669.0], [74.1, 34001.0], [74.2, 34001.0], [74.3, 34001.0], [74.4, 34001.0], [74.5, 34001.0], [74.6, 34001.0], [74.7, 34001.0], [74.8, 34001.0], [74.9, 34453.0], [75.0, 34453.0], [75.1, 34453.0], [75.2, 34453.0], [75.3, 34453.0], [75.4, 34453.0], [75.5, 34453.0], [75.6, 35147.0], [75.7, 35147.0], [75.8, 35147.0], [75.9, 35147.0], [76.0, 35147.0], [76.1, 35147.0], [76.2, 35147.0], [76.3, 36954.0], [76.4, 36954.0], [76.5, 36954.0], [76.6, 36954.0], [76.7, 36954.0], [76.8, 36954.0], [76.9, 36954.0], [77.0, 36954.0], [77.1, 37540.0], [77.2, 37540.0], [77.3, 37540.0], [77.4, 37540.0], [77.5, 37540.0], [77.6, 37540.0], [77.7, 37540.0], [77.8, 38757.0], [77.9, 38757.0], [78.0, 38757.0], [78.1, 38757.0], [78.2, 38757.0], [78.3, 38757.0], [78.4, 38757.0], [78.5, 38757.0], [78.6, 39896.0], [78.7, 39896.0], [78.8, 39896.0], [78.9, 39896.0], [79.0, 39896.0], [79.1, 39896.0], [79.2, 39896.0], [79.3, 39967.0], [79.4, 39967.0], [79.5, 39967.0], [79.6, 39967.0], [79.7, 39967.0], [79.8, 39967.0], [79.9, 39967.0], [80.0, 39967.0], [80.1, 40229.0], [80.2, 40229.0], [80.3, 40229.0], [80.4, 40229.0], [80.5, 40229.0], [80.6, 40229.0], [80.7, 40229.0], [80.8, 40272.0], [80.9, 40272.0], [81.0, 40272.0], [81.1, 40272.0], [81.2, 40272.0], [81.3, 40272.0], [81.4, 40272.0], [81.5, 40459.0], [81.6, 40459.0], [81.7, 40459.0], [81.8, 40459.0], [81.9, 40459.0], [82.0, 40459.0], [82.1, 40459.0], [82.2, 40459.0], [82.3, 40515.0], [82.4, 40515.0], [82.5, 40515.0], [82.6, 40515.0], [82.7, 40515.0], [82.8, 40515.0], [82.9, 40515.0], [83.0, 40857.0], [83.1, 40857.0], [83.2, 40857.0], [83.3, 40857.0], [83.4, 40857.0], [83.5, 40857.0], [83.6, 40857.0], [83.7, 40857.0], [83.8, 41097.0], [83.9, 41097.0], [84.0, 41097.0], [84.1, 41097.0], [84.2, 41097.0], [84.3, 41097.0], [84.4, 41097.0], [84.5, 41503.0], [84.6, 41503.0], [84.7, 41503.0], [84.8, 41503.0], [84.9, 41503.0], [85.0, 41503.0], [85.1, 41503.0], [85.2, 42849.0], [85.3, 42849.0], [85.4, 42849.0], [85.5, 42849.0], [85.6, 42849.0], [85.7, 42849.0], [85.8, 42849.0], [85.9, 42849.0], [86.0, 42943.0], [86.1, 42943.0], [86.2, 42943.0], [86.3, 42943.0], [86.4, 42943.0], [86.5, 42943.0], [86.6, 42943.0], [86.7, 44145.0], [86.8, 44145.0], [86.9, 44145.0], [87.0, 44145.0], [87.1, 44145.0], [87.2, 44145.0], [87.3, 44145.0], [87.4, 44145.0], [87.5, 45240.0], [87.6, 45240.0], [87.7, 45240.0], [87.8, 45240.0], [87.9, 45240.0], [88.0, 45240.0], [88.1, 45240.0], [88.2, 46752.0], [88.3, 46752.0], [88.4, 46752.0], [88.5, 46752.0], [88.6, 46752.0], [88.7, 46752.0], [88.8, 46752.0], [88.9, 48814.0], [89.0, 48814.0], [89.1, 48814.0], [89.2, 48814.0], [89.3, 48814.0], [89.4, 48814.0], [89.5, 48814.0], [89.6, 48814.0], [89.7, 49055.0], [89.8, 49055.0], [89.9, 49055.0], [90.0, 49055.0], [90.1, 49055.0], [90.2, 49055.0], [90.3, 49055.0], [90.4, 49094.0], [90.5, 49094.0], [90.6, 49094.0], [90.7, 49094.0], [90.8, 49094.0], [90.9, 49094.0], [91.0, 49094.0], [91.1, 49094.0], [91.2, 52841.0], [91.3, 52841.0], [91.4, 52841.0], [91.5, 52841.0], [91.6, 52841.0], [91.7, 52841.0], [91.8, 52841.0], [91.9, 56888.0], [92.0, 56888.0], [92.1, 56888.0], [92.2, 56888.0], [92.3, 56888.0], [92.4, 56888.0], [92.5, 56888.0], [92.6, 57396.0], [92.7, 57396.0], [92.8, 57396.0], [92.9, 57396.0], [93.0, 57396.0], [93.1, 57396.0], [93.2, 57396.0], [93.3, 57396.0], [93.4, 57850.0], [93.5, 57850.0], [93.6, 57850.0], [93.7, 57850.0], [93.8, 57850.0], [93.9, 57850.0], [94.0, 57850.0], [94.1, 60124.0], [94.2, 60124.0], [94.3, 60124.0], [94.4, 60124.0], [94.5, 60124.0], [94.6, 60124.0], [94.7, 60124.0], [94.8, 60124.0], [94.9, 61104.0], [95.0, 61104.0], [95.1, 61104.0], [95.2, 61104.0], [95.3, 61104.0], [95.4, 61104.0], [95.5, 61104.0], [95.6, 62509.0], [95.7, 62509.0], [95.8, 62509.0], [95.9, 62509.0], [96.0, 62509.0], [96.1, 62509.0], [96.2, 62509.0], [96.3, 64513.0], [96.4, 64513.0], [96.5, 64513.0], [96.6, 64513.0], [96.7, 64513.0], [96.8, 64513.0], [96.9, 64513.0], [97.0, 64513.0], [97.1, 68002.0], [97.2, 68002.0], [97.3, 68002.0], [97.4, 68002.0], [97.5, 68002.0], [97.6, 68002.0], [97.7, 68002.0], [97.8, 68837.0], [97.9, 68837.0], [98.0, 68837.0], [98.1, 68837.0], [98.2, 68837.0], [98.3, 68837.0], [98.4, 68837.0], [98.5, 68837.0], [98.6, 71889.0], [98.7, 71889.0], [98.8, 71889.0], [98.9, 71889.0], [99.0, 71889.0], [99.1, 71889.0], [99.2, 71889.0], [99.3, 80952.0], [99.4, 80952.0], [99.5, 80952.0], [99.6, 80952.0], [99.7, 80952.0], [99.8, 80952.0], [99.9, 80952.0], [100.0, 80952.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1600.0, "maxY": 3.0, "series": [{"data": [[32900.0, 3.0], [35100.0, 1.0], [36900.0, 1.0], [37500.0, 1.0], [38700.0, 1.0], [40500.0, 1.0], [39900.0, 1.0], [41500.0, 1.0], [42900.0, 1.0], [44100.0, 1.0], [46700.0, 1.0], [57300.0, 1.0], [60100.0, 1.0], [61100.0, 1.0], [62500.0, 1.0], [64500.0, 1.0], [71800.0, 1.0], [1600.0, 1.0], [2000.0, 1.0], [2500.0, 1.0], [3600.0, 2.0], [4200.0, 1.0], [4600.0, 1.0], [4800.0, 1.0], [80900.0, 1.0], [5300.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [8100.0, 1.0], [8500.0, 2.0], [8200.0, 1.0], [8400.0, 1.0], [8900.0, 2.0], [9600.0, 1.0], [9700.0, 1.0], [10200.0, 1.0], [10000.0, 1.0], [10300.0, 1.0], [10500.0, 1.0], [10700.0, 1.0], [10800.0, 1.0], [11500.0, 1.0], [12300.0, 1.0], [13000.0, 1.0], [13300.0, 1.0], [13800.0, 2.0], [14600.0, 2.0], [14800.0, 1.0], [14400.0, 2.0], [15200.0, 1.0], [15800.0, 1.0], [15500.0, 1.0], [17200.0, 3.0], [17100.0, 2.0], [16900.0, 2.0], [18000.0, 1.0], [18400.0, 1.0], [17900.0, 1.0], [19000.0, 3.0], [18500.0, 2.0], [18800.0, 2.0], [19300.0, 1.0], [19100.0, 1.0], [19700.0, 1.0], [20000.0, 1.0], [20300.0, 1.0], [21500.0, 1.0], [21300.0, 2.0], [21000.0, 1.0], [21800.0, 2.0], [22000.0, 1.0], [22900.0, 1.0], [23400.0, 2.0], [24200.0, 1.0], [24500.0, 1.0], [24400.0, 1.0], [23900.0, 1.0], [24600.0, 1.0], [25200.0, 1.0], [24900.0, 1.0], [24800.0, 1.0], [25700.0, 1.0], [26200.0, 1.0], [25800.0, 1.0], [26700.0, 1.0], [27000.0, 1.0], [27500.0, 1.0], [28400.0, 1.0], [27900.0, 1.0], [29200.0, 1.0], [28700.0, 1.0], [29100.0, 1.0], [30200.0, 1.0], [30300.0, 1.0], [32300.0, 1.0], [32700.0, 1.0], [33600.0, 2.0], [34000.0, 1.0], [34400.0, 1.0], [40400.0, 1.0], [40800.0, 1.0], [39800.0, 1.0], [40200.0, 2.0], [41000.0, 1.0], [42800.0, 1.0], [45200.0, 1.0], [49000.0, 2.0], [48800.0, 1.0], [52800.0, 1.0], [56800.0, 1.0], [57800.0, 1.0], [68000.0, 1.0], [68800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 80900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 135.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 135.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 135.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 26.744186046511626, "minX": 1.69218432E12, "maxY": 44.55102040816326, "series": [{"data": [[1.69218432E12, 44.55102040816326], [1.69218438E12, 26.744186046511626]], "isOverall": false, "label": "ThreadLogin", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69218438E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1620.0, "minX": 1.0, "maxY": 54399.4, "series": [{"data": [[33.0, 54399.4], [32.0, 30543.625], [2.0, 21152.5], [35.0, 24834.0], [34.0, 10545.0], [37.0, 21007.0], [36.0, 34539.75], [39.0, 33857.0], [38.0, 36693.28571428572], [41.0, 28395.0], [40.0, 40188.0], [43.0, 35393.25], [42.0, 27079.666666666668], [45.0, 20855.699999999997], [44.0, 27629.625], [3.0, 4650.0], [4.0, 16940.0], [5.0, 1620.0], [6.0, 17748.0], [7.0, 30324.0], [8.0, 19065.0], [9.0, 17229.0], [10.0, 6105.0], [11.0, 3685.0], [12.0, 3626.0], [13.0, 22395.0], [14.0, 27991.0], [15.0, 29152.0], [16.0, 28415.0], [1.0, 40229.0], [17.0, 13895.0], [18.0, 14586.0], [19.0, 17135.5], [20.0, 19706.0], [21.0, 12330.0], [22.0, 5887.0], [23.0, 10099.0], [24.0, 6137.0], [25.0, 48384.0], [26.0, 24450.0], [27.0, 32755.0], [28.0, 16943.0], [29.0, 26008.0], [30.0, 17149.5], [31.0, 26315.333333333332]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[33.20740740740741, 26037.28148148148]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 45.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 92.28333333333333, "minX": 1.69218432E12, "maxY": 2313034.7666666666, "series": [{"data": [[1.69218432E12, 1319080.3166666667], [1.69218438E12, 2313034.7666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69218432E12, 92.28333333333333], [1.69218438E12, 161.96666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69218438E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 24380.95918367346, "minX": 1.69218432E12, "maxY": 26981.000000000004, "series": [{"data": [[1.69218432E12, 24380.95918367346], [1.69218438E12, 26981.000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69218438E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1293.7755102040815, "minX": 1.69218432E12, "maxY": 1895.651162790698, "series": [{"data": [[1.69218432E12, 1293.7755102040815], [1.69218438E12, 1895.651162790698]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69218438E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 340.7959183673469, "minX": 1.69218432E12, "maxY": 410.66279069767444, "series": [{"data": [[1.69218432E12, 340.7959183673469], [1.69218438E12, 410.66279069767444]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69218438E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1620.0, "minX": 1.69218432E12, "maxY": 80952.0, "series": [{"data": [[1.69218432E12, 49094.0], [1.69218438E12, 80952.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69218432E12, 4227.0], [1.69218438E12, 1620.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69218432E12, 41503.0], [1.69218438E12, 58532.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69218432E12, 49094.0], [1.69218438E12, 80952.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69218432E12, 22007.0], [1.69218438E12, 21581.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69218432E12, 47903.5], [1.69218438E12, 66780.84999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69218438E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 19065.0, "minX": 1.0, "maxY": 28783.5, "series": [{"data": [[1.0, 19283.5], [2.0, 23694.5], [4.0, 19273.5], [5.0, 28783.5], [3.0, 19065.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1123.0, "minX": 1.0, "maxY": 1596.5, "series": [{"data": [[1.0, 1131.5], [2.0, 1425.5], [4.0, 1123.0], [5.0, 1596.5], [3.0, 1194.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7166666666666667, "minX": 1.69218432E12, "maxY": 1.5333333333333334, "series": [{"data": [[1.69218432E12, 1.5333333333333334], [1.69218438E12, 0.7166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69218438E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.69218432E12, "maxY": 1.4333333333333333, "series": [{"data": [[1.69218432E12, 0.8166666666666667], [1.69218438E12, 1.4333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69218438E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.69218432E12, "maxY": 1.4333333333333333, "series": [{"data": [[1.69218432E12, 0.8166666666666667], [1.69218438E12, 1.4333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69218438E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.69218432E12, "maxY": 1.4333333333333333, "series": [{"data": [[1.69218432E12, 0.8166666666666667], [1.69218438E12, 1.4333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69218438E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

