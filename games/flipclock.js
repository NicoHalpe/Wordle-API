var FlipClock,Base=function(){};Base.extend=function(t,i){"use strict";var e=Base.prototype.extend;Base._prototyping=!0;var s=new this;e.call(s,t),s.base=function(){},delete Base._prototyping;var n=s.constructor,o=s.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==o)this._constructing=!0,n.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||e).call(arguments[0],s)};return o.ancestor=this,o.extend=this.extend,o.forEach=this.forEach,o.implement=this.implement,o.prototype=s,o.toString=this.toString,o.valueOf=function(t){return"object"==t?o:n.valueOf()},e.call(o,i),"function"==typeof o.init&&o.init(),o},Base.prototype={extend:function(t,i){if(arguments.length>1){var e=this[t];if(e&&"function"==typeof i&&(!e.valueOf||e.valueOf()!=i.valueOf())&&/\bbase\b/.test(i)){var s=i.valueOf();(i=function(){var t=this.base||Base.prototype.base;this.base=e;var i=s.apply(this,arguments);return this.base=t,i}).valueOf=function(t){return"object"==t?i:s},i.toString=Base.toString}this[t]=i}else if(t){var n=Base.prototype.extend;Base._prototyping||"function"==typeof this||(n=this.extend||n);for(var o={toSource:null},r=["constructor","toString","valueOf"],a=Base._prototyping?0:1;c=r[a++];)t[c]!=o[c]&&n.call(this,c,t[c]);for(var c in t)o[c]||n.call(this,c,t[c])}return this}},Base=Base.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(t,i,e){for(var s in t)void 0===this.prototype[s]&&i.call(e,t[s],s,t)},implement:function(){for(var t=0;t<arguments.length;t++)"function"==typeof arguments[t]?arguments[t](this.prototype):this.prototype.extend(arguments[t]);return this},toString:function(){return String(this.valueOf())}}),function(t){"use strict";(FlipClock=function(t,i,e){return new FlipClock.Factory(t,i,e)}).Lang={},FlipClock.Base=Base.extend({buildDate:"2013-11-07",version:"0.3.1",constructor:function(i,e){"object"!=typeof i&&(i={}),"object"!=typeof e&&(e={}),this.setOptions(t.extend(!0,{},i,e))},callback:function(t){if("function"==typeof t){for(var i=[],e=1;e<=arguments.length;e++)arguments[e]&&i.push(arguments[e]);t.apply(this,i)}},log:function(t){window.console&&console.log&&console.log(t)},getOption:function(t){return!!this[t]&&this[t]},getOptions:function(){return this},setOption:function(t,i){this[t]=i},setOptions:function(t){for(var i in t)void 0!==t[i]&&this.setOption(i,t[i])}}),FlipClock.Factory=FlipClock.Base.extend({autoStart:!0,callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},classes:{active:"flip-clock-active",before:"flip-clock-before",divider:"flip-clock-divider",dot:"flip-clock-dot",label:"flip-clock-label",flip:"flip",play:"play",wrapper:"flip-clock-wrapper"},clockFace:"HourlyCounter",defaultClockFace:"HourlyCounter",defaultLanguage:"english",language:"english",lang:!1,face:!0,running:!1,time:!1,timer:!1,lists:[],$wrapper:!1,constructor:function(i,e,s){this.lists=[],this.running=!1,this.base(s),this.$wrapper=t(i).addClass(this.classes.wrapper),this.time=new FlipClock.Time(this,e?Math.round(e):0),this.timer=new FlipClock.Timer(this,s),this.lang=this.loadLanguage(this.language),this.face=this.loadClockFace(this.clockFace,s),this.autoStart&&this.start()},loadClockFace:function(t,i){var e;return t=t.ucfirst()+"Face",(e=FlipClock[t]?new FlipClock[t](this,i):new FlipClock[this.defaultClockFace+"Face"](this,i)).build(),e},loadLanguage:function(t){return FlipClock.Lang[t.ucfirst()]?FlipClock.Lang[t.ucfirst()]:FlipClock.Lang[t]?FlipClock.Lang[t]:FlipClock.Lang[this.defaultLanguage]},localize:function(t,i){var e=this.lang;if(!t)return null;var s=t.toLowerCase();return"object"==typeof i&&(e=i),e&&e[s]?e[s]:t},start:function(t){var i=this;i.running||i.countdown&&!(i.countdown&&i.time.time>0)?i.log("Trying to start timer when countdown already at 0"):(i.face.start(i.time),i.timer.start(function(){i.flip(),"function"==typeof t&&t()}))},stop:function(t){for(var i in this.face.stop(),this.timer.stop(t),this.lists)this.lists[i].stop()},reset:function(t){this.timer.reset(t),this.face.reset()},setTime:function(t){this.time.time=t,this.face.setTime(t)},getTime:function(t){return this.time},setCountdown:function(t){var i=this.running;this.countdown=!!t,i&&(this.stop(),this.start())},flip:function(){this.face.flip()}}),FlipClock.Face=FlipClock.Base.extend({dividers:[],factory:!1,lists:[],constructor:function(t,i){this.base(i),this.factory=t,this.dividers=[]},build:function(){},createDivider:function(i,e,s){"boolean"!=typeof e&&e||(s=e,e=i);var n=['<span class="'+this.factory.classes.dot+' top"></span>','<span class="'+this.factory.classes.dot+' bottom"></span>'].join("");s&&(n=""),i=this.factory.localize(i);var o=['<span class="'+this.factory.classes.divider+" "+(e||"").toLowerCase()+'">','<span class="'+this.factory.classes.label+'">'+(i||"")+"</span>",n,"</span>"];return t(o.join(""))},createList:function(t,i){return"object"==typeof t&&(i=t,t=0),new FlipClock.List(this.factory,t,i)},reset:function(){},setTime:function(t){this.flip(t)},addDigit:function(t){var i=this.createList(t,{classes:{active:this.factory.classes.active,before:this.factory.classes.before,flip:this.factory.classes.flip}});i.$obj.insertBefore(this.factory.lists[0].$obj),this.factory.lists.unshift(i)},start:function(){},stop:function(){},flip:function(i,e){var s=this;e||(s.factory.countdown?(s.factory.time.time<=0&&s.factory.stop(),s.factory.time.time--):s.factory.time.time++);var n=s.factory.lists.length-i.length;n<0&&(n=0);t.each(i,function(t,i){t+=n;var o=s.factory.lists[t];if(o){var r=o.digit;o.select(i),i==r||e||o.play()}else s.addDigit(i),!0});for(var o=0;o<i.length;o++)o>=n&&s.factory.lists[o].digit!=i[o]&&s.factory.lists[o].select(i[o])}}),FlipClock.List=FlipClock.Base.extend({digit:0,classes:{active:"flip-clock-active",before:"flip-clock-before",flip:"flip"},factory:!1,$obj:!1,items:[],constructor:function(t,i,e){this.factory=t,this.digit=i,this.$obj=this.createList(),i>0&&this.select(i),this.factory.$wrapper.append(this.$obj)},select:function(t){void 0===t?t=this.digit:this.digit=t;var i=this.$obj.find('[data-digit="'+t+'"]');this.$obj.find("."+this.classes.active).removeClass(this.classes.active),this.$obj.find("."+this.classes.before).removeClass(this.classes.before);this.factory.countdown?i.is(":last-child")?this.$obj.find(":first-child").addClass(this.classes.before):i.next().addClass(this.classes.before):i.is(":first-child")?this.$obj.find(":last-child").addClass(this.classes.before):i.prev().addClass(this.classes.before),i.addClass(this.classes.active)},play:function(){this.$obj.addClass(this.factory.classes.play)},stop:function(){var t=this;setTimeout(function(){t.$obj.removeClass(t.factory.classes.play)},this.factory.timer.interval)},createList:function(){for(var i=t('<ul class="'+this.classes.flip+" "+(this.factory.running?this.factory.classes.play:"")+'" />'),e=0;e<10;e++){var s=t(['<li data-digit="'+e+'">','<a href="#">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+e+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+e+"</div>","</div>","</a>","</li>"].join(""));this.items.push(s),i.append(s)}return i}}),FlipClock.Time=FlipClock.Base.extend({minimumDigits:0,time:0,factory:!1,constructor:function(t,i,e){this.base(e),this.factory=t,i&&(this.time=i)},convertDigitsToArray:function(t){var i=[];t=t.toString();for(var e=0;e<t.length;e++)t[e].match(/^\d*$/g)&&i.push(t[e]);return i},digit:function(t){var i=this.toString(),e=i.length;return!!i[e-t]&&i[e-t]},digitize:function(i){var e=[];return t.each(i,function(t,i){1==(i=i.toString()).length&&(i="0"+i);for(var s=0;s<i.length;s++)e.push(i[s])}),e.length>this.minimumDigits&&(this.minimumDigits=e.length),this.minimumDigits>e.length&&e.unshift("0"),e},getDayCounter:function(t){var i=[this.getDays(),this.getHours(!0),this.getMinutes(!0)];return t&&i.push(this.getSeconds(!0)),this.digitize(i)},getDays:function(t){var i=this.time/60/60/24;return t&&(i%=7),Math.floor(i)},getHourCounter:function(){return this.digitize([this.getHours(),this.getMinutes(!0),this.getSeconds(!0)])},getHourly:function(){return this.getHourCounter()},getHours:function(t){var i=this.time/60/60;return t&&(i%=24),Math.floor(i)},getMilitaryTime:function(){var t=new Date;return this.digitize([t.getHours(),t.getMinutes(),t.getSeconds()])},getMinutes:function(t){var i=this.time/60;return t&&(i%=60),Math.floor(i)},getMinuteCounter:function(){return this.digitize([this.getMinutes(),this.getSeconds(!0)])},getSeconds:function(t){var i=this.time;return t&&(60==i?i=0:i%=60),Math.ceil(i)},getTime:function(){var t=new Date,i=t.getHours();return this.digitize([i>12?i-12:0===i?12:i,t.getMinutes(),t.getSeconds()])},getWeeks:function(){var t=this.time/60/60/24/7;return mod&&(t%=52),Math.floor(t)},removeLeadingZeros:function(i,e){var s=0,n=[];return t.each(e,function(t,o){t<i?s+=parseInt(e[t],10):n.push(e[t])}),0===s?n:e},toString:function(){return this.time.toString()}}),FlipClock.Timer=FlipClock.Base.extend({callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},count:0,factory:!1,interval:1e3,constructor:function(t,i){this.base(i),this.factory=t,this.callback(this.callbacks.init),this.callback(this.callbacks.create)},getElapsed:function(){return this.count*this.interval},getElapsedTime:function(){return new Date(this.time+this.getElapsed())},reset:function(t){clearInterval(this.timer),this.count=0,this._setInterval(t),this.callback(this.callbacks.reset)},start:function(t){this.factory.running=!0,this._createTimer(t),this.callback(this.callbacks.start)},stop:function(t){this.factory.running=!1,this._clearInterval(t),this.callback(this.callbacks.stop),this.callback(t)},_clearInterval:function(){clearInterval(this.timer)},_createTimer:function(t){this._setInterval(t)},_destroyTimer:function(t){this._clearInterval(),this.timer=!1,this.callback(t),this.callback(this.callbacks.destroy)},_interval:function(t){this.callback(this.callbacks.interval),this.callback(t),this.count++},_setInterval:function(t){var i=this;i.timer=setInterval(function(){i._interval(t)},this.interval)}}),String.prototype.ucfirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1)},t.fn.FlipClock=function(i,e){return"object"==typeof i&&(e=i,i=0),new FlipClock(t(this),i,e)},t.fn.flipClock=function(i,e){return t.fn.FlipClock(i,e)}}(jQuery),function(t){FlipClock.TwentyFourHourClockFace=FlipClock.Face.extend({constructor:function(t,i){t.countdown=!1,this.base(t,i)},build:function(i){var e=this,s=this.factory.$wrapper.find("ul");(i=i||(this.factory.time.time||this.factory.time.getMilitaryTime())).length>s.length&&t.each(i,function(t,i){e.factory.lists.push(e.createList(i))}),this.dividers.push(this.createDivider()),this.dividers.push(this.createDivider()),t(this.dividers[0]).insertBefore(this.factory.lists[this.factory.lists.length-2].$obj),t(this.dividers[1]).insertBefore(this.factory.lists[this.factory.lists.length-4].$obj),this._clearExcessDigits(),this.autoStart&&this.start()},flip:function(t){t=t||this.factory.time.getMilitaryTime(),this.base(t)},_clearExcessDigits:function(){for(var t=this.factory.lists[this.factory.lists.length-2],i=this.factory.lists[this.factory.lists.length-4],e=6;e<10;e++)t.$obj.find("li:last-child").remove(),i.$obj.find("li:last-child").remove()}})}(jQuery),function(t){FlipClock.CounterFace=FlipClock.Face.extend({autoStart:!1,constructor:function(t,i){t.timer.interval=0,t.autoStart=!1,t.running=!0,t.increment=function(){t.countdown=!1,t.setTime(t.getTime().time+1)},t.decrement=function(){t.countdown=!0,t.setTime(t.getTime().time-1)},t.setValue=function(i){t.setTime(i)},t.setCounter=function(i){t.setTime(i)},this.base(t,i)},build:function(){var i=this,e=this.factory.$wrapper.find("ul"),s=[],n=this.factory.getTime().digitize([this.factory.getTime().time]);n.length>e.length&&t.each(n,function(t,e){var n=i.createList(e);n.select(e),s.push(n)}),t.each(s,function(t,i){i.play()}),this.factory.lists=s},flip:function(t){var i=this.factory.getTime().digitize([this.factory.getTime().time]);this.base(i,t)}})}(jQuery),function(t){FlipClock.DailyCounterFace=FlipClock.Face.extend({showSeconds:!0,constructor:function(t,i){this.base(t,i)},build:function(i,e){var s=this,n=this.factory.$wrapper.find("ul"),o=[],r=0;(e=e||this.factory.time.getDayCounter(this.showSeconds)).length>n.length&&t.each(e,function(t,i){o.push(s.createList(i))}),this.factory.lists=o,this.showSeconds?t(this.createDivider("Seconds")).insertBefore(this.factory.lists[this.factory.lists.length-2].$obj):r=2,t(this.createDivider("Minutes")).insertBefore(this.factory.lists[this.factory.lists.length-4+r].$obj),t(this.createDivider("Hours")).insertBefore(this.factory.lists[this.factory.lists.length-6+r].$obj),t(this.createDivider("Days",!0)).insertBefore(this.factory.lists[0].$obj),this._clearExcessDigits(),this.autoStart&&this.start()},flip:function(t,i){i||(i=this.factory.time.getDayCounter(this.showSeconds)),this.base(i,t)},_clearExcessDigits:function(){for(var t=this.factory.lists[this.factory.lists.length-2],i=this.factory.lists[this.factory.lists.length-4],e=6;e<10;e++)t.$obj.find("li:last-child").remove(),i.$obj.find("li:last-child").remove()}})}(jQuery),function(t){FlipClock.HourlyCounterFace=FlipClock.Face.extend({clearExcessDigits:!0,constructor:function(t,i){this.base(t,i)},build:function(i,e){var s=this,n=this.factory.$wrapper.find("ul"),o=[];(e=e||this.factory.time.getHourCounter()).length>n.length&&t.each(e,function(t,i){o.push(s.createList(i))}),this.factory.lists=o,t(this.createDivider("Seconds")).insertBefore(this.factory.lists[this.factory.lists.length-2].$obj),t(this.createDivider("Minutes")).insertBefore(this.factory.lists[this.factory.lists.length-4].$obj),i||t(this.createDivider("Hours",!0)).insertBefore(this.factory.lists[0].$obj),this.clearExcessDigits&&this._clearExcessDigits(),this.autoStart&&this.start()},flip:function(t,i){i||(i=this.factory.time.getHourCounter()),this.base(i,t)},_clearExcessDigits:function(){for(var t=this.factory.lists[this.factory.lists.length-2],i=this.factory.lists[this.factory.lists.length-4],e=6;e<10;e++)t.$obj.find("li:last-child").remove(),i.$obj.find("li:last-child").remove()}})}(jQuery),jQuery,FlipClock.MinuteCounterFace=FlipClock.HourlyCounterFace.extend({clearExcessDigits:!1,constructor:function(t,i){this.base(t,i)},build:function(){this.base(!0,this.factory.time.getMinuteCounter())},flip:function(t){this.base(t,this.factory.time.getMinuteCounter())}}),function(t){FlipClock.TwelveHourClockFace=FlipClock.TwentyFourHourClockFace.extend({meridium:!1,meridiumText:"AM",build:function(i){i=i||(this.factory.time.time?this.factory.time.time:this.factory.time.getTime()),this.base(i),this.meridiumText=this._isPM()?"PM":"AM",this.meridium=t(['<ul class="flip-clock-meridium">',"<li>",'<a href="#">'+this.meridiumText+"</a>","</li>","</ul>"].join("")),this.meridium.insertAfter(this.factory.lists[this.factory.lists.length-1].$obj)},flip:function(){this.meridiumText!=this._getMeridium()&&(this.meridiumText=this._getMeridium(),this.meridium.find("a").html(this.meridiumText)),this.base(this.factory.time.getTime())},_getMeridium:function(){return(new Date).getHours()>=12?"PM":"AM"},_isPM:function(){return"PM"==this._getMeridium()},_clearExcessDigits:function(){for(var t=this.factory.lists[this.factory.lists.length-2],i=this.factory.lists[this.factory.lists.length-4],e=6;e<10;e++)t.$obj.find("li:last-child").remove(),i.$obj.find("li:last-child").remove()}})}(jQuery),jQuery,FlipClock.Lang.German={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},FlipClock.Lang.de=FlipClock.Lang.German,FlipClock.Lang["de-de"]=FlipClock.Lang.German,FlipClock.Lang.german=FlipClock.Lang.German,jQuery,FlipClock.Lang.English={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},FlipClock.Lang.en=FlipClock.Lang.English,FlipClock.Lang["en-us"]=FlipClock.Lang.English,FlipClock.Lang.english=FlipClock.Lang.English,jQuery,FlipClock.Lang.Spanish={years:"A&#241;os",months:"Meses",days:"D&#205;as",hours:"Horas",minutes:"Minutos",seconds:"Segundo"},FlipClock.Lang.es=FlipClock.Lang.Spanish,FlipClock.Lang["es-es"]=FlipClock.Lang.Spanish,FlipClock.Lang.spanish=FlipClock.Lang.Spanish,jQuery,FlipClock.Lang.French={years:"ans",months:"mois",days:"jours",hours:"heures",minutes:"minutes",seconds:"secondes"},FlipClock.Lang.fr=FlipClock.Lang.French,FlipClock.Lang["fr-ca"]=FlipClock.Lang.French,FlipClock.Lang.french=FlipClock.Lang.French;
