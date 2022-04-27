(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"08fa":function(t,a,i){},"0978":function(t,a,i){"use strict";var r=i("08fa"),o=i.n(r);o.a},1298:function(t,a,i){},"6d96":function(t,a,i){"use strict";var r=i("98ed"),o=i.n(r);o.a},7386:function(t){t.exports=JSON.parse('{"timerange":{"timezone":"UTC","min":"2021-08-19T09:30:35.349Z","max":"2036-12-25T09:30:35.349Z"},"query":[{"language":"kuery","query":""}],"filters":[],"panels":[{"annotations":[{"fields":"type","template":"Big Pay Day - Nov 19, 2020","index_pattern":"annotations-*","query_string":{"language":"kuery","query":"type : \\"BPD\\""},"color":"rgba(252,220,0,1)","icon":"fa-star","id":"d39deda0-98d5-11ea-8180-17f37dfaa7c4","ignore_global_filters":1,"ignore_panel_filters":1,"time_field":"timestamp"}],"axis_formatter":"number","axis_position":"left","axis_scale":"normal","filter":{"language":"kuery","query":""},"id":"61ca57f0-469d-11e7-af02-69e470af7417","index_pattern":"stake*","interval":"","isModelInvalid":false,"series":[{"axis_position":"right","chart_type":"bar","color":"rgba(244,78,59,1)","fill":"0.8","filter":{"language":"kuery","query":"not end :* "},"formatter":"\'0.0a\'","id":"2accedd0-3fe7-11ea-a704-8dd634d841f6","label":"Stakes Expiring","line_width":1,"metrics":[{"field":"hexStaked","id":"2accedd1-3fe7-11ea-a704-8dd634d841f6","type":"sum"}],"point_size":1,"separate_axis":0,"split_mode":"filter","stacked":"stacked","type":"timeseries","value_template":"{{value}} HEX","split_color_mode":"gradient"},{"axis_position":"right","chart_type":"line","color":"rgba(219,45,114,1)","fill":"0.1","filter":{"language":"kuery","query":"not end :* "},"formatter":"\'0,0a\'","id":"0b7cf2b0-98d7-11ea-8180-17f37dfaa7c4","label":"Cumulative Shares Expiring","line_width":"","metrics":[{"field":"hexStakeShares","id":"0b7e2b30-98d7-11ea-8180-17f37dfaa7c4","type":"sum"},{"field":"0b7e2b30-98d7-11ea-8180-17f37dfaa7c4","id":"157d8680-98d7-11ea-8180-17f37dfaa7c4","type":"cumulative_sum"},{"function":"sum","id":"b44b0f30-98d7-11ea-8180-17f37dfaa7c4","type":"math","variables":[{"id":"030a8380-98d8-11ea-9c87-3db06bb4c6b0","name":"hexShares","field":"157d8680-98d7-11ea-8180-17f37dfaa7c4"}],"script":"params.hexShares * 100000000"}],"point_size":"","separate_axis":1,"split_mode":"filter","stacked":"none","type":"timeseries","value_template":"{{value}}","split_color_mode":"gradient"},{"axis_position":"right","chart_type":"line","color":"rgba(0,156,224,1)","fill":"0","filter":{"language":"kuery","query":"not end :* "},"formatter":"\'0.0a\'","id":"868882b0-3fe7-11ea-a704-8dd634d841f6","label":"Stakes Expiring SMA(5)","line_width":"2","metrics":[{"field":"hexStaked","id":"8688a9c0-3fe7-11ea-a704-8dd634d841f6","type":"sum"},{"alpha":0.3,"beta":0.1,"field":"8688a9c0-3fe7-11ea-a704-8dd634d841f6","gamma":0.3,"id":"9bc2eda0-3fe7-11ea-a704-8dd634d841f6","model_type":"simple","multiplicative":true,"period":1,"type":"moving_average","window":5}],"point_size":"0","separate_axis":0,"split_mode":"filter","stacked":"none","type":"timeseries","value_template":"{{value}} HEX","split_color_mode":"gradient"}],"show_grid":0,"show_legend":0,"time_field":"expectedEnd","type":"timeseries","drop_last_bucket":1,"use_kibana_indexes":false,"tooltip_mode":"show_all"}],"state":{}}')},"7aed":function(t,a,i){},"8de9":function(t,a,i){},9380:function(t,a,i){"use strict";var r=i("c009"),o=i.n(r);o.a},"98ed":function(t,a,i){},a305:function(t,a,i){"use strict";var r=i("1298"),o=i.n(r);o.a},a9f0:function(t,a,i){},c009:function(t,a,i){},cacd:function(t,a,i){"use strict";i.r(a);var r,o,c,l,render=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("q-page",{staticClass:"column",class:{"dark-theme":"true"===t.$store.state.settings.lightMode,"text-black bg-white":"false"===t.$store.state.settings.lightMode,"desktop-marg":t.screenSize>1024,"mobile-pad":t.screenSize<1024&&!(t.$q.platform.is.mobile||t.$isbex),"mobile-card":"true"===t.$store.state.settings.lightMode},style:(t.$q.platform.is.mobile||t.$isbex)&&"true"!==t.$store.state.settings.lightMode?"position: static; background: #f2f2f2 !important":""},[t.$q.platform.is.mobile||t.$isbex?t._e():i("div",{class:{"dark-theme":"true"===t.$store.state.settings.lightMode},staticStyle:{height:"100vh"}},[i("div",{staticClass:"desktop-version full-height"},[i("div",{staticClass:"row full-height"},[i("div",{staticClass:"col col-md-12 q-pr-md",class:{"bg-white":"false"===t.$store.state.settings.lightMode}},[i("div",{staticClass:"row dashboard-ui-tokens"},[t._e(),t._e(),["invest","stake"].includes(t.tab)?i("div",{staticClass:"flex flex-center align-center row q-pt-lg"},[i("p",{staticClass:"text-h6"},[t._v("We are working on it")]),i("div",{staticClass:"col-12 text-center"},[i("img",{staticStyle:{"border-radius":"50%"},attrs:{width:"300px",src:"https://cdn.dribbble.com/users/966681/screenshots/2896143/working.gif"}})])]):t._e(),t.$store.state.settings.show.exchange?i("GodexV2",{directives:[{name:"show",rawName:"v-show",value:"exchange"==t.tab,expression:"tab == 'exchange'"}],key:t.assetSelected?t.assetSelected.type+t.assetSelected.chain:t.tokenToBuy?t.tokenToBuy.type:"",attrs:{fromAssetData:t.assetSelected,toAssetData:t.tokenToBuy}}):t._e(),t.$store.state.settings.show.vtxstaking?i("VTXStakeState",{directives:[{name:"show",rawName:"v-show",value:"vtxstaking"==t.tab,expression:"tab == 'vtxstaking'"}]}):t._e(),t.$store.state.settings.show.tokens?i("TokenPrices",{directives:[{name:"show",rawName:"v-show",value:"tokens"==t.tab,expression:"tab == 'tokens'"}],staticClass:"full-width",on:{buyToken:t.buyToken}}):t._e(),(t.assetSelected,t._e()),t._e(),i("keep-alive",[i("AssetsExplorer",{directives:[{name:"show",rawName:"v-show",value:!t.assetSelected&&"dashboard"==t.tab,expression:"!assetSelected && tab == 'dashboard'"}],ref:"assetsComponent",on:{assetsChanged:t.assetsChanged,setAsset:t.setAsset}})],1),t.assetSelected?i("SingleToken",{directives:[{name:"show",rawName:"v-show",value:"token"==t.$store.state.settings.show.tab||""==t.tab,expression:"$store.state.settings.show.tab == 'token' || tab == ''"}],ref:"singleTokenComponent",staticClass:"col-md-12",attrs:{assetData:t.assetSelected},on:{setAsset:t.setAsset}}):t._e()],1)])])]),t._e()],1),t.$q.platform.is.mobile||t.$isbex?i("div",[i("AssetsExplorer",{directives:[{name:"show",rawName:"v-show",value:!t.assetSelected&&"dashboard"==t.tab,expression:"!assetSelected && tab == 'dashboard'"}],ref:"assetsComponent2",on:{assetsChanged:t.assetsChanged,setAsset:t.setAsset}})],1):t._e()])},d=[],u=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("c47a")),h=i.n(u),p=(i("7514"),i("967e")),m=i.n(p),g=(i("96cf"),i("fa84")),b=i.n(g),v=i("4360"),_=i("1fca"),y=i("7386"),k=i("c7d9"),w={extends:_["a"],data:function data(){return{chartData:{labels:[],datasets:[{data:[],backgroundColor:"#f87979",label:"Stakes Expirin"},{data:[],backgroundColor:"#f87979",label:"Cumulative Shares Expiring"},{data:[],backgroundColor:"#f87979",label:"Stakes Expiring SMA(5)"}]}}},mounted:function mounted(){var t=this,a={headers:{"kbn-version":"7.13.3"}};this.$axios.post(Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",ENV_TYPE:"Running Production",ENV_PROD:"Production",EXTENSION_ID:"eamiofncoknfkefhlkdblngblpffehek",EXTENSION_ID_MOZILA:"965aea9e75d37c6e1e2630b165ea4ae77412d115@temporary-addon",EXTENSION_URL:"https://chrome.google.com/webstore/detail/verto/eamiofncoknfkefhlkdblngblpffehek",EXTENSION_URL_MOZILA:"https://example.com",mainnet:{CACHE:"https://cache.volentix.io/",CHAIN_ID:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",EOS_HISTORYAPI:"https://eos.greymass.com",DEMUX_API:"https://demux.vlabs.ninja:4000",COINSWITCH_APIKEY:"B1jvw5Ytx9OmO2zC1H977dvFT4jmNdQ81OZQCH6d",EOS_TRANSACTION_EXPLORER:"https://bloks.io/transaction/",ETH_TRANSACTION_EXPLORER:"https://etherscan.io/tx/",READ_THE_DOCS:"https://vertohowto.readthedocs.io/en/latest/tutorial/"},testnet:{CACHE:"https://cache.volentix.io/",CHAIN_ID:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",EOS_HISTORYAPI:"http://140.82.56.143:8888",DEMUX_API:"https://demux.vlabs.ninja:3000",COINSWITCH_APIKEY:"Y72jsy9iwD5uiazajayqp190dhjabn3kjauis",EOS_TRANSACTION_EXPLORER:"https://kylin.eosx.io/tx/",ETH_TRANSACTION_EXPLORER:"https://ropsten.etherscan.io/tx/",READ_THE_DOCS:"https://vertohowto.readthedocs.io/en/latest/tutorial/"},VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"})[this.$store.state.settings.network].CACHE+"https://hex.vision/api/metrics/vis/data",y,a).then((function(a){var i=a.data["61ca57f0-469d-11e7-af02-69e470af7417"].series;t.chartData.datasets[0].data=i[0].data.map((function(t){return t[1]})),t.chartData.labels=i[0].data.map((function(t){return new Date(t[0]).toUTCString().substring(0,16)}));var r=t;t.renderChart(t.chartData,{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1},scales:{y:{type:"linear",grace:"50%"},yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"},stacked:!0,ticks:{callback:function callback(t,a,i){return r.nFormatter2(t,2)+" HEX"},beginAtZero:!1,steps:1e5,stepValue:1e5,suggestedMin:50,suggestedMax:100}}],xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"},stacked:!0,display:!0,time:{parser:"YYYY-MM-DD",tooltipFormat:"ll HH:mm",unit:"year",displayFormats:{day:"YYYY-MM-DD"}}}]}})}))},mixins:[k["a"]]},x=w,C=i("2877"),S=Object(C["a"])(x,r,o,!1,null,null,null),E=S.exports,T=i("e78e"),O=i("be53"),StakingStatevue_type_template_id_2a83290b_scoped_true_render=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"full-width"},[t.chartData.length?i("div",{staticClass:"full-width q-pt-md bg-white q-pa-md"},[i("div",{staticClass:"text-h6 q-py-md"},[t._v("\nTHE STATE OF VTX\n")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("Chart",{key:t.chartKey,attrs:{stakingData:t.chartData}})],1),i("div",{staticClass:"col-md-4"},[i("span",{staticClass:"text-h6"},[i("b",{staticClass:"highlight-color"},[t._v("Total staked: ")]),i("br"),t._v(t._s(t.formatNumber(t.state.filter((function(t){return"stake"===t.action})).map((function(t){return t.amount})).reduce((function(t,a){return t+a}),0),0))+" VTX\n")]),i("q-list",{staticClass:"rounded-borders q-my-md ",staticStyle:{"max-width":"250px"},attrs:{bordered:""}},[i("div",{staticClass:"q-pl-md q-pt-sm"},[t._v("Recently staked")]),t._l(t.state.filter((function(t){return"stake"===t.action})).slice(0,5),(function(a){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.timestamp,staticClass:"q-my-sm",attrs:{dense:"",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{color:t.getRandomColor(),"text-color":"grey-7"}},[t._v("\n            "+t._s(a.staker.charAt(0))+"\n          ")])],1),i("q-item-section",[i("q-item-label",[t._v(t._s(a.amount)+" VTX")]),i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(a.staker))]),i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(t.convertTimestamp(a.timestamp)))])],1)],1)}))],2),i("p",{staticClass:"q-ml-md"},[i("a",{attrs:{href:"https://www.bloks.io/account/vertostaking",target:"_blank"}},[t._v("View all "),i("q-icon",{attrs:{name:"chevron_right"}})],1)])],1),i("div",{staticClass:"col-md-4"},[i("span",{staticClass:"text-h6"},[i("b",{staticClass:"highlight-color"},[t._v("Total rewarded:")]),i("br"),t._v(t._s(t.formatNumber(t.state.filter((function(t){return"unstake"===t.action})).map((function(t){return t.amount})).reduce((function(t,a){return t+a}),0),0))+" VTX\n")]),i("br"),i("q-list",{staticClass:"rounded-borders q-my-md ",staticStyle:{"max-width":"250px"},attrs:{bordered:""}},[i("div",{staticClass:"q-pl-md q-pt-sm"},[t._v("Recently rewarded")]),t._l(t.state.filter((function(t){return"unstake"===t.action})).slice(0,5),(function(a){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.timestamp,staticClass:"q-my-sm",attrs:{dense:"",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{color:t.getRandomColor(),"text-color":"grey-7"}},[t._v("\n            "+t._s(a.staker.charAt(0))+"\n          ")])],1),i("q-item-section",[i("q-item-label",[t._v(t._s(a.amount)+" VTX")]),i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(a.staker))]),i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(t.convertTimestamp(a.timestamp)))])],1)],1)}))],2),i("span",{staticClass:"q-ml-md"},[i("a",{attrs:{href:"https://www.bloks.io/account/vertostaking",target:"_blank"}},[t._v("View all "),i("q-icon",{attrs:{name:"chevron_right"}})],1)])],1)])]):i("div",[i("q-linear-progress",{staticClass:"q-mt-sm",attrs:{indeterminate:"",color:"grey"}})],1)])},I=[],A=(i("7f7f"),{extends:_["a"],props:["dataType","stakingData"],data:function data(){return{chartdata:{datasets:[{data:[],backgroundColor:"#f87979",label:"Stake"}]}}},mounted:function mounted(){var t=this;return b()(m.a.mark((function _callee(){var a;return m.a.wrap((function _callee$(i){while(1)switch(i.prev=i.next){case 0:t.chartdata.labels=[].concat(t.stakingData[0]).map((function(t){return t.x})),t.chartdata.datasets[0].data=[].concat(t.stakingData[0]).map((function(t){return t.y})),a=t,t.renderChart(t.chartdata,{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1},scales:{y:{type:"linear",grace:"50%"},yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"},stacked:!0,ticks:{callback:function callback(t,i,r){return a.nFormatter2(t,2)+" VTX"},beginAtZero:!1,steps:1e5,stepValue:1e5,suggestedMin:50,suggestedMax:100}}],xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"},stacked:!0,display:!0,time:{parser:"YYYY-MM-DD",tooltipFormat:"ll HH:mm",unit:"year",displayFormats:{day:"YYYY-MM-DD"}}}]}});case 4:case"end":return i.stop()}}),_callee)})))()},mixins:[k["a"]]}),D=A,q=(i("0978"),Object(C["a"])(D,c,l,!1,null,"685f81df",null)),N=q.exports,R=i("18a6"),P={components:{Chart:N},data:function data(){return{state:[],chartData:[],chartKey:1,monthGroup:{}}},mounted:function mounted(){var t=this;return b()(m.a.mark((function _callee(){var a;return m.a.wrap((function _callee$(i){while(1)switch(i.prev=i.next){case 0:return t.getHistoryData(),a=new R["b"](Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",ENV_TYPE:"Running Production",ENV_PROD:"Production",EXTENSION_ID:"eamiofncoknfkefhlkdblngblpffehek",EXTENSION_ID_MOZILA:"965aea9e75d37c6e1e2630b165ea4ae77412d115@temporary-addon",EXTENSION_URL:"https://chrome.google.com/webstore/detail/verto/eamiofncoknfkefhlkdblngblpffehek",EXTENSION_URL_MOZILA:"https://example.com",mainnet:{CACHE:"https://cache.volentix.io/",CHAIN_ID:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",EOS_HISTORYAPI:"https://eos.greymass.com",DEMUX_API:"https://demux.vlabs.ninja:4000",COINSWITCH_APIKEY:"B1jvw5Ytx9OmO2zC1H977dvFT4jmNdQ81OZQCH6d",EOS_TRANSACTION_EXPLORER:"https://bloks.io/transaction/",ETH_TRANSACTION_EXPLORER:"https://etherscan.io/tx/",READ_THE_DOCS:"https://vertohowto.readthedocs.io/en/latest/tutorial/"},testnet:{CACHE:"https://cache.volentix.io/",CHAIN_ID:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",EOS_HISTORYAPI:"http://140.82.56.143:8888",DEMUX_API:"https://demux.vlabs.ninja:3000",COINSWITCH_APIKEY:"Y72jsy9iwD5uiazajayqp190dhjabn3kjauis",EOS_TRANSACTION_EXPLORER:"https://kylin.eosx.io/tx/",ETH_TRANSACTION_EXPLORER:"https://ropsten.etherscan.io/tx/",READ_THE_DOCS:"https://vertohowto.readthedocs.io/en/latest/tutorial/"},VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"})[t.$store.state.settings.network].EOS_HISTORYAPI),i.next=4,a.getTableByScope("vertostaking","vertostaking","accountstake");case 4:i.sent;case 6:case"end":return i.stop()}}),_callee)})))()},methods:{estimateReward:function estimateReward(t,a){var i=(1+a/10)/100;return Math.round(t*i*100)/100*a},getHistoryData:function getHistoryData(){var t=this,a=["January","February","March","April","May","June","July","August","September","October","November","December"];this.state=[];var i="vertostaking";this.$axios.get("https://eos.hyperion.eosrio.io/v2/history/get_actions?account="+i+"&skip=0&limit=1000&sort=desc").then((function(r){r&&r.data&&r.data.actions&&r.data.actions.map((function(r){var o={action:null,amount:null,timestamp:null};if("transfer"===r.act.name&&"undefined"!==typeof r.act.data.from&&"undefined"!==typeof r.act.data.to){var c=!isNaN(r.act.data.memo)&&(parseInt(r.act.data.memo)>=1||parseInt(r.act.data.memo)<=10);if(r.act.data.to===i&&c){o.action="stake",o.staker=r.act.data.from,o.period=parseInt(r.act.data.memo);var l=new Date(r.timestamp);l.setDate(l.getDate()+30*parseInt(r.act.data.memo)),o.maturity=l,o.reward=t.estimateReward(parseFloat(r.act.data.quantity),o.period)}else r.act.data.from===i&&"unstaking fund"===r.act.data.memo&&(o.action="unstake",o.staker=r.act.data.to);if(o.action){o.amount=parseFloat(r.act.data.quantity),o.timestamp=r.timestamp;var d=a[new Date(o.timestamp).getMonth()];t.monthGroup[d]?t.monthGroup[d].push(o):t.monthGroup[d]=[o],t.state.push(o)}}})),t.state.sort((function(t,a){return new Date(t.maturity).getTime()-new Date(a.maturity).getTime()}));var o=function formatForChartV2(t,a,i){var r={data:[],time:[]};return t.forEach((function(t){t.action===a&&r.data.push({y:t[i],x:new Date(t.maturity).toISOString().substring(0,10)})})),r},c=o(t.state,"stake","reward");t.chartData=[c.data,c.time]}))}},mixins:[k["a"]]},L=P,$=(i("9380"),Object(C["a"])(L,StakingStatevue_type_template_id_2a83290b_scoped_true_render,I,!1,null,"2a83290b",null)),M=$.exports,H=i("e611"),TokenPricesvue_type_template_id_1230a1fa_scoped_true_render=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t._e(),i("div",{staticClass:"main-wrap bg-white"},[i("div",{staticClass:"main-grid-list row q-col-gutter-md"},t._l(t.coinsList,(function(a){return i("div",{key:a.symbol,staticClass:"cursor-pointer main-grid-item col-md-4 q-ma-md ",class:a.style,on:{click:function(i){t.$emit("buyToken",{icon:a.icon,type:a.token.toLowerCase()})}}},[i("div",{staticClass:"main-grid-info bg-white  flex-row flex-top flex-stretch q-pa-sm rounded-borders"},[i("div",{staticClass:"push-right"},[i("img",{staticStyle:{width:"40px",height:"auto"},attrs:{src:a.icon,onerror:"this.src='https://rainner.github.io/binance-watch/public/images/icons/default_.png'"}})]),i("div",{staticClass:"flex-1 shadow-text"},[i("div",{staticClass:"flex-row flex-top flex-space"},[i("div",{staticClass:"text-left text-clip push-right"},[i("h6",{staticClass:"text-primary text-clip"},[t._v(t._s(a.token)),i("small",{staticClass:"text-faded text-small text-condense"},[t._v("/"+t._s(a.asset))])]),i("span",{staticClass:" text-clip"},[t._v("$"+t._s(t._f("toFixed")(a.close,t.asset)))])]),i("div",{staticClass:"text-right"},[i("div",{staticClass:"color text-big text-clip"},[t._v(t._s(a.arrow)+" "+t._s(a.sign)+t._s(t._f("toFixed")(a.percent,2))+"%")]),i("div",{staticClass:"text-clip"},[t._v(t._s(a.sign)+t._s(t._f("toFixed")(a.change,t.asset))+" "),i("small",{staticClass:"text-faded"},[t._v("24h")])]),i("div",{staticClass:"text-clip"},[t._v(t._s(t._f("toMoney")(a.assetVolume))+" "),i("small",{staticClass:"text-faded"},[t._v("Vol")])])])])])]),i("div",{staticClass:"main-grid-chart"},[i("LineChartItem",{staticClass:"bg-white",attrs:{width:600,height:40,values:a.history}})],1)])})),0)]),i("div",{staticClass:"text-h6 flex flex-center",class:{visible:t.loaderVisible}},[i("div",{staticClass:"loader-content flex q-pt-lg"},[0===t.status?i("div",[i("i",[t._v("📡")]),t._v(" Connecting to Socket API ...")]):1===t.status?i("div",[i("i",[t._v("💬")]),t._v("  Waiting for data from Socket API ...")]):2===t.status?i("div",[i("i",[t._v("😃")]),t._v("  Connected to the Socket API")]):-1===t.status?i("div",[i("i",[t._v("😡")]),t._v("  Error connecting to the Socket API")]):t._e()])])])},j=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"text-primary if-medium"},[i("h1",{staticClass:"text-nowrap text-condense shadow-text"},[t._v("Crypto 24h Change")])])}],V=(i("ac4d"),i("5df3"),i("1c4c"),i("6b54"),i("c5f6"),i("3b2b"),i("386d"),i("a481"),function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("svg",{attrs:{viewBox:t.viewBox,xmlns:"http://www.w3.org/2000/svg"}},[i("polyline",{staticClass:"color",attrs:{fill:"none",stroke:"#000","stroke-width":"2","stroke-linecap":"round",points:t.chartPoints()}}),i("circle",{staticClass:"color",attrs:{cx:t.cx,cy:t.cy,r:"4",fill:"#000",stroke:"none"}})])}),X=[],Y={name:"LineChartItem",props:["width","height","values"],data:function data(){return{cx:0,cy:0}},computed:{viewBox:function viewBox(){return"0 0 "+this.width+" "+this.height}},methods:{chartPoints:function chartPoints(){var t=this.getPoints(),a=t.length?t[t.length-1]:{x:0,y:0},i=t.map((function(t){return t.x-10+","+t.y}));return this.cx=a.x-5,this.cy=a.y,i.join(" ")},getPoints:function getPoints(){this.width=parseFloat(this.width)||0,this.height=parseFloat(this.height)||0;for(var t=this.values.reduce((function(t,a){return a<t?a:t}),this.values[0]),a=this.values.reduce((function(t,a){return a>t?a:t}),this.values[0]),i=this.values.length,r=this.height/2,o=a>t?a-t:this.height,c=i>1?this.width/(i-1):1,l=[],d=0;d<i;++d){var u=this.values[d],h=2*((u-t)/o-.5),p=d*c,m=-h*r*.8+r;l.push({x:p,y:m})}return l}}},U=Y,B=Object(C["a"])(U,V,X,!1,null,null,null),z=B.exports;function _createForOfIteratorHelper(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var a=0,i=function F(){};return{s:i,n:function n(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,l=!1;return{s:function s(){r=t[Symbol.iterator]()},n:function n(){var t=r.next();return c=t.done,t},e:function e(t){l=!0,o=t},f:function f(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(t,a){if(t){if("string"===typeof t)return _arrayLikeToArray(t,a);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,a):void 0}}function _arrayLikeToArray(t,a){(null==a||a>t.length)&&(a=t.length);for(var i=0,r=new Array(a);i<a;i++)r[i]=t[i];return r}var W={components:{LineChartItem:z},data:function data(){return{endpoint:"wss://stream.binance.com:9443/ws/!ticker@arr",iconbase:"https://raw.githubusercontent.com/rainner/binance-watch/master/public/images/icons/",cache:{},coins:[],asset:"USDT",search:"",sort:"assetVolume",order:"desc",limit:50,status:0,sock:null,cx:0,cy:0}},computed:{coinsList:function coinsList(){var t=this,a=this.coins.slice(),i=this.search.replace(/[^\s\w\-.]+/g,"").replace(/[\r\s\t\n]+/g," ").trim();if(this.asset&&(a=a.filter((function(a){return a.asset===t.asset}))),i&&i.length>1){var r=new RegExp("^("+i+")","i");a=a.filter((function(t){return r.test(t.token)}))}return this.sort&&(a=this.sortList(a,this.sort,this.order)),this.limit&&(a=a.slice(0,this.limit)),a},loaderVisible:function loaderVisible(){return 2!==this.status},sortLabel:function sortLabel(){switch(this.sort){case"token":return"Token";case"percent":return"Percent";case"close":return"Price";case"change":return"Change";case"assetVolume":return"Volume";case"tokenVolume":return"Volume";case"trades":return"Trades";default:return"Default"}}},filters:{toFixed:function toFixed(t,a){return"number"===typeof a?Number(t).toFixed(a):Number(t).toFixed("USDT"===a?3:8)},toMoney:function toMoney(t){return Number(t).toFixed(0).replace(/./g,(function(t,a,i){return a&&"."!==t&&(i.length-a)%3===0?","+t:t}))}},methods:{sortBy:function sortBy(t,a){this.sort!==t?this.order=a||"asc":this.order="asc"===this.order?"desc":"asc",this.sort=t},filterAsset:function filterAsset(t){this.asset=String(t||"BTC")},setLimit:function setLimit(t){this.limit=parseInt(t)||0},onSockOpen:function onSockOpen(t){this.status=1},onSockClose:function onSockClose(t){this.status=0,setTimeout(this.sockInit,1e4)},onSockError:function onSockError(t){this.status=-1,setTimeout(this.sockInit,1e4)},onSockData:function onSockData(t){var a,i=this,r=JSON.parse(t.data)||[],o=_createForOfIteratorHelper(r);try{for(o.s();!(a=o.n()).done;){var c=a.value,l=this.getCoinData(c);l.history=this.cache.hasOwnProperty(l.symbol)?this.cache[l.symbol].history:this.fakeHistory(l.close),l.history.length>100&&(l.history=l.history.slice(l.history.length-100)),l.history.push(l.close),this.cache[l.symbol]=l}}catch(d){o.e(d)}finally{o.f()}this.coins=Object.keys(this.cache).map((function(t){return i.cache[t]})),this.status=2},sockInit:function sockInit(){if(!(this.status>0))try{this.status=0,this.sock=new WebSocket(this.endpoint),this.sock.addEventListener("open",this.onSockOpen),this.sock.addEventListener("close",this.onSockClose),this.sock.addEventListener("error",this.onSockError),this.sock.addEventListener("message",this.onSockData)}catch(t){this.status=-1,this.sock=null}},sockClose:function sockClose(){this.sock&&this.sock.close()},fakeHistory:function fakeHistory(t){for(var a=1e-4*t,i=-Math.abs(a),r=Math.abs(a),o=[],c=0;c<50;++c){var l=Math.random()*(r-i)+i;o.push(t+l)}return o},getCoinData:function getCoinData(t){var a=/^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/,i=String(t.s).replace(/[^\w-]+/g,"").toUpperCase(),r=i.replace(a,"$1"),o=i.replace(a,"$2"),c=r,l=r+"/"+o,d=this.iconbase+r.toLowerCase()+"_.png",u=parseFloat(t.o),h=parseFloat(t.h),p=parseFloat(t.l),m=parseFloat(t.c),g=parseFloat(t.p),b=parseFloat(t.P),v=parseInt(t.n),_=Math.round(t.v),y=Math.round(t.q),k=b>=0?"+":"",w=b>=0?"▲":"▼",x=[l,m.toFixed(8),"(",w,k+b.toFixed(2)+"%","|",k+g.toFixed(8),")"].join(" "),C="";return b>0&&(C="gain"),b<0&&(C="loss"),{symbol:i,token:r,asset:o,name:c,pair:l,icon:d,open:u,high:h,low:p,close:m,change:g,percent:b,trades:v,tokenVolume:_,assetVolume:y,sign:k,arrow:w,style:C,info:x}},sortList:function sortList(t,a,i){return t.sort((function(t,r){var o=t[a],c=r[a];if(o&&c){if(o="string"===typeof o?o.toUpperCase():o,c="string"===typeof c?c.toUpperCase():c,"asc"===i){if(o<c)return-1;if(o>c)return 1}if("desc"===i){if(o>c)return-1;if(o<c)return 1}}return 0}))}},mounted:function mounted(){this.sockInit()},destroyed:function destroyed(){this.sockClose()}},Z=W,K=(i("6d96"),Object(C["a"])(Z,TokenPricesvue_type_template_id_1230a1fa_scoped_true_render,j,!1,null,"1230a1fa",null)),G=K.exports,J=i("2f62"),Q=i("91e9b"),tt=i("f60f"),MultiTransactionvue_type_template_id_98cb4c6a_scoped_true_render=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("q-timeline",{attrs:{color:"secondary"}},[i("q-timeline-entry",{attrs:{subtitle:"Swaping 2 EOS to 100 VTX",avatar:"https://files.coinswitch.co/public/coins/eos.png",color:"deep-purple-12"}},[i("div",[t.transactionLink?i("q-input",{staticClass:"input-input",attrs:{dark:"true"===t.$store.state.settings.lightMode,light:"false"===t.$store.state.settings.lightMode,readonly:"",rounded:"",outlined:"",color:"purple"},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"flex justify-end"},[i("q-btn",{staticClass:"btn-copy",attrs:{flat:"",unelevated:"","text-color":"grey",round:"",icon:"o_file_copy"},on:{click:function(a){return t.copyToClipboard(t.transactionLink,"Transaction link")}}})],1)]},proxy:!0}],null,!1,1232891652),model:{value:t.transactionLink,callback:function(a){t.transactionLink=a},expression:"transactionLink"}}):t._e(),i("span",{staticClass:"text-green q-pr-sm"},[t._v("Success:")]),t.transactionLink?i("a",{staticClass:"text-body2 q-pb-md text-black",attrs:{href:t.transactionLink,target:"_blank"}},[t._v("\n        More info")]):t._e()],1)]),i("q-timeline-entry",{attrs:{subtitle:"Swaping 100 VTX to 200 TPT",avatar:"statics/icons/favicon-32x32.png",color:"deep-purple-12"}},[i("div",[t.transactionLink?i("q-input",{staticClass:"input-input",attrs:{dark:"true"===t.$store.state.settings.lightMode,light:"false"===t.$store.state.settings.lightMode,readonly:"",rounded:"",outlined:"",color:"purple"},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"flex justify-end"},[i("q-btn",{staticClass:"btn-copy",attrs:{flat:"",unelevated:"","text-color":"grey",round:"",icon:"o_file_copy"},on:{click:function(a){return t.copyToClipboard(t.transactionLink,"Transaction link")}}})],1)]},proxy:!0}],null,!1,1232891652),model:{value:t.transactionLink,callback:function(a){t.transactionLink=a},expression:"transactionLink"}}):t._e(),i("span",{staticClass:"text-green q-pr-sm"},[t._v("Success:")]),t.transactionLink?i("a",{staticClass:"text-body2 q-pb-md text-black",attrs:{href:t.transactionLink,target:"_blank"}},[t._v("\n        More info")]):t._e()],1)]),i("q-timeline-entry",{attrs:{subtitle:"Account creation",color:"grey",icon:"hourglass_empty"}},[i("span",[t._v("Processing")]),i("br"),i("q-spinner-dots",{attrs:{color:"primary",size:"2em"}}),i("div")],1),i("q-timeline-entry",{attrs:{subtitle:"Liquidity pools investment",color:"grey",icon:"hourglass_empty"}},[i("q-spinner-dots",{attrs:{color:"primary",size:"2em"}})],1)],1)},et=[],at={data:function data(){return{transactionLink:"https://www.bloks.io/transaction/65893d0cdfa93287c7ead0fcac358c14f97b345f6f57df84ea1900582d06cc94"}}},st=at,nt=(i("da2d"),Object(C["a"])(st,MultiTransactionvue_type_template_id_98cb4c6a_scoped_true_render,et,!1,null,"98cb4c6a",null)),it=nt.exports,rt=i("0a51"),ot=(i("3ee4"),i("9029"));function ownKeys(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),i.push.apply(i,r)}return i}function _objectSpread(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?ownKeys(Object(i),!0).forEach((function(a){h()(t,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))}))}return t}var ct=i("9bf1");ct.default&&(ct=ct.default);var lt={components:{VTXStakeState:M,MultiTransaction:it,HexChart:E,GodexV2:O["default"],SingleToken:T["default"],AssetsExplorer:H["default"],TokenPrices:G},data:function data(){return{customSlider:!0,rawPools:[],showAssetsExplorer:!1,tab:"dashboard",cruxKey:{},tokenToBuy:null,assetSelected:!1,alert:!0,interval:null,osName:"",tabPoolAndAssetBalances:"asset",screenSize:0,openDialog:!1,walletClientName:"verto"}},beforeDestroy:function beforeDestroy(){window.removeEventListener("resize",this.getWindowWidth),clearInterval(this.interval)},created:function created(){var t=this;return b()(m.a.mark((function _callee(){var a,i;return m.a.wrap((function _callee$(r){while(1)switch(r.prev=r.next){case 0:a=t.$store.state.wallets.tokens.filter((function(t){return"eth"===t.type})),a.length>0&&null!==a[0].usd&&a[0].usd>0&&(t.interval=setInterval((function(){t.customSlider=t.$store.state.investment.zapperTokens.length?!t.customSlider:t.customSlider}),12e3)),t.$route.params.walletToRefresh&&setTimeout((function(){Object(rt["a"])(t.$route.params.walletToRefresh||{fromCache:!0})}),500),window.localStorage.setItem("skin",null===window.localStorage.getItem("skin")||window.localStorage.getItem("skin")),t.$store.state.settings.lightMode=null===window.localStorage.getItem("skin")||window.localStorage.getItem("skin"),i=document.querySelector(".exchange-notif"),null!==i&&i.querySelector(".q-btn").dispatchEvent(new Event("click")),t.osName=ot["osName"],t.getWindowWidth(),window.addEventListener("resize",t.getWindowWidth),v["a"].state.currentwallet.config.mnemonic||(t.$router.push({name:"recovery-seed",params:{step:2}}),t.$store.commit("settings/updateState",{key:"backupConfig",value:!0})),t.$store.state.currentwallet.wallet={empty:!0};case 12:case"end":return r.stop()}}),_callee)})))()},mounted:function mounted(){var t=this;return b()(m.a.mark((function _callee2(){return m.a.wrap((function _callee2$(a){while(1)switch(a.prev=a.next){case 0:t.$bus.$on("showHomeIntro",(function(){t.showIntros()})),t.$bus.$on("showDefaultDashboard",(function(){t.assetSelected=!1})),t.$q.screen.width<1024&&(t.$q.platform.is.mobile||window.localStorage.setItem("skin","false"),t.$store.state.settings.lightMode=window.localStorage.getItem("skin")),t.$store.state.settings.coins.defibox.length||setTimeout((function(){t.getGodexCoins(),t.get1inchCoins(),t.getDefiboxCoins()}),3e3);case 4:case"end":return a.stop()}}),_callee2)})))()},methods:{buyToken:function buyToken(t){this.tab="exchange",this.assetSelected=!1,this.tokenToBuy=t},assetsChanged:function assetsChanged(t){var a=this;if(this.assetSelected){var i=t.find((function(t){return t.type===a.assetSelected.type&&t.chain===a.assetSelected.chain&&("eos"!==a.assetSelected.chain||t.contract===a.assetSelected.contract)}));i&&(this.$refs.singleTokenComponent.asset.usd=i.usd,this.$refs.singleTokenComponent.asset.amount=i.amount)}},setAsset:function setAsset(t){this.assetSelected=t,this.tab="",this.$store.state.settings.show.tab=""},getWindowWidth:function getWindowWidth(){this.$isbex?this.screenSize=357:this.screenSize=document.querySelector("#q-app").offsetWidth},showIntros:function showIntros(){var t=localStorage.getItem("disableIntros_home");if(!t){var a=i("479f"),r=new a;r.setOptions({showProgress:!0}).onbeforeexit((function(){return localStorage.setItem("disableIntros_home",Date.now())})).start()}}},computed:_objectSpread({},Object(J["b"])("investment",["zapperTokens","poolDataHistory","pools"])),mixins:[Q["a"],tt["a"]]},dt=lt,ut=(i("e825"),i("e04e"),i("a305"),i("fb79"),Object(C["a"])(dt,render,d,!1,null,"56fca001",null));a["default"]=ut.exports},da2d:function(t,a,i){"use strict";var r=i("f02c"),o=i.n(r);o.a},e04e:function(t,a,i){"use strict";var r=i("7aed"),o=i.n(r);o.a},e825:function(t,a,i){"use strict";var r=i("a9f0"),o=i.n(r);o.a},f02c:function(t,a,i){},fb79:function(t,a,i){"use strict";var r=i("8de9"),o=i.n(r);o.a}}]);