webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_status__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_values__ = __webpack_require__(109);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const debug = "production" !== 'production';
if(debug) {
  console.warn(`YM2149 Editor: Vuex is in STRICT mode as NODE_ENV is set to "${"production"}".\n
All commits are syncronously watched. Performance lag is due to this.`);
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    status: __WEBPACK_IMPORTED_MODULE_2__modules_status__["a" /* default */],
    values: __WEBPACK_IMPORTED_MODULE_3__modules_values__["a" /* default */]
  },
  strict: debug
}));

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSynth;
function isSynth(e) {
  return e.manufacturer === 'Teensyduino' && e.name.indexOf('YM2149') > -1;
}

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webmidi__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webmidi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webmidi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keyboard__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__is_synth__ = __webpack_require__(11);







window.WebMidi = __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a;

var Application = function () {
  function Application() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Application);

    __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.enable(function (err) {
      if (err) {
        console.log('WebMidi could not be enabled.', err);
      } else {
        _this.setup();
      }
    }, true);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Application, [{
    key: 'setup',
    value: function setup() {
      //eslint-disable-line
      __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.addListener('connected', function (e) {
        if (!('output' in e)) return;

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__is_synth__["a" /* default */])(e)) {
          // let sendValues = false;
          // if(this.newDeviceDialog()) {
          //   sendValues = true;
          //   console.log('Should send current editor values to Synth memory');
          // }
          __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].dispatch('status/registerDeviceId', { id: e.id /* , sendValues */ });
        }
      });

      __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.addListener('disconnected', function (e) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__is_synth__["a" /* default */])(e)) {
          __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].dispatch('status/resetStatus');
        }
      });

      __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.outputs.forEach(function (output) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__is_synth__["a" /* default */])(output)) {
          __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].dispatch('status/registerDeviceId', { id: output.id });
        }
      });

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__keyboard__["a" /* default */])();
    }
  }, {
    key: 'newDeviceDialog',
    value: function newDeviceDialog() {
      //eslint-disable-line
      return confirm('New YM2149 Synth connected, send current editor values to Synth?'); //eslint-disable-line
    }
  }]);

  return Application;
}();

var application = new Application();

/* harmony default export */ __webpack_exports__["a"] = (application);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home___default.a
  }]
}));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(80)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(101),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createKeyboard;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webmidi__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webmidi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_webmidi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(4);



var keyBindings = {
  z: { note: 'C', octave: 0 },
  s: { note: 'C#', octave: 0 },
  x: { note: 'D', octave: 0 },
  d: { note: 'D#', octave: 0 },
  c: { note: 'E', octave: 0 },
  v: { note: 'F', octave: 0 },
  g: { note: 'F#', octave: 0 },
  b: { note: 'G', octave: 0 },
  h: { note: 'G#', octave: 0 },
  n: { note: 'A', octave: 0 },
  j: { note: 'A#', octave: 0 },
  m: { note: 'B', octave: 0 },

  q: { note: 'C', octave: 1 },
  2: { note: 'C#', octave: 1 },
  w: { note: 'D', octave: 1 },
  3: { note: 'D#', octave: 1 },
  e: { note: 'E', octave: 1 },
  r: { note: 'F', octave: 1 },
  5: { note: 'F#', octave: 1 },
  t: { note: 'G', octave: 1 },
  6: { note: 'G#', octave: 1 },
  y: { note: 'A', octave: 1 },
  7: { note: 'A#', octave: 1 },
  u: { note: 'B', octave: 1 },

  i: { note: 'C', octave: 2 },
  9: { note: 'C#', octave: 2 },
  o: { note: 'D', octave: 2 },
  0: { note: 'D#', octave: 2 },
  p: { note: 'E', octave: 2 }
};

var noteOn = {};

function createKeyboard() {
  window.addEventListener('keydown', function (e) {
    var octave = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters['values/keyboardOctave'];
    var channel = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters['values/channel'];
    var currentOutput = void 0;

    __WEBPACK_IMPORTED_MODULE_0_webmidi___default.a.outputs.forEach(function (output) {
      if (output.id === __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters['status/id']) currentOutput = output;
    });
    if (!currentOutput) return;

    if (e.key in keyBindings) {
      var binding = keyBindings[e.key];
      var note = binding.note + (octave + binding.octave);

      // handle key repeat
      if (noteOn[note]) return;

      noteOn[note] = true;
      currentOutput.playNote(note, channel);
    } else if (e.key === '=' || e.key === '+') {
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('values/incrementOctave');
    } else if (e.key === '-' || e.key === '_') {
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('values/decrementOctave');
    }
  });

  window.addEventListener('keyup', function (e) {
    var octave = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters['values/keyboardOctave'];
    var channel = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters['values/channel'];
    var currentOutput = void 0;

    __WEBPACK_IMPORTED_MODULE_0_webmidi___default.a.outputs.forEach(function (output) {
      if (output.id === __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getters['status/id']) currentOutput = output;
    });
    if (!currentOutput) return;

    if (e.key in keyBindings) {
      var binding = keyBindings[e.key];
      var note = binding.note + (octave + binding.octave);
      noteOn[note] = false;
      currentOutput.stopNote(note, channel);
    }
  });
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_circle_slider__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_purecss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_purecss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_purecss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_purecss_build_grids_responsive_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_purecss_build_grids_responsive_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_purecss_build_grids_responsive_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_font_awesome_scss_font_awesome_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_font_awesome_scss_font_awesome_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_font_awesome_scss_font_awesome_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(4);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.












__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_circle_slider__["default"]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  data: {
    Application: __WEBPACK_IMPORTED_MODULE_1__application__["a" /* default */]
  },
  router: __WEBPACK_IMPORTED_MODULE_7__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_8__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_6__App___default.a }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'channel-selector',
  data: function data() {
    return {
      inputValue: 1
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])('values', ['setChannel'])),
  watch: {
    inputValue: function inputValue() {
      this.setChannel({ channel: this.inputValue });
    }
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'range-control',
  props: ['label', 'title', 'value', 'cc'],
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', {
    channel: 'channel',
    getValue: 'value'
  }), {
    inputValue: {
      get: function get() {
        return this.$store.state.values.values[this.channel - 1][this.cc - 1];
        // return this.getValue(this.channel - 1, this.cc - 1);
      },
      set: function set(value) {
        this.writeValue({
          id: this.cc,
          value: value
        });
      }
    }
  }),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['writeValue'])),
  beforeMount: function beforeMount() {
    this.inputValue = this.value;
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'synth-type-selector',
  data: function data() {
    return {
      options: ['Square-voice', 'Square-voice + Env-voice Saw (Square pitch modulations are soloed for "acid" effects)', 'Square-voice + Env-voice Triangle (Square pitch modulations are soloed for "acid" effects)', 'Env-voice Triangle', 'Env-voice Saw', 'Square-voice + Softwave-voice (PWM)', 'Square-voice + Softwave-voice (Square pitch modulations are soloed for "acid" effects)', 'Noise']
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', {
    getVoice: 'voice',
    channel: 'channel'
  }), {
    voice: {
      get: function get() {
        return this.$store.state.values.values[this.channel - 1][2];
      },
      set: function set(value) {
        console.log(value);
        this.writeValue({
          id: 3,
          value: value
        });
      }
    }
  }),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['writeValue']))
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RangeControl__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RangeControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RangeControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SynthTypeSelector__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SynthTypeSelector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SynthTypeSelector__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'editor-panel',
  data: function data() {
    return {
      voice: 0,
      ranges: [{ title: 'Fine-tune', label: 'Softwave-voice / Env-voice (Software PWM)', value: 0, cc: 1 }, { title: 'Detune', label: 'Softwave-voice note detune in synth type: 5, otherwise square-voice detune', value: 0, cc: 2 }, { title: 'Volume Envelope Shape', label: '0=OFF, 1-63=Ramp up time, 64-127=Ramp down time', value: 0, cc: 4 }, { title: 'Portamento', value: 0, cc: 5 }, { title: 'Vibrato Rate', value: 0, cc: 6 }, { title: 'Vibrato Depth', value: 0, cc: 7 }, { title: 'Trigger Noise Delay', label: '(useful for snare tail or Env synth type effect)', value: 0, cc: 8 }, { title: 'Pitch Envelope Amount', value: 0, cc: 9 }, { title: 'Pitch Envelope Shape', label: '0=OFF, 1-63=Ramp up time, 64-127=Ramp down time', value: 0, cc: 10 }, { title: 'Transpose', label: '64 center', value: 64, cc: 11 }]
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', {
    getVoice: 'voice',
    channel: 'channel'
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['writeValue']), {
    updateChannel: function updateChannel(e) {
      this.$data.channel = e.channel;
    }
  }),
  watch: {
    voice: function voice() {
      this.writeValue({
        channel: this.channel,
        id: 3,
        value: parseInt(this.voice, 10)
      });
    }
  },
  components: {
    RangeControl: __WEBPACK_IMPORTED_MODULE_2__RangeControl___default.a,
    SynthTypeSelector: __WEBPACK_IMPORTED_MODULE_3__SynthTypeSelector___default.a
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webmidi__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webmidi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webmidi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadPatch__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadPatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__LoadPatch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SavePatch__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SavePatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__SavePatch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LoadFromFile__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LoadFromFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__LoadFromFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SaveToFile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SaveToFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__SaveToFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ChannelSelector__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ChannelSelector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ChannelSelector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__OctaveSelector__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__OctaveSelector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__OctaveSelector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditorPanel__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditorPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__EditorPanel__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected', 'id']), {
    name: function name() {
      var _this = this;

      var name = void 0;
      __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.outputs.forEach(function (output) {
        if (output.id === _this.id) name = output.name;
      });
      return name;
    }
  }),
  components: {
    LoadPatch: __WEBPACK_IMPORTED_MODULE_3__LoadPatch___default.a,
    SavePatch: __WEBPACK_IMPORTED_MODULE_4__SavePatch___default.a,
    LoadFromFile: __WEBPACK_IMPORTED_MODULE_5__LoadFromFile___default.a,
    SaveToFile: __WEBPACK_IMPORTED_MODULE_6__SaveToFile___default.a,
    ChannelSelector: __WEBPACK_IMPORTED_MODULE_7__ChannelSelector___default.a,
    OctaveSelector: __WEBPACK_IMPORTED_MODULE_8__OctaveSelector___default.a,
    EditorPanel: __WEBPACK_IMPORTED_MODULE_9__EditorPanel___default.a
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'load-from-file',
  data: function data() {
    return {
      fileInput: null
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', {
    getVoice: 'voice',
    channel: 'channel'
  })),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['writeValue']), {
    clickLoadButton: function clickLoadButton() {
      this.$refs.fileInput.click();
    },
    loadFile: function loadFile(e) {
      var _this = this;

      var files = e.target.files;

      for (var i = 0; i < files.length; i += 1) {
        var file = files.item(i);
        if (!file.type.match('json.*')) {
          return;
        }

        var reader = new FileReader();

        reader.onloadend = function (ev) {
          if (ev.target.readyState === FileReader.DONE) {
            var capture = JSON.parse(ev.target.result);
            capture.forEach(function (data, idx) {
              return _this.writeValue({
                id: idx + 1,
                value: data
              });
            });
          }
        };

        var fakeBlob = file.slice(0, file.size);
        reader.readAsBinaryString(fakeBlob);
      }
    }
  }),
  mounted: function mounted() {
    this.$refs.fileInput.addEventListener('change', this.loadFile.bind(this));
  },
  destroyed: function destroyed() {
    this.$refs.fileInput.removeEventListener('change', this.loadFile.bind(this));
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'load-patch',
  data: function data() {
    return {
      inputValue: 1
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', ['channel'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['loadPatchFromDevice']), {
    loadPatch: function loadPatch() {
      this.loadPatchFromDevice({
        channel: this.channel,
        id: this.inputValue
      });
    }
  })
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'octave-selector',
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', ['keyboardOctave'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['incrementOctave', 'decrementOctave']))
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'save-patch',
  data: function data() {
    return {
      inputValue: 1
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])('values', ['channel'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])('values', ['savePatchToDevice']), {
    savePatch: function savePatch() {
      this.savePatchToDevice({
        id: this.inputValue
      });
    }
  })
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(1);


//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'save-to-file',
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])('status', ['connected']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])('values', {
    getVoice: 'voice',
    channel: 'channel'
  })),
  methods: {
    exportJson: function exportJson() {
      this.$refs.downloadLink.href = 'data:text/json,' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.getVoice(this.channel));
    }
  }
});

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(75)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(96),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-077e7816",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(79)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(100),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-13d04194",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(78)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(99),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-13688ade",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(81)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(102),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-42e0706e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(77)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(98),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0fefa0fb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(76)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(97),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-078e2e30",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(74)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(95),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-054d6e16",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(83)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(104),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ce0f9e6a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(103),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4a37ab5f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(84)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f36ab5e0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-container pure-u-1-1 pure-u-sm-1-2"
  }, [_c('div', {
    staticClass: "shadow pure-form"
  }, [_vm._m(0), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.inputValue),
      expression: "inputValue",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "disabled": !_vm.connected
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return _vm._n(val)
        });
        _vm.inputValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((11), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      }
    }, [_vm._v("Patch " + _vm._s(i))])
  })), _vm._v(" "), _c('button', {
    staticClass: "pure-button",
    attrs: {
      "disabled": !_vm.connected
    },
    on: {
      "click": _vm.loadPatch
    }
  }, [_c('i', {
    staticClass: "fa fa-upload",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Load patch\n    ")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('h3', [_vm._v("Load Patch from Synth EEPROM")])])
}]}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-container pure-u-1-1 pure-u-sm-1-2"
  }, [_c('div', {
    staticClass: "shadow pure-form"
  }, [_c('h3', [_vm._v("Select channel/voice")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    attrs: {
      "disabled": !_vm.connected
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.inputValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("A")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("B")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("C")])])])])
},staticRenderFns: []}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "pure-button",
    class: {
      'pure-button-disabled': !_vm.connected
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.clickLoadButton
    }
  }, [_c('input', {
    ref: "fileInput",
    staticClass: "hidden",
    attrs: {
      "type": "file",
      "accept": ".json",
      "name": "fileInput"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-folder-open",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Load voice data from file\n")])
},staticRenderFns: []}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("YM2149Synth Patch Editor")]), _vm._v(" "), _c('h2', [_vm._v("Connected: " + _vm._s(_vm.connected) + " "), (_vm.name) ? _c('span', [_vm._v("(" + _vm._s(_vm.name) + ")")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "pure-g"
  }, [_c('load-patch'), _vm._v(" "), _c('save-patch')], 1), _vm._v(" "), _c('load-from-file'), _vm._v(" "), _c('save-to-file'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', [_vm._v("Playback options*")]), _vm._v(" "), _c('small', [_vm._v("*these options are not saved in the patch, they are for testing sound playback in the editor only")]), _vm._v(" "), _c('div', {
    staticClass: "pure-g"
  }, [_c('channel-selector'), _vm._v(" "), _c('octave-selector')], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('editor-panel')], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-container pure-u-1-1"
  }, [_c('div', {
    staticClass: "shadow pure-form"
  }, [_c('h3', [_vm._v("Synth Type")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.voice),
      expression: "voice",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "disabled": !_vm.connected
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return _vm._n(val)
        });
        _vm.voice = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.options), function(option, idx) {
    return _c('option', {
      domProps: {
        "value": idx
      }
    }, [_vm._v(_vm._s(option))])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 control-container"
  }, [_c('div', {
    staticClass: "shadow"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('circle-slider', {
    attrs: {
      "min": 0,
      "max": 127,
      "step-size": 1
    },
    model: {
      value: (_vm.inputValue),
      callback: function($$v) {
        _vm.inputValue = _vm._n($$v)
      },
      expression: "inputValue"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.inputValue),
      expression: "inputValue",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "disabled": !_vm.connected,
      "type": "number",
      "min": "0",
      "max": "127",
      "step": "1"
    },
    domProps: {
      "value": (_vm.inputValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputValue = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), (_vm.label) ? _c('p', [_vm._v(_vm._s(_vm.label))]) : _vm._e()], 1)])
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', [_vm._v("Patch values:")]), _vm._v(" "), _c('div', {
    staticClass: "pure-g"
  }, [_c('synth-type-selector'), _vm._v(" "), _vm._l((_vm.ranges), function(range) {
    return _c('range-control', {
      attrs: {
        "title": range.title,
        "label": range.label,
        "value": range.value,
        "cc": range.cc
      }
    })
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-container pure-u-1-1 pure-u-sm-1-2"
  }, [_c('div', {
    staticClass: "shadow pure-form"
  }, [_vm._m(0), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.inputValue),
      expression: "inputValue",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "disabled": !_vm.connected
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return _vm._n(val)
        });
        _vm.inputValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((11), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      }
    }, [_vm._v("Patch " + _vm._s(i))])
  })), _vm._v(" "), _c('button', {
    staticClass: "pure-button",
    attrs: {
      "disabled": !_vm.connected
    },
    on: {
      "click": _vm.savePatch
    }
  }, [_c('i', {
    staticClass: "fa fa-download",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Save patch\n    ")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('h3', [_vm._v("Save Patch to Synth EEPROM")])])
}]}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-container pure-u-1-1 pure-u-sm-1-2"
  }, [_c('div', {
    staticClass: "shadow pure-form"
  }, [_c('h3', [_vm._v("Keyboard Octave")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyboardOctave),
      expression: "keyboardOctave"
    }],
    attrs: {
      "readonly": "true",
      "size": "1"
    },
    domProps: {
      "value": (_vm.keyboardOctave)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyboardOctave = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "pure-button",
    on: {
      "click": _vm.decrementOctave
    }
  }, [_c('i', {
    staticClass: "fa fa-minus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "pure-button",
    on: {
      "click": _vm.incrementOctave
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    ref: "downloadLink",
    staticClass: "pure-button",
    class: {
      'pure-button-disabled': !_vm.connected
    },
    attrs: {
      "href": "#",
      "download": "voice.json"
    },
    on: {
      "click": _vm.exportJson
    }
  }, [_c('i', {
    staticClass: "fa fa-floppy-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Save voice data to file\n")])
},staticRenderFns: []}

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);



const state = {
  synthConnected: false,
  synthId: ''
};

// getters
const getters = {
  connected: state => state.synthConnected,
  id: state => state.synthId,
};

// actions
const actions = {
  registerDeviceId({ commit, state }, { id }) {
    commit('setConnected', { connected: true });
    commit('setId', { id });
  },
  resetStatus({ commit, state }) {
    commit('setConnected', { connected: false });
    commit('setId', { id: '' });
  }
};

// mutations
const mutations = {
  setConnected(state, { connected }) {
    __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].set(state, 'synthConnected', connected);
  },
  setId(state, { id }) {
    __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].set(state, 'synthId', id);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webmidi__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webmidi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webmidi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_is_synth__ = __webpack_require__(11);





const state = {
  values: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64],
  ],
  channel: 1,
  keyboardOctave: 2,
};

const timers = [];

// getters
const getters = {
  value: state => (channel, id) => state.values[channel - 1][id - 1],
  voice: state => (channel) => state.values[channel - 1],
  values: state => state.values,
  channel: state => state.channel,
  keyboardOctave: state => state.keyboardOctave,
};

// actions
const actions = {
  writeValue({ commit, state }, { id, value }) {
    const channel = state.channel;
    const currentOutput = __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.outputs.find((output) => output.id === __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters['status/id']);

    if(currentOutput) {
      currentOutput.sendControlChange(id, value, channel);

      if(timers[channel - 1]) {
        clearTimeout(timers[channel - 1]);
        currentOutput.stopNote('C2', channel);
      }

      currentOutput.playNote('C2', channel);

      timers[channel - 1] = setTimeout(() => {
        currentOutput.stopNote('C2', channel);
        timers[channel - 1] = null;
      }, 1000);
    }

    commit('setValue', { channel: channel - 1, id: id - 1, value });
  },
  loadPatchFromDevice({ commit, state }, { channel, id }) {
    const currentOutput = __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.outputs.find((output) => output.id === __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters['status/id']);
    const currentInput = __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.inputs.find(input => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__application_is_synth__["a" /* default */])(input));
    const capture = [];

    function ccHandle(e) {
      capture.push(e.data[2]);

      // The YM2149 Synth patches are 11 bytes
      if(capture.length === 11) {
        currentInput.removeListener('controlchange', state.channel, ccHandle);

        capture.forEach((data, idx) => commit('setValue', { channel: channel - 1, id: idx, value: data }))
      }
    }

    currentInput.on('controlchange', channel, ccHandle);

    // Load patch on device
    currentOutput.sendChannelMode(120, id - 1, channel);

    // Ask device to send patch after delay
    // @TODO Is this really necessary?
    setTimeout(() => {
      currentOutput.sendChannelMode(122, id - 1, channel);
    }, 80);
  },
  savePatchToDevice({ commit, state }, { id }) {
    const currentOutput = __WEBPACK_IMPORTED_MODULE_2_webmidi___default.a.outputs.find((output) => output.id === __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters['status/id']);
    currentOutput.sendChannelMode(121, id - 1, state.channel);
  },
  incrementOctave({ commit, state }) {
    if(state.keyboardOctave < 6) {
      commit('setKeyboardOctave', { octave: state.keyboardOctave + 1 });
    }
  },
  decrementOctave({ commit, state }) {
    if(state.keyboardOctave > 0) {
      commit('setKeyboardOctave', { octave: state.keyboardOctave - 1 });
    }
  }
};

// mutations
const mutations = {
  setValue(state, { channel, id, value }) {
    __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].set(state.values[channel], id, value);
  },
  setChannel(state, { channel }) {
    __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].set(state, 'channel', channel);
  },
  setKeyboardOctave(state, { octave }) {
    __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].set(state, 'keyboardOctave', octave);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
});

/***/ })
],[28]);
//# sourceMappingURL=app.919b30194d99f7d8412a.js.map