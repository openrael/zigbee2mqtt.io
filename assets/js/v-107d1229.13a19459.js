"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18958],{81219:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-107d1229",path:"/devices/GZCGQ11LM.html",title:"Xiaomi GZCGQ11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi GZCGQ11LM control via MQTT",description:"Integrate your Xiaomi GZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Detection_period (numeric)",slug:"detection-period-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GZCGQ11LM.md",git:{updatedTime:1661706754e3}}},11162:(e,i,t)=>{t.r(i),t.d(i,{default:()=>c});var a=t(66252);const o=(0,a.uE)('<h1 id="xiaomi-gzcgq11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-gzcgq11lm" aria-hidden="true">#</a> Xiaomi GZCGQ11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GZCGQ11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara T1 light intensity sensor</td></tr><tr><td>Exposes</td><td>battery, voltage, illuminance, illuminance_lux, detection_period, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GZCGQ11LM.jpg" alt="Xiaomi GZCGQ11LM"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),n=(0,a.Uk)("How to use device type specific configuration"),d=(0,a.uE)('<ul><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_precision</code>: Number of digits after decimal point for illuminance_lux, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="detection-period-numeric" tabindex="-1"><a class="header-anchor" href="#detection-period-numeric" aria-hidden="true">#</a> Detection_period (numeric)</h3><p>Time interval in seconds to report after light changes. Value can be found in the published state on the <code>detection_period</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detection_period&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_period&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>59</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),l={},c=(0,t(83744).Z)(l,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[n])),_:1})])]),d],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,a]of i)e[t]=a;return e}}}]);