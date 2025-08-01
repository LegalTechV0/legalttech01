const appName = "registration";
const appVersion = "2.7.0";
import { n as normalizeComponent$2, i as global, V as Vue, j as defineComponent, k as nextTick, m as unref, o as onMounted, p as getCurrentInstance, q as toRef$1, s as readonly, w as ref$1, x as customRef, y as getCurrentScope, z as onScopeDispose, A as watch, B as computed, C as watchEffect, D as reactive, E as onUnmounted, r as register, F as t4, f as t$1, b as NcButton, G as GenRandomId, H as isRTL$1, I as Check, J as purify, K as useCssVars, l as loadState, L as t10, M as t50, e as cancelableClient, v, O as t3, P as getDefaultExportFromCjs, _, Q as w, R as f, S as t9, T as distExports, U as getCurrentUser, W as unsubscribe, X as subscribe, h as logger, Y as t35, Z as t15, u as useModelMigration, $ as Close, a0 as t23, a1 as n, a2 as process$1, a3 as getGettextBuilder, a4 as t33, a5 as t17, a6 as t30, d as debounce, a as normalizeComponent$3, N as NcTextField } from "./logger-D3RVzcfQ-Bxv3TsH_.chunk.mjs";
var vueSelect$1 = { exports: {} };
var vueSelect = vueSelect$1.exports;
var hasRequiredVueSelect;
function requireVueSelect() {
  if (hasRequiredVueSelect) return vueSelect$1.exports;
  hasRequiredVueSelect = 1;
  (function(module, exports) {
    !function(e2, t2) {
      module.exports = t2();
    }("undefined" != typeof self ? self : vueSelect, function() {
      return (() => {
        var e2 = { 646: (e3) => {
          e3.exports = function(e4) {
            if (Array.isArray(e4)) {
              for (var t5 = 0, n3 = new Array(e4.length); t5 < e4.length; t5++) n3[t5] = e4[t5];
              return n3;
            }
          };
        }, 713: (e3) => {
          e3.exports = function(e4, t5, n3) {
            return t5 in e4 ? Object.defineProperty(e4, t5, { value: n3, enumerable: true, configurable: true, writable: true }) : e4[t5] = n3, e4;
          };
        }, 860: (e3) => {
          e3.exports = function(e4) {
            if (Symbol.iterator in Object(e4) || "[object Arguments]" === Object.prototype.toString.call(e4)) return Array.from(e4);
          };
        }, 206: (e3) => {
          e3.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          };
        }, 319: (e3, t5, n3) => {
          var o2 = n3(646), i = n3(860), s = n3(206);
          e3.exports = function(e4) {
            return o2(e4) || i(e4) || s();
          };
        }, 8: (e3) => {
          function t5(n3) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e3.exports = t5 = function(e4) {
              return typeof e4;
            } : e3.exports = t5 = function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, t5(n3);
          }
          e3.exports = t5;
        } }, t2 = {};
        function n2(o2) {
          var i = t2[o2];
          if (void 0 !== i) return i.exports;
          var s = t2[o2] = { exports: {} };
          return e2[o2](s, s.exports, n2), s.exports;
        }
        n2.n = (e3) => {
          var t5 = e3 && e3.__esModule ? () => e3.default : () => e3;
          return n2.d(t5, { a: t5 }), t5;
        }, n2.d = (e3, t5) => {
          for (var o2 in t5) n2.o(t5, o2) && !n2.o(e3, o2) && Object.defineProperty(e3, o2, { enumerable: true, get: t5[o2] });
        }, n2.o = (e3, t5) => Object.prototype.hasOwnProperty.call(e3, t5), n2.r = (e3) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        };
        var o = {};
        return (() => {
          n2.r(o), n2.d(o, { VueSelect: () => m, default: () => _2, mixins: () => O });
          var e3 = n2(319), t5 = n2.n(e3), i = n2(8), s = n2.n(i), r = n2(713), a = n2.n(r);
          const l = { props: { autoscroll: { type: Boolean, default: true } }, watch: { typeAheadPointer: function() {
            this.autoscroll && this.maybeAdjustScroll();
          }, open: function(e4) {
            var t6 = this;
            this.autoscroll && e4 && this.$nextTick(function() {
              return t6.maybeAdjustScroll();
            });
          } }, methods: { maybeAdjustScroll: function() {
            var e4, t6 = (null === (e4 = this.$refs.dropdownMenu) || void 0 === e4 ? void 0 : e4.children[this.typeAheadPointer]) || false;
            if (t6) {
              var n3 = this.getDropdownViewport(), o2 = t6.getBoundingClientRect(), i2 = o2.top, s2 = o2.bottom, r2 = o2.height;
              if (i2 < n3.top) return this.$refs.dropdownMenu.scrollTop = t6.offsetTop;
              if (s2 > n3.bottom) return this.$refs.dropdownMenu.scrollTop = t6.offsetTop - (n3.height - r2);
            }
          }, getDropdownViewport: function() {
            return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : { height: 0, top: 0, bottom: 0 };
          } } }, c = { data: function() {
            return { typeAheadPointer: -1 };
          }, watch: { filteredOptions: function() {
            if (this.resetFocusOnOptionsChange) {
              for (var e4 = 0; e4 < this.filteredOptions.length; e4++) if (this.selectable(this.filteredOptions[e4])) {
                this.typeAheadPointer = e4;
                break;
              }
            }
          }, open: function(e4) {
            e4 && this.typeAheadToLastSelected();
          }, selectedValue: function() {
            this.open && this.typeAheadToLastSelected();
          } }, methods: { typeAheadUp: function() {
            for (var e4 = this.typeAheadPointer - 1; e4 >= 0; e4--) if (this.selectable(this.filteredOptions[e4])) {
              this.typeAheadPointer = e4;
              break;
            }
          }, typeAheadDown: function() {
            for (var e4 = this.typeAheadPointer + 1; e4 < this.filteredOptions.length; e4++) if (this.selectable(this.filteredOptions[e4])) {
              this.typeAheadPointer = e4;
              break;
            }
          }, typeAheadSelect: function() {
            var e4 = this.filteredOptions[this.typeAheadPointer];
            e4 && this.selectable(e4) && this.select(e4);
          }, typeAheadToLastSelected: function() {
            var e4 = 0 !== this.selectedValue.length ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
            -1 !== e4 && (this.typeAheadPointer = e4);
          } } }, u = { props: { loading: { type: Boolean, default: false } }, data: function() {
            return { mutableLoading: false };
          }, watch: { search: function() {
            this.$emit("search", this.search, this.toggleLoading);
          }, loading: function(e4) {
            this.mutableLoading = e4;
          } }, methods: { toggleLoading: function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return this.mutableLoading = null == e4 ? !this.mutableLoading : e4;
          } } };
          function p(e4, t6, n3, o2, i2, s2, r2, a2) {
            var l2, c2 = "function" == typeof e4 ? e4.options : e4;
            if (t6 && (c2.render = t6, c2.staticRenderFns = n3, c2._compiled = true), l2) ;
            return { exports: e4, options: c2 };
          }
          const d = { Deselect: p({}, function() {
            var e4 = this.$createElement, t6 = this._self._c || e4;
            return t6("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10" } }, [t6("path", { attrs: { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" } })]);
          }, []).exports, OpenIndicator: p({}, function() {
            var e4 = this.$createElement, t6 = this._self._c || e4;
            return t6("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "10" } }, [t6("path", { attrs: { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" } })]);
          }, []).exports }, h = { inserted: function(e4, t6, n3) {
            var o2 = n3.context;
            if (o2.appendToBody) {
              document.body.appendChild(e4);
              var i2 = o2.$refs.toggle.getBoundingClientRect(), s2 = i2.height, r2 = i2.top, a2 = i2.left, l2 = i2.width, c2 = window.scrollX || window.pageXOffset, u2 = window.scrollY || window.pageYOffset;
              e4.unbindPosition = o2.calculatePosition(e4, o2, { width: l2 + "px", left: c2 + a2 + "px", top: u2 + r2 + s2 + "px" });
            }
          }, unbind: function(e4, t6, n3) {
            n3.context.appendToBody && (e4.unbindPosition && "function" == typeof e4.unbindPosition && e4.unbindPosition(), e4.parentNode && e4.parentNode.removeChild(e4));
          } };
          const f2 = function(e4) {
            var t6 = {};
            return Object.keys(e4).sort().forEach(function(n3) {
              t6[n3] = e4[n3];
            }), JSON.stringify(t6);
          };
          var y = 0;
          const b = function() {
            return ++y;
          };
          function g(e4, t6) {
            var n3 = Object.keys(e4);
            if (Object.getOwnPropertySymbols) {
              var o2 = Object.getOwnPropertySymbols(e4);
              t6 && (o2 = o2.filter(function(t7) {
                return Object.getOwnPropertyDescriptor(e4, t7).enumerable;
              })), n3.push.apply(n3, o2);
            }
            return n3;
          }
          function v2(e4) {
            for (var t6 = 1; t6 < arguments.length; t6++) {
              var n3 = null != arguments[t6] ? arguments[t6] : {};
              t6 % 2 ? g(Object(n3), true).forEach(function(t7) {
                a()(e4, t7, n3[t7]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n3)) : g(Object(n3)).forEach(function(t7) {
                Object.defineProperty(e4, t7, Object.getOwnPropertyDescriptor(n3, t7));
              });
            }
            return e4;
          }
          const m = p({ components: v2({}, d), directives: { appendToBody: h }, mixins: [l, c, u], props: { value: {}, components: { type: Object, default: function() {
            return {};
          } }, options: { type: Array, default: function() {
            return [];
          } }, limit: { type: Number, default: null }, disabled: { type: Boolean, default: false }, clearable: { type: Boolean, default: true }, deselectFromDropdown: { type: Boolean, default: false }, searchable: { type: Boolean, default: true }, multiple: { type: Boolean, default: false }, placeholder: { type: String, default: "" }, transition: { type: String, default: "vs__fade" }, clearSearchOnSelect: { type: Boolean, default: true }, closeOnSelect: { type: Boolean, default: true }, label: { type: String, default: "label" }, ariaLabelCombobox: { type: String, default: "Search for options" }, ariaLabelListbox: { type: String, default: "Options" }, ariaLabelClearSelected: { type: String, default: "Clear selected" }, ariaLabelDeselectOption: { type: Function, default: function(e4) {
            return "Deselect ".concat(e4);
          } }, autocomplete: { type: String, default: "off" }, reduce: { type: Function, default: function(e4) {
            return e4;
          } }, selectable: { type: Function, default: function(e4) {
            return true;
          } }, getOptionLabel: { type: Function, default: function(e4) {
            return "object" === s()(e4) ? e4.hasOwnProperty(this.label) ? e4[this.label] : console.warn('[vue-select warn]: Label key "option.'.concat(this.label, '" does not') + " exist in options object ".concat(JSON.stringify(e4), ".\n") + "https://vue-select.org/api/props.html#getoptionlabel") : e4;
          } }, getOptionKey: { type: Function, default: function(e4) {
            if ("object" !== s()(e4)) return e4;
            try {
              return e4.hasOwnProperty("id") ? e4.id : f2(e4);
            } catch (t6) {
              return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey", e4, t6);
            }
          } }, onTab: { type: Function, default: function() {
            this.selectOnTab && !this.isComposing && this.typeAheadSelect();
          } }, taggable: { type: Boolean, default: false }, tabindex: { type: Number, default: null }, pushTags: { type: Boolean, default: false }, filterable: { type: Boolean, default: true }, filterBy: { type: Function, default: function(e4, t6, n3) {
            return (t6 || "").toLocaleLowerCase().indexOf(n3.toLocaleLowerCase()) > -1;
          } }, filter: { type: Function, default: function(e4, t6) {
            var n3 = this;
            return e4.filter(function(e5) {
              var o2 = n3.getOptionLabel(e5);
              return "number" == typeof o2 && (o2 = o2.toString()), n3.filterBy(e5, o2, t6);
            });
          } }, createOption: { type: Function, default: function(e4) {
            return "object" === s()(this.optionList[0]) ? a()({}, this.label, e4) : e4;
          } }, resetFocusOnOptionsChange: { type: Boolean, default: true }, resetOnOptionsChange: { default: false, validator: function(e4) {
            return ["function", "boolean"].includes(s()(e4));
          } }, clearSearchOnBlur: { type: Function, default: function(e4) {
            var t6 = e4.clearSearchOnSelect, n3 = e4.multiple;
            return t6 && !n3;
          } }, noDrop: { type: Boolean, default: false }, inputId: { type: String }, dir: { type: String, default: "auto" }, selectOnTab: { type: Boolean, default: false }, selectOnKeyCodes: { type: Array, default: function() {
            return [13];
          } }, searchInputQuerySelector: { type: String, default: "[type=search]" }, mapKeydown: { type: Function, default: function(e4, t6) {
            return e4;
          } }, appendToBody: { type: Boolean, default: false }, calculatePosition: { type: Function, default: function(e4, t6, n3) {
            var o2 = n3.width, i2 = n3.top, s2 = n3.left;
            e4.style.top = i2, e4.style.left = s2, e4.style.width = o2;
          } }, dropdownShouldOpen: { type: Function, default: function(e4) {
            var t6 = e4.noDrop, n3 = e4.open, o2 = e4.mutableLoading;
            return !t6 && (n3 && !o2);
          } }, keyboardFocusBorder: { type: Boolean, default: false }, uid: { type: [String, Number], default: function() {
            return b();
          } } }, data: function() {
            return { search: "", open: false, isComposing: false, isKeyboardNavigation: false, pushedTags: [], _value: [] };
          }, computed: { isTrackingValues: function() {
            return void 0 === this.value || this.$options.propsData.hasOwnProperty("reduce");
          }, selectedValue: function() {
            var e4 = this.value;
            return this.isTrackingValues && (e4 = this.$data._value), null != e4 && "" !== e4 ? [].concat(e4) : [];
          }, optionList: function() {
            return this.options.concat(this.pushTags ? this.pushedTags : []);
          }, searchEl: function() {
            return this.$scopedSlots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
          }, scope: function() {
            var e4 = this, t6 = { search: this.search, loading: this.loading, searching: this.searching, filteredOptions: this.filteredOptions };
            return { search: { attributes: v2({ id: this.inputId, disabled: this.disabled, placeholder: this.searchPlaceholder, tabindex: this.tabindex, readonly: !this.searchable, role: "combobox", "aria-autocomplete": "list", "aria-label": this.ariaLabelCombobox, "aria-controls": "vs-".concat(this.uid, "__listbox"), "aria-owns": "vs-".concat(this.uid, "__listbox"), "aria-expanded": this.dropdownOpen.toString(), ref: "search", type: "search", autocomplete: this.autocomplete, value: this.search }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? { "aria-activedescendant": "vs-".concat(this.uid, "__option-").concat(this.typeAheadPointer) } : {}), events: { compositionstart: function() {
              return e4.isComposing = true;
            }, compositionend: function() {
              return e4.isComposing = false;
            }, keydown: this.onSearchKeyDown, keypress: this.onSearchKeyPress, blur: this.onSearchBlur, focus: this.onSearchFocus, input: function(t7) {
              return e4.search = t7.target.value;
            } } }, spinner: { loading: this.mutableLoading }, noOptions: { search: this.search, loading: this.mutableLoading, searching: this.searching }, openIndicator: { attributes: { ref: "openIndicator", role: "presentation", class: "vs__open-indicator" } }, listHeader: t6, listFooter: t6, header: v2({}, t6, { deselect: this.deselect }), footer: v2({}, t6, { deselect: this.deselect }) };
          }, childComponents: function() {
            return v2({}, d, {}, this.components);
          }, stateClasses: function() {
            return { "vs--open": this.dropdownOpen, "vs--single": !this.multiple, "vs--multiple": this.multiple, "vs--searching": this.searching && !this.noDrop, "vs--searchable": this.searchable && !this.noDrop, "vs--unsearchable": !this.searchable, "vs--loading": this.mutableLoading, "vs--disabled": this.disabled };
          }, searching: function() {
            return !!this.search;
          }, dropdownOpen: function() {
            return this.dropdownShouldOpen(this);
          }, searchPlaceholder: function() {
            return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
          }, filteredOptions: function() {
            var e4 = this, t6 = function(t7) {
              return null !== e4.limit ? t7.slice(0, e4.limit) : t7;
            }, n3 = [].concat(this.optionList);
            if (!this.filterable && !this.taggable) return t6(n3);
            var o2 = this.search.length ? this.filter(n3, this.search, this) : n3;
            if (this.taggable && this.search.length) {
              var i2 = this.createOption(this.search);
              this.optionExists(i2) || o2.unshift(i2);
            }
            return t6(o2);
          }, isValueEmpty: function() {
            return 0 === this.selectedValue.length;
          }, showClearButton: function() {
            return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
          } }, watch: { options: function(e4, t6) {
            var n3 = this;
            !this.taggable && ("function" == typeof n3.resetOnOptionsChange ? n3.resetOnOptionsChange(e4, t6, n3.selectedValue) : n3.resetOnOptionsChange) && this.clearSelection(), this.value && this.isTrackingValues && this.setInternalValueFromOptions(this.value);
          }, value: { immediate: true, handler: function(e4) {
            this.isTrackingValues && this.setInternalValueFromOptions(e4);
          } }, multiple: function() {
            this.clearSelection();
          }, open: function(e4) {
            this.$emit(e4 ? "open" : "close");
          }, search: function(e4) {
            e4.length && (this.open = true);
          } }, created: function() {
            this.mutableLoading = this.loading, this.$on("option:created", this.pushTag);
          }, methods: { setInternalValueFromOptions: function(e4) {
            var t6 = this;
            Array.isArray(e4) ? this.$data._value = e4.map(function(e5) {
              return t6.findOptionFromReducedValue(e5);
            }) : this.$data._value = this.findOptionFromReducedValue(e4);
          }, select: function(e4) {
            this.$emit("option:selecting", e4), this.isOptionSelected(e4) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e4) : (this.taggable && !this.optionExists(e4) && this.$emit("option:created", e4), this.multiple && (e4 = this.selectedValue.concat(e4)), this.updateValue(e4), this.$emit("option:selected", e4)), this.onAfterSelect(e4);
          }, deselect: function(e4) {
            var t6 = this;
            this.$emit("option:deselecting", e4), this.updateValue(this.selectedValue.filter(function(n3) {
              return !t6.optionComparator(n3, e4);
            })), this.$emit("option:deselected", e4);
          }, keyboardDeselect: function(e4, t6) {
            var n3, o2;
            this.deselect(e4);
            var i2 = null === (n3 = this.$refs.deselectButtons) || void 0 === n3 ? void 0 : n3[t6 + 1], s2 = null === (o2 = this.$refs.deselectButtons) || void 0 === o2 ? void 0 : o2[t6 - 1], r2 = null != i2 ? i2 : s2;
            r2 ? r2.focus() : this.searchEl.focus();
          }, clearSelection: function() {
            this.updateValue(this.multiple ? [] : null), this.searchEl.focus();
          }, onAfterSelect: function(e4) {
            var t6 = this;
            this.closeOnSelect && (this.open = !this.open), this.clearSearchOnSelect && (this.search = ""), this.noDrop && this.multiple && this.$nextTick(function() {
              return t6.$refs.search.focus();
            });
          }, updateValue: function(e4) {
            var t6 = this;
            void 0 === this.value && (this.$data._value = e4), null !== e4 && (e4 = Array.isArray(e4) ? e4.map(function(e5) {
              return t6.reduce(e5);
            }) : this.reduce(e4)), this.$emit("input", e4);
          }, toggleDropdown: function(e4) {
            var n3 = e4.target !== this.searchEl;
            n3 && e4.preventDefault();
            var o2 = [].concat(t5()(this.$refs.deselectButtons || []), t5()([this.$refs.clearButton]));
            void 0 === this.searchEl || o2.filter(Boolean).some(function(t6) {
              return t6.contains(e4.target) || t6 === e4.target;
            }) ? e4.preventDefault() : this.open && n3 ? this.searchEl.blur() : this.disabled || (this.open = true, this.searchEl.focus());
          }, isOptionSelected: function(e4) {
            var t6 = this;
            return this.selectedValue.some(function(n3) {
              return t6.optionComparator(n3, e4);
            });
          }, isOptionDeselectable: function(e4) {
            return this.isOptionSelected(e4) && this.deselectFromDropdown;
          }, hasKeyboardFocusBorder: function(e4) {
            return !(!this.keyboardFocusBorder || !this.isKeyboardNavigation) && e4 === this.typeAheadPointer;
          }, optionComparator: function(e4, t6) {
            return this.getOptionKey(e4) === this.getOptionKey(t6);
          }, findOptionFromReducedValue: function(e4) {
            var n3 = this, o2 = [].concat(t5()(this.options), t5()(this.pushedTags)).filter(function(t6) {
              return JSON.stringify(n3.reduce(t6)) === JSON.stringify(e4);
            });
            return 1 === o2.length ? o2[0] : o2.find(function(e5) {
              return n3.optionComparator(e5, n3.$data._value);
            }) || e4;
          }, closeSearchOptions: function() {
            this.open = false, this.$emit("search:blur");
          }, maybeDeleteValue: function() {
            if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
              var e4 = null;
              this.multiple && (e4 = t5()(this.selectedValue.slice(0, this.selectedValue.length - 1))), this.updateValue(e4);
            }
          }, optionExists: function(e4) {
            var t6 = this;
            return this.optionList.some(function(n3) {
              return t6.optionComparator(n3, e4);
            });
          }, optionAriaSelected: function(e4) {
            return this.selectable(e4) ? String(this.isOptionSelected(e4)) : null;
          }, normalizeOptionForSlot: function(e4) {
            return "object" === s()(e4) ? e4 : a()({}, this.label, e4);
          }, pushTag: function(e4) {
            this.pushedTags.push(e4);
          }, onEscape: function() {
            this.search.length ? this.search = "" : this.open = false;
          }, onSearchBlur: function() {
            if (!this.mousedown || this.searching) {
              var e4 = this.clearSearchOnSelect, t6 = this.multiple;
              return this.clearSearchOnBlur({ clearSearchOnSelect: e4, multiple: t6 }) && (this.search = ""), void this.closeSearchOptions();
            }
            this.mousedown = false, 0 !== this.search.length || 0 !== this.options.length || this.closeSearchOptions();
          }, onSearchFocus: function() {
            this.open = true, this.$emit("search:focus");
          }, onMousedown: function() {
            this.mousedown = true;
          }, onMouseUp: function() {
            this.mousedown = false;
          }, onMouseMove: function(e4, t6) {
            this.isKeyboardNavigation = false, this.selectable(e4) && (this.typeAheadPointer = t6);
          }, onSearchKeyDown: function(e4) {
            var t6 = this, n3 = function(e5) {
              if (e5.preventDefault(), t6.open) return !t6.isComposing && t6.typeAheadSelect();
              t6.open = true;
            }, o2 = { 8: function(e5) {
              return t6.maybeDeleteValue();
            }, 9: function(e5) {
              return t6.onTab();
            }, 27: function(e5) {
              return t6.onEscape();
            }, 38: function(e5) {
              if (e5.preventDefault(), t6.isKeyboardNavigation = true, t6.open) return t6.typeAheadUp();
              t6.open = true;
            }, 40: function(e5) {
              if (e5.preventDefault(), t6.isKeyboardNavigation = true, t6.open) return t6.typeAheadDown();
              t6.open = true;
            } };
            this.selectOnKeyCodes.forEach(function(e5) {
              return o2[e5] = n3;
            });
            var i2 = this.mapKeydown(o2, this);
            if ("function" == typeof i2[e4.keyCode]) return i2[e4.keyCode](e4);
          }, onSearchKeyPress: function(e4) {
            this.open || 32 !== e4.keyCode || (e4.preventDefault(), this.open = true);
          } } }, function() {
            var e4 = this, t6 = e4.$createElement, n3 = e4._self._c || t6;
            return n3("div", { staticClass: "v-select", class: e4.stateClasses, attrs: { id: "v-select-" + e4.uid, dir: e4.dir } }, [e4._t("header", null, null, e4.scope.header), e4._v(" "), n3("div", { ref: "toggle", staticClass: "vs__dropdown-toggle" }, [n3("div", { ref: "selectedOptions", staticClass: "vs__selected-options", on: { mousedown: e4.toggleDropdown } }, [e4._l(e4.selectedValue, function(t7, o2) {
              return e4._t("selected-option-container", [n3("span", { key: e4.getOptionKey(t7), staticClass: "vs__selected" }, [e4._t("selected-option", [e4._v("\n            " + e4._s(e4.getOptionLabel(t7)) + "\n          ")], null, e4.normalizeOptionForSlot(t7)), e4._v(" "), e4.multiple ? n3("button", { ref: "deselectButtons", refInFor: true, staticClass: "vs__deselect", attrs: { disabled: e4.disabled, type: "button", title: e4.ariaLabelDeselectOption(e4.getOptionLabel(t7)), "aria-label": e4.ariaLabelDeselectOption(e4.getOptionLabel(t7)) }, on: { mousedown: function(n4) {
                return n4.stopPropagation(), e4.deselect(t7);
              }, keydown: function(n4) {
                return !n4.type.indexOf("key") && e4._k(n4.keyCode, "enter", 13, n4.key, "Enter") ? null : e4.keyboardDeselect(t7, o2);
              } } }, [n3(e4.childComponents.Deselect, { tag: "component" })], 1) : e4._e()], 2)], { option: e4.normalizeOptionForSlot(t7), deselect: e4.deselect, multiple: e4.multiple, disabled: e4.disabled });
            }), e4._v(" "), e4._t("search", [n3("input", e4._g(e4._b({ staticClass: "vs__search" }, "input", e4.scope.search.attributes, false), e4.scope.search.events))], null, e4.scope.search)], 2), e4._v(" "), n3("div", { ref: "actions", staticClass: "vs__actions" }, [n3("button", { directives: [{ name: "show", rawName: "v-show", value: e4.showClearButton, expression: "showClearButton" }], ref: "clearButton", staticClass: "vs__clear", attrs: { disabled: e4.disabled, type: "button", title: e4.ariaLabelClearSelected, "aria-label": e4.ariaLabelClearSelected }, on: { click: e4.clearSelection } }, [n3(e4.childComponents.Deselect, { tag: "component" })], 1), e4._v(" "), e4.noDrop ? e4._e() : n3("button", { ref: "openIndicatorButton", staticClass: "vs__open-indicator-button", attrs: { type: "button", tabindex: "-1", "aria-labelledby": "vs-" + e4.uid + "__listbox", "aria-controls": "vs-" + e4.uid + "__listbox", "aria-expanded": e4.dropdownOpen.toString() }, on: { mousedown: e4.toggleDropdown } }, [e4._t("open-indicator", [n3(e4.childComponents.OpenIndicator, e4._b({ tag: "component" }, "component", e4.scope.openIndicator.attributes, false))], null, e4.scope.openIndicator)], 2), e4._v(" "), e4._t("spinner", [n3("div", { directives: [{ name: "show", rawName: "v-show", value: e4.mutableLoading, expression: "mutableLoading" }], staticClass: "vs__spinner" }, [e4._v("Loading...")])], null, e4.scope.spinner)], 2)]), e4._v(" "), n3("transition", { attrs: { name: e4.transition } }, [e4.dropdownOpen ? n3("ul", { directives: [{ name: "append-to-body", rawName: "v-append-to-body" }], key: "vs-" + e4.uid + "__listbox", ref: "dropdownMenu", staticClass: "vs__dropdown-menu", attrs: { id: "vs-" + e4.uid + "__listbox", role: "listbox", "aria-label": e4.ariaLabelListbox, "aria-multiselectable": e4.multiple, tabindex: "-1" }, on: { mousedown: function(t7) {
              return t7.preventDefault(), e4.onMousedown(t7);
            }, mouseup: e4.onMouseUp } }, [e4._t("list-header", null, null, e4.scope.listHeader), e4._v(" "), e4._l(e4.filteredOptions, function(t7, o2) {
              return n3("li", { key: e4.getOptionKey(t7), staticClass: "vs__dropdown-option", class: { "vs__dropdown-option--deselect": e4.isOptionDeselectable(t7) && o2 === e4.typeAheadPointer, "vs__dropdown-option--selected": e4.isOptionSelected(t7), "vs__dropdown-option--highlight": o2 === e4.typeAheadPointer, "vs__dropdown-option--kb-focus": e4.hasKeyboardFocusBorder(o2), "vs__dropdown-option--disabled": !e4.selectable(t7) }, attrs: { id: "vs-" + e4.uid + "__option-" + o2, role: "option", "aria-selected": e4.optionAriaSelected(t7) }, on: { mousemove: function(n4) {
                return e4.onMouseMove(t7, o2);
              }, click: function(n4) {
                n4.preventDefault(), n4.stopPropagation(), e4.selectable(t7) && e4.select(t7);
              } } }, [e4._t("option", [e4._v("\n          " + e4._s(e4.getOptionLabel(t7)) + "\n        ")], null, e4.normalizeOptionForSlot(t7))], 2);
            }), e4._v(" "), 0 === e4.filteredOptions.length ? n3("li", { staticClass: "vs__no-options" }, [e4._t("no-options", [e4._v("\n          Sorry, no matching options.\n        ")], null, e4.scope.noOptions)], 2) : e4._e(), e4._v(" "), e4._t("list-footer", null, null, e4.scope.listFooter)], 2) : n3("ul", { staticStyle: { display: "none", visibility: "hidden" }, attrs: { id: "vs-" + e4.uid + "__listbox", role: "listbox", "aria-label": e4.ariaLabelListbox } })]), e4._v(" "), e4._t("footer", null, null, e4.scope.footer)], 2);
          }, []).exports, O = { ajax: u, pointer: c, pointerScroll: l }, _2 = m;
        })(), o;
      })();
    });
  })(vueSelect$1);
  return vueSelect$1.exports;
}
var vueSelectExports = requireVueSelect();
const min$2 = Math.min;
const max$2 = Math.max;
const round$1 = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max$2(start, min$2(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment$1(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides$1(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment$1(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement$1(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement$1(mainAlignmentSide)];
}
function getExpandedPlacements$1(placement) {
  const oppositePlacement = getOppositePlacement$1(placement);
  return [getOppositeAlignmentPlacement$1(placement), oppositePlacement, getOppositeAlignmentPlacement$1(oppositePlacement)];
}
function getOppositeAlignmentPlacement$1(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment$1(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement$1));
    }
  }
  return list;
}
function getOppositePlacement$1(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject$1(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject$1(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect$1(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement$1(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment$1(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$3 = async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement$1(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement$1(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow$1(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect$1(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect$1(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const flip$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement$1(initialPlacement)] : getExpandedPlacements$1(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides$1(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords$1(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment$1(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$2 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords$1(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName$1(node) {
  if (isNode$1(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow$1(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement$1(node) {
  var _ref;
  return (_ref = (isNode$1(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow$1(value).Node;
}
function isElement$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow$1(value).Element;
}
function isHTMLElement$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow$1(value).HTMLElement;
}
function isShadowRoot$1(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow$1(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement$1(element) {
  return ["table", "td", "th"].includes(getNodeName$1(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e2) {
      return false;
    }
  });
}
function isContainingBlock$1(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement$1(elementOrCss) ? getComputedStyle$2(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock$1(element) {
  let currentNode = getParentNode$1(element);
  while (isHTMLElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock$1(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode$1(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName$1(node));
}
function getComputedStyle$2(element) {
  return getWindow$1(element).getComputedStyle(element);
}
function getNodeScroll$1(element) {
  if (isElement$1(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode$1(node) {
  if (getNodeName$1(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot$1(node) && node.host || // Fallback.
    getDocumentElement$1(node)
  );
  return isShadowRoot$1(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode$1(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow$1(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle$2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement$1(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round$1(width) !== offsetWidth || round$1(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement$1(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement$1(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round$1(rect.width) : rect.width) / width;
  let y = ($ ? round$1(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow$1(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow$1(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect$1(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement$1(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow$1(domElement);
    const offsetWin = offsetParent && isElement$1(offsetParent) ? getWindow$1(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow$1(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect$1({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX$1(element, rect) {
  const leftScroll = getNodeScroll$1(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect$1(getDocumentElement$1(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX$1(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect$1(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement$1(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName$1(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll$1(offsetParent);
    }
    if (isHTMLElement$1(offsetParent)) {
      const offsetRect = getBoundingClientRect$1(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect$1(element) {
  const html = getDocumentElement$1(element);
  const scroll = getNodeScroll$1(element);
  const body = element.ownerDocument.body;
  const width = max$2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max$2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX$1(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$2(body).direction === "rtl") {
    x += max$2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect$1(element, strategy) {
  const win = getWindow$1(element);
  const html = getDocumentElement$1(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect$1(element, strategy) {
  const clientRect = getBoundingClientRect$1(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement$1(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect$1(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect$1(getDocumentElement$1(element));
  } else if (isElement$1(clippingAncestor)) {
    rect = getInnerBoundingClientRect$1(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect$1(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode$1(element);
  if (parentNode === stopNode || !isElement$1(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement$1(el) && getNodeName$1(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode$1(element) : element;
  while (isElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$2(currentNode);
    const currentNodeIsContaining = isContainingBlock$1(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode$1(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max$2(rect.top, accRect.top);
    accRect.right = min$2(rect.right, accRect.right);
    accRect.bottom = min$2(rect.bottom, accRect.bottom);
    accRect.left = max$2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions$1(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent$1(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  const documentElement = getDocumentElement$1(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect$1(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName$1(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll$1(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect$1(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX$1(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$2(element).position === "static";
}
function getTrueOffsetParent$1(element, polyfill) {
  if (!isHTMLElement$1(element) || getComputedStyle$2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement$1(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent$1(element, polyfill) {
  const win = getWindow$1(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement$1(element)) {
    let svgOffsetParent = getParentNode$1(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement$1(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode$1(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent$1(element, polyfill);
  while (offsetParent && isTableElement$1(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent$1(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock$1(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock$1(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent$1;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent$1(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$2(element).direction === "rtl";
}
const platform$1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect$1,
  getDocumentElement: getDocumentElement$1,
  getClippingRect,
  getOffsetParent: getOffsetParent$1,
  getElementRects,
  getClientRects,
  getDimensions: getDimensions$1,
  getScale,
  isElement: isElement$1,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement$1(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max$2(0, min$2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect$1(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect$1(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset$1 = offset$2;
const shift$1 = shift$2;
const flip$1 = flip$2;
const limitShift = limitShift$1;
const computePosition$2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform: platform$1,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$3(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
const _sfc_main$r = {
  name: "ChevronDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$r = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon chevron-down-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$r = [];
var __component__$s = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$r,
  _sfc_render$r,
  _sfc_staticRenderFns$r,
  false,
  null,
  null
);
const ChevronDown = __component__$s.exports;
const FindRanges = (text, search) => {
  const ranges = [];
  let currentIndex = 0;
  let index = text.toLowerCase().indexOf(search.toLowerCase(), currentIndex);
  let i = 0;
  while (index > -1 && i < text.length) {
    currentIndex = index + search.length;
    ranges.push({ start: index, end: currentIndex });
    index = text.toLowerCase().indexOf(search.toLowerCase(), currentIndex);
    i++;
  }
  return ranges;
};
const _sfc_main$q = {
  name: "NcHighlight",
  props: {
    /**
     * The string to display
     */
    text: {
      type: String,
      default: ""
    },
    /**
     * The string to match and highlight
     */
    search: {
      type: String,
      default: ""
    },
    /**
     * The ranges to highlight, takes precedence over the search prop.
     */
    highlight: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    /**
     * The indice ranges which should be highlighted.
     * If an array with ranges is provided, we use it. Otherwise
     * we calculate it based on the provided substring to highlight.
     *
     * @return {Array} The array of ranges to highlight
     */
    ranges() {
      let ranges = [];
      if (!this.search && this.highlight.length === 0) {
        return ranges;
      }
      if (this.highlight.length > 0) {
        ranges = this.highlight;
      } else {
        ranges = FindRanges(this.text, this.search);
      }
      ranges.forEach((range, i) => {
        if (range.end < range.start) {
          ranges[i] = {
            start: range.end,
            end: range.start
          };
        }
      });
      ranges = ranges.reduce((validRanges, range) => {
        if (range.start < this.text.length && range.end > 0) {
          validRanges.push({
            start: range.start < 0 ? 0 : range.start,
            end: range.end > this.text.length ? this.text.length : range.end
          });
        }
        return validRanges;
      }, []);
      ranges.sort((a, b) => {
        return a.start - b.start;
      });
      ranges = ranges.reduce((mergedRanges, range) => {
        if (!mergedRanges.length) {
          mergedRanges.push(range);
        } else {
          const idx = mergedRanges.length - 1;
          if (mergedRanges[idx].end >= range.start) {
            mergedRanges[idx] = {
              start: mergedRanges[idx].start,
              end: Math.max(mergedRanges[idx].end, range.end)
            };
          } else {
            mergedRanges.push(range);
          }
        }
        return mergedRanges;
      }, []);
      return ranges;
    },
    /**
     * Calculate the different chunks to show based on the ranges to highlight.
     *
     * @return {Array} The chunks
     */
    chunks() {
      if (this.ranges.length === 0) {
        return [{
          start: 0,
          end: this.text.length,
          highlight: false,
          text: this.text
        }];
      }
      const chunks = [];
      let currentIndex = 0;
      let currentRange = 0;
      while (currentIndex < this.text.length) {
        const range = this.ranges[currentRange];
        if (range.start === currentIndex) {
          chunks.push({
            ...range,
            highlight: true,
            text: this.text.slice(range.start, range.end)
          });
          currentRange++;
          currentIndex = range.end;
          if (currentRange >= this.ranges.length && currentIndex < this.text.length) {
            chunks.push({
              start: currentIndex,
              end: this.text.length,
              highlight: false,
              text: this.text.slice(currentIndex)
            });
            currentIndex = this.text.length;
          }
          continue;
        }
        chunks.push({
          start: currentIndex,
          end: range.start,
          highlight: false,
          text: this.text.slice(currentIndex, range.start)
        });
        currentIndex = range.start;
      }
      return chunks;
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object} The created VNode
   */
  render(h) {
    if (!this.ranges.length) {
      return h("span", {}, this.text);
    }
    return h("span", {}, this.chunks.map((chunk) => {
      return chunk.highlight ? h("strong", {}, chunk.text) : chunk.text;
    }));
  }
};
const _sfc_render$q = null;
const _sfc_staticRenderFns$q = null;
var __component__$r = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$q,
  _sfc_render$q,
  _sfc_staticRenderFns$q,
  false,
  null,
  null
);
const NcHighlight = __component__$r.exports;
const _sfc_main$p = {
  name: "NcEllipsisedOption",
  components: {
    NcHighlight
  },
  props: {
    /**
     * The text to be display in one line. If it is longer than 10 characters, it is be truncated with ellipsis in the end but keeping up to 10 last characters to fit the parent container.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * The search value to highlight in the text
     */
    search: {
      type: String,
      default: ""
    }
  },
  computed: {
    needsTruncate() {
      return this.name && this.name.length >= 10;
    },
    /**
     * Index at which to split the name if it is longer than 10 characters.
     *
     * @return {number} The position at which to split
     */
    split() {
      return this.name.length - Math.min(Math.floor(this.name.length / 2), 10);
    },
    part1() {
      if (this.needsTruncate) {
        return this.name.slice(0, this.split);
      }
      return this.name;
    },
    part2() {
      if (this.needsTruncate) {
        return this.name.slice(this.split);
      }
      return "";
    },
    /**
     * The ranges to highlight. Since we split the string for ellipsising,
     * the Highlight component cannot figure this out itself and needs the ranges provided.
     *
     * @return {Array} The array with the ranges to highlight
     */
    highlight1() {
      if (!this.search) {
        return [];
      }
      return FindRanges(this.name, this.search);
    },
    /**
     * We shift the ranges for the second part by the position of the split.
     * Ranges out of the string length are discarded by the Highlight component,
     * so we don't need to take care of this here.
     *
     * @return {Array} The array with the ranges to highlight
     */
    highlight2() {
      return this.highlight1.map((range) => {
        return {
          start: range.start - this.split,
          end: range.end - this.split
        };
      });
    }
  }
};
var _sfc_render$p = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "name-parts", attrs: { "dir": "auto", "title": _vm.name } }, [_c("NcHighlight", { staticClass: "name-parts__first", attrs: { "text": _vm.part1, "search": _vm.search, "highlight": _vm.highlight1 } }), _vm.part2 ? _c("NcHighlight", { staticClass: "name-parts__last", attrs: { "text": _vm.part2, "search": _vm.search, "highlight": _vm.highlight2 } }) : _vm._e()], 1);
};
var _sfc_staticRenderFns$p = [];
var __component__$q = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$p,
  _sfc_render$p,
  _sfc_staticRenderFns$p,
  false,
  null,
  "f6384352"
);
const NcEllipsisedOption = __component__$q.exports;
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getBasePlacement(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref) {
  let {
    reference,
    floating,
    placement
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  let coords;
  switch (getBasePlacement(placement)) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] = coords[mainAxis] - (reference[length] / 2 - floating[length] / 2);
      break;
    case "end":
      coords[mainAxis] = coords[mainAxis] + (reference[length] / 2 - floating[length] / 2);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2;
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement({
    ...rects,
    placement
  });
  let statefulPlacement = placement;
  let middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: data != null ? data : {}
    };
    if (reset) {
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement({
          ...rects,
          placement: statefulPlacement
        }));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(middlewareArguments, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingParents",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = await platform2.getClippingClientRect({
    element: await platform2.isElement(element) ? element : element.contextElement || await platform2.getDocumentElement({
      element: elements.floating
    }),
    boundary,
    rootBoundary
  });
  const elementClientRect = rectToClientRect(await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await platform2.getOffsetParent({
      element: elements.floating
    }),
    strategy
  }));
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
const min$1 = Math.min;
const max$1 = Math.max;
function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}
const arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const basePlacement = getBasePlacement(placement);
    const axis = getMainAxisFromPlacement(basePlacement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions({
      element
    });
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await platform2.getOffsetParent({
      element
    });
    const clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min2 = paddingObject[minProp];
    const max2 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min2, center, max2);
    return {
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
const hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects) {
  const isStart = getAlignment(placement) === "start";
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? isStart ? "right" : "left" : isStart ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
const hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
const basePlacements = ["top", "right", "bottom", "left"];
const allPlacements = /* @__PURE__ */ basePlacements.reduce((acc, basePlacement) => acc.concat(basePlacement, basePlacement + "-start", basePlacement + "-end"), []);
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getBasePlacement(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
const autoPlacement = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _middlewareData$autoP5, _placementsSortedByLe;
      const {
        x,
        y,
        rects,
        middlewareData,
        placement
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      if ((_middlewareData$autoP = middlewareData.autoPlacement) != null && _middlewareData$autoP.skip) {
        return {};
      }
      const placements2 = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP2 = (_middlewareData$autoP3 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP3.index) != null ? _middlewareData$autoP2 : 0;
      const currentPlacement = placements2[currentIndex];
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects);
      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements2[0]
          }
        };
      }
      const currentOverflows = [overflow[getBasePlacement(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(_middlewareData$autoP4 = (_middlewareData$autoP5 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP5.overflows) != null ? _middlewareData$autoP4 : [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements2[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref) => {
        let {
          overflows
        } = _ref;
        return overflows.every((overflow2) => overflow2 <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      return {
        data: {
          skip: true
        },
        reset: {
          placement: placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement
        }
      };
    }
  };
};
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
const flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip, _middlewareData$flip2;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement
      } = middlewareArguments;
      if ((_middlewareData$flip = middlewareData.flip) != null && _middlewareData$flip.skip) {
        return {};
      }
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const basePlacement = getBasePlacement(placement);
      const isBasePlacement = basePlacement === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[basePlacement]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side) => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip3;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip3 = middlewareData.flip) == null ? void 0 : _middlewareData$flip3.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$slice$;
            const placement2 = (_overflowsData$slice$ = overflowsData.slice().sort((a, b) => a.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0) - b.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0))[0]) == null ? void 0 : _overflowsData$slice$.placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        return {
          data: {
            skip: true
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
function convertValueToCoords(_ref) {
  let {
    placement,
    rects,
    value
  } = _ref;
  const basePlacement = getBasePlacement(placement);
  const multiplier = ["left", "top"].includes(basePlacement) ? -1 : 1;
  const rawValue = typeof value === "function" ? value({
    ...rects,
    placement
  }) : value;
  const {
    mainAxis,
    crossAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...rawValue
  };
  return getMainAxisFromPlacement(basePlacement) === "x" ? {
    x: crossAxis,
    y: mainAxis * multiplier
  } : {
    x: mainAxis * multiplier,
    y: crossAxis
  };
}
const offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects
      } = middlewareArguments;
      const diffCoords = convertValueToCoords({
        placement,
        rects,
        value
      });
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getBasePlacement(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
const size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$size;
      const {
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;
      if ((_middlewareData$size = middlewareData.size) != null && _middlewareData$size.skip) {
        return {};
      }
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const basePlacement = getBasePlacement(placement);
      const isEnd = getAlignment(placement) === "end";
      let heightSide;
      let widthSide;
      if (basePlacement === "top" || basePlacement === "bottom") {
        heightSide = basePlacement;
        widthSide = isEnd ? "left" : "right";
      } else {
        widthSide = basePlacement;
        heightSide = isEnd ? "top" : "bottom";
      }
      const xMin = max$1(overflow.left, 0);
      const xMax = max$1(overflow.right, 0);
      const yMin = max$1(overflow.top, 0);
      const yMax = max$1(overflow.bottom, 0);
      const dimensions = {
        height: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom)) : overflow[heightSide]),
        width: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right)) : overflow[widthSide])
      };
      apply == null ? void 0 : apply({
        ...dimensions,
        ...rects
      });
      return {
        data: {
          skip: true
        },
        reset: {
          rects: true
        }
      };
    }
  };
};
function isWindow(value) {
  return (value == null ? void 0 : value.toString()) === "[object Window]";
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isScrollParent(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isWindow(element)) {
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent));
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || // DOM Element detected
    (isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}
function getViewportRect(element) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) < 0.01) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getScrollParent(node) {
  if (["html", "body", "#document"].includes(getNodeName(node))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function getScrollParents(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollParent = getScrollParent(node);
  const isBody = scrollParent === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const updatedList = list.concat(target);
  return isBody ? updatedList : (
    // @ts-ignore: isBody tells us target will be an HTMLElement here
    updatedList.concat(getScrollParents(getParentNode(target)))
  );
}
function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element) {
  const clientRect = getBoundingClientRect(element);
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingParent(element, clippingParent) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  const clippingParents = getScrollParents(getParentNode(element));
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents.filter((clippingParent) => isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body");
}
function getClippingClientRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary
  } = _ref;
  const mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  const clippingParents = [...mainClippingParents, rootBoundary];
  const firstClippingParent = clippingParents[0];
  const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
    const rect = getClientRectFromClippingParent(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingParent(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
const platform = {
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: {
        ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: (args) => convertOffsetParentRelativeRectToViewportRelativeRect(args),
  getOffsetParent: (_ref2) => {
    let {
      element
    } = _ref2;
    return getOffsetParent(element);
  },
  isElement: (value) => isElement(value),
  getDocumentElement: (_ref3) => {
    let {
      element
    } = _ref3;
    return getDocumentElement(element);
  },
  getClippingClientRect: (args) => getClippingClientRect(args),
  getDimensions: (_ref4) => {
    let {
      element
    } = _ref4;
    return getDimensions(element);
  },
  getClientRects: (_ref5) => {
    let {
      element
    } = _ref5;
    return element.getClientRects();
  }
};
const computePosition = (reference, floating, options) => computePosition$1(reference, floating, {
  platform,
  ...options
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function assign(to, from) {
  for (const key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === "object" && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}
const config = {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: true,
  flip: true,
  shift: true,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: true,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (events) => [...events, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function getDefaultConfig(theme, key) {
  let themeConfig = config.themes[theme] || {};
  let value;
  do {
    value = themeConfig[key];
    if (typeof value === "undefined") {
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return value;
}
function getThemeClasses(theme) {
  const result = [theme];
  let themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result.map((c) => `v-popper--theme-${c}`);
}
function getAllParentThemes(theme) {
  const result = [theme];
  let themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result;
}
let supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e2) {
  }
}
let isIOS$1 = false;
if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  isIOS$1 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
const placements = ["auto", "top", "bottom", "left", "right"].reduce((acc, base) => acc.concat([
  base,
  `${base}-start`,
  `${base}-end`
]), []);
const SHOW_EVENT_MAP = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
};
const HIDE_EVENT_MAP = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function removeFromArray(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => {
    requestAnimationFrame(resolve);
  }));
}
const shownPoppers = [];
let hidingPopper = null;
const shownPoppersByTheme = {};
function getShownPoppersByTheme(theme) {
  let list = shownPoppersByTheme[theme];
  if (!list) {
    list = shownPoppersByTheme[theme] = [];
  }
  return list;
}
let Element$1 = function() {
};
if (typeof window !== "undefined") {
  Element$1 = window.Element;
}
function defaultPropFactory(prop) {
  return function() {
    const props = this.$props;
    return getDefaultConfig(props.theme, prop);
  };
}
const PROVIDE_KEY = "__floating-vue__popper";
var PrivatePopper = () => ({
  name: "VPopper",
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      required: true
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: defaultPropFactory("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: defaultPropFactory("positioningDisabled")
    },
    placement: {
      type: String,
      default: defaultPropFactory("placement"),
      validator: (value) => placements.includes(value)
    },
    delay: {
      type: [String, Number, Object],
      default: defaultPropFactory("delay")
    },
    distance: {
      type: [Number, String],
      default: defaultPropFactory("distance")
    },
    skidding: {
      type: [Number, String],
      default: defaultPropFactory("skidding")
    },
    triggers: {
      type: Array,
      default: defaultPropFactory("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: defaultPropFactory("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperHideTriggers")
    },
    container: {
      type: [String, Object, Element$1, Boolean],
      default: defaultPropFactory("container")
    },
    boundary: {
      type: [String, Element$1],
      default: defaultPropFactory("boundary")
    },
    strategy: {
      type: String,
      validator: (value) => ["absolute", "fixed"].includes(value),
      default: defaultPropFactory("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: defaultPropFactory("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: defaultPropFactory("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: defaultPropFactory("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: defaultPropFactory("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: defaultPropFactory("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: defaultPropFactory("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: defaultPropFactory("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: defaultPropFactory("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: defaultPropFactory("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: defaultPropFactory("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: defaultPropFactory("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: defaultPropFactory("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: defaultPropFactory("flip")
    },
    shift: {
      type: Boolean,
      default: defaultPropFactory("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: defaultPropFactory("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: defaultPropFactory("noAutoFocus")
    }
  },
  provide() {
    return {
      [PROVIDE_KEY]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [PROVIDE_KEY]: { default: null }
  },
  data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide === "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: __spreadProps(__spreadValues({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result
      };
    },
    parentPopper() {
      var _a;
      return (_a = this[PROVIDE_KEY]) == null ? void 0 : _a.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var _a, _b;
      return ((_a = this.popperTriggers) == null ? void 0 : _a.includes("hover")) || ((_b = this.popperShowTriggers) == null ? void 0 : _b.includes("hover"));
    }
  },
  watch: __spreadValues(__spreadValues({
    shown: "$_autoShowHide",
    disabled(value) {
      if (value) {
        this.dispose();
      } else {
        this.init();
      }
    },
    async container() {
      if (this.isShown) {
        this.$_ensureTeleport();
        await this.$_computePosition();
      }
    }
  }, [
    "triggers",
    "positioningDisabled"
  ].reduce((acc, prop) => {
    acc[prop] = "$_refreshListeners";
    return acc;
  }, {})), [
    "placement",
    "distance",
    "skidding",
    "boundary",
    "strategy",
    "overflowPadding",
    "arrowPadding",
    "preventOverflow",
    "shift",
    "shiftCrossAxis",
    "flip"
  ].reduce((acc, prop) => {
    acc[prop] = "$_computePosition";
    return acc;
  }, {})),
  created() {
    this.$_isDisposed = true;
    this.randomId = `popper_${[Math.random(), Date.now()].map((n2) => n2.toString(36).substring(2, 10)).join("_")}`;
    if (this.autoMinSize) {
      console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.');
    }
    if (this.autoMaxSize) {
      console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
    }
  },
  mounted() {
    this.init();
    this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeDestroy() {
    this.dispose();
  },
  methods: {
    show({ event = null, skipDelay = false, force = false } = {}) {
      var _a, _b;
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) && this.parentPopper.lockedChild !== this)
        return;
      this.$_pendingHide = false;
      if (force || !this.disabled) {
        if (((_b = this.parentPopper) == null ? void 0 : _b.lockedChild) === this) {
          this.parentPopper.lockedChild = null;
        }
        this.$_scheduleShow(event, skipDelay);
        this.$emit("show");
        this.$_showFrameLocked = true;
        requestAnimationFrame(() => {
          this.$_showFrameLocked = false;
        });
      }
      this.$emit("update:shown", true);
    },
    hide({ event = null, skipDelay = false, skipAiming = false } = {}) {
      var _a;
      if (this.$_hideInProgress)
        return;
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      if (!skipAiming && this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
        if (this.parentPopper) {
          this.parentPopper.lockedChild = this;
          clearTimeout(this.parentPopper.lockedChildTimer);
          this.parentPopper.lockedChildTimer = setTimeout(() => {
            if (this.parentPopper.lockedChild === this) {
              this.parentPopper.lockedChild.hide({ skipDelay });
              this.parentPopper.lockedChild = null;
            }
          }, 1e3);
        }
        return;
      }
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) === this) {
        this.parentPopper.lockedChild = null;
      }
      this.$_pendingHide = false;
      this.$_scheduleHide(event, skipDelay);
      this.$emit("hide");
      this.$emit("update:shown", false);
    },
    init() {
      if (!this.$_isDisposed)
        return;
      this.$_isDisposed = false;
      this.isMounted = false;
      this.$_events = [];
      this.$_preventShow = false;
      this.$_referenceNode = this.referenceNode();
      this.$_targetNodes = this.targetNodes().filter((e2) => e2.nodeType === e2.ELEMENT_NODE);
      this.$_popperNode = this.popperNode();
      this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner");
      this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container");
      this.$_swapTargetAttrs("title", "data-original-title");
      this.$_detachPopperNode();
      if (this.triggers.length) {
        this.$_addEventListeners();
      }
      if (this.shown) {
        this.show();
      }
    },
    dispose() {
      if (this.$_isDisposed)
        return;
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({ skipDelay: true });
      this.$_detachPopperNode();
      this.isMounted = false;
      this.isShown = false;
      this.$_updateParentShownChildren(false);
      this.$_swapTargetAttrs("data-original-title", "title");
      this.$emit("dispose");
    },
    async onResize() {
      if (this.isShown) {
        await this.$_computePosition();
        this.$emit("resize");
      }
    },
    async $_computePosition() {
      var _a;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const options2 = {
        strategy: this.strategy,
        middleware: []
      };
      if (this.distance || this.skidding) {
        options2.middleware.push(offset({
          mainAxis: this.distance,
          crossAxis: this.skidding
        }));
      }
      const isPlacementAuto = this.placement.startsWith("auto");
      if (isPlacementAuto) {
        options2.middleware.push(autoPlacement({
          alignment: (_a = this.placement.split("-")[1]) != null ? _a : ""
        }));
      } else {
        options2.placement = this.placement;
      }
      if (this.preventOverflow) {
        if (this.shift) {
          options2.middleware.push(shift({
            padding: this.overflowPadding,
            boundary: this.boundary,
            crossAxis: this.shiftCrossAxis
          }));
        }
        if (!isPlacementAuto && this.flip) {
          options2.middleware.push(flip({
            padding: this.overflowPadding,
            boundary: this.boundary
          }));
        }
      }
      options2.middleware.push(arrow({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      }));
      if (this.arrowOverflow) {
        options2.middleware.push({
          name: "arrowOverflow",
          fn: ({ placement, rects, middlewareData }) => {
            let overflow;
            const { centerOffset } = middlewareData.arrow;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              overflow = Math.abs(centerOffset) > rects.reference.width / 2;
            } else {
              overflow = Math.abs(centerOffset) > rects.reference.height / 2;
            }
            return {
              data: {
                overflow
              }
            };
          }
        });
      }
      if (this.autoMinSize || this.autoSize) {
        const autoSize = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        options2.middleware.push({
          name: "autoSize",
          fn: ({ rects, placement, middlewareData }) => {
            var _a2;
            if ((_a2 = middlewareData.autoSize) == null ? void 0 : _a2.skip) {
              return {};
            }
            let width;
            let height;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              width = rects.reference.width;
            } else {
              height = rects.reference.height;
            }
            this.$_innerNode.style[autoSize === "min" ? "minWidth" : autoSize === "max" ? "maxWidth" : "width"] = width != null ? `${width}px` : null;
            this.$_innerNode.style[autoSize === "min" ? "minHeight" : autoSize === "max" ? "maxHeight" : "height"] = height != null ? `${height}px` : null;
            return {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      if (this.autoMaxSize || this.autoBoundaryMaxSize) {
        this.$_innerNode.style.maxWidth = null;
        this.$_innerNode.style.maxHeight = null;
        options2.middleware.push(size({
          boundary: this.boundary,
          padding: this.overflowPadding,
          apply: ({ width, height }) => {
            this.$_innerNode.style.maxWidth = width != null ? `${width}px` : null;
            this.$_innerNode.style.maxHeight = height != null ? `${height}px` : null;
          }
        }));
      }
      const data = await computePosition(this.$_referenceNode, this.$_popperNode, options2);
      Object.assign(this.result, {
        x: data.x,
        y: data.y,
        placement: data.placement,
        strategy: data.strategy,
        arrow: __spreadValues(__spreadValues({}, data.middlewareData.arrow), data.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(event = null, skipDelay = false) {
      this.$_updateParentShownChildren(true);
      this.$_hideInProgress = false;
      clearTimeout(this.$_scheduleTimer);
      if (hidingPopper && this.instantMove && hidingPopper.instantMove && hidingPopper !== this.parentPopper) {
        hidingPopper.$_applyHide(true);
        this.$_applyShow(true);
        return;
      }
      if (skipDelay) {
        this.$_applyShow();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      }
    },
    $_scheduleHide(event = null, skipDelay = false) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false);
      this.$_hideInProgress = true;
      clearTimeout(this.$_scheduleTimer);
      if (this.isShown) {
        hidingPopper = this;
      }
      if (skipDelay) {
        this.$_applyHide();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      }
    },
    $_computeDelay(type) {
      const delay3 = this.delay;
      return parseInt(delay3 && delay3[type] || delay3 || 0);
    },
    async $_applyShow(skipTransition = false) {
      clearTimeout(this.$_disposeTimer);
      clearTimeout(this.$_scheduleTimer);
      this.skipTransition = skipTransition;
      if (this.isShown) {
        return;
      }
      this.$_ensureTeleport();
      await nextFrame();
      await this.$_computePosition();
      await this.$_applyShowEffect();
      if (!this.positioningDisabled) {
        this.$_registerEventListeners([
          ...getScrollParents(this.$_referenceNode),
          ...getScrollParents(this.$_popperNode)
        ], "scroll", () => {
          this.$_computePosition();
        });
      }
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const bounds = this.$_referenceNode.getBoundingClientRect();
        const popperWrapper = this.$_popperNode.querySelector(".v-popper__wrapper");
        const parentBounds = popperWrapper.parentNode.getBoundingClientRect();
        const x = bounds.x + bounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft);
        const y = bounds.y + bounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop);
        this.result.transformOrigin = `${x}px ${y}px`;
      }
      this.isShown = true;
      this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const showGroup = this.showGroup;
      if (showGroup) {
        let popover;
        for (let i = 0; i < shownPoppers.length; i++) {
          popover = shownPoppers[i];
          if (popover.showGroup !== showGroup) {
            popover.hide();
            popover.$emit("close-group");
          }
        }
      }
      shownPoppers.push(this);
      document.body.classList.add("v-popper--some-open");
      for (const theme of getAllParentThemes(this.theme)) {
        getShownPoppersByTheme(theme).push(this);
        document.body.classList.add(`v-popper--some-open--${theme}`);
      }
      this.$emit("apply-show");
      this.classes.showFrom = true;
      this.classes.showTo = false;
      this.classes.hideFrom = false;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.showFrom = false;
      this.classes.showTo = true;
      if (!this.noAutoFocus)
        this.$_popperNode.focus();
    },
    async $_applyHide(skipTransition = false) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        this.$_hideInProgress = false;
        return;
      }
      clearTimeout(this.$_scheduleTimer);
      if (!this.isShown) {
        return;
      }
      this.skipTransition = skipTransition;
      removeFromArray(shownPoppers, this);
      if (shownPoppers.length === 0) {
        document.body.classList.remove("v-popper--some-open");
      }
      for (const theme of getAllParentThemes(this.theme)) {
        const list = getShownPoppersByTheme(theme);
        removeFromArray(list, this);
        if (list.length === 0) {
          document.body.classList.remove(`v-popper--some-open--${theme}`);
        }
      }
      if (hidingPopper === this) {
        hidingPopper = null;
      }
      this.isShown = false;
      this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      });
      clearTimeout(this.$_disposeTimer);
      const disposeTime = getDefaultConfig(this.theme, "disposeTimeout");
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(() => {
          if (this.$_popperNode) {
            this.$_detachPopperNode();
            this.isMounted = false;
          }
        }, disposeTime);
      }
      this.$_removeEventListeners("scroll");
      this.$emit("apply-hide");
      this.classes.showFrom = false;
      this.classes.showTo = false;
      this.classes.hideFrom = true;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.hideFrom = false;
      this.classes.hideTo = true;
    },
    $_autoShowHide() {
      if (this.shown) {
        this.show();
      } else {
        this.hide();
      }
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let container = this.container;
      if (typeof container === "string") {
        container = window.document.querySelector(container);
      } else if (container === false) {
        container = this.$_targetNodes[0].parentNode;
      }
      if (!container) {
        throw new Error("No container for popover: " + this.container);
      }
      container.appendChild(this.$_popperNode);
      this.isMounted = true;
    },
    $_addEventListeners() {
      const handleShow = (event) => {
        if (this.isShown && !this.$_hideInProgress) {
          return;
        }
        event.usedByTooltip = true;
        !this.$_preventShow && this.show({ event });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
      this.$_registerTriggerListeners([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow);
      const handleHide = (skipAiming) => (event) => {
        if (event.usedByTooltip) {
          return;
        }
        this.hide({ event, skipAiming });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide(false));
      this.$_registerTriggerListeners([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide(true));
    },
    $_registerEventListeners(targetNodes, eventType, handler) {
      this.$_events.push({ targetNodes, eventType, handler });
      targetNodes.forEach((node) => node.addEventListener(eventType, handler, supportsPassive ? {
        passive: true
      } : void 0));
    },
    $_registerTriggerListeners(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
      let triggers = commonTriggers;
      if (customTrigger != null) {
        triggers = typeof customTrigger === "function" ? customTrigger(triggers) : customTrigger;
      }
      triggers.forEach((trigger) => {
        const eventType = eventMap[trigger];
        if (eventType) {
          this.$_registerEventListeners(targetNodes, eventType, handler);
        }
      });
    },
    $_removeEventListeners(filterEventType) {
      const newList = [];
      this.$_events.forEach((listener) => {
        const { targetNodes, eventType, handler } = listener;
        if (!filterEventType || filterEventType === eventType) {
          targetNodes.forEach((node) => node.removeEventListener(eventType, handler));
        } else {
          newList.push(listener);
        }
      });
      this.$_events = newList;
    },
    $_refreshListeners() {
      if (!this.$_isDisposed) {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      }
    },
    $_handleGlobalClose(event, touch = false) {
      if (this.$_showFrameLocked)
        return;
      this.hide({ event });
      if (event.closePopover) {
        this.$emit("close-directive");
      } else {
        this.$emit("auto-hide");
      }
      if (touch) {
        this.$_preventShow = true;
        setTimeout(() => {
          this.$_preventShow = false;
        }, 300);
      }
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(attrFrom, attrTo) {
      for (const el of this.$_targetNodes) {
        const value = el.getAttribute(attrFrom);
        if (value) {
          el.removeAttribute(attrFrom);
          el.setAttribute(attrTo, value);
        }
      }
    },
    $_applyAttrsToTarget(attrs) {
      for (const el of this.$_targetNodes) {
        for (const n2 in attrs) {
          const value = attrs[n2];
          if (value == null) {
            el.removeAttribute(n2);
          } else {
            el.setAttribute(n2, value);
          }
        }
      }
    },
    $_updateParentShownChildren(value) {
      let parent = this.parentPopper;
      while (parent) {
        if (value) {
          parent.shownChildren.add(this.randomId);
        } else {
          parent.shownChildren.delete(this.randomId);
          if (parent.$_pendingHide) {
            parent.hide();
          }
        }
        parent = parent.parentPopper;
      }
    },
    $_isAimingPopper() {
      const referenceBounds = this.$el.getBoundingClientRect();
      if (mouseX >= referenceBounds.left && mouseX <= referenceBounds.right && mouseY >= referenceBounds.top && mouseY <= referenceBounds.bottom) {
        const popperBounds = this.$_popperNode.getBoundingClientRect();
        const vectorX = mouseX - mousePreviousX;
        const vectorY = mouseY - mousePreviousY;
        const distance = popperBounds.left + popperBounds.width / 2 - mousePreviousX + (popperBounds.top + popperBounds.height / 2) - mousePreviousY;
        const newVectorLength = distance + popperBounds.width + popperBounds.height;
        const edgeX = mousePreviousX + vectorX * newVectorLength;
        const edgeY = mousePreviousY + vectorY * newVectorLength;
        return lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom);
      }
      return false;
    }
  },
  render() {
    return this.$scopedSlots.default(this.slotData)[0];
  }
});
if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (isIOS$1) {
    document.addEventListener("touchstart", handleGlobalMousedown, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
    document.addEventListener("touchend", handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener("mousedown", handleGlobalMousedown, true);
    window.addEventListener("click", handleGlobalClick, true);
  }
  window.addEventListener("resize", computePositionAllShownPoppers);
}
function handleGlobalMousedown(event) {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i];
    try {
      const popperContent = popper.popperNode();
      popper.$_mouseDownContains = popperContent.contains(event.target);
    } catch (e2) {
    }
  }
}
function handleGlobalClick(event) {
  handleGlobalClose(event);
}
function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}
function handleGlobalClose(event, touch = false) {
  const preventClose = {};
  for (let i = shownPoppers.length - 1; i >= 0; i--) {
    const popper = shownPoppers[i];
    try {
      const contains2 = popper.$_containsGlobalTarget = isContainingEventTarget(popper, event);
      popper.$_pendingHide = false;
      requestAnimationFrame(() => {
        popper.$_pendingHide = false;
        if (preventClose[popper.randomId])
          return;
        if (shouldAutoHide(popper, contains2, event)) {
          popper.$_handleGlobalClose(event, touch);
          if (!event.closeAllPopover && event.closePopover && contains2) {
            let parent2 = popper.parentPopper;
            while (parent2) {
              preventClose[parent2.randomId] = true;
              parent2 = parent2.parentPopper;
            }
            return;
          }
          let parent = popper.parentPopper;
          while (parent) {
            if (shouldAutoHide(parent, parent.$_containsGlobalTarget, event)) {
              parent.$_handleGlobalClose(event, touch);
            } else {
              break;
            }
            parent = parent.parentPopper;
          }
        }
      });
    } catch (e2) {
    }
  }
}
function isContainingEventTarget(popper, event) {
  const popperContent = popper.popperNode();
  return popper.$_mouseDownContains || popperContent.contains(event.target);
}
function shouldAutoHide(popper, contains2, event) {
  return event.closeAllPopover || event.closePopover && contains2 || getAutoHideResult(popper, event) && !contains2;
}
function getAutoHideResult(popper, event) {
  if (typeof popper.autoHide === "function") {
    const result = popper.autoHide(event);
    popper.lastAutoHide = result;
    return result;
  }
  return popper.autoHide;
}
function computePositionAllShownPoppers(event) {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i];
    popper.$_computePosition(event);
  }
}
let mousePreviousX = 0;
let mousePreviousY = 0;
let mouseX = 0;
let mouseY = 0;
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (event) => {
    mousePreviousX = mouseX;
    mousePreviousY = mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  }, supportsPassive ? {
    passive: true
  } : void 0);
}
function lineIntersectsLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
}
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
var isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;
    initCompat();
    this.$nextTick(function() {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;
      if (_this.emitOnMount) {
        _this.emitSize();
      }
    });
    var object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize: function emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
function normalizeComponent$1(template, style, script2, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  var options2 = typeof script2 === "function" ? script2.options : script2;
  if (template && template.render) {
    options2.render = template.render;
    options2.staticRenderFns = template.staticRenderFns;
    options2._compiled = true;
  }
  {
    options2._scopeId = scopeId;
  }
  return script2;
}
var __vue_script__ = script;
var __vue_render__ = function __vue_render__2() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "resize-observer",
    attrs: {
      tabindex: "-1"
    }
  });
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = "data-v-8859cc6c";
var __vue_component__ = /* @__PURE__ */ normalizeComponent$1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__);
function install$1(Vue2) {
  Vue2.component("resize-observer", __vue_component__);
  Vue2.component("ResizeObserver", __vue_component__);
}
var plugin$1 = {
  version: "1.0.1",
  install: install$1
};
var GlobalVue$1 = null;
if (typeof window !== "undefined") {
  GlobalVue$1 = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue$1 = global.Vue;
}
if (GlobalVue$1) {
  GlobalVue$1.use(plugin$1);
}
var PrivateThemeClass = {
  computed: {
    themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};
var __vue2_script$5 = {
  name: "VPopperContent",
  components: {
    ResizeObserver: __vue_component__
  },
  mixins: [
    PrivateThemeClass
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  methods: {
    toPx(value) {
      if (value != null && !isNaN(value)) {
        return `${value}px`;
      }
      return null;
    }
  }
};
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "popover", staticClass: "v-popper__popper", class: [
    _vm.themeClass,
    _vm.classes.popperClass,
    {
      "v-popper__popper--shown": _vm.shown,
      "v-popper__popper--hidden": !_vm.shown,
      "v-popper__popper--show-from": _vm.classes.showFrom,
      "v-popper__popper--show-to": _vm.classes.showTo,
      "v-popper__popper--hide-from": _vm.classes.hideFrom,
      "v-popper__popper--hide-to": _vm.classes.hideTo,
      "v-popper__popper--skip-transition": _vm.skipTransition,
      "v-popper__popper--arrow-overflow": _vm.result && _vm.result.arrow.overflow,
      "v-popper__popper--no-positioning": !_vm.result
    }
  ], style: _vm.result ? {
    position: _vm.result.strategy,
    transform: "translate3d(" + Math.round(_vm.result.x) + "px," + Math.round(_vm.result.y) + "px,0)"
  } : void 0, attrs: { "id": _vm.popperId, "aria-hidden": _vm.shown ? "false" : "true", "tabindex": _vm.autoHide ? 0 : void 0, "data-popper-placement": _vm.result ? _vm.result.placement : void 0 }, on: { "keyup": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
      return null;
    }
    _vm.autoHide && _vm.$emit("hide");
  } } }, [_c("div", { staticClass: "v-popper__backdrop", on: { "click": function($event) {
    _vm.autoHide && _vm.$emit("hide");
  } } }), _c("div", { staticClass: "v-popper__wrapper", style: _vm.result ? {
    transformOrigin: _vm.result.transformOrigin
  } : void 0 }, [_c("div", { ref: "inner", staticClass: "v-popper__inner" }, [_vm.mounted ? [_c("div", [_vm._t("default")], 2), _vm.handleResize ? _c("ResizeObserver", { on: { "notify": function($event) {
    return _vm.$emit("resize", $event);
  } } }) : _vm._e()] : _vm._e()], 2), _c("div", { ref: "arrow", staticClass: "v-popper__arrow-container", style: _vm.result ? {
    left: _vm.toPx(_vm.result.arrow.x),
    top: _vm.toPx(_vm.result.arrow.y)
  } : void 0 }, [_c("div", { staticClass: "v-popper__arrow-outer" }), _c("div", { staticClass: "v-popper__arrow-inner" })])])]);
};
var staticRenderFns$2 = [];
function normalizeComponent(scriptExports, render26, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options2 = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render26) {
    options2.render = render26;
    options2.staticRenderFns = staticRenderFns2;
    options2._compiled = true;
  }
  var hook;
  if (injectStyles) {
    hook = injectStyles;
  }
  if (hook) {
    if (options2.functional) {
      options2._injectStyles = hook;
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options: options2
  };
}
const __cssModules$5 = {};
var __component__$5$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$2, staticRenderFns$2, false, __vue2_injectStyles$5);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var PrivatePopperContent = /* @__PURE__ */ function() {
  return __component__$5$1.exports;
}();
var PrivatePopperMethods = {
  methods: {
    show(...args) {
      return this.$refs.popper.show(...args);
    },
    hide(...args) {
      return this.$refs.popper.hide(...args);
    },
    dispose(...args) {
      return this.$refs.popper.dispose(...args);
    },
    onResize(...args) {
      return this.$refs.popper.onResize(...args);
    }
  }
};
var __vue2_script$4 = {
  name: "VPopperWrapper",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods,
    PrivateThemeClass
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default() {
        return this.$options.vPopperTheme;
      }
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$refs.reference.children).filter((node) => node !== this.$refs.popperContent.$el);
    }
  }
};
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Popper", _vm._g(_vm._b({ ref: "popper", attrs: { "theme": _vm.theme, "target-nodes": _vm.getTargetNodes, "reference-node": function() {
    return _vm.$refs.reference;
  }, "popper-node": function() {
    return _vm.$refs.popperContent.$el;
  } }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var popperId = ref.popperId;
    var isShown = ref.isShown;
    var shouldMountContent = ref.shouldMountContent;
    var skipTransition = ref.skipTransition;
    var autoHide = ref.autoHide;
    var show = ref.show;
    var hide = ref.hide;
    var handleResize = ref.handleResize;
    var onResize = ref.onResize;
    var classes = ref.classes;
    var result = ref.result;
    return [_c("div", { ref: "reference", staticClass: "v-popper", class: [
      _vm.themeClass,
      {
        "v-popper--shown": isShown
      }
    ] }, [_vm._t("default", null, { "shown": isShown, "show": show, "hide": hide }), _c("PopperContent", { ref: "popperContent", attrs: { "popper-id": popperId, "theme": _vm.theme, "shown": isShown, "mounted": shouldMountContent, "skip-transition": skipTransition, "auto-hide": autoHide, "handle-resize": handleResize, "classes": classes, "result": result }, on: { "hide": hide, "resize": onResize } }, [_vm._t("popper", null, { "shown": isShown, "hide": hide })], 2)], 2)];
  } }], null, true) }, "Popper", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns$1 = [];
const __cssModules$4 = {};
var __component__$4$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$1, staticRenderFns$1, false, __vue2_injectStyles$4);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var PrivatePopperWrapper = /* @__PURE__ */ function() {
  return __component__$4$1.exports;
}();
var __vue2_script$3 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
let __vue2_render$2, __vue2_staticRenderFns$2;
const __cssModules$3 = {};
var __component__$3$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, __vue2_render$2, __vue2_staticRenderFns$2, false, __vue2_injectStyles$3);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var PrivateDropdown = /* @__PURE__ */ function() {
  return __component__$3$2.exports;
}();
var __vue2_script$2 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VMenu",
  vPopperTheme: "menu"
});
let __vue2_render$1, __vue2_staticRenderFns$1;
const __cssModules$2 = {};
var __component__$2$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, __vue2_render$1, __vue2_staticRenderFns$1, false, __vue2_injectStyles$2);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var PrivateMenu = /* @__PURE__ */ function() {
  return __component__$2$2.exports;
}();
var __vue2_script$1 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
let __vue2_render, __vue2_staticRenderFns;
const __cssModules$1 = {};
var __component__$1$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles$1);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var PrivateTooltip = /* @__PURE__ */ function() {
  return __component__$1$5.exports;
}();
var __vue2_script = {
  name: "VTooltipDirective",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default() {
        return getDefaultConfig(this.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default() {
        return getDefaultConfig(this.theme, "loadingContent");
      }
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content === "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }
      return this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    async finalContent(value) {
      await this.$nextTick();
      this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(force) {
      if (typeof this.content === "function" && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        const fetchId = ++this.$_fetchId;
        const result = this.content(this);
        if (result.then) {
          result.then((res) => this.onResult(fetchId, res));
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId)
        return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide() {
      this.$_isShown = false;
    }
  }
};
var render3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Popper", _vm._g(_vm._b({ ref: "popper", attrs: { "theme": _vm.theme, "popper-node": function() {
    return _vm.$refs.popperContent.$el;
  } }, on: { "apply-show": _vm.onShow, "apply-hide": _vm.onHide }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var popperId = ref.popperId;
    var isShown = ref.isShown;
    var shouldMountContent = ref.shouldMountContent;
    var skipTransition = ref.skipTransition;
    var autoHide = ref.autoHide;
    var hide = ref.hide;
    var handleResize = ref.handleResize;
    var onResize = ref.onResize;
    var classes = ref.classes;
    var result = ref.result;
    return [_c("PopperContent", { ref: "popperContent", class: {
      "v-popper--tooltip-loading": _vm.loading
    }, attrs: { "popper-id": popperId, "theme": _vm.theme, "shown": isShown, "mounted": shouldMountContent, "skip-transition": skipTransition, "auto-hide": autoHide, "handle-resize": handleResize, "classes": classes, "result": result }, on: { "hide": hide, "resize": onResize } }, [_vm.html ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.finalContent) } }) : _c("div", { domProps: { "textContent": _vm._s(_vm.finalContent) } })])];
  } }]) }, "Popper", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns = [];
const __cssModules = {};
var __component__$p = /* @__PURE__ */ normalizeComponent(__vue2_script, render3, staticRenderFns, false, __vue2_injectStyles);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var PrivateTooltipDirective = /* @__PURE__ */ function() {
  return __component__$p.exports;
}();
const TARGET_CLASS = "v-popper--has-tooltip";
function getPlacement(options2, modifiers) {
  let result = options2.placement;
  if (!result && modifiers) {
    for (const pos of placements) {
      if (modifiers[pos]) {
        result = pos;
      }
    }
  }
  if (!result) {
    result = getDefaultConfig(options2.theme || "tooltip", "placement");
  }
  return result;
}
function getOptions(el, value, modifiers) {
  let options2;
  const type = typeof value;
  if (type === "string") {
    options2 = { content: value };
  } else if (value && type === "object") {
    options2 = value;
  } else {
    options2 = { content: false };
  }
  options2.placement = getPlacement(options2, modifiers);
  options2.targetNodes = () => [el];
  options2.referenceNode = () => el;
  return options2;
}
function createTooltip(el, value, modifiers) {
  const options2 = getOptions(el, value, modifiers);
  const tooltipApp = el.$_popper = new Vue({
    mixins: [
      PrivatePopperMethods
    ],
    data() {
      return {
        options: options2
      };
    },
    render(h) {
      const _a = this.options, {
        theme,
        html,
        content,
        loadingContent
      } = _a, otherOptions = __objRest(_a, [
        "theme",
        "html",
        "content",
        "loadingContent"
      ]);
      return h(PrivateTooltipDirective, {
        props: {
          theme,
          html,
          content,
          loadingContent
        },
        attrs: otherOptions,
        ref: "popper"
      });
    },
    devtools: {
      hide: true
    }
  });
  const mountTarget = document.createElement("div");
  document.body.appendChild(mountTarget);
  tooltipApp.$mount(mountTarget);
  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }
  return tooltipApp;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.$destroy();
    delete el.$_popper;
    delete el.$_popperOldShown;
  }
  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, { value, oldValue, modifiers }) {
  const options2 = getOptions(el, value, modifiers);
  if (!options2.content || getDefaultConfig(options2.theme || "tooltip", "disabled")) {
    destroyTooltip(el);
  } else {
    let tooltipApp;
    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options = options2;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    }
    if (typeof value.shown !== "undefined" && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.show() : tooltipApp.hide();
    }
  }
}
var PrivateVTooltip = {
  bind,
  update: bind,
  unbind(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  const el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    const touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  const el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches[0];
    const firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  const el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var PrivateVClosePopper = {
  bind(el, { value, modifiers }) {
    el.$_closePopoverModifiers = modifiers;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  update(el, { value, oldValue, modifiers }) {
    el.$_closePopoverModifiers = modifiers;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind(el) {
    removeListeners(el);
  }
};
const Dropdown = PrivateDropdown;
function install(app, options2 = {}) {
  if (app.$_vTooltipInstalled)
    return;
  app.$_vTooltipInstalled = true;
  assign(config, options2);
  app.directive("tooltip", PrivateVTooltip);
  app.directive("close-popper", PrivateVClosePopper);
  app.component("v-tooltip", PrivateTooltip);
  app.component("VTooltip", PrivateTooltip);
  app.component("v-dropdown", PrivateDropdown);
  app.component("VDropdown", PrivateDropdown);
  app.component("v-menu", PrivateMenu);
  app.component("VMenu", PrivateMenu);
}
const plugin = {
  version: "1.0.0-beta.19",
  install,
  options: config
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
/*!
* focus-trap 7.6.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r[e2];
  return n2;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e2, r, t2) {
  return (r = _toPropertyKey(r)) in e2 ? Object.defineProperty(e2, r, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r] = t2, e2;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e2, r) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e2, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e2;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t2, r) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i = _toPrimitive(t2, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap._setPausedState(true);
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0 && !trapStack[trapStack.length - 1]._isManuallyPaused()) {
      trapStack[trapStack.length - 1]._setPausedState(false);
    }
  }
};
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e2) {
  return (e2 === null || e2 === void 0 ? void 0 : e2.key) === "Escape" || (e2 === null || e2 === void 0 ? void 0 : e2.key) === "Esc" || (e2 === null || e2 === void 0 ? void 0 : e2.keyCode) === 27;
};
var isTabEvent = function isTabEvent2(e2) {
  return (e2 === null || e2 === void 0 ? void 0 : e2.key) === "Tab" || (e2 === null || e2 === void 0 ? void 0 : e2.keyCode) === 9;
};
var isKeyForward = function isKeyForward2(e2) {
  return isTabEvent(e2) && !e2.shiftKey;
};
var isKeyBackward = function isKeyBackward2(e2) {
  return isTabEvent(e2) && e2.shiftKey;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config2 = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward,
    isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    manuallyPaused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config2[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
    return state.containerGroups.findIndex(function(_ref) {
      var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
    var optionValue = config2[optionName];
    if (typeof optionValue === "function") {
      optionValue = optionValue.apply(void 0, _toConsumableArray(params));
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      try {
        node = doc.querySelector(optionValue);
      } catch (err) {
        throw new Error("`".concat(optionName, '` appears to be an invalid selector; error="').concat(err.message, '"'));
      }
      if (!node) {
        if (!hasFallback) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus", {
      hasFallback: true
    });
    if (node === false) {
      return false;
    }
    if (node === void 0 || node && !isFocusable(node, config2.tabbableOptions)) {
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    } else if (node === null) {
      node = getNodeForOption("fallbackFocus");
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.containerGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config2.tabbableOptions);
      var focusableNodes = focusable(container, config2.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
      var firstDomTabbableNode = focusableNodes.find(function(node) {
        return isTabbable(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
        return isTabbable(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function(node) {
        return getTabIndex(node) > 0;
      });
      return {
        container,
        tabbableNodes,
        focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                return isTabbable(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
              return isTabbable(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
    if (state.containerGroups.find(function(g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };
  var _getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config2.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", {
      params: [previousActiveElement]
    });
    return node ? node : node === false ? false : previousActiveElement;
  };
  var findNextNavNode = function findNextNavNode2(_ref3) {
    var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (isBackward) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        var startOfGroupIndex = state.tabbableGroups.findIndex(function(_ref4) {
          var firstTabbableNode = _ref4.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config2.tabbableOptions) && !isTabbable(target, config2.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        var lastOfGroupIndex = state.tabbableGroups.findIndex(function(_ref5) {
          var lastTabbableNode = _ref5.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config2.tabbableOptions) && !isTabbable(target, config2.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    return destinationNode;
  };
  var checkPointerDown = function checkPointerDown2(e2) {
    var target = getActualTarget(e2);
    if (findContainerIndex(target, e2) >= 0) {
      return;
    }
    if (valueOrHandler(config2.clickOutsideDeactivates, e2)) {
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config2.returnFocusOnDeactivate
      });
      return;
    }
    if (valueOrHandler(config2.allowOutsideClick, e2)) {
      return;
    }
    e2.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      event.stopImmediatePropagation();
      var nextNode;
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            var mruTabIdx = tabbableNodes.findIndex(function(node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config2.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
              }
            }
          }
        } else {
          if (!state.containerGroups.some(function(g) {
            return g.tabbableNodes.some(function(n2) {
              return getTabIndex(n2) > 0;
            });
          })) {
            navAcrossContainers = false;
          }
        }
      } else {
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config2.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = void 0;
  };
  var checkKeyNav = function checkKeyNav2(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event,
      isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        event.preventDefault();
      }
      _tryFocus(destinationNode);
    }
  };
  var checkTabKey = function checkTabKey2(event) {
    if (config2.isKeyForward(event) || config2.isKeyBackward(event)) {
      checkKeyNav(event, config2.isKeyBackward(event));
    }
  };
  var checkEscapeKey = function checkEscapeKey2(event) {
    if (isEscapeEvent(event) && valueOrHandler(config2.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick2(e2) {
    var target = getActualTarget(e2);
    if (findContainerIndex(target, e2) >= 0) {
      return;
    }
    if (valueOrHandler(config2.clickOutsideDeactivates, e2)) {
      return;
    }
    if (valueOrHandler(config2.allowOutsideClick, e2)) {
      return;
    }
    e2.preventDefault();
    e2.stopImmediatePropagation();
  };
  var addListeners2 = function addListeners3() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trapStack, trap);
    state.delayInitialFocusTimer = config2.delayInitialFocus ? delay(function() {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkTabKey, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var removeListeners2 = function removeListeners3() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkTabKey, true);
    doc.removeEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var checkDomRemoval = function checkDomRemoval2(mutations) {
    var isFocusedNodeRemoved = mutations.some(function(mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function(node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };
  var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0;
  var updateObservedNodes = function updateObservedNodes2() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function(container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };
  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners2();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config2.onDeactivate,
        onPostDeactivate: config2.onPostDeactivate,
        checkCanReturnFocus: config2.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer);
      state.delayInitialFocusTimer = void 0;
      removeListeners2();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = true;
      return this._setPausedState(true, pauseOptions);
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = false;
      if (trapStack[trapStack.length - 1] !== this) {
        return this;
      }
      return this._setPausedState(false, unpauseOptions);
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };
  Object.defineProperties(trap, {
    _isManuallyPaused: {
      value: function value() {
        return state.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function value(paused, options) {
        if (state.paused === paused) {
          return this;
        }
        state.paused = paused;
        if (paused) {
          var onPause = getOption(options, "onPause");
          var onPostPause = getOption(options, "onPostPause");
          onPause === null || onPause === void 0 || onPause();
          removeListeners2();
          updateObservedNodes();
          onPostPause === null || onPostPause === void 0 || onPostPause();
        } else {
          var onUnpause = getOption(options, "onUnpause");
          var onPostUnpause = getOption(options, "onPostUnpause");
          onUnpause === null || onUnpause === void 0 || onUnpause();
          updateTabbableNodes();
          addListeners2();
          updateObservedNodes();
          onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
        }
        return this;
      }
    }
  });
  trap.updateContainerElements(elements);
  return trap;
};
function getTrapStack() {
  window._nc_focus_trap ??= [];
  return window._nc_focus_trap;
}
function createTrapStackController() {
  let pausedStack = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      pausedStack = [...getTrapStack()];
      for (const trap of pausedStack) {
        trap.pause();
      }
    },
    /**
     * Unpause the paused focus trap stack
     */
    unpause() {
      for (const trap of pausedStack) {
        trap.unpause();
      }
      pausedStack = [];
    }
  };
}
const _sfc_main$1$4 = defineComponent({
  name: "NcPopoverTriggerProvider",
  provide() {
    return {
      "NcPopover:trigger:shown": () => this.shown,
      "NcPopover:trigger:attrs": () => this.triggerAttrs
    };
  },
  props: {
    shown: {
      type: Boolean,
      required: true
    },
    popupRole: {
      type: String,
      default: void 0
    }
  },
  computed: {
    triggerAttrs() {
      return {
        "aria-haspopup": this.popupRole,
        "aria-expanded": this.shown.toString()
      };
    }
  },
  render() {
    return this.$scopedSlots.default?.({
      attrs: this.triggerAttrs
    });
  }
});
const _sfc_render$1$4 = null;
const _sfc_staticRenderFns$1$4 = null;
var __component__$1$4 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$1$4,
  _sfc_render$1$4,
  _sfc_staticRenderFns$1$4,
  false,
  null,
  null
);
const NcPopoverTriggerProvider = __component__$1$4.exports;
const _sfc_main$o = {
  name: "NcPopover",
  components: {
    Dropdown,
    NcPopoverTriggerProvider
  },
  inheritAttrs: false,
  props: {
    /**
     * Show or hide the popper
     * @see https://floating-vue.starpad.dev/api/#shown
     */
    shown: {
      type: Boolean,
      default: false
    },
    /**
     * Popup role
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#values
     */
    popupRole: {
      type: String,
      default: void 0,
      validator: (value) => ["menu", "listbox", "tree", "grid", "dialog", "true"].includes(value)
    },
    popoverBaseClass: {
      type: String,
      default: ""
    },
    /**
     * Enable popover focus trap
     *
     * @deprecated use noFocusTrap instead
     */
    focusTrap: {
      type: Boolean,
      default: true
    },
    /**
     * Disable the popover focus trap.
     */
    noFocusTrap: {
      type: Boolean,
      default: false
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {SetReturnFocus}
     */
    setReturnFocus: {
      default: void 0,
      type: [HTMLElement, SVGElement, String, Boolean, Function]
    }
  },
  emits: [
    "after-show",
    "after-hide",
    /**
     * @see https://floating-vue.starpad.dev/api/#update-shown
     */
    "update:shown"
  ],
  data() {
    return {
      internalShown: this.shown
    };
  },
  watch: {
    shown(value) {
      this.internalShown = value;
    },
    internalShown(value) {
      this.$emit("update:shown", value);
    }
  },
  mounted() {
    this.checkTriggerA11y();
  },
  beforeDestroy() {
    this.clearFocusTrap();
    this.clearEscapeStopPropagation();
  },
  methods: {
    /**
     * Check if the trigger has all required a11y attributes.
     * Important to check custom trigger button.
     */
    checkTriggerA11y() {
      if (window.OC?.debug) {
        const triggerContainer = this.getPopoverTriggerContainerElement();
        const requiredTriggerButton = triggerContainer.querySelector("[aria-expanded]");
        if (!requiredTriggerButton) {
          Vue.util.warn("It looks like you are using a custom button as a <NcPopover> or other popover #trigger. If you are not using <NcButton> as a trigger, you need to bind attrs from the #trigger slot props to your custom button. See <NcPopover> docs for an example.");
        }
      }
    },
    /**
     * Remove incorrect aria-describedby attribute from the trigger.
     * @see https://github.com/Akryum/floating-vue/blob/8d4f7125aae0e3ea00ba4093d6d2001ab15058f1/packages/floating-vue/src/components/Popper.ts#L734
     */
    removeFloatingVueAriaDescribedBy() {
      const triggerContainer = this.getPopoverTriggerContainerElement();
      const triggerElements = triggerContainer.querySelectorAll("[data-popper-shown]");
      for (const el of triggerElements) {
        el.removeAttribute("aria-describedby");
      }
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverContentElement() {
      return this.$refs.popover?.$refs.popperContent?.$el;
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverTriggerContainerElement() {
      return this.$refs.popover.$refs.reference;
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      await this.$nextTick();
      if (this.noFocusTrap || !this.focusTrap) {
        return;
      }
      const el = this.getPopoverContentElement();
      el.tabIndex = -1;
      if (!el) {
        return;
      }
      this.$focusTrap = createFocusTrap(el, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: false,
        allowOutsideClick: true,
        setReturnFocus: this.setReturnFocus,
        trapStack: getTrapStack(),
        fallBackFocus: el
      });
      this.$focusTrap.activate();
    },
    /**
     * Remove focus trap
     *
     * @param {object} options The configuration options for focusTrap
     */
    clearFocusTrap(options = {}) {
      try {
        this.$focusTrap?.deactivate(options);
        this.$focusTrap = null;
      } catch (err) {
        console.warn(err);
      }
    },
    /**
     * Add stopPropagation for Escape.
     * It prevents global Escape handling after closing popover.
     *
     * Manual event handling is used here instead of v-on because there is no direct access to the node.
     * Alternative - wrap <template #popover> in a div wrapper.
     */
    addEscapeStopPropagation() {
      const el = this.getPopoverContentElement();
      el?.addEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * Remove stop Escape handler
     */
    clearEscapeStopPropagation() {
      const el = this.getPopoverContentElement();
      el?.removeEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * @param {KeyboardEvent} event - native keydown event
     */
    stopKeydownEscapeHandler(event) {
      if (event.type === "keydown" && event.key === "Escape") {
        event.stopPropagation();
      }
    },
    async afterShow() {
      this.getPopoverContentElement().addEventListener("transitionend", () => {
        this.$emit("after-show");
      }, { once: true, passive: true });
      this.removeFloatingVueAriaDescribedBy();
      await this.$nextTick();
      await this.useFocusTrap();
      this.addEscapeStopPropagation();
    },
    afterHide() {
      this.getPopoverContentElement().addEventListener("transitionend", () => {
        this.$emit("after-hide");
      }, { once: true, passive: true });
      this.clearFocusTrap();
      this.clearEscapeStopPropagation();
    }
  }
};
var _sfc_render$o = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("Dropdown", _vm._g(_vm._b({ ref: "popover", attrs: { "distance": 10, "arrow-padding": 10, "no-auto-focus": true, "popper-class": _vm.popoverBaseClass, "shown": _vm.internalShown }, on: { "update:shown": function($event) {
    _vm.internalShown = $event;
  }, "apply-show": _vm.afterShow, "apply-hide": _vm.afterHide }, scopedSlots: _vm._u([{ key: "popper", fn: function(slotProps) {
    return [_vm._t("default", null, null, slotProps)];
  } }], null, true) }, "Dropdown", _vm.$attrs, false), _vm.$listeners), [_c("NcPopoverTriggerProvider", { attrs: { "shown": _vm.internalShown, "popup-role": _vm.popupRole }, scopedSlots: _vm._u([{ key: "default", fn: function(slotProps) {
    return [_vm._t("trigger", null, null, slotProps)];
  } }], null, true) })], 1);
};
var _sfc_staticRenderFns$o = [];
var __component__$o = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$o,
  _sfc_render$o,
  _sfc_staticRenderFns$o,
  false,
  null,
  null
);
const NcPopover = __component__$o.exports;
Vue.util.warn;
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const directiveHooks = {
  mounted: "inserted",
  unmounted: "unbind"
};
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref$1(r);
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
Vue.util.warn;
const defaultWindow$1 = isClient ? window : void 0;
function unrefElement$1(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener$1(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow$1;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register2 = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement$1(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register2(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref$1(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, void 0);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow$1, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = (Array.isArray(value) ? value : [value]).map(unrefElement$1).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow$1 } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches2 = ref$1(false);
  const handler = (event) => {
    matches2.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches2.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches2;
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow$1, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement$1(el)) : [unrefElement$1(_targets)];
  });
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el)
            observer.observe(_el, observerOptions);
        }
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true,
    updateTiming = "sync"
  } = options;
  const height = ref$1(0);
  const bottom = ref$1(0);
  const left = ref$1(0);
  const right = ref$1(0);
  const top = ref$1(0);
  const width = ref$1(0);
  const x = ref$1(0);
  const y = ref$1(0);
  function recalculate() {
    const el = unrefElement$1(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  function update() {
    if (updateTiming === "sync")
      recalculate();
    else if (updateTiming === "next-frame")
      requestAnimationFrame(() => recalculate());
  }
  useResizeObserver(target, update);
  watch(() => unrefElement$1(target), (ele) => !ele && update());
  useMutationObserver(target, update, {
    attributeFilter: ["style", "class"]
  });
  if (windowScroll)
    useEventListener$1("scroll", update, { capture: true, passive: true });
  if (windowResize)
    useEventListener$1("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window: window2 = defaultWindow$1
  } = options;
  const coordsStart = reactive({ x: 0, y: 0 });
  const coordsEnd = reactive({ x: 0, y: 0 });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max: max2, abs } = Math;
  const isThresholdExceeded = computed(() => max2(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = ref$1(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return "none";
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "left" : "right";
    } else {
      return diffY.value > 0 ? "up" : "down";
    }
  });
  const getTouchEventCoords = (e2) => [e2.touches[0].clientX, e2.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window2 == null ? void 0 : window2.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd2 = (e2) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e2, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener$1(target, "touchstart", (e2) => {
      if (e2.touches.length !== 1)
        return;
      const [x, y] = getTouchEventCoords(e2);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e2);
    }, listenerOptions),
    useEventListener$1(target, "touchmove", (e2) => {
      if (e2.touches.length !== 1)
        return;
      const [x, y] = getTouchEventCoords(e2);
      updateCoordsEnd(x, y);
      if (listenerOptions.capture && !listenerOptions.passive && Math.abs(diffX.value) > Math.abs(diffY.value))
        e2.preventDefault();
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e2);
    }, listenerOptions),
    useEventListener$1(target, ["touchend", "touchcancel"], onTouchEnd2, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document2) {
  if (!document2)
    return false;
  let supportsPassive2 = false;
  const optionsBlock = {
    get passive() {
      supportsPassive2 = true;
      return false;
    }
  };
  document2.addEventListener("x", noop, optionsBlock);
  document2.removeEventListener("x", noop);
  return supportsPassive2;
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow$1,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = ref$1(initialWidth);
  const height = ref$1(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener$1("resize", update, { passive: true });
  if (listenOrientation) {
    const matches2 = useMediaQuery("(orientation: portrait)");
    watch(matches2, () => update());
  }
  return { width, height };
}
function useTrapStackControl(shouldPause, options = {}) {
  const trapStackController = createTrapStackController();
  watch(shouldPause, () => {
    if (toValue(options.disabled)) {
      return;
    }
    if (toValue(shouldPause)) {
      trapStackController.pause();
    } else {
      trapStackController.unpause();
    }
  });
  onUnmounted(() => {
    trapStackController.unpause();
  });
}
const _sfc_main$n = {
  name: "DotsHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$n = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon dots-horizontal-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$n = [];
var __component__$n = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$n,
  _sfc_render$n,
  _sfc_staticRenderFns$n,
  false,
  null,
  null
);
const DotsHorizontal = __component__$n.exports;
register(t4);
const focusableSelector = ".focusable";
const _sfc_main$m = {
  name: "NcActions",
  components: {
    NcButton,
    NcPopover
  },
  provide() {
    return {
      /**
       * NcActions can be used as:
       * - Application menu (has menu role)
       * - Expanded block (has no specific role, should be used an element with expanded role)
       * - Popover with plain text or text inputs (has no specific role)
       * Depending on the usage (used items), the menu and its items should have different roles for a11y.
       * Provide the role for NcAction* components in the NcActions content.
       * @type {import('vue').ComputedRef<boolean>}
       */
      "NcActions:isSemanticMenu": computed(() => this.actionsMenuSemanticType === "menu")
    };
  },
  props: {
    /**
     * Specify the open state of the popover menu
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * This disables the internal open management,
     * so the actions menu only respects the `open` prop.
     * This is e.g. necessary for the NcAvatar component
     * to only open the actions menu after loading it's entries has finished.
     */
    manualOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Force the name to show for single actions
     */
    forceName: {
      type: Boolean,
      default: false
    },
    /**
     * Specify the menu name
     */
    menuName: {
      type: String,
      default: null
    },
    /**
     * NcActions can be used as:
     *
     * - Application menu (has menu role)
     * - Navigation (has no specific role, should be used an element with expanded role)
     * - Popover with plain text or text inputs (has no specific role)
     *
     * By default the used type is automatically detected by components used in the default slot.#
     *
     * With Vue this is limited to direct children of the NcActions component.
     * So if you use a wrapper, you have to provide the semantic type yourself (see Example)
     *
     * Choose:
     *
     * - 'dialog' if you use any of these components: NcActionInput', 'NcActionTextEditable'
     * - 'menu' if you use any of these components: 'NcActionButton', 'NcActionButtonGroup', 'NcActionCheckbox', 'NcActionRadio'
     * - 'expanded' if using one of these: 'NcActionLink', 'NcActionRouter'. This represents an expanded block.
     * - 'tooltip' only to be used when a text without any interactive elements is used.
     * - Leave this property unset otherwise
     */
    forceSemanticType: {
      type: String,
      default: null,
      validator(value) {
        return ["dialog", "menu", "expanded", "tooltip"].includes(value);
      }
    },
    /**
     * Apply primary styling for this menu
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies the button variant used for trigger and single actions buttons.
     *
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success. If left empty,
     * the default button style will be applied.
     * @deprecated use `variant` instead - will be removed with v9
     */
    type: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(value);
      },
      default: null
    },
    /**
     * Icon to show for the toggle menu button
     * when more than one action is inside the actions component.
     * Only replace the default three-dot icon if really necessary.
     */
    defaultIcon: {
      type: String,
      default: ""
    },
    /**
     * Aria label for the actions menu.
     *
     * If `menuName` is defined this will not be used to prevent
     * any accessible name conflicts. This ensures that the
     * element can be activated via voice input.
     */
    ariaLabel: {
      type: String,
      default: t$1("Actions")
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    },
    /**
     * Wanted direction of the menu
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * DOM element for the actions' popover boundaries
     */
    boundariesElement: {
      type: Element,
      default: () => document.querySelector("#content-vue") ?? document.querySelector("body")
    },
    /**
     * Selector for the actions' popover container
     */
    container: {
      type: [String, Object, Element, Boolean],
      default: "body"
    },
    /**
     * Disabled state of the main button (single action or menu toggle)
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Display x items inline out of the dropdown menu
     * Will be ignored if `forceMenu` is set
     */
    inline: {
      type: Number,
      default: 0
    },
    /**
     * Specifies the button variant used for trigger and single actions buttons.
     *
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success.
     * If left empty, the default button style will be applied.
     *
     * @since 8.24.0
     */
    variant: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(value);
      },
      default: null
    }
  },
  emits: [
    "click",
    "blur",
    "focus",
    "close",
    "closed",
    "open",
    "opened",
    "update:open"
  ],
  setup(props) {
    const randomId = `menu-${GenRandomId()}`;
    const triggerRandomId = `trigger-${randomId}`;
    const triggerButton = ref$1();
    const { top, bottom } = useElementBounding(triggerButton);
    const { top: boundaryTop, bottom: boundaryBottom } = useElementBounding(toRef$1(props, "boundariesElement"));
    const { height: windowHeight } = useWindowSize();
    const maxMenuHeight = computed(() => Math.max(
      // Either expand to the top
      Math.min(
        // max height is the top position of the trigger minus the header height minus the wedge and the padding
        top.value - 84,
        // and also limited to the space in the boundary
        top.value - boundaryTop.value
      ),
      // or expand to the bottom
      Math.min(
        // the max height is the window height minus current position of the trigger minus the wedge and padding
        windowHeight.value - bottom.value - 34,
        // and limit to the available space in the boundary
        boundaryBottom.value - bottom.value
      )
    ));
    return {
      triggerButton,
      maxMenuHeight,
      randomId,
      triggerRandomId
    };
  },
  data() {
    return {
      opened: this.open,
      focusIndex: 0,
      /**
       * @type {'menu'|'expanded'|'dialog'|'tooltip'|'unknown'}
       */
      actionsMenuSemanticType: "unknown"
    };
  },
  computed: {
    triggerButtonVariant() {
      return (this.type ?? this.variant) || (this.primary ? "primary" : this.menuName ? "secondary" : "tertiary");
    },
    /**
     * A11y roles and keyboard navigation configuration depending on the semantic type
     */
    config() {
      const configs = {
        menu: {
          popupRole: "menu",
          withArrowNavigation: true,
          withTabNavigation: false,
          withFocusTrap: false,
          triggerA11yAttr: {
            "aria-controls": this.opened ? this.randomId : null
          },
          popoverContainerA11yAttrs: {},
          popoverUlA11yAttrs: {
            "aria-labelledby": this.triggerRandomId,
            id: this.randomId,
            role: "menu"
          }
        },
        expanded: {
          popupRole: void 0,
          withArrowNavigation: false,
          withTabNavigation: true,
          withFocusTrap: false,
          triggerA11yAttr: {},
          popoverContainerA11yAttrs: {},
          popoverUlA11yAttrs: {}
        },
        dialog: {
          popupRole: "dialog",
          withArrowNavigation: false,
          withTabNavigation: true,
          withFocusTrap: true,
          triggerA11yAttr: {
            "aria-controls": this.opened ? this.randomId : null
          },
          popoverContainerA11yAttrs: {
            id: this.randomId,
            role: "dialog",
            // Dialog must have a label
            "aria-labelledby": this.triggerRandomId,
            "aria-modal": "true"
          },
          popoverUlA11yAttrs: {}
        },
        tooltip: {
          popupRole: void 0,
          withArrowNavigation: false,
          withTabNavigation: false,
          withFocusTrap: false,
          triggerA11yAttr: {},
          popoverContainerA11yAttrs: {},
          popoverUlA11yAttrs: {}
        },
        // Due to Vue limitations, we sometimes cannot determine the true type
        // As a fallback use both arrow navigation and focus trap
        unknown: {
          popupRole: void 0,
          role: void 0,
          withArrowNavigation: true,
          withTabNavigation: false,
          withFocusTrap: true,
          triggerA11yAttr: {},
          popoverContainerA11yAttrs: {},
          popoverUlA11yAttrs: {
            // there is nothing against labelling a list, it is mostly recommended
            // so as we do not know the dialog type lets include the label
            "aria-labelledby": this.triggerRandomId
          }
        }
      };
      return configs[this.actionsMenuSemanticType];
    }
  },
  watch: {
    // Watch parent prop
    open(state) {
      if (state === this.opened) {
        return;
      }
      this.opened = state;
    },
    opened() {
      if (this.opened) {
        document.body.addEventListener("keydown", this.handleEscapePressed);
      } else {
        document.body.removeEventListener("keydown", this.handleEscapePressed);
      }
    }
  },
  created() {
    useTrapStackControl(() => this.opened, {
      disabled: () => this.config.withFocusTrap
    });
  },
  methods: {
    /**
     * Get the name of the action component
     *
     * @param {import('vue').VNode} action - a vnode with a NcAction* component instance
     * @return {string} the name of the action component
     */
    getActionName(action) {
      return action?.componentOptions?.Ctor?.extendOptions?.name ?? action?.componentOptions?.tag;
    },
    /**
     * Do we have exactly one Action and
     * is it allowed as a standalone element?
     *
     * @param {import('vue').VNode} action The action to check
     * @return {boolean}
     */
    isValidSingleAction(action) {
      return ["NcActionButton", "NcActionLink", "NcActionRouter"].includes(this.getActionName(action));
    },
    /**
     * Check whether a icon prop value is an URL or not
     * @param {string} url The icon prop value
     */
    isIconUrl(url) {
      try {
        return !!new URL(url, url.startsWith("/") ? window.location.origin : void 0);
      } catch (error) {
        return false;
      }
    },
    // MENU STATE MANAGEMENT
    openMenu(e2) {
      if (this.opened) {
        return;
      }
      this.opened = true;
      this.$emit("update:open", true);
      this.$emit("open");
    },
    async closeMenu(returnFocus = true) {
      if (!this.opened) {
        return;
      }
      await this.$nextTick();
      this.opened = false;
      this.$refs.popover?.clearFocusTrap({ returnFocus });
      this.$emit("update:open", false);
      this.$emit("close");
      this.focusIndex = 0;
      if (returnFocus) {
        this.$refs.triggerButton?.$el.focus();
      }
    },
    onClosed() {
      this.$emit("closed");
    },
    /**
     * Called when popover is shown after the show delay
     */
    onOpened() {
      this.$nextTick(() => {
        this.focusFirstAction(null);
        this.resizePopover();
        this.$emit("opened");
      });
    },
    /**
     * Handle resizing the popover to make sure users can discover there is more to scroll
     */
    resizePopover() {
      const inner = this.$refs.menu.closest(".v-popper__inner");
      const height = this.$refs.menu.clientHeight;
      if (height > this.maxMenuHeight) {
        let currentHeight = 0;
        let actionHeight = 0;
        for (const action of this.$refs.menuList.children) {
          if (currentHeight + action.clientHeight / 2 > this.maxMenuHeight) {
            inner.style.height = `${currentHeight - actionHeight / 2}px`;
            break;
          }
          actionHeight = action.clientHeight;
          currentHeight += actionHeight;
        }
      } else {
        inner.style.height = "fit-content";
      }
    },
    // MENU KEYS & FOCUS MANAGEMENT
    /**
     * @return {HTMLElement|null}
     */
    getCurrentActiveMenuItemElement() {
      return this.$refs.menu.querySelector("li.active");
    },
    /**
     * @return {NodeListOf<HTMLElement>}
     */
    getFocusableMenuItemElements() {
      return this.$refs.menu.querySelectorAll(focusableSelector);
    },
    /**
     * Dispatches the keydown listener to different handlers
     *
     * @param {object} event The keydown event
     */
    onKeydown(event) {
      if (event.key === "Tab") {
        if (this.config.withFocusTrap) {
          return;
        }
        if (!this.config.withTabNavigation) {
          this.closeMenu(true);
          return;
        }
        event.preventDefault();
        const focusList = this.getFocusableMenuItemElements();
        const focusIndex = [...focusList].indexOf(document.activeElement);
        if (focusIndex === -1) {
          return;
        }
        const newFocusIndex = event.shiftKey ? focusIndex - 1 : focusIndex + 1;
        if (newFocusIndex < 0 || newFocusIndex === focusList.length) {
          this.closeMenu(true);
        }
        this.focusIndex = newFocusIndex;
        this.focusAction();
        return;
      }
      if (this.config.withArrowNavigation) {
        if (event.key === "ArrowUp") {
          this.focusPreviousAction(event);
        }
        if (event.key === "ArrowDown") {
          this.focusNextAction(event);
        }
        if (event.key === "PageUp") {
          this.focusFirstAction(event);
        }
        if (event.key === "PageDown") {
          this.focusLastAction(event);
        }
      }
      this.handleEscapePressed(event);
    },
    onTriggerKeydown(event) {
      if (event.key === "Escape") {
        if (this.actionsMenuSemanticType === "tooltip") {
          this.closeMenu();
        }
      }
    },
    handleEscapePressed(event) {
      if (event.key === "Escape") {
        this.closeMenu();
        event.preventDefault();
      }
    },
    removeCurrentActive() {
      const currentActiveElement = this.$refs.menu.querySelector("li.active");
      if (currentActiveElement) {
        currentActiveElement.classList.remove("active");
      }
    },
    focusAction() {
      const focusElement = this.getFocusableMenuItemElements()[this.focusIndex];
      if (focusElement) {
        this.removeCurrentActive();
        const liMenuParent = focusElement.closest("li.action");
        focusElement.focus();
        if (liMenuParent) {
          liMenuParent.classList.add("active");
        }
      }
    },
    focusPreviousAction(event) {
      if (this.opened) {
        if (this.focusIndex === 0) {
          this.focusLastAction(event);
        } else {
          this.preventIfEvent(event);
          this.focusIndex = this.focusIndex - 1;
        }
        this.focusAction();
      }
    },
    focusNextAction(event) {
      if (this.opened) {
        const indexLength = this.getFocusableMenuItemElements().length - 1;
        if (this.focusIndex === indexLength) {
          this.focusFirstAction(event);
        } else {
          this.preventIfEvent(event);
          this.focusIndex = this.focusIndex + 1;
        }
        this.focusAction();
      }
    },
    focusFirstAction(event) {
      if (this.opened) {
        this.preventIfEvent(event);
        const firstCheckedIndex = [...this.getFocusableMenuItemElements()].findIndex((button) => {
          return button.getAttribute("aria-checked") === "true" && button.getAttribute("role") === "menuitemradio";
        });
        this.focusIndex = firstCheckedIndex > -1 ? firstCheckedIndex : 0;
        this.focusAction();
      }
    },
    focusLastAction(event) {
      if (this.opened) {
        this.preventIfEvent(event);
        this.focusIndex = this.getFocusableMenuItemElements().length - 1;
        this.focusAction();
      }
    },
    preventIfEvent(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
      if (this.actionsMenuSemanticType === "tooltip") {
        if (this.$refs.menu && this.getFocusableMenuItemElements().length === 0) {
          this.closeMenu(false);
        }
      }
    },
    onClick(event) {
      this.$emit("click", event);
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object|undefined} The created VNode
   */
  render(h) {
    const actions = (this.$slots.default || []).filter((action) => this.getActionName(action));
    if (actions.length === 0) {
      return;
    }
    let validInlineActions = actions.filter(this.isValidSingleAction);
    if (this.forceMenu && validInlineActions.length > 0 && this.inline > 0) {
      Vue.util.warn("Specifying forceMenu will ignore any inline actions rendering.");
      validInlineActions = [];
    }
    const inlineActions = validInlineActions.slice(0, this.inline);
    const menuActions = actions.filter((action) => !inlineActions.includes(action));
    if (this.forceSemanticType) {
      this.actionsMenuSemanticType = this.forceSemanticType;
    } else {
      const textInputActions = ["NcActionInput", "NcActionTextEditable"];
      const menuItemsActions = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"];
      const linkActions = ["NcActionLink", "NcActionRouter"];
      const hasTextInputAction = menuActions.some((action) => textInputActions.includes(this.getActionName(action)));
      const hasMenuItemAction = menuActions.some((action) => menuItemsActions.includes(this.getActionName(action)));
      const hasLinkAction = menuActions.some((action) => linkActions.includes(this.getActionName(action)));
      if (hasTextInputAction) {
        this.actionsMenuSemanticType = "dialog";
      } else if (hasMenuItemAction) {
        this.actionsMenuSemanticType = "menu";
      } else if (hasLinkAction) {
        this.actionsMenuSemanticType = "expanded";
      } else {
        const ncActions = actions.filter((action) => this.getActionName(action).startsWith("NcAction"));
        if (ncActions.length === actions.length) {
          this.actionsMenuSemanticType = "tooltip";
        } else {
          this.actionsMenuSemanticType = "unknown";
        }
      }
    }
    const renderInlineAction = (action) => {
      const iconProp = action?.componentOptions?.propsData?.icon;
      const icon = action?.data?.scopedSlots?.icon()?.[0] ?? (this.isIconUrl(iconProp) ? h("img", { class: "action-item__menutoggle__icon", attrs: { src: iconProp, alt: "" } }) : h("span", { class: ["icon", iconProp] }));
      const attrs = action?.data?.attrs || {};
      const clickListener = action?.componentOptions?.listeners?.click;
      const text = action?.componentOptions?.children?.[0]?.text?.trim?.();
      const ariaLabel = action?.componentOptions?.propsData?.ariaLabel || text;
      const buttonText = this.forceName ? text : "";
      let title = action?.componentOptions?.propsData?.title;
      if (!(this.forceName || title)) {
        title = text;
      }
      const propsToForward = { ...action?.componentOptions?.propsData ?? {} };
      const nativeType = ["submit", "reset"].includes(propsToForward.type) ? propsToForward.modelValue : "button";
      delete propsToForward.modelValue;
      delete propsToForward.type;
      return h(
        "NcButton",
        {
          class: [
            "action-item action-item--single",
            action?.data?.staticClass,
            action?.data?.class
          ],
          attrs: {
            ...attrs,
            "aria-label": ariaLabel,
            title
          },
          ref: action?.data?.ref,
          props: {
            ...propsToForward,
            disabled: this.disabled || action?.componentOptions?.propsData?.disabled,
            pressed: action?.componentOptions?.propsData?.modelValue,
            type: nativeType,
            // If it has a menuName, we use a secondary button
            variant: (this.type ?? this.variant) || (buttonText ? "secondary" : "tertiary")
          },
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "update:pressed": action?.componentOptions?.listeners?.["update:modelValue"] ?? (() => {
            }),
            // If we have a click listener,
            // we bind it to execute on click and forward the click event
            ...!!clickListener && {
              click: (event) => {
                if (clickListener) {
                  clickListener(event);
                }
              }
            }
          }
        },
        [
          h("template", { slot: "icon" }, [icon]),
          buttonText
        ]
      );
    };
    const renderActionsPopover = (actions2) => {
      const triggerIcon = this.$slots.icon?.[0] || (this.defaultIcon ? h("span", { class: ["icon", this.defaultIcon] }) : h(DotsHorizontal, {
        props: {
          size: 20
        }
      }));
      return h(
        "NcPopover",
        {
          ref: "popover",
          props: {
            delay: 0,
            handleResize: true,
            shown: this.opened,
            placement: this.placement,
            boundary: this.boundariesElement,
            container: this.container,
            popoverBaseClass: "action-item__popper",
            popupRole: this.config.popupRole,
            setReturnFocus: this.config.withFocusTrap ? this.$refs.triggerButton?.$el : null,
            focusTrap: this.config.withFocusTrap
          },
          // For some reason the popover component
          // does not react to props given under the 'props' key,
          // so we use both 'attrs' and 'props'
          attrs: {
            delay: 0,
            handleResize: true,
            shown: this.opened,
            placement: this.placement,
            boundary: this.boundariesElement,
            container: this.container,
            ...this.manualOpen && { triggers: [] }
          },
          on: {
            show: this.openMenu,
            "after-show": this.onOpened,
            hide: this.closeMenu,
            "after-hide": this.onClosed
          }
        },
        [
          h("NcButton", {
            class: "action-item__menutoggle",
            props: {
              variant: this.triggerButtonVariant,
              disabled: this.disabled
            },
            slot: "trigger",
            ref: "triggerButton",
            attrs: {
              id: this.triggerRandomId,
              "aria-label": this.menuName ? null : this.ariaLabel,
              ...this.config.triggerA11yAttr
            },
            on: {
              focus: this.onFocus,
              blur: this.onBlur,
              click: this.onClick,
              keydown: this.onTriggerKeydown
            }
          }, [
            h("template", { slot: "icon" }, [triggerIcon]),
            this.menuName
          ]),
          h("div", {
            class: {
              open: this.opened
            },
            attrs: {
              tabindex: "-1",
              ...this.config.popoverContainerA11yAttrs
            },
            on: {
              keydown: this.onKeydown
            },
            ref: "menu"
          }, [
            h("ul", {
              attrs: {
                tabindex: "-1",
                ...this.config.popoverUlA11yAttrs
              },
              ref: "menuList"
            }, [
              actions2
            ])
          ])
        ]
      );
    };
    if (actions.length === 1 && validInlineActions.length === 1 && !this.forceMenu) {
      return renderInlineAction(actions[0]);
    }
    this.$nextTick(() => {
      if (this.opened && this.$refs.menu) {
        this.resizePopover();
        const isAnyActive = this.$refs.menu.querySelector("li.active") || [];
        if (isAnyActive.length === 0) {
          this.focusFirstAction();
        }
      }
    });
    if (inlineActions.length > 0 && this.inline > 0) {
      return h(
        "div",
        {
          class: [
            "action-items",
            `action-item--${this.triggerButtonVariant}`
          ]
        },
        [
          // Render inline actions
          ...inlineActions.map(renderInlineAction),
          // render the rest within the popover menu
          menuActions.length > 0 ? h(
            "div",
            {
              class: [
                "action-item",
                {
                  "action-item--open": this.opened
                }
              ]
            },
            [
              renderActionsPopover(menuActions)
            ]
          ) : null
        ]
      );
    }
    return h(
      "div",
      {
        class: [
          "action-item action-item--default-popover",
          `action-item--${this.triggerButtonVariant}`,
          {
            "action-item--open": this.opened
          }
        ]
      },
      [
        renderActionsPopover(actions)
      ]
    );
  }
};
const _sfc_render$m = null;
const _sfc_staticRenderFns$m = null;
var __component__$m = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$m,
  _sfc_render$m,
  _sfc_staticRenderFns$m,
  false,
  null,
  "d11b605b"
);
const NcActions = __component__$m.exports;
const ActionGlobalMixin = {
  beforeUpdate() {
    this.text = this.getText();
  },
  data() {
    return {
      // $slots are not reactive.
      // We need to update  the content manually
      text: this.getText()
    };
  },
  computed: {
    isLongText() {
      return this.text && this.text.trim().length > 20;
    }
  },
  methods: {
    getText() {
      return this.$slots.default ? this.$slots.default[0].text.trim() : "";
    }
  }
};
const GetParent = function(context, name) {
  let parent = context.$parent;
  while (parent) {
    if (parent.$options.name === name) {
      return parent;
    }
    parent = parent.$parent;
  }
};
const ActionTextMixin = {
  mixins: [ActionGlobalMixin],
  props: {
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Whether we close the Actions menu after the click
     */
    closeAfterClick: {
      type: Boolean,
      default: false
    },
    /**
     * Aria label for the button. Not needed if the button has text.
     */
    ariaLabel: {
      type: String,
      default: null
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "click"
  ],
  computed: {
    /**
     * Check if icon prop is an URL
     * @return {boolean} Whether the icon prop is an URL
     */
    isIconUrl() {
      try {
        return !!new URL(this.icon, this.icon.startsWith("/") ? window.location.origin : void 0);
      } catch (error) {
        return false;
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
      if (this.closeAfterClick) {
        const parent = GetParent(this, "NcActions");
        if (parent && parent.closeMenu) {
          parent.closeMenu(false);
        }
      }
    }
  }
};
const _sfc_main$l = {
  name: "NcActionLink",
  mixins: [ActionTextMixin],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  props: {
    /**
     * destionation to link to
     */
    href: {
      type: String,
      default: "#",
      required: true,
      validator: (value) => {
        try {
          return new URL(value);
        } catch (error) {
          return value.startsWith("#") || value.startsWith("/");
        }
      }
    },
    /**
     * download the link instead of opening
     */
    download: {
      type: String,
      default: null
    },
    /**
     * target to open the link
     */
    target: {
      type: String,
      default: "_self",
      validator: (value) => {
        return value && (!value.startsWith("_") || ["_blank", "_self", "_parent", "_top"].indexOf(value) > -1);
      }
    },
    /**
     * Declares a native tooltip when not null
     */
    title: {
      type: String,
      default: null
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    }
  }
};
var _sfc_render$l = function render6() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("a", { staticClass: "action-link focusable", attrs: { "download": _vm.download, "href": _vm.href, "aria-label": _vm.ariaLabel, "target": _vm.target, "title": _vm.title, "rel": "nofollow noreferrer noopener", "role": _vm.isInSemanticMenu && "menuitem" }, on: { "click": _vm.onClick } }, [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-link__icon", class: [_vm.isIconUrl ? "action-link__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } })];
  }), _vm.name ? _c("span", { staticClass: "action-link__longtext-wrapper" }, [_c("strong", { staticClass: "action-link__name" }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _c("br"), _c("span", { staticClass: "action-link__longtext", domProps: { "textContent": _vm._s(_vm.text) } })]) : _vm.isLongText ? _c("span", { staticClass: "action-link__longtext", domProps: { "textContent": _vm._s(_vm.text) } }) : _c("span", { staticClass: "action-link__text" }, [_vm._v(_vm._s(_vm.text))]), _vm._e()], 2)]);
};
var _sfc_staticRenderFns$l = [];
var __component__$l = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$l,
  _sfc_render$l,
  _sfc_staticRenderFns$l,
  false,
  null,
  "30c015f0"
);
const NcActionLink = __component__$l.exports;
const _sfc_main$k = {
  name: "NcActionRouter",
  mixins: [ActionTextMixin],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  props: {
    /**
     * router-link to prop [https://router.vuejs.org/api/#to](https://router.vuejs.org/api/#to)
     */
    to: {
      type: [String, Object],
      default: "",
      required: true
    },
    /**
     * router-link exact prop [https://router.vuejs.org/api/#exact](https://router.vuejs.org/api/#exact)
     */
    exact: {
      type: Boolean,
      default: false
    }
  }
};
var _sfc_render$k = function render7() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("RouterLink", { staticClass: "action-router focusable", attrs: { "to": _vm.to, "aria-label": _vm.ariaLabel, "exact": _vm.exact, "title": _vm.title, "rel": "nofollow noreferrer noopener", "role": _vm.isInSemanticMenu && "menuitem" }, nativeOn: { "click": function($event) {
    return _vm.onClick.apply(null, arguments);
  } } }, [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-router__icon", class: [_vm.isIconUrl ? "action-router__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } })];
  }), _vm.name ? _c("span", { staticClass: "action-router__longtext-wrapper" }, [_c("strong", { staticClass: "action-router__name" }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _c("br"), _c("span", { staticClass: "action-router__longtext", domProps: { "textContent": _vm._s(_vm.text) } })]) : _vm.isLongText ? _c("span", { staticClass: "action-router__longtext", domProps: { "textContent": _vm._s(_vm.text) } }) : _c("span", { staticClass: "action-router__text" }, [_vm._v(_vm._s(_vm.text))]), _vm._e()], 2)], 1);
};
var _sfc_staticRenderFns$k = [];
var __component__$k = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$k,
  _sfc_render$k,
  _sfc_staticRenderFns$k,
  false,
  null,
  "579c6b4d"
);
const NcActionRouter = __component__$k.exports;
const _sfc_main$j = {
  name: "NcActionText",
  mixins: [ActionTextMixin],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  }
};
var _sfc_render$j = function render8() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("span", { staticClass: "action-text", on: { "click": _vm.onClick } }, [_vm._t("icon", function() {
    return [_vm.icon !== "" ? _c("span", { staticClass: "action-text__icon", class: [_vm.isIconUrl ? "action-text__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } }) : _vm._e()];
  }), _vm.name ? _c("span", { staticClass: "action-text__longtext-wrapper" }, [_c("strong", { staticClass: "action-text__name" }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _c("br"), _c("span", { staticClass: "action-text__longtext", domProps: { "textContent": _vm._s(_vm.text) } })]) : _vm.isLongText ? _c("span", { staticClass: "action-text__longtext", domProps: { "textContent": _vm._s(_vm.text) } }) : _c("span", { staticClass: "action-text__text" }, [_vm._v(_vm._s(_vm.text))]), _vm._e()], 2)]);
};
var _sfc_staticRenderFns$j = [];
var __component__$j = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$j,
  _sfc_render$j,
  _sfc_staticRenderFns$j,
  false,
  null,
  "824615f4"
);
const NcActionText = __component__$j.exports;
const _sfc_main$i = {
  name: "ChevronRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$i = function render9() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon chevron-right-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$i = [];
var __component__$i = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$i,
  _sfc_render$i,
  _sfc_staticRenderFns$i,
  false,
  null,
  null
);
const ChevronRight = __component__$i.exports;
const isRtl = isRTL$1();
const _sfc_main$1$3 = {
  name: "ChevronLeftIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1$3 = function render10() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon chevron-left-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1$3 = [];
var __component__$1$3 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$1$3,
  _sfc_render$1$3,
  _sfc_staticRenderFns$1$3,
  false,
  null,
  null
);
const ChevronLeftIcon = __component__$1$3.exports;
const _sfc_main$h = {
  name: "NcActionButton",
  components: {
    CheckIcon: Check,
    ChevronRightIcon: ChevronRight,
    ChevronLeftIcon
  },
  mixins: [ActionTextMixin],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  props: {
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    },
    /**
     * disabled state of the action button
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * If this is a menu, a chevron icon will
     * be added at the end of the line
     */
    isMenu: {
      type: Boolean,
      default: false
    },
    /**
     * The button's behavior, by default the button acts like a normal button with optional toggle button behavior if `modelValue` is `true` or `false`.
     * But you can also set to checkbox button behavior with tri-state or radio button like behavior.
     * This extends the native HTML button type attribute.
     */
    type: {
      type: String,
      default: "button",
      validator: (behavior) => ["button", "checkbox", "radio", "reset", "submit"].includes(behavior)
    },
    /**
     * The buttons state if `type` is 'checkbox' or 'radio' (meaning if it is pressed / selected).
     * For checkbox and toggle button behavior - boolean value.
     * For radio button behavior - could be a boolean checked or a string with the value of the button.
     * Note: Unlike native radio buttons, NcActionButton are not grouped by name, so you need to connect them by bind correct modelValue.
     *
     *  **This is not availabe for `type='submit'` or `type='reset'`**
     *
     * If using `type='checkbox'` a `model-value` of `true` means checked, `false` means unchecked and `null` means indeterminate (tri-state)
     * For `type='radio'` `null` is equal to `false`
     */
    modelValue: {
      type: [Boolean, String],
      default: null
    },
    /**
     * The value used for the `modelValue` when this component is used with radio behavior
     * Similar to the `value` attribute of `<input type="radio">`
     */
    value: {
      type: String,
      default: null
    }
  },
  setup() {
    return {
      isRtl
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * The current "checked" or "pressed" state for the model behavior
     */
    isChecked() {
      if (this.type === "radio" && typeof this.modelValue !== "boolean") {
        return this.modelValue === this.value;
      }
      return this.modelValue;
    },
    /**
     * The native HTML type to set on the button
     */
    nativeType() {
      if (this.type === "submit" || this.type === "reset") {
        return this.type;
      }
      return "button";
    },
    /**
     * HTML attributes to bind to the <button>
     */
    buttonAttributes() {
      const attributes = {};
      if (this.isInSemanticMenu) {
        attributes.role = "menuitem";
        if (this.type === "radio") {
          attributes.role = "menuitemradio";
          attributes["aria-checked"] = this.isChecked ? "true" : "false";
        } else if (this.type === "checkbox" || this.nativeType === "button" && this.modelValue !== null) {
          attributes.role = "menuitemcheckbox";
          attributes["aria-checked"] = this.modelValue === null ? "mixed" : this.modelValue ? "true" : "false";
        }
      } else if (this.modelValue !== null && this.nativeType === "button") {
        attributes["aria-pressed"] = this.modelValue ? "true" : "false";
      }
      return attributes;
    }
  },
  methods: {
    /**
     * Forward click event, let mixin handle the close-after-click and emit new modelValue if needed
     * @param {MouseEvent} event The click event
     */
    handleClick(event) {
      this.onClick(event);
      if (this.modelValue !== null || this.type !== "button") {
        if (this.type === "radio") {
          if (typeof this.modelValue !== "boolean") {
            if (!this.isChecked) {
              this.$emit("update:modelValue", this.value);
            }
          } else {
            this.$emit("update:modelValue", !this.isChecked);
          }
        } else {
          this.$emit("update:modelValue", !this.isChecked);
        }
      }
    }
  }
};
var _sfc_render$h = function render22() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled }, attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("button", _vm._b({ class: ["action-button button-vue", {
    "action-button--active": _vm.isChecked,
    focusable: _vm.isFocusable
  }], attrs: { "aria-label": _vm.ariaLabel, "disabled": _vm.disabled, "title": _vm.title, "type": _vm.nativeType }, on: { "click": _vm.handleClick } }, "button", _vm.buttonAttributes, false), [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-button__icon", class: [_vm.isIconUrl ? "action-button__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } })];
  }), _vm.name ? _c("span", { staticClass: "action-button__longtext-wrapper" }, [_c("strong", { staticClass: "action-button__name" }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _c("br"), _c("span", { staticClass: "action-button__longtext", domProps: { "textContent": _vm._s(_vm.text) } })]) : _vm.isLongText ? _c("span", { staticClass: "action-button__longtext", domProps: { "textContent": _vm._s(_vm.text) } }) : _c("span", { staticClass: "action-button__text" }, [_vm._v(_vm._s(_vm.text))]), _vm.isMenu && !_vm.isRtl ? _c("ChevronRightIcon", { staticClass: "action-button__menu-icon", attrs: { "size": 20 } }) : _vm.isMenu && _vm.isRtl ? _c("ChevronLeftIcon", { staticClass: "action-button__menu-icon", attrs: { "size": 20 } }) : _vm.isChecked === true ? _c("CheckIcon", { staticClass: "action-button__pressed-icon", attrs: { "size": 20 } }) : _vm.isChecked === false ? _c("span", { staticClass: "action-button__pressed-icon material-design-icon" }) : _vm._e(), _vm._e()], 2)]);
};
var _sfc_staticRenderFns$h = [];
var __component__$h = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$h,
  _sfc_render$h,
  _sfc_staticRenderFns$h,
  false,
  null,
  "92dc5a52"
);
const NcActionButton = __component__$h.exports;
const __default__$1 = {
  name: "NcIconSvgWrapper",
  props: {
    /**
     * Make the icon directional, meaning it is langauge direction aware.
     * If the icon is placed in a right-to-left context it will be mirrored vertically.
     */
    directional: {
      type: Boolean,
      default: false
    },
    /**
     * Set if the icon should be used as inline content e.g. within text.
     * By default the icon is made a block element for use inside `icon`-slots.
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * Raw SVG string to render
     */
    svg: {
      type: String,
      default: ""
    },
    /**
     * Label of the icon, used in aria-label
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Raw SVG path to render. Takes precedence over the SVG string in the `svg` prop.
     */
    path: {
      type: String,
      default: ""
    },
    /**
     * Size of the icon to show. Only use if not using within an icon slot.
     * Defaults to 20px which is the Nextcloud icon size for all icon slots.
     * @default 20
     */
    size: {
      type: [Number, String],
      default: 20,
      validator: (value) => typeof value === "number" || value === "auto"
    }
  },
  computed: {
    /**
     * Icon size used in CSS
     */
    iconSize() {
      return typeof this.size === "number" ? `${this.size}px` : this.size;
    },
    cleanSvg() {
      if (!this.svg || this.path) {
        return;
      }
      const svg = purify.sanitize(this.svg);
      const svgDocument = new DOMParser().parseFromString(svg, "image/svg+xml");
      if (svgDocument.querySelector("parsererror")) {
        Vue.util.warn("SVG is not valid");
        return "";
      }
      if (svgDocument.documentElement.id) {
        svgDocument.documentElement.removeAttribute("id");
      }
      return svgDocument.documentElement.outerHTML;
    }
  }
};
const __injectCSSVars__$1 = () => {
  useCssVars((_vm, _setup) => ({
    "adec40c8": _vm.iconSize
  }));
};
const __setup__$1 = __default__$1.setup;
__default__$1.setup = __setup__$1 ? (props, ctx) => {
  __injectCSSVars__$1();
  return __setup__$1(props, ctx);
} : __injectCSSVars__$1;
const _sfc_main$g = __default__$1;
var _sfc_render$g = function render11() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "icon-vue", class: {
    "icon-vue--directional": _vm.directional,
    "icon-vue--inline": _vm.inline
  }, attrs: { "aria-hidden": _vm.name ? void 0 : "true", "aria-label": _vm.name || void 0, "role": "img" } }, [!_vm.cleanSvg ? _c("svg", { attrs: { "viewBox": "0 0 24 24", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": _vm.path } })]) : _c("span", { domProps: { "innerHTML": _vm._s(_vm.cleanSvg) } })]);
};
var _sfc_staticRenderFns$g = [];
var __component__$g = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$g,
  _sfc_render$g,
  _sfc_staticRenderFns$g,
  false,
  null,
  "a4f5b92e"
);
const NcIconSvgWrapper = __component__$g.exports;
const _sfc_main$f = {
  name: "NcLoadingIcon",
  props: {
    /**
     * Specify the size of the loading icon.
     */
    size: {
      type: Number,
      default: 20
    },
    /**
     * The appearance of the loading icon.
     * 'auto' adjusts to the Nextcloud color scheme,
     * 'light' and 'dark' are static.
     */
    appearance: {
      type: String,
      validator(value) {
        return ["auto", "light", "dark"].includes(value);
      },
      default: "auto"
    },
    /**
     * Specify what is loading.
     */
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    colors() {
      const colors = ["#777", "#CCC"];
      if (this.appearance === "light") {
        return colors;
      } else if (this.appearance === "dark") {
        return colors.reverse();
      }
      return ["var(--color-loading-light)", "var(--color-loading-dark)"];
    }
  }
};
var _sfc_render$f = function render12() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "material-design-icon loading-icon", attrs: { "aria-label": _vm.name, "role": "img" } }, [_c("svg", { attrs: { "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "fill": _vm.colors[0], "d": "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z" } }), _c("path", { attrs: { "fill": _vm.colors[1], "d": "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z" } }, [_vm.name ? _c("title", [_vm._v(_vm._s(_vm.name))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$f = [];
var __component__$f = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$f,
  _sfc_render$f,
  _sfc_staticRenderFns$f,
  false,
  null,
  "551209a3"
);
const NcLoadingIcon = __component__$f.exports;
function e() {
  try {
    return loadState("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
const onlineSvg = '<!--\n  - SPDX-FileCopyrightText: 2020 Google Inc.\n  - SPDX-License-Identifier: Apache-2.0\n-->\n<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n	<path fill="var(--color-success)" d="M4.8 11.2h6.4V4.8H4.8v6.4zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />\n</svg>\n';
const awaySvg = '<!--\n  - SPDX-FileCopyrightText: 2020 Google Inc.\n  - SPDX-License-Identifier: Apache-2.0\n-->\n<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n	<path fill="none" d="M-4-4h24v24H-4z" />\n	<path fill="var(--color-warning)" d="M6.9.1C3 .6-.1 4-.1 8c0 4.4 3.6 8 8 8 4 0 7.4-3 8-6.9-1.2 1.3-2.9 2.1-4.7 2.1-3.5 0-6.4-2.9-6.4-6.4 0-1.9.8-3.6 2.1-4.7z" />\n</svg>\n';
const dndSvg = '<!--\n  - SPDX-FileCopyrightText: 2020 Google Inc.\n  - SPDX-License-Identifier: Apache-2.0\n-->\n<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n	<path fill="none" d="M-4-4h24v24H-4V-4z" />\n	<path fill="var(--color-error)" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />\n	<path fill="#fdffff" d="M5 6.5h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5S4.2 6.5 5 6.5z" />\n</svg>\n';
const invisibleSvg = '<!--\n  - SPDX-FileCopyrightText: 2020 Google Inc.\n  - SPDX-License-Identifier: Apache-2.0\n-->\n<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n	<path fill="none" d="M-4-4h24v24H-4V-4z" />\n	<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3.2c2.7 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8S3.2 10.7 3.2 8 5.3 3.2 8 3.2z" />\n</svg>\n';
register(t10);
const getUserStatusText = (status) => {
  switch (status) {
    case "away":
      return t$1("away");
    // TRANSLATORS: User status if the user is currently away from keyboard
    case "busy":
      return t$1("busy");
    case "dnd":
      return t$1("do not disturb");
    case "online":
      return t$1("online");
    case "invisible":
      return t$1("invisible");
    case "offline":
      return t$1("offline");
    default:
      return status;
  }
};
register(t50);
const _sfc_main$e = {
  name: "NcUserStatusIcon",
  props: {
    /**
     * Set the user id to fetch the status
     */
    user: {
      type: String,
      default: null
    },
    /**
     * Set the status
     *
     * @type {'online' | 'away' | 'busy' | 'dnd' | 'invisible' | 'offline'}
     */
    status: {
      type: String,
      default: null,
      validator: (value) => [
        "online",
        "away",
        "busy",
        "dnd",
        "invisible",
        "offline"
      ].includes(value)
    },
    /**
     * Set the `aria-hidden` attribute
     *
     * @type {'true' | 'false'}
     */
    ariaHidden: {
      type: String,
      default: null,
      validator: (value) => [
        "true",
        "false"
      ].includes(value)
    }
  },
  data() {
    return {
      fetchedUserStatus: null
    };
  },
  computed: {
    activeStatus() {
      return this.status ?? this.fetchedUserStatus;
    },
    activeSvg() {
      const matchSvg = {
        online: onlineSvg,
        away: awaySvg,
        busy: awaySvg,
        dnd: dndSvg,
        invisible: invisibleSvg,
        offline: invisibleSvg
      };
      return matchSvg[this.activeStatus] ?? null;
    },
    ariaLabel() {
      if (this.ariaHidden === "true") {
        return null;
      }
      return t$1("User status: {status}", { status: getUserStatusText(this.activeStatus) });
    }
  },
  watch: {
    user: {
      immediate: true,
      async handler(user, _oldUser) {
        if (!user || !e()?.user_status?.enabled) {
          this.fetchedUserStatus = null;
          return;
        }
        try {
          const { data } = await cancelableClient.get(v("/apps/user_status/api/v1/statuses/{user}", { user }));
          this.fetchedUserStatus = data.ocs?.data?.status;
        } catch (error) {
          this.fetchedUserStatus = null;
        }
      }
    }
  }
};
var _sfc_render$e = function render13() {
  var _vm = this, _c = _vm._self._c;
  return _vm.activeStatus ? _c("span", { staticClass: "user-status-icon", class: {
    "user-status-icon--invisible": ["invisible", "offline"].includes(_vm.status)
  }, attrs: { "role": "img", "aria-hidden": _vm.ariaHidden, "aria-label": _vm.ariaLabel }, domProps: { "innerHTML": _vm._s(_vm.activeSvg) } }) : _vm._e();
};
var _sfc_staticRenderFns$e = [];
var __component__$e = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$e,
  _sfc_render$e,
  _sfc_staticRenderFns$e,
  false,
  null,
  "0555d8d0"
);
const NcUserStatusIcon = __component__$e.exports;
register(t3);
class Color {
  /**
   * @param {number} r The red value
   * @param {number} g The green value
   * @param {number} b The blue value
   * @param {string} [name] The name of the color
   */
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    if (name) {
      this.name = name;
    }
  }
  get color() {
    const toHex = (num) => `00${num.toString(16)}`.slice(-2);
    return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
  }
}
function stepCalc(steps, ends) {
  const step = new Array(3);
  step[0] = (ends[1].r - ends[0].r) / steps;
  step[1] = (ends[1].g - ends[0].g) / steps;
  step[2] = (ends[1].b - ends[0].b) / steps;
  return step;
}
function mixPalette(steps, color1, color2) {
  const palette = [];
  palette.push(color1);
  const step = stepCalc(steps, [color1, color2]);
  for (let i = 1; i < steps; i++) {
    const r = Math.floor(color1.r + step[0] * i);
    const g = Math.floor(color1.g + step[1] * i);
    const b = Math.floor(color1.b + step[2] * i);
    palette.push(new Color(r, g, b));
  }
  return palette;
}
[
  new Color(182, 70, 157, t$1("Purple")),
  new Color(
    191,
    103,
    139,
    t$1("Rosy brown")
    // TRANSLATORS: A color name for RGB(191, 103, 139)
  ),
  new Color(
    201,
    136,
    121,
    t$1("Feldspar")
    // TRANSLATORS: A color name for RGB(201, 136, 121)
  ),
  new Color(
    211,
    169,
    103,
    t$1("Whiskey")
    // TRANSLATORS: A color name for RGB(211, 169, 103)
  ),
  new Color(
    221,
    203,
    85,
    t$1("Gold")
  ),
  new Color(
    165,
    184,
    114,
    t$1("Olivine")
    // TRANSLATORS: A color name for RGB(165, 184, 114)
  ),
  new Color(
    110,
    166,
    143,
    t$1("Acapulco")
    // TRANSLATORS: A color name for RGB(110, 166, 143)
  ),
  new Color(
    55,
    148,
    172,
    t$1("Boston Blue")
    // TRANSLATORS: A color name for RGB(55, 148, 172)
  ),
  new Color(
    0,
    130,
    201,
    t$1("Nextcloud blue")
  ),
  new Color(
    45,
    115,
    190,
    t$1("Mariner")
    // TRANSLATORS: A color name for RGB(45, 115, 190)
  ),
  new Color(
    91,
    100,
    179,
    t$1("Blue Violet")
    // TRANSLATORS: A color name for RGB(91, 100, 179)
  ),
  new Color(
    136,
    85,
    168,
    t$1("Deluge")
    // TRANSLATORS: A color name for RGB(136, 85, 168)
  )
];
function GenColors(steps) {
  const red = new Color(182, 70, 157, t$1("Purple"));
  const yellow = new Color(221, 203, 85, t$1("Gold"));
  const blue = new Color(0, 130, 201, t$1("Nextcloud blue"));
  const palette1 = mixPalette(steps, red, yellow);
  const palette2 = mixPalette(steps, yellow, blue);
  const palette3 = mixPalette(steps, blue, red);
  return palette1.concat(palette2).concat(palette3);
}
var md5$1 = { exports: {} };
var crypt = { exports: {} };
var hasRequiredCrypt;
function requireCrypt() {
  if (hasRequiredCrypt) return crypt.exports;
  hasRequiredCrypt = 1;
  (function() {
    var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt$1 = {
      // Bit-wise rotation left
      rotl: function(n2, b) {
        return n2 << b | n2 >>> 32 - b;
      },
      // Bit-wise rotation right
      rotr: function(n2, b) {
        return n2 << 32 - b | n2 >>> b;
      },
      // Swap big-endian to little-endian and vice versa
      endian: function(n2) {
        if (n2.constructor == Number) {
          return crypt$1.rotl(n2, 8) & 16711935 | crypt$1.rotl(n2, 24) & 4278255360;
        }
        for (var i = 0; i < n2.length; i++)
          n2[i] = crypt$1.endian(n2[i]);
        return n2;
      },
      // Generate an array of any length of random bytes
      randomBytes: function(n2) {
        for (var bytes = []; n2 > 0; n2--)
          bytes.push(Math.floor(Math.random() * 256));
        return bytes;
      },
      // Convert a byte array to big-endian 32-bit words
      bytesToWords: function(bytes) {
        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
          words[b >>> 5] |= bytes[i] << 24 - b % 32;
        return words;
      },
      // Convert big-endian 32-bit words to a byte array
      wordsToBytes: function(words) {
        for (var bytes = [], b = 0; b < words.length * 32; b += 8)
          bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
        return bytes;
      },
      // Convert a byte array to a hex string
      bytesToHex: function(bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 15).toString(16));
        }
        return hex.join("");
      },
      // Convert a hex string to a byte array
      hexToBytes: function(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2)
          bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
      },
      // Convert a byte array to a base-64 string
      bytesToBase64: function(bytes) {
        for (var base64 = [], i = 0; i < bytes.length; i += 3) {
          var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
          for (var j = 0; j < 4; j++)
            if (i * 8 + j * 6 <= bytes.length * 8)
              base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
            else
              base64.push("=");
        }
        return base64.join("");
      },
      // Convert a base-64 string to a byte array
      base64ToBytes: function(base64) {
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
        for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
          if (imod4 == 0) continue;
          bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
        }
        return bytes;
      }
    };
    crypt.exports = crypt$1;
  })();
  return crypt.exports;
}
var charenc_1;
var hasRequiredCharenc;
function requireCharenc() {
  if (hasRequiredCharenc) return charenc_1;
  hasRequiredCharenc = 1;
  var charenc = {
    // UTF-8 encoding
    utf8: {
      // Convert a string to a byte array
      stringToBytes: function(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      // Convert a byte array to a string
      bytesToString: function(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    // Binary encoding
    bin: {
      // Convert a string to a byte array
      stringToBytes: function(str) {
        for (var bytes = [], i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return bytes;
      },
      // Convert a byte array to a string
      bytesToString: function(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++)
          str.push(String.fromCharCode(bytes[i]));
        return str.join("");
      }
    }
  };
  charenc_1 = charenc;
  return charenc_1;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer_1;
var hasRequiredIsBuffer;
function requireIsBuffer() {
  if (hasRequiredIsBuffer) return isBuffer_1;
  hasRequiredIsBuffer = 1;
  isBuffer_1 = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
  };
  function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
  }
  return isBuffer_1;
}
var hasRequiredMd5;
function requireMd5() {
  if (hasRequiredMd5) return md5$1.exports;
  hasRequiredMd5 = 1;
  (function() {
    var crypt2 = requireCrypt(), utf8 = requireCharenc().utf8, isBuffer = requireIsBuffer(), bin = requireCharenc().bin, md52 = function(message, options) {
      if (message.constructor == String)
        if (options && options.encoding === "binary")
          message = bin.stringToBytes(message);
        else
          message = utf8.stringToBytes(message);
      else if (isBuffer(message))
        message = Array.prototype.slice.call(message, 0);
      else if (!Array.isArray(message) && message.constructor !== Uint8Array)
        message = message.toString();
      var m = crypt2.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
      for (var i = 0; i < m.length; i++) {
        m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
      }
      m[l >>> 5] |= 128 << l % 32;
      m[(l + 64 >>> 9 << 4) + 14] = l;
      var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
      for (var i = 0; i < m.length; i += 16) {
        var aa = a, bb = b, cc = c, dd = d;
        a = FF(a, b, c, d, m[i + 0], 7, -680876936);
        d = FF(d, a, b, c, m[i + 1], 12, -389564586);
        c = FF(c, d, a, b, m[i + 2], 17, 606105819);
        b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
        a = FF(a, b, c, d, m[i + 4], 7, -176418897);
        d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
        c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
        b = FF(b, c, d, a, m[i + 7], 22, -45705983);
        a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
        d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
        c = FF(c, d, a, b, m[i + 10], 17, -42063);
        b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
        a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
        d = FF(d, a, b, c, m[i + 13], 12, -40341101);
        c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
        b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
        a = GG(a, b, c, d, m[i + 1], 5, -165796510);
        d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
        c = GG(c, d, a, b, m[i + 11], 14, 643717713);
        b = GG(b, c, d, a, m[i + 0], 20, -373897302);
        a = GG(a, b, c, d, m[i + 5], 5, -701558691);
        d = GG(d, a, b, c, m[i + 10], 9, 38016083);
        c = GG(c, d, a, b, m[i + 15], 14, -660478335);
        b = GG(b, c, d, a, m[i + 4], 20, -405537848);
        a = GG(a, b, c, d, m[i + 9], 5, 568446438);
        d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
        c = GG(c, d, a, b, m[i + 3], 14, -187363961);
        b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
        a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
        d = GG(d, a, b, c, m[i + 2], 9, -51403784);
        c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
        b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
        a = HH(a, b, c, d, m[i + 5], 4, -378558);
        d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
        c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
        b = HH(b, c, d, a, m[i + 14], 23, -35309556);
        a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
        d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
        c = HH(c, d, a, b, m[i + 7], 16, -155497632);
        b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
        a = HH(a, b, c, d, m[i + 13], 4, 681279174);
        d = HH(d, a, b, c, m[i + 0], 11, -358537222);
        c = HH(c, d, a, b, m[i + 3], 16, -722521979);
        b = HH(b, c, d, a, m[i + 6], 23, 76029189);
        a = HH(a, b, c, d, m[i + 9], 4, -640364487);
        d = HH(d, a, b, c, m[i + 12], 11, -421815835);
        c = HH(c, d, a, b, m[i + 15], 16, 530742520);
        b = HH(b, c, d, a, m[i + 2], 23, -995338651);
        a = II(a, b, c, d, m[i + 0], 6, -198630844);
        d = II(d, a, b, c, m[i + 7], 10, 1126891415);
        c = II(c, d, a, b, m[i + 14], 15, -1416354905);
        b = II(b, c, d, a, m[i + 5], 21, -57434055);
        a = II(a, b, c, d, m[i + 12], 6, 1700485571);
        d = II(d, a, b, c, m[i + 3], 10, -1894986606);
        c = II(c, d, a, b, m[i + 10], 15, -1051523);
        b = II(b, c, d, a, m[i + 1], 21, -2054922799);
        a = II(a, b, c, d, m[i + 8], 6, 1873313359);
        d = II(d, a, b, c, m[i + 15], 10, -30611744);
        c = II(c, d, a, b, m[i + 6], 15, -1560198380);
        b = II(b, c, d, a, m[i + 13], 21, 1309151649);
        a = II(a, b, c, d, m[i + 4], 6, -145523070);
        d = II(d, a, b, c, m[i + 11], 10, -1120210379);
        c = II(c, d, a, b, m[i + 2], 15, 718787259);
        b = II(b, c, d, a, m[i + 9], 21, -343485551);
        a = a + aa >>> 0;
        b = b + bb >>> 0;
        c = c + cc >>> 0;
        d = d + dd >>> 0;
      }
      return crypt2.endian([a, b, c, d]);
    };
    md52._ff = function(a, b, c, d, x, s, t2) {
      var n2 = a + (b & c | ~b & d) + (x >>> 0) + t2;
      return (n2 << s | n2 >>> 32 - s) + b;
    };
    md52._gg = function(a, b, c, d, x, s, t2) {
      var n2 = a + (b & d | c & ~d) + (x >>> 0) + t2;
      return (n2 << s | n2 >>> 32 - s) + b;
    };
    md52._hh = function(a, b, c, d, x, s, t2) {
      var n2 = a + (b ^ c ^ d) + (x >>> 0) + t2;
      return (n2 << s | n2 >>> 32 - s) + b;
    };
    md52._ii = function(a, b, c, d, x, s, t2) {
      var n2 = a + (c ^ (b | ~d)) + (x >>> 0) + t2;
      return (n2 << s | n2 >>> 32 - s) + b;
    };
    md52._blocksize = 16;
    md52._digestsize = 16;
    md5$1.exports = function(message, options) {
      if (message === void 0 || message === null)
        throw new Error("Illegal argument " + message);
      var digestbytes = crypt2.wordsToBytes(md52(message, options));
      return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt2.bytesToHex(digestbytes);
    };
  })();
  return md5$1.exports;
}
var md5Exports = requireMd5();
const md5 = /* @__PURE__ */ getDefaultExportFromCjs(md5Exports);
const usernameToColor = function(username) {
  let hash2 = username.toLowerCase();
  if (hash2.match(/^([0-9a-f]{4}-?){8}$/) === null) {
    hash2 = md5(hash2);
  }
  hash2 = hash2.replace(/[^0-9a-f]/g, "");
  const steps = 6;
  const finalPalette = GenColors(steps);
  function hashToInt(hash22, maximum) {
    let finalInt = 0;
    const result = [];
    for (let i = 0; i < hash22.length; i++) {
      result.push(parseInt(hash22.charAt(i), 16) % 16);
    }
    for (const j in result) {
      finalInt += result[j];
    }
    return parseInt(parseInt(finalInt, 10) % maximum, 10);
  }
  return finalPalette[hashToInt(hash2, steps * 3)];
};
const getAvatarUrl = (user, size2, isGuest) => {
  const darkTheme = window.getComputedStyle(document.body).getPropertyValue("--background-invert-if-dark") === "invert(100%)";
  return _("/avatar" + (isGuest ? "/guest" : "") + "/{user}/{size}" + (darkTheme ? "/dark" : ""), {
    user,
    size: size2
  });
};
function getEnabledContactsMenuActions(entry) {
  if (!window._nc_contacts_menu_hooks) {
    return [];
  }
  return Object.values(window._nc_contacts_menu_hooks).filter((action) => action.enabled(entry));
}
const getRoute = (router, url) => {
  const removePrefix = (str, prefix) => str.startsWith(prefix) ? str.slice(prefix.length) : str;
  const removePrefixes = (str, ...prefixes) => prefixes.reduce((acc, prefix) => removePrefix(acc, prefix), str);
  if (!router) {
    return null;
  }
  const isAbsoluteURL = /^https?:\/\//.test(url);
  const isNonHttpLink = /^[a-z][a-z0-9+.-]*:.+/.test(url);
  if (!isAbsoluteURL && isNonHttpLink) {
    return null;
  }
  if (isAbsoluteURL && !url.startsWith(w())) {
    return null;
  }
  if (!isAbsoluteURL && !url.startsWith("/")) {
    return null;
  }
  const relativeUrl = isAbsoluteURL ? removePrefixes(url, w(), "/index.php") : url;
  const relativeRouterBase = removePrefixes(router.history.base, f(), "/index.php");
  const potentialRouterPath = removePrefixes(relativeUrl, relativeRouterBase) || "/";
  const route = router.resolve(potentialRouterPath).route;
  if (!route.matched.length) {
    return null;
  }
  return route.fullPath;
};
const checkIfIsFullscreen = () => window.outerHeight === screen.height;
const isFullscreen = ref$1(checkIfIsFullscreen());
window.addEventListener("resize", () => {
  isFullscreen.value = checkIfIsFullscreen();
});
readonly(isFullscreen);
const MOBILE_BREAKPOINT = 1024;
const MOBILE_SMALL_BREAKPOINT = MOBILE_BREAKPOINT / 2;
const isLessThanBreakpoint = (breakpoint) => document.documentElement.clientWidth < breakpoint;
const isMobile = ref$1(isLessThanBreakpoint(MOBILE_BREAKPOINT));
const isSmallMobile = ref$1(isLessThanBreakpoint(MOBILE_SMALL_BREAKPOINT));
window.addEventListener("resize", () => {
  isMobile.value = isLessThanBreakpoint(MOBILE_BREAKPOINT);
  isSmallMobile.value = isLessThanBreakpoint(MOBILE_SMALL_BREAKPOINT);
}, { passive: true });
readonly(isMobile);
var striptags$1 = { exports: {} };
var striptags = striptags$1.exports;
var hasRequiredStriptags;
function requireStriptags() {
  if (hasRequiredStriptags) return striptags$1.exports;
  hasRequiredStriptags = 1;
  (function(module) {
    (function(global2) {
      if (typeof Symbol2 !== "function") {
        var Symbol2 = function(name) {
          return name;
        };
        Symbol2.nonNative = true;
      }
      const STATE_PLAINTEXT = Symbol2("plaintext");
      const STATE_HTML = Symbol2("html");
      const STATE_COMMENT = Symbol2("comment");
      const ALLOWED_TAGS_REGEX = /<(\w*)>/g;
      const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
      function striptags2(html, allowable_tags, tag_replacement) {
        html = html || "";
        allowable_tags = allowable_tags || [];
        tag_replacement = tag_replacement || "";
        let context = init_context(allowable_tags, tag_replacement);
        return striptags_internal(html, context);
      }
      function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags = allowable_tags || [];
        tag_replacement = tag_replacement || "";
        let context = init_context(allowable_tags, tag_replacement);
        return function striptags_stream(html) {
          return striptags_internal(html || "", context);
        };
      }
      striptags2.init_streaming_mode = init_striptags_stream;
      function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);
        return {
          allowable_tags,
          tag_replacement,
          state: STATE_PLAINTEXT,
          tag_buffer: "",
          depth: 0,
          in_quote_char: ""
        };
      }
      function striptags_internal(html, context) {
        if (typeof html != "string") {
          throw new TypeError("'html' parameter must be a string");
        }
        let allowable_tags = context.allowable_tags;
        let tag_replacement = context.tag_replacement;
        let state = context.state;
        let tag_buffer = context.tag_buffer;
        let depth = context.depth;
        let in_quote_char = context.in_quote_char;
        let output = "";
        for (let idx = 0, length = html.length; idx < length; idx++) {
          let char = html[idx];
          if (state === STATE_PLAINTEXT) {
            switch (char) {
              case "<":
                state = STATE_HTML;
                tag_buffer += char;
                break;
              default:
                output += char;
                break;
            }
          } else if (state === STATE_HTML) {
            switch (char) {
              case "<":
                if (in_quote_char) {
                  break;
                }
                depth++;
                break;
              case ">":
                if (in_quote_char) {
                  break;
                }
                if (depth) {
                  depth--;
                  break;
                }
                in_quote_char = "";
                state = STATE_PLAINTEXT;
                tag_buffer += ">";
                if (allowable_tags.has(normalize_tag(tag_buffer))) {
                  output += tag_buffer;
                } else {
                  output += tag_replacement;
                }
                tag_buffer = "";
                break;
              case '"':
              case "'":
                if (char === in_quote_char) {
                  in_quote_char = "";
                } else {
                  in_quote_char = in_quote_char || char;
                }
                tag_buffer += char;
                break;
              case "-":
                if (tag_buffer === "<!-") {
                  state = STATE_COMMENT;
                }
                tag_buffer += char;
                break;
              case " ":
              case "\n":
                if (tag_buffer === "<") {
                  state = STATE_PLAINTEXT;
                  output += "< ";
                  tag_buffer = "";
                  break;
                }
                tag_buffer += char;
                break;
              default:
                tag_buffer += char;
                break;
            }
          } else if (state === STATE_COMMENT) {
            switch (char) {
              case ">":
                if (tag_buffer.slice(-2) == "--") {
                  state = STATE_PLAINTEXT;
                }
                tag_buffer = "";
                break;
              default:
                tag_buffer += char;
                break;
            }
          }
        }
        context.state = state;
        context.tag_buffer = tag_buffer;
        context.depth = depth;
        context.in_quote_char = in_quote_char;
        return output;
      }
      function parse_allowable_tags(allowable_tags) {
        let tag_set = /* @__PURE__ */ new Set();
        if (typeof allowable_tags === "string") {
          let match;
          while (match = ALLOWED_TAGS_REGEX.exec(allowable_tags)) {
            tag_set.add(match[1]);
          }
        } else if (!Symbol2.nonNative && typeof allowable_tags[Symbol2.iterator] === "function") {
          tag_set = new Set(allowable_tags);
        } else if (typeof allowable_tags.forEach === "function") {
          allowable_tags.forEach(tag_set.add, tag_set);
        }
        return tag_set;
      }
      function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
        return match ? match[1].toLowerCase() : null;
      }
      if (module.exports) {
        module.exports = striptags2;
      } else {
        global2.striptags = striptags2;
      }
    })(striptags);
  })(striptags$1);
  return striptags$1.exports;
}
requireStriptags();
Vue.util.warn;
const defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register2 = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register2(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
    window2.document.documentElement.addEventListener("click", noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e2) && !!(el && !e2.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
const vOnClickOutside = {
  [directiveHooks.mounted](el, binding) {
    const capture = !binding.modifiers.bubble;
    if (typeof binding.value === "function") {
      el.__onClickOutside_stop = onClickOutside(el, binding.value, { capture });
    } else {
      const [handler, options] = binding.value;
      el.__onClickOutside_stop = onClickOutside(el, handler, Object.assign({ capture }, options));
    }
  },
  [directiveHooks.unmounted](el) {
    el.__onClickOutside_stop();
  }
};
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e2 = rawEvent || window.event;
  const _target = e2.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref$1(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e2) => {
          preventDefault(e2);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    if (isIOS)
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v2) {
      if (v2)
        lock();
      else unlock();
    }
  });
}
function onScrollLock() {
  let isMounted = false;
  const state = ref$1(false);
  return (el, binding) => {
    state.value = binding.value;
    if (isMounted)
      return;
    isMounted = true;
    const isLocked = useScrollLock(el, binding.value);
    watch(state, (v2) => isLocked.value = v2);
  };
}
onScrollLock();
register(t9);
const userStatus = {
  data() {
    return {
      hasStatus: false,
      userStatus: {
        status: null,
        message: null,
        icon: null
      }
    };
  },
  methods: {
    /**
     * Fetches the user-status from the server
     *
     * @param {string} userId UserId of the user to fetch the status for
     *
     * @return {Promise<void>}
     */
    async fetchUserStatus(userId) {
      if (!userId) {
        return;
      }
      const capabilities = e();
      if (!Object.prototype.hasOwnProperty.call(capabilities, "user_status") || !capabilities.user_status.enabled) {
        return;
      }
      if (!getCurrentUser()) {
        return;
      }
      try {
        const { data } = await cancelableClient.get(v("apps/user_status/api/v1/statuses/{userId}", { userId }));
        const {
          status,
          message,
          icon
        } = data.ocs.data;
        this.userStatus.status = status;
        this.userStatus.message = message || "";
        this.userStatus.icon = icon || "";
        this.hasStatus = true;
      } catch (e2) {
        if (e2.response.status === 404 && e2.response.data.ocs?.data?.length === 0) {
          return;
        }
        console.error(e2);
      }
    }
  }
};
const browserStorage = distExports.getBuilder("nextcloud").persist().build();
function getUserHasAvatar(userId) {
  const flag = browserStorage.getItem("user-has-avatar." + userId);
  if (typeof flag === "string") {
    return Boolean(flag);
  }
  return null;
}
function setUserHasAvatar(userId, flag) {
  if (userId) {
    browserStorage.setItem("user-has-avatar." + userId, flag);
  }
}
const _sfc_main$d = {
  name: "NcAvatar",
  directives: {
    ClickOutside: vOnClickOutside
  },
  components: {
    DotsHorizontal,
    NcActions,
    NcButton,
    NcIconSvgWrapper,
    NcLoadingIcon,
    NcUserStatusIcon
  },
  mixins: [userStatus],
  props: {
    /**
     * Set a custom url to the avatar image
     * either the url, user or displayName property must be defined
     */
    url: {
      type: String,
      default: void 0
    },
    /**
     * Set a css icon-class for an icon to be used instead of the avatar.
     */
    iconClass: {
      type: String,
      default: void 0
    },
    /**
     * Set the user id to fetch the avatar
     * either the url, user or displayName property must be defined
     */
    user: {
      type: String,
      default: void 0
    },
    /**
     * Do not show the user status on the avatar.
     */
    hideStatus: {
      type: Boolean,
      default: false
    },
    /**
     * Whether or not to display the user-status.
     * @deprecated - Use `hideStatus` instead. Will be removed with v9.
     */
    showUserStatus: {
      type: Boolean,
      default: true
    },
    /**
     * Show the verbose user status (e.g. "online" / "away") instead of just the status icon.
     */
    verboseStatus: {
      type: Boolean,
      default: false
    },
    /**
     * Whether or not to the status-icon should be used instead of online/away
     * @deprecated - Use `verboseStatus` instead. Will be removed with v9.
     */
    showUserStatusCompact: {
      type: Boolean,
      default: true
    },
    /**
     * When the user status was preloaded via another source it can be handed in with this property to save the request.
     * If this property is not set the status will be fetched automatically.
     * If a preloaded no-status is available provide this object with properties "status", "icon" and "message" set to null.
     */
    preloadedUserStatus: {
      type: Object,
      default: void 0
    },
    /**
     * Is the user a guest user (then we have to user a different endpoint)
     */
    isGuest: {
      type: Boolean,
      default: false
    },
    /**
     * Set a display name that will be rendered as a tooltip
     * either the url, user or displayName property must be defined
     * specify just the displayname to generate a placeholder avatar without
     * trying to fetch the avatar based on the user id
     */
    displayName: {
      type: String,
      default: void 0
    },
    /**
     * Set a size in px for the rendered avatar
     */
    size: {
      type: Number,
      default: 32
    },
    /**
     * Do not automatically generate a placeholder avatars if there is no real avatar is available.
     */
    noPlaceholder: {
      type: Boolean,
      default: false
    },
    /**
     * Placeholder avatars will be automatically generated when this is set to true.
     * @deprecated - Use `noPlaceholder` instead. Will be removed in v9.
     */
    allowPlaceholder: {
      type: Boolean,
      default: true
    },
    /**
     * Disable the tooltip
     */
    disableTooltip: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the menu
     */
    disableMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Declares a custom tooltip when not null
     * Fallback will be the displayName
     *
     * requires disableTooltip not to be set to true
     */
    tooltipMessage: {
      type: String,
      default: null
    },
    /**
     * Declares username is not a user's name, when true.
     * Prevents loading user's avatar from server and forces generating colored initials,
     * i.e. if the user is a group
     */
    isNoUser: {
      type: Boolean,
      default: false
    },
    /**
     * Selector for the popover menu container
     */
    menuContainer: {
      type: [String, Object, Element, Boolean],
      default: "body"
    }
  },
  data() {
    return {
      avatarUrlLoaded: null,
      avatarSrcSetLoaded: null,
      userDoesNotExist: false,
      isAvatarLoaded: false,
      isMenuLoaded: false,
      contactsMenuLoading: false,
      contactsMenuData: {},
      contactsMenuActions: [],
      contactsMenuOpenState: false
    };
  },
  computed: {
    avatarAriaLabel() {
      if (!this.hasMenu) {
        return;
      }
      if (this.canDisplayUserStatus || this.showUserStatusIconOnAvatar) {
        return t$1("Avatar of {displayName}, {status}", { displayName: this.displayName ?? this.user, status: getUserStatusText(this.userStatus.status) });
      }
      return t$1("Avatar of {displayName}", { displayName: this.displayName ?? this.user });
    },
    canDisplayUserStatus() {
      return !this.hideStatus && this.showUserStatus && this.hasStatus && ["online", "away", "busy", "dnd"].includes(this.userStatus.status);
    },
    showUserStatusIconOnAvatar() {
      return !this.hideStatus && this.showUserStatus && !this.verboseStatus && this.showUserStatusCompact && this.hasStatus && this.userStatus.status !== "dnd" && this.userStatus.icon;
    },
    /**
     * The user identifier, either the display name if set or the user property
     * If both properties are not set an empty string is returned
     */
    userIdentifier() {
      if (this.isDisplayNameDefined) {
        return this.displayName;
      }
      if (this.isUserDefined) {
        return this.user;
      }
      return "";
    },
    isUserDefined() {
      return typeof this.user !== "undefined";
    },
    isDisplayNameDefined() {
      return typeof this.displayName !== "undefined";
    },
    isUrlDefined() {
      return typeof this.url !== "undefined";
    },
    hasMenu() {
      if (this.disableMenu) {
        return false;
      }
      if (this.isMenuLoaded) {
        return this.menu.length > 0;
      }
      return !(this.user === getCurrentUser()?.uid || this.userDoesNotExist || this.url);
    },
    /**
     * True if initials should be shown as the user icon fallback
     */
    showInitials() {
      return !this.noPlaceholder && this.allowPlaceholder && this.userDoesNotExist && !(this.iconClass || this.$slots.icon);
    },
    avatarStyle() {
      return {
        "--size": this.size + "px",
        lineHeight: this.showInitials ? this.size + "px" : 0,
        fontSize: Math.round(this.size * 0.45) + "px"
      };
    },
    initialsWrapperStyle() {
      const { r, g, b } = usernameToColor(this.userIdentifier);
      return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`
      };
    },
    initialsStyle() {
      const { r, g, b } = usernameToColor(this.userIdentifier);
      return {
        color: `rgb(${r}, ${g}, ${b})`
      };
    },
    tooltip() {
      if (this.disableTooltip) {
        return false;
      }
      if (this.tooltipMessage) {
        return this.tooltipMessage;
      }
      return this.displayName;
    },
    /**
     * Get the (max. two) initials of the user as uppcase string
     */
    initials() {
      let initials = "?";
      if (this.showInitials) {
        const user = this.userIdentifier.trim();
        if (user === "") {
          return initials;
        }
        const filteredChars = user.match(/[\p{L}\p{N}\s]/gu);
        if (filteredChars == null) {
          return initials;
        }
        const filtered = filteredChars.join("");
        const idx = filtered.lastIndexOf(" ");
        initials = String.fromCodePoint(filtered.codePointAt(0));
        if (idx !== -1) {
          initials = initials.concat(String.fromCodePoint(filtered.codePointAt(idx + 1)));
        }
      }
      return initials.toLocaleUpperCase();
    },
    menu() {
      const actions = this.contactsMenuActions.map((item) => {
        const route = getRoute(this.$router, item.hyperlink);
        return {
          ncActionComponent: route ? NcActionRouter : NcActionLink,
          ncActionComponentProps: route ? {
            to: route,
            icon: item.icon
          } : {
            href: item.hyperlink,
            icon: item.icon
          },
          text: item.title
        };
      });
      for (const action of getEnabledContactsMenuActions(this.contactsMenuData)) {
        try {
          actions.push({
            ncActionComponent: NcActionButton,
            ncActionComponentProps: {},
            ncActionComponentHandlers: {
              click: () => action.callback(this.contactsMenuData)
            },
            text: action.displayName(this.contactsMenuData),
            iconSvg: action.iconSvg(this.contactsMenuData)
          });
        } catch (error) {
          logger.error(`Failed to render ContactsMenu action ${action.id}`, {
            error,
            action
          });
        }
      }
      function escape2(html) {
        const text = document.createTextNode(html);
        const p = document.createElement("p");
        p.appendChild(text);
        return p.innerHTML;
      }
      if (!this.hideStatus && this.showUserStatus && (this.userStatus.icon || this.userStatus.message)) {
        const emojiIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<text x="50%" y="50%" text-anchor="middle" style="dominant-baseline: central; font-size: 85%">${escape2(this.userStatus.icon)}</text>
				</svg>`;
        return [{
          ncActionComponent: NcActionText,
          ncActionComponentProps: {},
          iconSvg: this.userStatus.icon ? emojiIcon : void 0,
          text: `${this.userStatus.message}`
        }].concat(actions);
      }
      return actions;
    }
  },
  watch: {
    url() {
      this.userDoesNotExist = false;
      this.loadAvatarUrl();
    },
    user() {
      this.userDoesNotExist = false;
      this.isMenuLoaded = false;
      this.loadAvatarUrl();
    }
  },
  mounted() {
    this.loadAvatarUrl();
    subscribe("settings:avatar:updated", this.loadAvatarUrl);
    subscribe("settings:display-name:updated", this.loadAvatarUrl);
    if (!this.hideStatus && this.showUserStatus && this.user && !this.isNoUser) {
      if (!this.preloadedUserStatus) {
        this.fetchUserStatus(this.user);
      } else {
        this.userStatus.status = this.preloadedUserStatus.status || "";
        this.userStatus.message = this.preloadedUserStatus.message || "";
        this.userStatus.icon = this.preloadedUserStatus.icon || "";
        this.hasStatus = this.preloadedUserStatus.status !== null;
      }
      subscribe("user_status:status.updated", this.handleUserStatusUpdated);
    }
  },
  beforeDestroy() {
    unsubscribe("settings:avatar:updated", this.loadAvatarUrl);
    unsubscribe("settings:display-name:updated", this.loadAvatarUrl);
    unsubscribe("user_status:status.updated", this.handleUserStatusUpdated);
  },
  methods: {
    t: t$1,
    handleUserStatusUpdated(state) {
      if (this.user === state.userId) {
        this.userStatus = {
          status: state.status,
          icon: state.icon,
          message: state.message
        };
      }
    },
    /**
     * Toggle the popover menu on click or enter
     * @param {KeyboardEvent|MouseEvent} event the UI event
     */
    async toggleMenu(event) {
      if (event.type === "keydown" && event.key !== "Enter") {
        return;
      }
      if (!this.contactsMenuOpenState) {
        await this.fetchContactsMenu();
      }
      this.contactsMenuOpenState = !this.contactsMenuOpenState;
    },
    closeMenu() {
      this.contactsMenuOpenState = false;
    },
    async fetchContactsMenu() {
      this.contactsMenuLoading = true;
      try {
        const user = encodeURIComponent(this.user);
        const { data } = await cancelableClient.post(_("contactsmenu/findOne"), `shareType=0&shareWith=${user}`);
        this.contactsMenuData = data;
        this.contactsMenuActions = data.topAction ? [data.topAction].concat(data.actions) : data.actions;
      } catch (e2) {
        this.contactsMenuOpenState = false;
      }
      this.contactsMenuLoading = false;
      this.isMenuLoaded = true;
    },
    /**
     * Handle avatar loading if user or url defined
     */
    loadAvatarUrl() {
      this.isAvatarLoaded = false;
      if (!this.isUrlDefined && (!this.isUserDefined || this.isNoUser || this.iconClass)) {
        this.isAvatarLoaded = true;
        this.userDoesNotExist = true;
        return;
      }
      if (this.isUrlDefined) {
        this.updateImageIfValid(this.url);
        return;
      }
      if (this.size <= 64) {
        const avatarUrl = this.avatarUrlGenerator(this.user, 64);
        const srcset = [
          avatarUrl + " 1x",
          this.avatarUrlGenerator(this.user, 512) + " 8x"
        ].join(", ");
        this.updateImageIfValid(avatarUrl, srcset);
      } else {
        const avatarUrl = this.avatarUrlGenerator(this.user, 512);
        this.updateImageIfValid(avatarUrl);
      }
    },
    /**
     * Generate an avatar url from the server's avatar endpoint
     *
     * @param {string} user the user id
     * @param {number} size the desired size
     * @return {string}
     */
    avatarUrlGenerator(user, size2) {
      let avatarUrl = getAvatarUrl(user, size2, this.isGuest);
      if (user === getCurrentUser()?.uid && typeof oc_userconfig !== "undefined") {
        avatarUrl += "?v=" + oc_userconfig.avatar.version;
      }
      return avatarUrl;
    },
    /**
     * Check if the provided url is valid and update Avatar if so
     *
     * @param {string} url the avatar url
     * @param {Array} srcset the avatar srcset
     */
    updateImageIfValid(url, srcset = null) {
      const userHasAvatar = getUserHasAvatar(this.user);
      if (this.isUserDefined && typeof userHasAvatar === "boolean") {
        this.isAvatarLoaded = true;
        this.avatarUrlLoaded = url;
        if (srcset) {
          this.avatarSrcSetLoaded = srcset;
        }
        if (userHasAvatar === false) {
          this.userDoesNotExist = true;
        }
        return;
      }
      const img = new Image();
      img.onload = () => {
        this.avatarUrlLoaded = url;
        if (srcset) {
          this.avatarSrcSetLoaded = srcset;
        }
        this.isAvatarLoaded = true;
        setUserHasAvatar(this.user, true);
      };
      img.onerror = () => {
        console.debug("Invalid avatar url", url);
        this.avatarUrlLoaded = null;
        this.avatarSrcSetLoaded = null;
        this.userDoesNotExist = true;
        this.isAvatarLoaded = false;
        setUserHasAvatar(this.user, false);
      };
      if (srcset) {
        img.srcset = srcset;
      }
      img.src = url;
    }
  }
};
var _sfc_render$d = function render14() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { directives: [{ name: "click-outside", rawName: "v-click-outside", value: _vm.closeMenu, expression: "closeMenu" }], ref: "main", staticClass: "avatardiv popovermenu-wrapper", class: {
    "avatardiv--unknown": _vm.userDoesNotExist,
    "avatardiv--with-menu": _vm.hasMenu,
    "avatardiv--with-menu-loading": _vm.contactsMenuLoading
  }, style: _vm.avatarStyle, attrs: { "title": _vm.tooltip } }, [_vm._t("icon", function() {
    return [_vm.iconClass ? _c("span", { staticClass: "avatar-class-icon", class: _vm.iconClass }) : _vm.isAvatarLoaded && !_vm.userDoesNotExist ? _c("img", { attrs: { "src": _vm.avatarUrlLoaded, "srcset": _vm.avatarSrcSetLoaded, "alt": "" } }) : _vm._e()];
  }), _vm.hasMenu && _vm.menu.length === 0 ? _c("NcButton", { staticClass: "action-item action-item__menutoggle", attrs: { "aria-label": _vm.avatarAriaLabel, "variant": "tertiary-no-background" }, on: { "click": _vm.toggleMenu }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm.contactsMenuLoading ? _c("NcLoadingIcon") : _c("DotsHorizontal", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 2617833509) }) : _vm.hasMenu ? _c("NcActions", { attrs: { "aria-label": _vm.avatarAriaLabel, "container": _vm.menuContainer, "force-menu": "", "manual-open": "", "open": _vm.contactsMenuOpenState, "variant": "tertiary-no-background" }, on: { "update:open": function($event) {
    _vm.contactsMenuOpenState = $event;
  }, "click": _vm.toggleMenu }, scopedSlots: _vm._u([_vm.contactsMenuLoading ? { key: "icon", fn: function() {
    return [_c("NcLoadingIcon")];
  }, proxy: true } : null], null, true) }, _vm._l(_vm.menu, function(item, key) {
    return _c(item.ncActionComponent, _vm._g(_vm._b({ key, tag: "component", scopedSlots: _vm._u([item.iconSvg ? { key: "icon", fn: function() {
      return [_c("NcIconSvgWrapper", { attrs: { "svg": item.iconSvg } })];
    }, proxy: true } : null], null, true) }, "component", item.ncActionComponentProps, false), item.ncActionComponentHandlers), [_vm._v(" " + _vm._s(item.text) + " ")]);
  }), 1) : _vm._e(), _vm.showUserStatusIconOnAvatar ? _c("span", { staticClass: "avatardiv__user-status avatardiv__user-status--icon" }, [_vm._v(" " + _vm._s(_vm.userStatus.icon) + " ")]) : _vm.canDisplayUserStatus ? _c("NcUserStatusIcon", { staticClass: "avatardiv__user-status", attrs: { "status": _vm.userStatus.status, "aria-hidden": String(_vm.hasMenu) } }) : _vm._e(), _vm.showInitials ? _c("span", { staticClass: "avatardiv__initials-wrapper", style: _vm.initialsWrapperStyle }, [_c("span", { staticClass: "avatardiv__initials", style: _vm.initialsStyle }, [_vm._v(" " + _vm._s(_vm.initials) + " ")])]) : _vm._e()], 2);
};
var _sfc_staticRenderFns$d = [];
var __component__$d = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$d,
  _sfc_render$d,
  _sfc_staticRenderFns$d,
  false,
  null,
  "f132fa9c"
);
const NcAvatar = __component__$d.exports;
const margin = 8;
const defaultSize = 32;
const _sfc_main$c = {
  name: "NcListItemIcon",
  components: {
    NcAvatar,
    NcHighlight,
    NcIconSvgWrapper
  },
  mixins: [
    userStatus
  ],
  props: {
    /**
     * Default first line text
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Secondary optional line
     * Only visible on size of 32 and above
     */
    subname: {
      type: String,
      default: ""
    },
    /**
     * Icon class to be displayed at the end of the component
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * SVG icon to be displayed at the end of the component
     */
    iconSvg: {
      type: String,
      default: ""
    },
    /**
     * Descriptive name for the icon
     */
    iconName: {
      type: String,
      default: ""
    },
    /**
     * Search within the highlight of name/subname
     */
    search: {
      type: String,
      default: ""
    },
    /**
     * Set a size in px that will define the avatar height/width
     * and therefore, the height of the component
     */
    avatarSize: {
      type: Number,
      default: defaultSize
    },
    /**
     * Disable the margins of this component.
     * Useful for integration in `NcSelect` for example
     */
    noMargin: {
      type: Boolean,
      default: false
    },
    /**
     * See the [Avatar](#Avatar) displayName prop
     * Fallback to name
     */
    displayName: {
      type: String,
      default: null
    },
    /**
     * See the [Avatar](#Avatar) isNoUser prop
     * Enable/disable the UserStatus fetching
     */
    isNoUser: {
      type: Boolean,
      default: false
    },
    /**
     * Unique list item ID
     */
    id: {
      type: String,
      default: null
    }
  },
  setup() {
    return {
      margin,
      defaultSize
    };
  },
  computed: {
    hasIcon() {
      return this.icon !== "";
    },
    hasIconSvg() {
      return this.iconSvg !== "";
    },
    isValidSubname() {
      return this.subname?.trim?.() !== "";
    },
    isSizeBigEnough() {
      return this.avatarSize >= 26;
    },
    cssVars() {
      const margin2 = this.noMargin ? 0 : this.margin;
      return {
        "--height": this.avatarSize + 2 * margin2 + "px",
        "--margin": this.margin + "px"
      };
    },
    /**
     * Seperates the search property into two parts, the first one is the search part on the name, the second on the subname.
     * @return {[string, string]}
     */
    searchParts() {
      const EMAIL_NOTATION = /^([^<]*)<([^>]+)>?$/;
      const match = this.search.match(EMAIL_NOTATION);
      if (this.isNoUser || !match) {
        return [this.search, this.search];
      }
      return [match[1].trim(), match[2]];
    }
  },
  beforeMount() {
    if (!this.isNoUser && !this.subname) {
      this.fetchUserStatus(this.user);
    }
  }
};
var _sfc_render$c = function render15() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._g({ staticClass: "option", class: { "option--compact": _vm.avatarSize < _vm.defaultSize }, style: _vm.cssVars, attrs: { "id": _vm.id } }, _vm.$listeners), [_c("NcAvatar", _vm._b({ staticClass: "option__avatar", attrs: { "disable-menu": true, "disable-tooltip": true, "display-name": _vm.displayName || _vm.name, "is-no-user": _vm.isNoUser, "size": _vm.avatarSize } }, "NcAvatar", _vm.$attrs, false)), _c("div", { staticClass: "option__details" }, [_c("NcHighlight", { staticClass: "option__lineone", attrs: { "text": _vm.name, "search": _vm.searchParts[0] } }), _vm.isValidSubname && _vm.isSizeBigEnough ? _c("NcHighlight", { staticClass: "option__linetwo", attrs: { "text": _vm.subname, "search": _vm.searchParts[1] } }) : _vm.hasStatus ? _c("span", [_c("span", [_vm._v(_vm._s(_vm.userStatus.icon))]), _c("span", [_vm._v(_vm._s(_vm.userStatus.message))])]) : _vm._e()], 1), _vm._t("default", function() {
    return [_vm.hasIconSvg ? _c("NcIconSvgWrapper", { staticClass: "option__icon", attrs: { "svg": _vm.iconSvg, "name": _vm.iconName } }) : _vm.hasIcon ? _c("span", { staticClass: "icon option__icon", class: _vm.icon, attrs: { "aria-label": _vm.iconName } }) : _vm._e()];
  })], 2);
};
var _sfc_staticRenderFns$c = [];
var __component__$c = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$c,
  _sfc_render$c,
  _sfc_staticRenderFns$c,
  false,
  null,
  "a0f4d73a"
);
const NcListItemIcon = __component__$c.exports;
register(t15, t35);
const _sfc_main$b = {
  name: "NcSelect",
  components: {
    ChevronDown,
    NcEllipsisedOption,
    NcListItemIcon,
    NcLoadingIcon,
    VueSelect: vueSelectExports.VueSelect
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    // Add VueSelect props to $props
    ...vueSelectExports.VueSelect.props,
    ...vueSelectExports.VueSelect.mixins.reduce((allProps, mixin) => ({ ...allProps, ...mixin.props }), {}),
    /**
     * `aria-label` for the clear input button
     */
    ariaLabelClearSelected: {
      type: String,
      default: t$1("Clear selected")
    },
    /**
     * `aria-label` for the search input
     *
     * A descriptive `inputLabel` is preferred as this is not visible.
     */
    ariaLabelCombobox: {
      type: String,
      default: null
    },
    /**
     * `aria-label` for the listbox element
     */
    ariaLabelListbox: {
      type: String,
      default: t$1("Options")
    },
    /**
     * Allows to customize the `aria-label` for the deselect-option button
     * The default is "Deselect " + optionLabel
     * @type {(optionLabel: string) => string}
     */
    ariaLabelDeselectOption: {
      type: Function,
      default: (optionLabel) => t$1("Deselect {option}", { option: optionLabel })
    },
    /**
     * Append the dropdown element to the end of the body
     * and size/position it dynamically.
     *
     * @see https://vue-select.org/api/props.html#appendtobody
     */
    appendToBody: {
      type: Boolean,
      default: true
    },
    /**
     * When `appendToBody` is true, this function is responsible for
     * positioning the drop down list.
     *
     * If a function is returned from `calculatePosition`, it will
     * be called when the drop down list is removed from the DOM.
     * This allows for any garbage collection you may need to do.
     *
     * @see https://vue-select.org/api/props.html#calculateposition
     */
    calculatePosition: {
      type: Function,
      default: null
    },
    /**
     * Close the dropdown when selecting an option.
     *
     * @deprecated Use the `keepOpen` prop instead
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Keep the dropdown open after selecting an option.
     *
     * @default false
     * @since 8.25.0
     */
    keepOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Replace default vue-select components
     *
     * @see https://vue-select.org/api/props.html#components
     */
    components: {
      type: Object,
      default: () => ({
        Deselect: {
          render: (createElement) => createElement(Close, {
            props: {
              size: 20,
              fillColor: "var(--vs-controls-color)"
            },
            style: {
              cursor: "pointer"
            }
          })
        }
      })
    },
    /**
     * Sets the maximum number of options to display in the dropdown list
     */
    limit: {
      type: Number,
      default: null
    },
    /**
     * Disable the component
     *
     * @see https://vue-select.org/api/props.html#disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Determines whether the dropdown should be open.
     * Receives the component instance as the only argument.
     *
     * @see https://vue-select.org/api/props.html#dropdownshouldopen
     */
    dropdownShouldOpen: {
      type: Function,
      default: ({ noDrop, open }) => {
        return noDrop ? false : open;
      }
    },
    /**
     * Callback to determine if the provided option should
     * match the current search text. Used to determine
     * if the option should be displayed.
     *
     * Defaults to the internal vue-select function documented at the link
     * below
     *
     * Enabling `userSelect` will automatically set this to filter by the
     * `displayName` and `subname` properties of the user option object
     * unless this prop is set explicitly
     *
     * @see https://vue-select.org/api/props.html#filterby
     */
    filterBy: {
      type: Function,
      default: null
    },
    /**
     * Class for the `input`
     *
     * Necessary for use in NcActionInput
     */
    inputClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Input element id
     */
    inputId: {
      type: String,
      default: () => `select-input-${GenRandomId()}`
    },
    /**
     * Visible label for the input element
     *
     * @todo Set default for @nextcloud/vue 9
     */
    inputLabel: {
      type: String,
      default: null
    },
    /**
     * Pass true if you are using an external label
     */
    labelOutside: {
      type: Boolean,
      default: false
    },
    /**
     * Display a visible border around dropdown options
     * which have keyboard focus
     */
    keyboardFocusBorder: {
      type: Boolean,
      default: true
    },
    /**
     * Key of the displayed label for object options
     *
     * Defaults to the internal vue-select string documented at the link
     * below
     *
     * Enabling `userSelect` will automatically set this to `'displayName'`
     * unless this prop is set explicitly
     *
     * @see https://vue-select.org/api/props.html#label
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Show the loading icon
     *
     * @see https://vue-select.org/api/props.html#loading
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Allow selection of multiple options
     *
     * @see https://vue-select.org/api/props.html#multiple
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Disable automatic wrapping when selected options overflow the width
     */
    noWrap: {
      type: Boolean,
      default: false
    },
    /**
     * Array of options
     *
     * @type {Array<string | number | Record<string | number, any>>}
     *
     * @see https://vue-select.org/api/props.html#options
     */
    options: {
      type: Array,
      default: () => []
    },
    /**
     * Placeholder text
     *
     * @see https://vue-select.org/api/props.html#placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * Customized component's response to keydown events while the search input has focus
     *
     * @see https://vue-select.org/guide/keydown.html#mapkeydown
     */
    mapKeydown: {
      type: Function,
      /**
       * Patched Vue-Select keydown events handlers map to stop Escape propagation in open select
       *
       * @param {Record<number, Function>} map - Mapped keyCode to handlers { <keyCode>:<callback> }
       * @param {import('@nextcloud/vue-select').VueSelect} vm - VueSelect instance
       * @return {Record<number, Function>} patched keydown event handlers
       */
      default(map, vm) {
        return {
          ...map,
          /**
           * Patched Escape handler to stop propagation from open select
           *
           * @param {KeyboardEvent} event - default keydown event handler
           */
          27: (event) => {
            if (vm.open) {
              event.stopPropagation();
            }
            map[27](event);
          }
        };
      }
    },
    /**
     * A unique identifier used to generate IDs and DOM attributes. Must be unique for every instance of the component.
     *
     * @see https://vue-select.org/api/props.html#uid
     */
    uid: {
      type: String,
      default: () => GenRandomId()
    },
    /**
     * When `appendToBody` is true, this sets the placement of the dropdown
     *
     * @type {'bottom' | 'top'}
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * If false, the focused dropdown option will not be reset when filtered
     * options change
     */
    resetFocusOnOptionsChange: {
      type: Boolean,
      default: true
    },
    /**
     * Enable the user selector with avatars
     *
     * Objects must contain the data expected by the
     * [NcListItemIcon](#/Components/NcListItemIcon) and
     * [NcAvatar](#/Components/NcAvatar) components
     *
     * @deprecated Use the `NcSelectUsers` component instead
     */
    userSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    value: {
      type: [String, Number, Object, Array],
      default: void 0
    },
    /**
     * Currently selected value
     *
     * The `v-model` directive may be used for two-way data binding
     *
     * @type {string | number | Record<string | number, any> | Array<any>}
     *
     * @see https://vue-select.org/api/props.html#value
     */
    modelValue: {
      type: [String, Number, Object, Array],
      default: null
    },
    /**
     * Enable if a value is required for native form validation
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Any available prop
     *
     * @see https://vue-select.org/api/props.html
     */
    // Not an actual prop but needed to show in vue-styleguidist docs
    // eslint-disable-next-line
    " ": {}
  },
  emits: [
    /**
     * All events from https://vue-select.org/api/events.html
     */
    // Not an actual event but needed to show in vue-styleguidist docs
    " ",
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "input",
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const clickableArea = Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-clickable-area"));
    const gridBaseLine = Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-grid-baseline"));
    const avatarSize = clickableArea - 2 * gridBaseLine;
    const model = useModelMigration("value", "input");
    return {
      avatarSize,
      model
    };
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    inputRequired() {
      if (!this.required) {
        return null;
      }
      return this.model === null || Array.isArray(this.model) && this.model.length === 0;
    },
    localCalculatePosition() {
      if (this.calculatePosition !== null) {
        return this.calculatePosition;
      }
      return (dropdownMenu, component, { width }) => {
        dropdownMenu.style.width = width;
        const addClass = {
          name: "addClass",
          fn(_middlewareArgs) {
            dropdownMenu.classList.add("vs__dropdown-menu--floating");
            return {};
          }
        };
        const togglePlacementClass = {
          name: "togglePlacementClass",
          fn({ placement }) {
            component.$el.classList.toggle(
              "select--drop-up",
              placement === "top"
            );
            dropdownMenu.classList.toggle(
              "vs__dropdown-menu--floating-placement-top",
              placement === "top"
            );
            return {};
          }
        };
        const updatePosition = () => {
          computePosition$2(component.$refs.toggle, dropdownMenu, {
            placement: this.placement,
            middleware: [
              offset$1(-1),
              addClass,
              togglePlacementClass,
              // Match popperjs default collision prevention behavior by appending the following middleware in order
              flip$1(),
              shift$1({ limiter: limitShift() })
            ]
          }).then(({ x, y }) => {
            Object.assign(dropdownMenu.style, {
              left: `${x}px`,
              top: `${y}px`,
              width: `${component.$refs.toggle.getBoundingClientRect().width}px`
            });
          });
        };
        const cleanup = autoUpdate(
          component.$refs.toggle,
          dropdownMenu,
          updatePosition
        );
        return cleanup;
      };
    },
    localFilterBy() {
      const EMAIL_NOTATION = /[^<]*<([^>]+)/;
      if (this.filterBy !== null) {
        return this.filterBy;
      }
      if (this.userSelect) {
        return (option, label, search) => {
          const match = search.match(EMAIL_NOTATION);
          return match && option.subname?.toLocaleLowerCase?.()?.indexOf(match[1].toLocaleLowerCase()) > -1 || `${label} ${option.subname}`.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
        };
      }
      return vueSelectExports.VueSelect.props.filterBy.default;
    },
    localLabel() {
      if (this.label !== null) {
        return this.label;
      }
      if (this.userSelect) {
        return "displayName";
      }
      return vueSelectExports.VueSelect.props.label.default;
    },
    propsToForward() {
      const vueSelectKeys = [
        ...Object.keys(vueSelectExports.VueSelect.props),
        ...vueSelectExports.VueSelect.mixins.flatMap((mixin) => Object.keys(mixin.props ?? {}))
      ];
      const initialPropsToForward = Object.fromEntries(
        Object.entries(this.$props).filter(([key, _value]) => vueSelectKeys.includes(key))
      );
      const propsToForward = {
        ...initialPropsToForward,
        // Custom overrides of vue-select props
        value: this.model,
        calculatePosition: this.localCalculatePosition,
        closeOnSelect: this.closeOnSelect && !this.keepOpen,
        filterBy: this.localFilterBy,
        label: this.localLabel
      };
      return propsToForward;
    },
    listenersToForward() {
      return {
        ...this.$listeners,
        input: ($event) => {
          this.model = $event;
        }
      };
    }
  },
  mounted() {
    if (!this.labelOutside && !this.inputLabel && !this.ariaLabelCombobox) {
      Vue.util.warn("[NcSelect] An `inputLabel` or `ariaLabelCombobox` should be set. If an external label is used, `labelOutside` should be set to `true`.");
    }
    if (this.inputLabel && this.ariaLabelCombobox) {
      Vue.util.warn("[NcSelect] Only one of `inputLabel` or `ariaLabelCombobox` should to be set.");
    }
  },
  methods: {
    t: t$1
  }
};
var _sfc_render$b = function render16() {
  var _vm = this, _c = _vm._self._c;
  return _c("VueSelect", _vm._g(_vm._b({ staticClass: "select", class: {
    "select--no-wrap": _vm.noWrap,
    "user-select": _vm.userSelect
  }, on: { "search": (searchString) => _vm.search = searchString }, scopedSlots: _vm._u([!_vm.labelOutside && _vm.inputLabel ? { key: "header", fn: function() {
    return [_c("label", { staticClass: "select__label", attrs: { "for": _vm.inputId } }, [_vm._v(" " + _vm._s(_vm.inputLabel) + " ")])];
  }, proxy: true } : null, { key: "search", fn: function({ attributes, events }) {
    return [_c("input", _vm._g(_vm._b({ class: ["vs__search", _vm.inputClass], attrs: { "required": _vm.inputRequired, "dir": "auto" } }, "input", attributes, false), events))];
  } }, { key: "open-indicator", fn: function({ attributes }) {
    return [_c("ChevronDown", _vm._b({ style: {
      cursor: !_vm.disabled ? "pointer" : null
    }, attrs: { "fill-color": "var(--vs-controls-color)", "size": 26 } }, "ChevronDown", attributes, false))];
  } }, { key: "option", fn: function(option) {
    return [_vm._t("option", function() {
      return [_vm.userSelect ? _c("NcListItemIcon", _vm._b({ attrs: { "avatar-size": 32, "name": option[_vm.localLabel], "search": _vm.search } }, "NcListItemIcon", option, false)) : _c("NcEllipsisedOption", { attrs: { "name": String(option[_vm.localLabel]), "search": _vm.search } })];
    }, null, option)];
  } }, { key: "selected-option", fn: function(selectedOption) {
    return [_vm._t("selected-option", function() {
      return [_vm.userSelect ? _c("NcListItemIcon", _vm._b({ attrs: { "avatar-size": _vm.avatarSize, "name": selectedOption[_vm.localLabel], "no-margin": "", "search": _vm.search } }, "NcListItemIcon", selectedOption, false)) : _c("NcEllipsisedOption", { attrs: { "name": String(selectedOption[_vm.localLabel]), "search": _vm.search } })];
    }, { "vBind": selectedOption })];
  } }, { key: "spinner", fn: function(spinner) {
    return [spinner.loading ? _c("NcLoadingIcon") : _vm._e()];
  } }, { key: "no-options", fn: function() {
    return [_vm._v(" " + _vm._s(_vm.t("No results")) + " ")];
  }, proxy: true }, _vm._l(_vm.$scopedSlots, function(_2, name) {
    return { key: name, fn: function(data) {
      return [_vm._t(name, null, null, data)];
    } };
  })], null, true) }, "VueSelect", _vm.propsToForward, false), _vm.listenersToForward));
};
var _sfc_staticRenderFns$b = [];
var __component__$b = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$b,
  _sfc_render$b,
  _sfc_staticRenderFns$b,
  false,
  null,
  null
);
const NcSelect = __component__$b.exports;
register(t23);
const _sfc_main$1$2 = {
  name: "HelpCircleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1$2 = function render17() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon help-circle-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1$2 = [];
var __component__$1$2 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$1$2,
  _sfc_render$1$2,
  _sfc_staticRenderFns$1$2,
  false,
  null,
  null
);
const HelpCircle = __component__$1$2.exports;
const _sfc_main$a = {
  name: "NcSettingsSection",
  components: {
    HelpCircle
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    docUrl: {
      type: String,
      default: ""
    },
    /**
     * Limit the width of the setting's content
     *
     * Setting this to false allows unrestricted (width) settings content.
     * Note that the name and description have always a width limit.
     * @deprecated Will be removed with next version and will not be used on Nextcloud 30+ (always forced to true)
     */
    limitWidth: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      docNameTranslated: t$1("External documentation for {name}", {
        name: this.name
      })
    };
  },
  computed: {
    forceLimitWidth() {
      if (this.limitWidth) {
        return true;
      }
      const [major] = window._oc_config?.version.split(".", 2) ?? [];
      return major && Number.parseInt(major) >= 30;
    },
    hasDescription() {
      return this.description.length > 0;
    },
    hasDocUrl() {
      return this.docUrl.length > 0;
    }
  }
};
var _sfc_render$a = function render23() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "settings-section", class: { "settings-section--limit-width": _vm.forceLimitWidth } }, [_c("h2", { staticClass: "settings-section__name" }, [_vm._v(" " + _vm._s(_vm.name) + " "), _vm.hasDocUrl ? _c("a", { staticClass: "settings-section__info", attrs: { "href": _vm.docUrl, "title": _vm.docNameTranslated, "aria-label": _vm.docNameTranslated, "target": "_blank", "rel": "noreferrer nofollow" } }, [_c("HelpCircle", { attrs: { "size": 20 } })], 1) : _vm._e()]), _vm.hasDescription ? _c("p", { staticClass: "settings-section__desc" }, [_vm._v(" " + _vm._s(_vm.description) + " ")]) : _vm._e(), _vm._t("default")], 2);
};
var _sfc_staticRenderFns$a = [];
var __component__$a = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$a,
  _sfc_render$a,
  _sfc_staticRenderFns$a,
  false,
  null,
  "6f6953b5"
);
const NcSettingsSection = __component__$a.exports;
register();
const _sfc_main$8 = {
  name: "CheckboxBlankOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$8 = function render18() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon checkbox-blank-outline-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$8 = [];
var __component__$8 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  null
);
const CheckboxBlankOutline = __component__$8.exports;
const _sfc_main$7 = {
  name: "MinusBoxIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$7 = function render24() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon minus-box-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  null
);
const MinusBox = __component__$7.exports;
const _sfc_main$6 = {
  name: "CheckboxMarkedIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$6 = function render32() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon checkbox-marked-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  null
);
const CheckboxMarked = __component__$6.exports;
const _sfc_main$5 = {
  name: "RadioboxMarkedIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$5 = function render42() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon radiobox-marked-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  null
);
const RadioboxMarked = __component__$5.exports;
const _sfc_main$4 = {
  name: "RadioboxBlankIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$4 = function render52() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon radiobox-blank-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  null
);
const RadioboxBlank = __component__$4.exports;
const _sfc_main$3$1 = {
  name: "ToggleSwitchOffIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$3$1 = function render62() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon toggle-switch-off-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3$1 = [];
var __component__$3$1 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$3$1,
  _sfc_render$3$1,
  _sfc_staticRenderFns$3$1,
  false,
  null,
  null
);
const ToggleSwitchOff = __component__$3$1.exports;
const _sfc_main$2$1 = {
  name: "ToggleSwitchIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2$1 = function render72() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon toggle-switch-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2$1 = [];
var __component__$2$1 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$2$1,
  _sfc_render$2$1,
  _sfc_staticRenderFns$2$1,
  false,
  null,
  null
);
const ToggleSwitch = __component__$2$1.exports;
const TYPE_CHECKBOX = "checkbox";
const TYPE_RADIO = "radio";
const TYPE_SWITCH = "switch";
const TYPE_BUTTON = "button";
const _sfc_main$1$1 = {
  name: "NcCheckboxContent",
  components: {
    NcLoadingIcon
  },
  props: {
    /**
     * Class for the icon element
     */
    iconClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Class for the text element
     */
    textClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Type of the input. checkbox, radio, switch, or button.
     *
     * Only use button when used in a `tablist` container and the
     * `tab` role is set.
     *
     * @type {'checkbox'|'radio'|'switch'|'button'}
     */
    type: {
      type: String,
      default: "checkbox",
      validator: (type) => [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_SWITCH,
        TYPE_BUTTON
      ].includes(type)
    },
    /**
     * Toggle the alternative button style
     */
    buttonVariant: {
      type: Boolean,
      default: false
    },
    /**
     * True if the entry is checked
     */
    isChecked: {
      type: Boolean,
      default: false
    },
    /**
     * Indeterminate state
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Icon size
     */
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    isButtonType() {
      return this.type === TYPE_BUTTON;
    },
    /**
     * Returns the proper Material icon depending on the select case
     *
     * @return {object}
     */
    checkboxRadioIconElement() {
      if (this.type === TYPE_RADIO) {
        if (this.isChecked) {
          return RadioboxMarked;
        }
        return RadioboxBlank;
      }
      if (this.type === TYPE_SWITCH) {
        if (this.isChecked) {
          return ToggleSwitch;
        }
        return ToggleSwitchOff;
      }
      if (this.indeterminate) {
        return MinusBox;
      }
      if (this.isChecked) {
        return CheckboxMarked;
      }
      return CheckboxBlankOutline;
    }
  }
};
var _sfc_render$1$1 = function render82() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "checkbox-content", class: {
    ["checkbox-content-" + _vm.type]: true,
    "checkbox-content--button-variant": _vm.buttonVariant,
    "checkbox-content--has-text": !!_vm.$slots.default
  } }, [_c("span", { class: {
    "checkbox-content__icon": true,
    "checkbox-content__icon--checked": _vm.isChecked,
    [_vm.iconClass]: true
  }, attrs: { "aria-hidden": true, "inert": "" } }, [_vm._t("icon", function() {
    return [_vm.loading ? _c("NcLoadingIcon") : !_vm.buttonVariant ? _c(_vm.checkboxRadioIconElement, { tag: "component", attrs: { "size": _vm.size } }) : _vm._e()];
  }, { "checked": _vm.isChecked, "loading": _vm.loading })], 2), _vm.$slots.default ? _c("span", { class: ["checkbox-content__text", _vm.textClass] }, [_vm._t("default")], 2) : _vm._e()]);
};
var _sfc_staticRenderFns$1$1 = [];
var __component__$1$1 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$1$1,
  _sfc_render$1$1,
  _sfc_staticRenderFns$1$1,
  false,
  null,
  "18de8bed"
);
const NcCheckboxContent = __component__$1$1.exports;
const _sfc_main$9 = {
  name: "NcCheckboxRadioSwitch",
  components: {
    NcCheckboxContent
  },
  // We need to pass attributes to the input element
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * Unique id attribute of the input
     */
    id: {
      type: String,
      default: () => "checkbox-radio-switch-" + GenRandomId(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Unique id attribute of the wrapper element
     */
    wrapperId: {
      type: String,
      default: null
    },
    /**
     * Input name. Required for radio, optional for checkbox, and ignored
     * for button.
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Required if no text is set.
     * The aria-label is forwarded to the input or button.
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /**
     * Type of the input. checkbox, radio, switch, or button.
     *
     * Only use button when used in a `tablist` container and the
     * `tab` role is set.
     *
     * @type {'checkbox'|'radio'|'switch'|'button'}
     */
    type: {
      type: String,
      default: "checkbox",
      validator: (type) => [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_SWITCH,
        TYPE_BUTTON
      ].includes(type)
    },
    /**
     * Toggle the alternative button style
     */
    buttonVariant: {
      type: Boolean,
      default: false
    },
    /**
     * Are the elements are all direct siblings?
     * If so they will be grouped horizontally or vertically
     *
     * @type {'no'|'horizontal'|'vertical'}
     */
    buttonVariantGrouped: {
      type: String,
      default: "no",
      validator: (v2) => ["no", "vertical", "horizontal"].includes(v2)
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    checked: {
      type: [Boolean, Array, String],
      default: void 0
    },
    /**
     * Checkbox value
     */
    modelValue: {
      type: [Boolean, Array, String],
      default: false
    },
    /**
     * Value to be synced on check
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Indeterminate state
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Required state
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Wrapping element tag
     *
     * When `type` is set to `button` this will be ignored
     *
     * Defaults to `span`
     */
    wrapperElement: {
      type: String,
      default: null
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:checked",
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const model = useModelMigration("checked", "update:checked");
    return {
      model
    };
  },
  computed: {
    dataAttrs() {
      return Object.fromEntries(Object.entries(this.$attrs).filter(([key]) => key.startsWith("data-")));
    },
    nonDataAttrs() {
      return Object.fromEntries(Object.entries(this.$attrs).filter(([key]) => !key.startsWith("data-")));
    },
    isButtonType() {
      return this.type === TYPE_BUTTON;
    },
    computedWrapperElement() {
      if (this.isButtonType) {
        return "button";
      }
      if (this.wrapperElement !== null) {
        return this.wrapperElement;
      }
      return "span";
    },
    listeners() {
      if (this.isButtonType) {
        return {
          click: this.onToggle
        };
      }
      return {
        change: this.onToggle
      };
    },
    /**
     * Icon size
     *
     * @return {number}
     */
    size() {
      return this.type === TYPE_SWITCH ? 36 : 24;
    },
    /**
     * Css local variables for this component
     *
     * @return {object}
     */
    cssVars() {
      return {
        "--icon-size": this.size + "px",
        "--icon-height": (this.type === TYPE_SWITCH ? 16 : this.size) + "px"
      };
    },
    /**
     * Return the input type.
     * Switch is not an official type
     *
     * @return {string}
     */
    inputType() {
      const nativeTypes = [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_BUTTON
      ];
      if (nativeTypes.includes(this.type)) {
        return this.type;
      }
      return TYPE_CHECKBOX;
    },
    /**
     * Check if that entry is checked
     * If value is defined, we use that as the checked value
     * If not, we expect true/false in checked state
     *
     * @return {boolean}
     */
    isChecked() {
      if (this.value !== null) {
        if (Array.isArray(this.model)) {
          return [...this.model].indexOf(this.value) > -1;
        }
        return this.model === this.value;
      }
      return this.model === true;
    },
    hasIndeterminate() {
      return [
        TYPE_CHECKBOX,
        TYPE_RADIO
      ].includes(this.inputType);
    }
  },
  mounted() {
    if (this.name && this.type === TYPE_CHECKBOX) {
      if (!Array.isArray(this.model)) {
        throw new Error("When using groups of checkboxes, the updated value will be an array.");
      }
    }
    if (this.name && this.type === TYPE_SWITCH) {
      throw new Error("Switches are not made to be used for data sets. Please use checkboxes instead.");
    }
    if (typeof this.model !== "boolean" && this.type === TYPE_SWITCH) {
      throw new Error("Switches can only be used with boolean as checked prop.");
    }
  },
  methods: {
    t: t$1,
    n,
    onToggle(event) {
      if (this.disabled || event.target.tagName.toLowerCase() === "a") {
        return;
      }
      if (this.type === TYPE_RADIO) {
        this.model = this.value;
        return;
      }
      if (this.type === TYPE_SWITCH) {
        this.model = !this.isChecked;
        return;
      }
      if (typeof this.model === "boolean") {
        this.model = !this.model;
        return;
      }
      const values = this.getInputsSet().filter((input) => input.checked).map((input) => input.value);
      if (values.includes(this.value)) {
        this.model = values.filter((v2) => v2 !== this.value);
      } else {
        this.model = [...values, this.value];
      }
    },
    /**
     * Get the input set based on this name
     *
     * @return {Node[]}
     */
    getInputsSet() {
      return [...document.getElementsByName(this.name)];
    }
  }
};
var _sfc_render$9 = function render92() {
  var _vm = this, _c = _vm._self._c;
  return _c(_vm.computedWrapperElement, _vm._g(_vm._b({ tag: "component", staticClass: "checkbox-radio-switch", class: {
    ["checkbox-radio-switch-" + _vm.type]: _vm.type,
    "checkbox-radio-switch--checked": _vm.isChecked,
    "checkbox-radio-switch--disabled": _vm.disabled,
    "checkbox-radio-switch--indeterminate": _vm.hasIndeterminate ? _vm.indeterminate : false,
    "checkbox-radio-switch--button-variant": _vm.buttonVariant,
    "checkbox-radio-switch--button-variant-v-grouped": _vm.buttonVariant && _vm.buttonVariantGrouped === "vertical",
    "checkbox-radio-switch--button-variant-h-grouped": _vm.buttonVariant && _vm.buttonVariantGrouped === "horizontal",
    "button-vue": _vm.isButtonType
  }, style: _vm.cssVars, attrs: { "id": _vm.wrapperId, "aria-label": _vm.isButtonType && _vm.ariaLabel ? _vm.ariaLabel : void 0, "type": _vm.isButtonType ? "button" : null } }, "component", _vm.isButtonType ? _vm.$attrs : _vm.dataAttrs, false), _vm.isButtonType ? _vm.listeners : null), [!_vm.isButtonType ? _c("input", _vm._g(_vm._b({ staticClass: "checkbox-radio-switch__input", attrs: { "id": _vm.id, "aria-labelledby": !_vm.isButtonType && !_vm.ariaLabel ? `${_vm.id}-label` : null, "aria-label": _vm.ariaLabel || void 0, "disabled": _vm.disabled, "type": _vm.inputType, "required": _vm.required, "name": _vm.name }, domProps: { "value": _vm.value, "checked": _vm.isChecked, "indeterminate": _vm.hasIndeterminate ? _vm.indeterminate : null } }, "input", _vm.nonDataAttrs, false), _vm.listeners)) : _vm._e(), _c("NcCheckboxContent", { staticClass: "checkbox-radio-switch__content", attrs: { "id": !_vm.isButtonType ? `${_vm.id}-label` : void 0, "icon-class": "checkbox-radio-switch__icon", "text-class": "checkbox-radio-switch__text", "type": _vm.type, "indeterminate": _vm.hasIndeterminate ? _vm.indeterminate : false, "button-variant": _vm.buttonVariant, "is-checked": _vm.isChecked, "loading": _vm.loading, "size": _vm.size }, nativeOn: { "click": function($event) {
    return _vm.onToggle.apply(null, arguments);
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("icon")];
  }, proxy: true }], null, true) }, [_vm._t("default")], 2)], 1);
};
var _sfc_staticRenderFns$9 = [];
var __component__$9 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$9,
  _sfc_render$9,
  _sfc_staticRenderFns$9,
  false,
  null,
  "22cdd229"
);
const NcCheckboxRadioSwitch = __component__$9.exports;
var pathBrowserify;
var hasRequiredPathBrowserify;
function requirePathBrowserify() {
  if (hasRequiredPathBrowserify) return pathBrowserify;
  hasRequiredPathBrowserify = 1;
  function assertPath(path) {
    if (typeof path !== "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
    }
  }
  function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i = 0; i <= path.length; ++i) {
      if (i < path.length)
        code = path.charCodeAt(i);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i - 1 || dots === 1) ;
        else if (lastSlash !== i - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf("/");
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                }
                lastSlash = i;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += "/..";
            else
              res = "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += "/" + path.slice(lastSlash + 1, i);
          else
            res = path.slice(lastSlash + 1, i);
          lastSegmentLength = i - lastSlash - 1;
        }
        lastSlash = i;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
      var resolvedPath = "";
      var resolvedAbsolute = false;
      var cwd;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path;
        if (i >= 0)
          path = arguments[i];
        else {
          if (cwd === void 0)
            cwd = process$1.cwd();
          path = cwd;
        }
        assertPath(path);
        if (path.length === 0) {
          continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return "/" + resolvedPath;
        else
          return "/";
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return ".";
      }
    },
    normalize: function normalize(path) {
      assertPath(path);
      if (path.length === 0) return ".";
      var isAbsolute = path.charCodeAt(0) === 47;
      var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
      path = normalizeStringPosix(path, !isAbsolute);
      if (path.length === 0 && !isAbsolute) path = ".";
      if (path.length > 0 && trailingSeparator) path += "/";
      if (isAbsolute) return "/" + path;
      return path;
    },
    isAbsolute: function isAbsolute(path) {
      assertPath(path);
      return path.length > 0 && path.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return ".";
      var joined;
      for (var i = 0; i < arguments.length; ++i) {
        var arg = arguments[i];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += "/" + arg;
        }
      }
      if (joined === void 0)
        return ".";
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to) return "";
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to) return "";
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i = 0;
      for (; i <= length; ++i) {
        if (i === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === 47) {
              return to.slice(toStart + i + 1);
            } else if (i === 0) {
              return to.slice(toStart + i);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === 47) {
              lastCommonSep = i;
            } else if (i === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode = from.charCodeAt(fromStart + i);
        var toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode)
          break;
        else if (fromCode === 47)
          lastCommonSep = i;
      }
      var out = "";
      for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === 47) {
          if (out.length === 0)
            out += "..";
          else
            out += "/..";
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path) {
      return path;
    },
    dirname: function dirname(path) {
      assertPath(path);
      if (path.length === 0) return ".";
      var code = path.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i = path.length - 1; i >= 1; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1) return hasRoot ? "/" : ".";
      if (hasRoot && end === 1) return "//";
      return path.slice(0, end);
    },
    basename: function basename(path, ext) {
      if (ext !== void 0 && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
      assertPath(path);
      var start = 0;
      var end = -1;
      var matchedSlash = true;
      var i;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path) return "";
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i = path.length - 1; i >= 0; --i) {
          var code = path.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path.length;
        return path.slice(start, end);
      } else {
        for (i = path.length - 1; i >= 0; --i) {
          if (path.charCodeAt(i) === 47) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) return "";
        return path.slice(start, end);
      }
    },
    extname: function extname(path) {
      assertPath(path);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    },
    format: function format(pathObject) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
      }
      return _format("/", pathObject);
    },
    parse: function parse(path) {
      assertPath(path);
      var ret = { root: "", dir: "", base: "", ext: "", name: "" };
      if (path.length === 0) return ret;
      var code = path.charCodeAt(0);
      var isAbsolute = code === 47;
      var start;
      if (isAbsolute) {
        ret.root = "/";
        start = 1;
      } else {
        start = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i = path.length - 1;
      var preDotState = 0;
      for (; i >= start; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1) startDot = i;
          else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
          else ret.base = ret.name = path.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute) {
          ret.name = path.slice(1, startDot);
          ret.base = path.slice(1, end);
        } else {
          ret.name = path.slice(startPart, startDot);
          ret.base = path.slice(startPart, end);
        }
        ret.ext = path.slice(startDot, end);
      }
      if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
      else if (isAbsolute) ret.dir = "/";
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.posix = posix;
  pathBrowserify = posix;
  return pathBrowserify;
}
requirePathBrowserify();
var toastify$1 = { exports: {} };
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
var toastify = toastify$1.exports;
var hasRequiredToastify;
function requireToastify() {
  if (hasRequiredToastify) return toastify$1.exports;
  hasRequiredToastify = 1;
  (function(module) {
    (function(root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(toastify, function(global2) {
      var Toastify2 = function(options) {
        return new Toastify2.lib.init(options);
      }, version = "1.12.0";
      Toastify2.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: void 0,
        duration: 3e3,
        selector: void 0,
        callback: function() {
        },
        destination: void 0,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {
        },
        offset: { x: 0, y: 0 },
        escapeMarkup: true,
        ariaLive: "polite",
        style: { background: "" }
      };
      Toastify2.lib = Toastify2.prototype = {
        toastify: version,
        constructor: Toastify2,
        // Initializing the object with required parameters
        init: function(options) {
          if (!options) {
            options = {};
          }
          this.options = {};
          this.toastElement = null;
          this.options.text = options.text || Toastify2.defaults.text;
          this.options.node = options.node || Toastify2.defaults.node;
          this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify2.defaults.duration;
          this.options.selector = options.selector || Toastify2.defaults.selector;
          this.options.callback = options.callback || Toastify2.defaults.callback;
          this.options.destination = options.destination || Toastify2.defaults.destination;
          this.options.newWindow = options.newWindow || Toastify2.defaults.newWindow;
          this.options.close = options.close || Toastify2.defaults.close;
          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify2.defaults.gravity;
          this.options.positionLeft = options.positionLeft || Toastify2.defaults.positionLeft;
          this.options.position = options.position || Toastify2.defaults.position;
          this.options.backgroundColor = options.backgroundColor || Toastify2.defaults.backgroundColor;
          this.options.avatar = options.avatar || Toastify2.defaults.avatar;
          this.options.className = options.className || Toastify2.defaults.className;
          this.options.stopOnFocus = options.stopOnFocus === void 0 ? Toastify2.defaults.stopOnFocus : options.stopOnFocus;
          this.options.onClick = options.onClick || Toastify2.defaults.onClick;
          this.options.offset = options.offset || Toastify2.defaults.offset;
          this.options.escapeMarkup = options.escapeMarkup !== void 0 ? options.escapeMarkup : Toastify2.defaults.escapeMarkup;
          this.options.ariaLive = options.ariaLive || Toastify2.defaults.ariaLive;
          this.options.style = options.style || Toastify2.defaults.style;
          if (options.backgroundColor) {
            this.options.style.background = options.backgroundColor;
          }
          return this;
        },
        // Building the DOM element
        buildToast: function() {
          if (!this.options) {
            throw "Toastify is not initialized";
          }
          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className;
          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
            } else {
              divElement.className += " toastify-right";
            }
          }
          divElement.className += " " + this.options.gravity;
          if (this.options.backgroundColor) {
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
          }
          for (var property in this.options.style) {
            divElement.style[property] = this.options.style[property];
          }
          if (this.options.ariaLive) {
            divElement.setAttribute("aria-live", this.options.ariaLive);
          }
          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            divElement.appendChild(this.options.node);
          } else {
            if (this.options.escapeMarkup) {
              divElement.innerText = this.options.text;
            } else {
              divElement.innerHTML = this.options.text;
            }
            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;
              avatarElement.className = "toastify-avatar";
              if (this.options.position == "left" || this.options.positionLeft === true) {
                divElement.appendChild(avatarElement);
              } else {
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          }
          if (this.options.close === true) {
            var closeElement = document.createElement("button");
            closeElement.type = "button";
            closeElement.setAttribute("aria-label", "Close");
            closeElement.className = "toast-close";
            closeElement.innerHTML = "&#10006;";
            closeElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                this.removeElement(this.toastElement);
                window.clearTimeout(this.toastElement.timeOutValue);
              }.bind(this)
            );
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              divElement.appendChild(closeElement);
            }
          }
          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self2 = this;
            divElement.addEventListener(
              "mouseover",
              function(event) {
                window.clearTimeout(divElement.timeOutValue);
              }
            );
            divElement.addEventListener(
              "mouseleave",
              function() {
                divElement.timeOutValue = window.setTimeout(
                  function() {
                    self2.removeElement(divElement);
                  },
                  self2.options.duration
                );
              }
            );
          }
          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                if (this.options.newWindow === true) {
                  window.open(this.options.destination, "_blank");
                } else {
                  window.location = this.options.destination;
                }
              }.bind(this)
            );
          }
          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                this.options.onClick();
              }.bind(this)
            );
          }
          if (typeof this.options.offset === "object") {
            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
          }
          return divElement;
        },
        // Displaying the toast
        showToast: function() {
          this.toastElement = this.buildToast();
          var rootElement;
          if (typeof this.options.selector === "string") {
            rootElement = document.getElementById(this.options.selector);
          } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) {
            rootElement = this.options.selector;
          } else {
            rootElement = document.body;
          }
          if (!rootElement) {
            throw "Root element is not defined";
          }
          var elementToInsert = Toastify2.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
          rootElement.insertBefore(this.toastElement, elementToInsert);
          Toastify2.reposition();
          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(
              function() {
                this.removeElement(this.toastElement);
              }.bind(this),
              this.options.duration
            );
          }
          return this;
        },
        hideToast: function() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }
          this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
          toastElement.className = toastElement.className.replace(" on", "");
          window.setTimeout(
            function() {
              if (this.options.node && this.options.node.parentNode) {
                this.options.node.parentNode.removeChild(this.options.node);
              }
              if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
              }
              this.options.callback.call(toastElement);
              Toastify2.reposition();
            }.bind(this),
            400
          );
        }
      };
      Toastify2.reposition = function() {
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15
        };
        var offsetSize = {
          top: 15,
          bottom: 15
        };
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        for (var i = 0; i < allToasts.length; i++) {
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }
          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length - 1);
          var offset2 = 15;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (width <= 360) {
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
            offsetSize[classUsed] += height + offset2;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
              topLeftOffsetSize[classUsed] += height + offset2;
            } else {
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
              topRightOffsetSize[classUsed] += height + offset2;
            }
          }
        }
        return this;
      };
      function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
          if (isNaN(options.offset[axis])) {
            return options.offset[axis];
          } else {
            return options.offset[axis] + "px";
          }
        }
        return "0px";
      }
      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
          return true;
        } else {
          return false;
        }
      }
      Toastify2.lib.init.prototype = Toastify2.lib;
      return Toastify2;
    });
  })(toastify$1);
  return toastify$1.exports;
}
var toastifyExports = requireToastify();
const Toastify = /* @__PURE__ */ getDefaultExportFromCjs(toastifyExports);
const gtBuilder = getGettextBuilder().detectLocale();
[{ "locale": "af", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Afrikaans (https://app.transifex.com/nextcloud/teams/64236/af/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "af", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Afrikaans (https://app.transifex.com/nextcloud/teams/64236/af/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: af\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ar", "json": { "charset": "utf-8", "headers": { "Last-Translator": "abusaud, 2024", "Language-Team": "Arabic (https://app.transifex.com/nextcloud/teams/64236/ar/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ar", "Plural-Forms": "nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nAli <alimahwer@yahoo.com>, 2024\nabusaud, 2024\n" }, "msgstr": ["Last-Translator: abusaud, 2024\nLanguage-Team: Arabic (https://app.transifex.com/nextcloud/teams/64236/ar/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ar\nPlural-Forms: nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" لا يصلح كاسم مجلد.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" غير مسموح به كاسم مجلد'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" غير مسموح به داخل اسم مجلد.'] }, "All files": { "msgid": "All files", "msgstr": ["كل الملفات"] }, "Choose": { "msgid": "Choose", "msgstr": ["إختَر"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["إختر {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["إختَر %n ملف", "إختَر %n ملف", "إختَر %n ملف", "إختَر %n ملفات", "إختَر %n ملف", "إختر %n ملف"] }, "Copy": { "msgid": "Copy", "msgstr": ["نسخ"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["نسخ إلى {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["تعذّر إنشاء المجلد الجديد"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["يتعذّر تحميل إعدادات الملفات"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["تعذر تحميل عرض الملفات"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["إنشاء مجلد"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["محدد العرض الحالي"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["المفضلة"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["الملفات والمجلدات التي تحددها كمفضلة ستظهر هنا."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["الملفات و المجلدات التي قمت مؤخراً بتعديلها سوف تظهر هنا."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["تصفية قائمة الملفات"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["اسم المجلد لا يمكن أن يكون فارغاً."] }, "Home": { "msgid": "Home", "msgstr": ["البداية"] }, "Modified": { "msgid": "Modified", "msgstr": ["التعديل"] }, "Move": { "msgid": "Move", "msgstr": ["نقل"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["نقل إلى {target}"] }, "Name": { "msgid": "Name", "msgstr": ["الاسم"] }, "New": { "msgid": "New", "msgstr": ["جديد"] }, "New folder": { "msgid": "New folder", "msgstr": ["مجلد جديد"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["اسم المجلد الجديد"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["لا توجد ملفات هنا"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["لا توجد ملفات تتطابق مع عامل التصفية الذي وضعته"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["لا توجد ملفات مطابقة"] }, "Recent": { "msgid": "Recent", "msgstr": ["الحالي"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["حدد جميع الإدخالات"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["إختَر المدخل"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["إختر سطر الـ {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["الحجم"] }, "Undo": { "msgid": "Undo", "msgstr": ["تراجع"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["قم برفع بعض المحتوى أو المزامنة مع أجهزتك!"] } } } } }, { "locale": "ast", "json": { "charset": "utf-8", "headers": { "Last-Translator": "enolp <enolp@softastur.org>, 2024", "Language-Team": "Asturian (https://app.transifex.com/nextcloud/teams/64236/ast/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ast", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nenolp <enolp@softastur.org>, 2024\n" }, "msgstr": ["Last-Translator: enolp <enolp@softastur.org>, 2024\nLanguage-Team: Asturian (https://app.transifex.com/nextcloud/teams/64236/ast/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ast\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» ye un nome de carpeta inválidu."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» ye un nome de carpeta inválidu"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["Nun se permite'l caráuter «/» dientro'l nome de les carpetes."] }, "All files": { "msgid": "All files", "msgstr": ["Tolos ficheros"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escoyer"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escoyer «{ficheru}»"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escoyer %n ficheru", "Escoyer %n ficheros"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar en: {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nun se pudo crear la carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nun se pudo cargar la configuración de los ficheros"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nun se pudieron cargar les vistes de los ficheros"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear un direutoriu"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de la vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Equí apaecen los ficheros y les carpetes que metas en Favoritos."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Equí apaecen los fichero y les carpetes que modificares apocayá."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Peñerar la llista de ficheros"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nome de la carpeta nun pue tar baleru."] }, "Home": { "msgid": "Home", "msgstr": ["Aniciu"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificóse"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Nuevu"] }, "New folder": { "msgid": "New folder", "msgstr": ["Carpeta nueva"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nome de carpeta nuevu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Equí nun hai nengún ficheru"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nun s'atopó nengún ficheru que concasare cola peñera."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nun hai nengún ficheru que concase"] }, "Recent": { "msgid": "Recent", "msgstr": ["De recién"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleicionar toles entraes"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleicionar la entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleicionar la filera de: {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamañu"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Xubi dalgún elementu o sincroniza colos tos preseos!"] } } } } }, { "locale": "az", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Azerbaijani (https://app.transifex.com/nextcloud/teams/64236/az/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "az", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Azerbaijani (https://app.transifex.com/nextcloud/teams/64236/az/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: az\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "be", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Belarusian (https://app.transifex.com/nextcloud/teams/64236/be/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "be", "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Belarusian (https://app.transifex.com/nextcloud/teams/64236/be/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: be\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "bg_BG", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Bulgarian (Bulgaria) (https://app.transifex.com/nextcloud/teams/64236/bg_BG/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bg_BG", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Bulgarian (Bulgaria) (https://app.transifex.com/nextcloud/teams/64236/bg_BG/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bg_BG\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "bn_BD", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Bengali (Bangladesh) (https://app.transifex.com/nextcloud/teams/64236/bn_BD/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bn_BD", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Bengali (Bangladesh) (https://app.transifex.com/nextcloud/teams/64236/bn_BD/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bn_BD\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "br", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Breton (https://app.transifex.com/nextcloud/teams/64236/br/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "br", "Plural-Forms": "nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Breton (https://app.transifex.com/nextcloud/teams/64236/br/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: br\nPlural-Forms: nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Disober"] } } } } }, { "locale": "bs", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Bosnian (https://app.transifex.com/nextcloud/teams/64236/bs/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bs", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Bosnian (https://app.transifex.com/nextcloud/teams/64236/bs/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bs\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ca", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Benet Joan Darder <benetj@gmail.com>, 2025", "Language-Team": "Catalan (https://app.transifex.com/nextcloud/teams/64236/ca/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ca", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nv v <e670006006@gmail.com>, 2024\nMarc Riera <marcriera@softcatala.org>, 2024\nSergi Font, 2024\nBenet Joan Darder <benetj@gmail.com>, 2025\n" }, "msgstr": ["Last-Translator: Benet Joan Darder <benetj@gmail.com>, 2025\nLanguage-Team: Catalan (https://app.transifex.com/nextcloud/teams/64236/ca/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ca\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" és un nom de carpeta no vàlid.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no és permès com a nom de carpeta'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no és permès en el nom de carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Tots els fitxers"] }, "Choose": { "msgid": "Choose", "msgstr": ["Tria"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Tria {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Tria %n fitxer", "Tria %n fitxers"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copia"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copia a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No s'ha pogut crear la carpeta nova"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No es poden carregar fitxers de configuració"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No es poden carregar fitxers de vistes"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear directori"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de visualització actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Preferits"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Els fitxers i les carpetes que marqueu com a favorits es mostraran aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Els fitxers i les carpetes recentment modificats es mostraran aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar llistat de fitxers"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nom de la carpeta no pot estar buit."] }, "Home": { "msgid": "Home", "msgstr": ["Inici"] }, "Modified": { "msgid": "Modified", "msgstr": ["Data de modificació"] }, "Move": { "msgid": "Move", "msgstr": ["Desplaça"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Desplaça a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nom"] }, "New": { "msgid": "New", "msgstr": ["Crea"] }, "New folder": { "msgid": "New folder", "msgstr": ["Carpeta nova"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nom de la carpeta nova"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hi ha cap fitxer"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No s'ha trobat cap fitxer que coincideixi amb el filtre."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hi ha cap fitxer que coincideixi"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recents"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecciona totes les entrades"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecciona l'entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecciona la fila per a {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Mida"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfés"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Pugeu contingut o sincronitzeu-lo amb els vostres dispositius!"] } } } } }, { "locale": "cs", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Pavel Borecki <pavel.borecki@gmail.com>, 2020", "Language-Team": "Czech (https://www.transifex.com/nextcloud/teams/64236/cs/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cs", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nPavel Borecki <pavel.borecki@gmail.com>, 2020\n" }, "msgstr": ["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2020\nLanguage-Team: Czech (https://www.transifex.com/nextcloud/teams/64236/cs/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:187" }, "msgstr": ["Zpět"] } } } } }, { "locale": "cs_CZ", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Pavel Borecki <pavel.borecki@gmail.com>, 2024", "Language-Team": "Czech (Czech Republic) (https://app.transifex.com/nextcloud/teams/64236/cs_CZ/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cs_CZ", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nPavel Borecki <pavel.borecki@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2024\nLanguage-Team: Czech (Czech Republic) (https://app.transifex.com/nextcloud/teams/64236/cs_CZ/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs_CZ\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}“ není platný název složky."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}“ není povolený název složky."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["znak „/“ (dopředné lomítko) není možné použít uvnitř názvu složky."] }, "All files": { "msgid": "All files", "msgstr": ["Veškeré soubory"] }, "Choose": { "msgid": "Choose", "msgstr": ["Zvolit"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Zvolit {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Zvolte %n soubor", "Zvolte %n soubory", "Zvolte %n souborů", "Zvolte %n soubory"] }, "Copy": { "msgid": "Copy", "msgstr": ["Zkopírovat"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Zkopírovat do {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Novou složku se nepodařilo vytvořit"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nepodařilo se načíst nastavení pro soubory"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nepodařilo se načíst pohledy souborů"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Vytvořit složku"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Výběr stávajícího zobrazení"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Oblíbené"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Zde se zobrazí soubory a složky, které označíte jako oblíbené."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Zde se zobrazí soubory a složky, které jste nedávno pozměnili."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrovat seznam souborů"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Složku je třeba nějak nazvat."] }, "Home": { "msgid": "Home", "msgstr": ["Domů"] }, "Modified": { "msgid": "Modified", "msgstr": ["Změněno"] }, "Move": { "msgid": "Move", "msgstr": ["Přesounout"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Přesunout do {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Název"] }, "New": { "msgid": "New", "msgstr": ["Nové"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nová složka"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Název pro novou složku"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nejsou zde žádné soubory"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nenalezeny žádné soubory odpovídající vašemu filtru"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Žádné odpovídající soubory"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nedávné"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vybrat všechny položky"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vybrat položku"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vybrat řádek pro {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Velikost"] }, "Undo": { "msgid": "Undo", "msgstr": ["Zpět"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Nahrajte sem nějaký obsah nebo proveďte synchronizaci se svými zařízeními!"] } } } } }, { "locale": "cy_GB", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Welsh (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/cy_GB/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cy_GB", "Plural-Forms": "nplurals=4; plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Welsh (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/cy_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cy_GB\nPlural-Forms: nplurals=4; plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "da", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Martin Bonde <Martin@maboni.dk>, 2024", "Language-Team": "Danish (https://app.transifex.com/nextcloud/teams/64236/da/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "da", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMartin Bonde <Martin@maboni.dk>, 2024\n" }, "msgstr": ["Last-Translator: Martin Bonde <Martin@maboni.dk>, 2024\nLanguage-Team: Danish (https://app.transifex.com/nextcloud/teams/64236/da/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: da\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" er et ugyldigt mappenavn.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" er ikke et tilladt mappenavn'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" er ikke tilladt i et mappenavn.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle filer"] }, "Choose": { "msgid": "Choose", "msgstr": ["Vælg"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Vælg {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Vælg %n fil", "Vælg %n filer"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopier"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopier til {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kunne ikke oprette den nye mappe"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Filindstillingerne kunne ikke indlæses"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kunne ikke indlæse filvisninger"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Opret mappe"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuel visningsvælger"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritter"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Filer og mapper, du markerer som foretrukne, vises her."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Filer og mapper, du for nylig har ændret, vises her."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrer fil liste"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mappenavnet må ikke være tomt."] }, "Home": { "msgid": "Home", "msgstr": ["Hjem"] }, "Modified": { "msgid": "Modified", "msgstr": ["Ændret"] }, "Move": { "msgid": "Move", "msgstr": ["Flyt"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Flyt til {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Navn"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ny mappe"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Ny mappe navn"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Ingen filer here"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Der blev ikke fundet nogen filer, der matcher dit filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ingen matchende filer"] }, "Recent": { "msgid": "Recent", "msgstr": ["Seneste"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vælg alle poster"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vælg post"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vælg rækken for {nodenavn}"] }, "Size": { "msgid": "Size", "msgstr": ["Størelse"] }, "Undo": { "msgid": "Undo", "msgstr": ["Fortryd"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Upload noget indhold eller synkroniser med dine enheder!"] } } } } }, { "locale": "de", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Martin Wilichowski, 2025", "Language-Team": "German (https://app.transifex.com/nextcloud/teams/64236/de/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "de", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nMario Siegmann <mario_siegmann@web.de>, 2023\nMarkus Eckstein, 2023\nAndy Scherzinger <info@andy-scherzinger.de>, 2023\nEttore Atalan <atalanttore@googlemail.com>, 2024\nMartin Wilichowski, 2025\n" }, "msgstr": ["Last-Translator: Martin Wilichowski, 2025\nLanguage-Team: German (https://app.transifex.com/nextcloud/teams/64236/de/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" ist ein ungültiger Ordnername.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ist kein zulässiger Ordnername'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ist innerhalb eines Ordnernamens nicht zulässig.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle Dateien"] }, "Choose": { "msgid": "Choose", "msgstr": ["Auswählen"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} auswählen"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n Datei auswählen", "%n Dateien auswählen"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopieren"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Nach {target} kopieren"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Der neue Ordner konnte nicht erstellt werden"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Dateieinstellungen konnten nicht geladen werden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Dateiansichten konnten nicht geladen werden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Verzeichnis erstellen"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuelle Ansichtsauswahl"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoriten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Dateien und Ordner, die du als Favorit markierst, werden hier angezeigt."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Dateien und Ordner, die du kürzlich geändert hast, werden hier angezeigt."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Dateiliste filtern"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Der Ordnername darf nicht leer sein."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Geändert"] }, "Move": { "msgid": "Move", "msgstr": ["Verschieben"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Nach {target} verschieben"] }, "Name": { "msgid": "Name", "msgstr": ["Name"] }, "New": { "msgid": "New", "msgstr": ["Neu"] }, "New folder": { "msgid": "New folder", "msgstr": ["Neuer Ordner"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Neuer Ordnername"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Hier sind keine Dateien"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Es wurden keine Dateien gefunden, die deinem Filter entsprechen."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Keine passenden Dateien"] }, "Recent": { "msgid": "Recent", "msgstr": ["Neueste"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Alle Einträge auswählen"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Eintrag auswählen"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Die Zeile für {nodename} auswählen."] }, "Size": { "msgid": "Size", "msgstr": ["Größe"] }, "Undo": { "msgid": "Undo", "msgstr": ["Rückgängig machen"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Lade Inhalte hoch oder synchronisiere diese mit deinen Geräten!"] } } } } }, { "locale": "de_DE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Mario Siegmann <mario_siegmann@web.de>, 2024", "Language-Team": "German (Germany) (https://app.transifex.com/nextcloud/teams/64236/de_DE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "de_DE", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMark Ziegler <mark.ziegler@rakekniven.de>, 2023\nMario Siegmann <mario_siegmann@web.de>, 2024\n" }, "msgstr": ["Last-Translator: Mario Siegmann <mario_siegmann@web.de>, 2024\nLanguage-Team: German (Germany) (https://app.transifex.com/nextcloud/teams/64236/de_DE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de_DE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" ist ein ungültiger Ordnername.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ist kein zulässiger Ordnername'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ist innerhalb eines Ordnernamens nicht zulässig.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle Dateien"] }, "Choose": { "msgid": "Choose", "msgstr": ["Auswählen"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} auswählen"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n Datei auswählen", "%n Dateien auswählen"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopieren"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Nach {target} kopieren"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Der neue Ordner konnte nicht erstellt werden"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Dateieinstellungen konnten nicht geladen werden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Dateiansichten konnten nicht geladen werden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Verzeichnis erstellen"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuelle Ansichtsauswahl"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoriten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Dateien und Ordner, die Sie als Favorit markieren, werden hier angezeigt."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Dateien und Ordner, die Sie kürzlich geändert haben, werden hier angezeigt."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Dateiliste filtern"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Der Ordnername darf nicht leer sein."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Geändert"] }, "Move": { "msgid": "Move", "msgstr": ["Verschieben"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Nach {target} verschieben"] }, "Name": { "msgid": "Name", "msgstr": ["Name"] }, "New": { "msgid": "New", "msgstr": ["Neu"] }, "New folder": { "msgid": "New folder", "msgstr": ["Neuer Ordner"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Neuer Ordnername"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Hier sind keine Dateien"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Es wurden keine Dateien gefunden, die Ihrem Filter entsprechen."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Keine passenden Dateien"] }, "Recent": { "msgid": "Recent", "msgstr": ["Neueste"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Alle Einträge auswählen"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Eintrag auswählen"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Die Zeile für {nodename} auswählen."] }, "Size": { "msgid": "Size", "msgstr": ["Größe"] }, "Undo": { "msgid": "Undo", "msgstr": ["Rückgängig machen"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Laden Sie Inhalte hoch oder synchronisieren Sie diese mit Ihren Geräten!"] } } } } }, { "locale": "el", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Efstathios Iosifidis <iefstathios@gmail.com>, 2025", "Language-Team": "Greek (https://app.transifex.com/nextcloud/teams/64236/el/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "el", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nEfstathios Iosifidis <iefstathios@gmail.com>, 2025\n" }, "msgstr": ["Last-Translator: Efstathios Iosifidis <iefstathios@gmail.com>, 2025\nLanguage-Team: Greek (https://app.transifex.com/nextcloud/teams/64236/el/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: el\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['Το "{name}" δεν είναι έγκυρο όνομα φακέλου.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['Το "{name}" δεν είναι επιτρεπτό όνομα φακέλου'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['Το "/" δεν επιτρέπεται μέσα στο όνομα ενός φακέλου.'] }, "All files": { "msgid": "All files", "msgstr": ["Όλα τα αρχεία"] }, "Choose": { "msgid": "Choose", "msgstr": ["Επιλογή"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Επιλέξτε {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Επιλέξτε %n αρχείο", "Επιλέξτε %n αρχεία"] }, "Copy": { "msgid": "Copy", "msgstr": ["Αντιγραφή"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Αντιγραφή στο {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Αδυναμία δημιουργίας νέου φακέλου"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Αδυναμία φόρτωσης ρυθμίσεων αρχείων"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Αδυναμία φόρτωσης προβολών αρχείων"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Δημιουργία καταλόγου"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Επιλογέας τρέχουσας προβολής"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Αγαπημένα"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Τα αρχεία και οι φάκελοι που επισημάνετε ως αγαπημένα θα εμφανίζονται εδώ."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Τα αρχεία και οι φάκελοι που τροποποιήσατε πρόσφατα θα εμφανίζονται εδώ."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Φιλτράρισμα λίστας αρχείων"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Το όνομα του φακέλου δεν μπορεί να είναι κενό."] }, "Home": { "msgid": "Home", "msgstr": ["Αρχική"] }, "Modified": { "msgid": "Modified", "msgstr": ["Τροποποιήθηκε"] }, "Move": { "msgid": "Move", "msgstr": ["Μετακίνηση"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Μετακίνηση στο {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Όνομα"] }, "New": { "msgid": "New", "msgstr": ["Νέο"] }, "New folder": { "msgid": "New folder", "msgstr": ["Νέος φάκελος"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Όνομα νέου φακέλου"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Δεν υπάρχουν αρχεία εδώ"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Δεν βρέθηκαν αρχεία που να ταιριάζουν με το φίλτρο σας."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Κανένα αρχείο δεν ταιριάζει"] }, "Recent": { "msgid": "Recent", "msgstr": ["Πρόσφατα"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Επιλογή όλων των εγγραφών"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Επιλογή εγγραφής"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Επιλέξτε τη γραμμή για το {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Μέγεθος"] }, "Undo": { "msgid": "Undo", "msgstr": ["Αναίρεση"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Ανεβάστε κάποιο περιεχόμενο ή συγχρονίστε με τις συσκευές σας!"] } } } } }, { "locale": "en_GB", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Andi Chandler <andi@gowling.com>, 2024", "Language-Team": "English (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/en_GB/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "en_GB", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nCafé Tango, 2023\nAndi Chandler <andi@gowling.com>, 2024\n" }, "msgstr": ["Last-Translator: Andi Chandler <andi@gowling.com>, 2024\nLanguage-Team: English (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/en_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: en_GB\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" is an invalid folder name.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" is not an allowed folder name'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" is not allowed inside a folder name.'] }, "All files": { "msgid": "All files", "msgstr": ["All files"] }, "Choose": { "msgid": "Choose", "msgstr": ["Choose"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Choose {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Choose %n file", "Choose %n files"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copy"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copy to {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Could not create the new folder"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Could not load files settings"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Could not load files views"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Create directory"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Current view selector"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favourites"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Files and folders you mark as favourite will show up here."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Files and folders you recently modified will show up here."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter file list"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Folder name cannot be empty."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modified"] }, "Move": { "msgid": "Move", "msgstr": ["Move"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Move to {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Name"] }, "New": { "msgid": "New", "msgstr": ["New"] }, "New folder": { "msgid": "New folder", "msgstr": ["New folder"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["New folder name"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No files in here"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No files matching your filter were found."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No matching files"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recent"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Select all entries"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Select entry"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Select the row for {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Size"] }, "Undo": { "msgid": "Undo", "msgstr": ["Undo"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Upload some content or sync with your devices!"] } } } } }, { "locale": "eo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Esperanto (https://app.transifex.com/nextcloud/teams/64236/eo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "eo", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Esperanto (https://app.transifex.com/nextcloud/teams/64236/eo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Malfari"] } } } } }, { "locale": "es", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Julio C. Ortega, 2024", "Language-Team": "Spanish (https://app.transifex.com/nextcloud/teams/64236/es/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nFranciscoFJ <dev-ooo@satel-sa.com>, 2023\nMark Ziegler <mark.ziegler@rakekniven.de>, 2024\nJulio C. Ortega, 2024\n" }, "msgstr": ["Last-Translator: Julio C. Ortega, 2024\nLanguage-Team: Spanish (https://app.transifex.com/nextcloud/teams/64236/es/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" es un nombre de carpeta no válido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no es un nombre de carpeta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no está permitido dentro del nombre de una carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos los archivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Seleccionar"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Seleccionar {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Elige %n archivo", "Elige %n archivos", "Seleccione %n archivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No se pudo crear la nueva carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No se pudieron cargar los ajustes de archivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No se pudieron cargar las vistas de los archivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear directorio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Los archivos y carpetas que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Los archivos y carpetas que modificó recientemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de archivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nombre de la carpeta no puede estar vacío."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nombre"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New folder": { "msgid": "New folder", "msgstr": [" Nueva carpeta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nuevo nombre de carpeta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hay archivos aquí"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No se encontraron archivos que coincidiesen con su filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hay archivos coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Reciente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas las entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccione la fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Deshacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Cargue algún contenido o sincronice con sus dispositivos!"] } } } } }, { "locale": "es_419", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Latin America) (https://app.transifex.com/nextcloud/teams/64236/es_419/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_419", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Latin America) (https://app.transifex.com/nextcloud/teams/64236/es_419/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_419\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_AR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Matías Campo Hoet <matiascampo@gmail.com>, 2024", "Language-Team": "Spanish (Argentina) (https://app.transifex.com/nextcloud/teams/64236/es_AR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_AR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMatías Campo Hoet <matiascampo@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Matías Campo Hoet <matiascampo@gmail.com>, 2024\nLanguage-Team: Spanish (Argentina) (https://app.transifex.com/nextcloud/teams/64236/es_AR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_AR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" es un nombre de carpeta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no es un nombre de carpeta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no está permitido en el nombre de una carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos los archivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Elegir"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Elija {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Elija %n archivo", "Elija %n archivos", "Elija %n archivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No se pudo crear la nueva carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No se pudo cargar la configuración de archivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No se pudieron cargar las vistas de los archivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear directorio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Los archivos y carpetas que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Los archivos y carpetas que modificó recientemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de archivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nombre de la carpeta no puede estar vacío."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nombre"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nueva carpeta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nombre de nueva carpeta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hay archivos aquí"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No se encontraron archivos que coincidan con su filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hay archivos coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Reciente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas las entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccione la fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Deshacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Cargue algún contenido o sincronice con sus dispositivos!"] } } } } }, { "locale": "es_CL", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Chile) (https://app.transifex.com/nextcloud/teams/64236/es_CL/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CL", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Chile) (https://app.transifex.com/nextcloud/teams/64236/es_CL/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CL\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_CO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Colombia) (https://app.transifex.com/nextcloud/teams/64236/es_CO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CO", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Colombia) (https://app.transifex.com/nextcloud/teams/64236/es_CO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CO\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_CR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Costa Rica) (https://app.transifex.com/nextcloud/teams/64236/es_CR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Costa Rica) (https://app.transifex.com/nextcloud/teams/64236/es_CR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_DO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Dominican Republic) (https://app.transifex.com/nextcloud/teams/64236/es_DO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_DO", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Dominican Republic) (https://app.transifex.com/nextcloud/teams/64236/es_DO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_DO\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_EC", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Ecuador) (https://app.transifex.com/nextcloud/teams/64236/es_EC/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_EC", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Ecuador) (https://app.transifex.com/nextcloud/teams/64236/es_EC/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_EC\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_GT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Guatemala) (https://app.transifex.com/nextcloud/teams/64236/es_GT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_GT", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Guatemala) (https://app.transifex.com/nextcloud/teams/64236/es_GT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_GT\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_HN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Honduras) (https://app.transifex.com/nextcloud/teams/64236/es_HN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_HN", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Honduras) (https://app.transifex.com/nextcloud/teams/64236/es_HN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_HN\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_MX", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Jehu Marcos Herrera Puentes, 2024", "Language-Team": "Spanish (Mexico) (https://app.transifex.com/nextcloud/teams/64236/es_MX/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_MX", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJehu Marcos Herrera Puentes, 2024\n" }, "msgstr": ["Last-Translator: Jehu Marcos Herrera Puentes, 2024\nLanguage-Team: Spanish (Mexico) (https://app.transifex.com/nextcloud/teams/64236/es_MX/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_MX\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" es un nombre de carpeta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no es un nombre de carpeta permitido.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no está permitido en el nombre de la carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos los archivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Seleccionar"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Seleccionar {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Seleccionar %n archivo", "Seleccionar %n archivos", "Seleccionar %n archivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No se pudo crear la nueva carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No se pudo cargar la configuración de archivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No se pudieron cargar las vistas de los archivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear carpeta"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Los archivos y carpetas que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Los archivos y carpetas que modificó recientemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de archivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nombre de la carpeta no puede estar vacío."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nombre"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nueva carpeta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nombre de nueva carpeta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hay archivos aquí"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No se encontraron archivos que coincidan con su filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hay archivos coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Reciente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas las entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccione la fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Deshacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Suba algún contenido o sincronice con sus dispositivos!"] } } } } }, { "locale": "es_NI", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Nicaragua) (https://app.transifex.com/nextcloud/teams/64236/es_NI/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_NI", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Nicaragua) (https://app.transifex.com/nextcloud/teams/64236/es_NI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_NI\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PA", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Panama) (https://app.transifex.com/nextcloud/teams/64236/es_PA/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PA", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Panama) (https://app.transifex.com/nextcloud/teams/64236/es_PA/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PA\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Peru) (https://app.transifex.com/nextcloud/teams/64236/es_PE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PE", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Peru) (https://app.transifex.com/nextcloud/teams/64236/es_PE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PE\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Puerto Rico) (https://app.transifex.com/nextcloud/teams/64236/es_PR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Puerto Rico) (https://app.transifex.com/nextcloud/teams/64236/es_PR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Paraguay) (https://app.transifex.com/nextcloud/teams/64236/es_PY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PY", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Paraguay) (https://app.transifex.com/nextcloud/teams/64236/es_PY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PY\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_SV", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (El Salvador) (https://app.transifex.com/nextcloud/teams/64236/es_SV/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_SV", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (El Salvador) (https://app.transifex.com/nextcloud/teams/64236/es_SV/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_SV\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_UY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Uruguay) (https://app.transifex.com/nextcloud/teams/64236/es_UY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_UY", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Uruguay) (https://app.transifex.com/nextcloud/teams/64236/es_UY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_UY\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "et_EE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Priit Jõerüüt <transifex@joeruut.com>, 2025", "Language-Team": "Estonian (Estonia) (https://app.transifex.com/nextcloud/teams/64236/et_EE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "et_EE", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nMait R, 2023\nPriit Jõerüüt <transifex@joeruut.com>, 2025\n" }, "msgstr": ["Last-Translator: Priit Jõerüüt <transifex@joeruut.com>, 2025\nLanguage-Team: Estonian (Estonia) (https://app.transifex.com/nextcloud/teams/64236/et_EE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: et_EE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}“ on vigane kaustanimi"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}“ pole kausta nimes lubatud"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/“ pole kausta nimes lubatud."] }, "All files": { "msgid": "All files", "msgstr": ["Kõik failid"] }, "Choose": { "msgid": "Choose", "msgstr": ["Tee valik"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Vali {file} fail"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Vali %n fail", "Vali %n faili"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopeeri"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopeeri sihtkohta {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Uut kausta ei saanud luua"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Failide seadistusi ei õnnestunud laadida"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Failide vaatamiskordi ei õnnestunud laadida"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Kataloogi loomine"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Praeguse vaate valija"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Lemmikud"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Failid ja kaustad, mida märgistad lemmikuks, kuvatakse siin."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Siin kuvatakse hiljuti muudetud failid ja kaustad."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtreeri faililoendit"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Kausta nimi ei saa olla tühi."] }, "Home": { "msgid": "Home", "msgstr": ["Avaleht"] }, "Modified": { "msgid": "Modified", "msgstr": ["Muudetud"] }, "Move": { "msgid": "Move", "msgstr": ["Teisalda"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Teisalda kausta {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nimi"] }, "New": { "msgid": "New", "msgstr": ["Uus"] }, "New folder": { "msgid": "New folder", "msgstr": ["Uus kaust"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Uue kausta nimi"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Siin puuduvad failid"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Sinu filtrile vastavaid faile ei leidunud."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Puuduvad sobivad failid"] }, "Recent": { "msgid": "Recent", "msgstr": ["Hiljutine"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vali kõik kirjed"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vali kirje"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vali rida „{nodename}“ jaoks"] }, "Size": { "msgid": "Size", "msgstr": ["Suurus"] }, "Undo": { "msgid": "Undo", "msgstr": ["Tühista"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Lisa mingit sisu või sünkroniseeri see oma seadmestest!"] } } } } }, { "locale": "eu", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Basque (https://app.transifex.com/nextcloud/teams/64236/eu/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "eu", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Basque (https://app.transifex.com/nextcloud/teams/64236/eu/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eu\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Desegin"] } } } } }, { "locale": "fa", "json": { "charset": "utf-8", "headers": { "Last-Translator": "reza reza <forghan89@yahoo.com>, 2024", "Language-Team": "Persian (https://app.transifex.com/nextcloud/teams/64236/fa/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fa", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nAmir Shekoohi, 2024\nreza reza <forghan89@yahoo.com>, 2024\n" }, "msgstr": ["Last-Translator: reza reza <forghan89@yahoo.com>, 2024\nLanguage-Team: Persian (https://app.transifex.com/nextcloud/teams/64236/fa/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fa\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["{name} نام پوشه معتبر نیست"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["{name} نام پوشه مجاز نیست"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" نمی‌تواند در نام پوشه استفاده شود.'] }, "All files": { "msgid": "All files", "msgstr": ["همه فایل‌ها"] }, "Choose": { "msgid": "Choose", "msgstr": ["انتخاب"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["انتخاب {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["انتخاب %n فایل", "انتخاب %n فایل"] }, "Copy": { "msgid": "Copy", "msgstr": ["رونوشت"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["رونوشت از {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["پوشه جدید ایجاد نشد"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["تنظیمات فایل باز نشد"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["نمای فایل‌ها بارگیری نشد"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["ایجاد فهرست"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["انتخابگر نماگر فعلی"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["علایق"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["فایل‌ها و پوشه‌هایی که به‌عنوان مورد علاقه علامت‌گذاری می‌کنید در اینجا نشان داده می‌شوند."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["فایل‌ها و پوشه‌هایی که اخیراً تغییر داده‌اید در اینجا نمایش داده می‌شوند."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["فیلتر لیست فایل"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["نام پوشه نمی تواند خالی باشد."] }, "Home": { "msgid": "Home", "msgstr": ["خانه"] }, "Modified": { "msgid": "Modified", "msgstr": ["اصلاح شده"] }, "Move": { "msgid": "Move", "msgstr": ["انتقال"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["انتقال به {target}"] }, "Name": { "msgid": "Name", "msgstr": ["نام"] }, "New": { "msgid": "New", "msgstr": ["جدید"] }, "New folder": { "msgid": "New folder", "msgstr": ["پوشه جدید"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["نام پوشه جدید"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["فایلی اینجا نیست"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["هیچ فایلی مطابق با فیلتر شما یافت نشد."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["فایل منطبقی وجود ندارد"] }, "Recent": { "msgid": "Recent", "msgstr": ["اخیر"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["انتخاب همه ورودی ها"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["انتخاب ورودی"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["انتخاب ردیف برای {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["اندازه"] }, "Undo": { "msgid": "Undo", "msgstr": ["بازگردانی"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["مقداری محتوا آپلود کنید یا با دستگاه های خود همگام سازی کنید!"] } } } } }, { "locale": "fi_FI", "json": { "charset": "utf-8", "headers": { "Last-Translator": "thingumy, 2024", "Language-Team": "Finnish (Finland) (https://app.transifex.com/nextcloud/teams/64236/fi_FI/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fi_FI", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJiri Grönroos <jiri.gronroos@iki.fi>, 2024\nthingumy, 2024\n" }, "msgstr": ["Last-Translator: thingumy, 2024\nLanguage-Team: Finnish (Finland) (https://app.transifex.com/nextcloud/teams/64236/fi_FI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fi_FI\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" on virheellinen kansion nimi.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ei ole sallittu kansion nimi'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ei ole sallittu kansion nimessä.'] }, "All files": { "msgid": "All files", "msgstr": ["Kaikki tiedostot"] }, "Choose": { "msgid": "Choose", "msgstr": ["Valitse"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Valitse {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Valitse %n tiedosto", "Valitse %n tiedostoa"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopioi"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopioi sijaintiin {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Uutta kansiota ei voitu luoda"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Tiedoston asetuksia ei saa ladattua"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Tiedoston näkymiä ei saa ladattua"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Luo kansio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Nykyisen näkymän valinta"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Suosikit"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Tiedostot ja kansiot, jotka merkitset suosikkeihisi, näkyvät täällä."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Tiedostot ja kansiot, joita muokkasit äskettäin, näkyvät täällä."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Suodata tiedostolistaa"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Kansion nimi ei voi olla tyhjä."] }, "Home": { "msgid": "Home", "msgstr": ["Koti"] }, "Modified": { "msgid": "Modified", "msgstr": ["Muokattu"] }, "Move": { "msgid": "Move", "msgstr": ["Siirrä"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Siirrä sijaintiin {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nimi"] }, "New": { "msgid": "New", "msgstr": ["Uusi"] }, "New folder": { "msgid": "New folder", "msgstr": ["Uusi kansio"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Uuden kansion nimi"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Täällä ei ole tiedostoja"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Suodatinta vastaavia tiedostoja ei löytynyt."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ei vastaavia tiedostoja"] }, "Recent": { "msgid": "Recent", "msgstr": ["Viimeisimmät"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Valitse kaikki tietueet"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Valitse tietue"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Valitse rivi {nodename}:lle"] }, "Size": { "msgid": "Size", "msgstr": ["Koko"] }, "Undo": { "msgid": "Undo", "msgstr": ["Kumoa"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Lähetä jotain sisältöä tai synkronoi laitteidesi kanssa!"] } } } } }, { "locale": "fo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Faroese (https://app.transifex.com/nextcloud/teams/64236/fo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fo", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Faroese (https://app.transifex.com/nextcloud/teams/64236/fo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "fr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "DEV314R, 2024", "Language-Team": "French (https://app.transifex.com/nextcloud/teams/64236/fr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fr", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nRémi LEBLOND, 2023\nMordecai, 2023\nfleopaulD, 2023\nFrançois Ch., 2024\nJérôme HERBINET, 2024\nBenoit Pruneau, 2024\nDEV314R, 2024\n" }, "msgstr": ["Last-Translator: DEV314R, 2024\nLanguage-Team: French (https://app.transifex.com/nextcloud/teams/64236/fr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fr\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": [`"{name}" n'est pas un nom de dossier valide.`] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": [`"{name}" n'est pas un nom de dossier autorisé.`] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["Le caractère « / » n'est pas autorisé dans un nom de dossier."] }, "All files": { "msgid": "All files", "msgstr": ["Tous les fichiers"] }, "Choose": { "msgid": "Choose", "msgstr": ["Choisir"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Choisir {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Choisir %n fichier", "Choisir %n fichiers", "Choisir %n fichiers "] }, "Copy": { "msgid": "Copy", "msgstr": ["Copier"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copier vers {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Impossible de créer le nouveau dossier"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Les paramètres des fichiers n'ont pas pu être chargés"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Les aperçus des fichiers n'ont pas pu être chargés"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Créer un répertoire"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Sélecteur de vue courante"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoris"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Les fichiers et répertoires marqués en favoris apparaîtront ici."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Les fichiers et répertoires modifiés récemment apparaîtront ici."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrer la liste des fichiers"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Le nom du dossier ne peut pas être vide."] }, "Home": { "msgid": "Home", "msgstr": ["Accueil"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modifié"] }, "Move": { "msgid": "Move", "msgstr": ["Déplacer"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Déplacer vers {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nom"] }, "New": { "msgid": "New", "msgstr": ["Nouveau"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nouveau répertoire"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nom du nouveau répertoire"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Aucun fichier ici"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Aucun fichier trouvé correspondant à votre filtre."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Aucun fichier trouvé"] }, "Recent": { "msgid": "Recent", "msgstr": ["Récents"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Tous sélectionner"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Sélectionner une entrée"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Sélectionner l'enregistrement pour {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Taille"] }, "Undo": { "msgid": "Undo", "msgstr": ["Rétablir"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Charger du contenu ou synchroniser avec vos équipements !"] } } } } }, { "locale": "ga", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Aindriú Mac Giolla Eoin, 2024", "Language-Team": "Irish (https://app.transifex.com/nextcloud/teams/64236/ga/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ga", "Plural-Forms": "nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nAindriú Mac Giolla Eoin, 2024\n" }, "msgstr": ["Last-Translator: Aindriú Mac Giolla Eoin, 2024\nLanguage-Team: Irish (https://app.transifex.com/nextcloud/teams/64236/ga/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ga\nPlural-Forms: nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['Is ainm fillteáin neamhbhailí é "{name}".'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['Ní ainm fillteáin ceadaithe é "{name}".'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": [`Ní cheadaítear "/" taobh istigh d'ainm fillteáin.`] }, "All files": { "msgid": "All files", "msgstr": ["Gach comhad"] }, "Choose": { "msgid": "Choose", "msgstr": ["Roghnaigh"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Roghnaigh {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Roghnaigh %n comhad", "Roghnaigh %n comhaid", "Roghnaigh %n comhaid", "Roghnaigh %n comhaid", "Roghnaigh %n comhaid"] }, "Copy": { "msgid": "Copy", "msgstr": ["Cóip"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Cóipeáil chuig {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Níorbh fhéidir an fillteán nua a chruthú"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Níorbh fhéidir socruithe comhaid a lódáil"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Níorbh fhéidir radhairc comhad a lódáil"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Cruthaigh eolaire"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Roghnóir amhairc reatha"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Ceanáin"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Taispeánfar comhaid agus fillteáin a mharcálann tú mar is fearr leat anseo."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Taispeánfar comhaid agus fillteáin a d'athraigh tú le déanaí anseo."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Scag liosta comhad"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Ní féidir ainm fillteáin a bheith folamh."] }, "Home": { "msgid": "Home", "msgstr": ["Baile"] }, "Modified": { "msgid": "Modified", "msgstr": ["Athraithe"] }, "Move": { "msgid": "Move", "msgstr": ["Bog"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Bog go{target}"] }, "Name": { "msgid": "Name", "msgstr": ["Ainm"] }, "New": { "msgid": "New", "msgstr": ["Nua"] }, "New folder": { "msgid": "New folder", "msgstr": ["Fillteán nua"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Ainm fillteáin nua"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Níl aon chomhaid istigh anseo"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Níor aimsíodh aon chomhad a tháinig le do scagaire."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Gan comhaid meaitseála"] }, "Recent": { "msgid": "Recent", "msgstr": ["le déanaí"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Roghnaigh gach iontráil"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Roghnaigh iontráil"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Roghnaigh an ró do {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Méid"] }, "Undo": { "msgid": "Undo", "msgstr": ["Cealaigh"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Uaslódáil roinnt ábhair nó sioncronaigh le do ghléasanna!"] } } } } }, { "locale": "gd", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Gaelic, Scottish (https://app.transifex.com/nextcloud/teams/64236/gd/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "gd", "Plural-Forms": "nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Gaelic, Scottish (https://app.transifex.com/nextcloud/teams/64236/gd/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gd\nPlural-Forms: nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "gl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Miguel Anxo Bouzada <mbouzada@gmail.com>, 2024", "Language-Team": "Galician (https://app.transifex.com/nextcloud/teams/64236/gl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "gl", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMiguel Anxo Bouzada <mbouzada@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Miguel Anxo Bouzada <mbouzada@gmail.com>, 2024\nLanguage-Team: Galician (https://app.transifex.com/nextcloud/teams/64236/gl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» non é un nome de cartafol válido."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» non é un nome de cartafol permitido"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["A «/» non está permitida no nome dun cartafol."] }, "All files": { "msgid": "All files", "msgstr": ["Todos os ficheiros"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escoller"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escoller {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escoller %n ficheiro", "Escoller %n ficheiros"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar en  {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Non foi posíbel crear o novo cartafol"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Non foi posíbel cargar os axustes dos ficheiros"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Non foi posíbel cargar as vistas dos ficheiros"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear un directorio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Os ficheiros e cartafoles que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Os ficheiros e cartafoles que modificou recentemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar a lista de ficheiros"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["O nome do cartafol non pode estar baleiro."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover cara a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Novo cartafol"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Novo nome do cartafol"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Aquí non hai ficheiros"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Non se atopou ningún ficheiro que coincida co filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Non hai ficheiros coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas as entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar a entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccionar a fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Enviar algún contido ou sincronizalo cos seus dispositivos!"] } } } } }, { "locale": "he", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Hebrew (https://app.transifex.com/nextcloud/teams/64236/he/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "he", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Hebrew (https://app.transifex.com/nextcloud/teams/64236/he/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: he\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["ביטול"] } } } } }, { "locale": "hi_IN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Hindi (India) (https://app.transifex.com/nextcloud/teams/64236/hi_IN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hi_IN", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Hindi (India) (https://app.transifex.com/nextcloud/teams/64236/hi_IN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hi_IN\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "hr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Croatian (https://app.transifex.com/nextcloud/teams/64236/hr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hr", "Plural-Forms": "nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Croatian (https://app.transifex.com/nextcloud/teams/64236/hr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hr\nPlural-Forms: nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "hsb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Upper Sorbian (https://app.transifex.com/nextcloud/teams/64236/hsb/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hsb", "Plural-Forms": "nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Upper Sorbian (https://app.transifex.com/nextcloud/teams/64236/hsb/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hsb\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "hu_HU", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Gyuris Gellért <jobel@ujevangelizacio.hu>, 2024", "Language-Team": "Hungarian (Hungary) (https://app.transifex.com/nextcloud/teams/64236/hu_HU/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hu_HU", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nFőnyedi Áron <sajtman@gmail.com>, 2023\nGyuris Gellért <jobel@ujevangelizacio.hu>, 2024\n" }, "msgstr": ["Last-Translator: Gyuris Gellért <jobel@ujevangelizacio.hu>, 2024\nLanguage-Team: Hungarian (Hungary) (https://app.transifex.com/nextcloud/teams/64236/hu_HU/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hu_HU\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}” érvénytelen mappanév."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}” nem engedélyezett mappanév"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/” jel nem szerepelhet mappa nevében."] }, "All files": { "msgid": "All files", "msgstr": ["Minden fájl"] }, "Choose": { "msgid": "Choose", "msgstr": ["Kiválasztás"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} kiválasztása"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n fájl kiválasztása", "%n fájl kiválasztása"] }, "Copy": { "msgid": "Copy", "msgstr": ["Másolás"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Másolás ide: {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Az új mappa létrehozása nem lehetséges"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Fájlbeállítások betöltése nem lehetséges"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Fájlnézetek betöltése nem lehetséges"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Mappa létrehozása"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Jelenlegi nézet választó"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Kedvencek"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["A kedvencként megjelölt fájlok és mappák itt jelennek meg."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["A nemrég módosított fájlok és mappák itt jelennek meg."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Fájl lista szűrése"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["A mappa neve nem lehet üres."] }, "Home": { "msgid": "Home", "msgstr": ["Kezdőlap"] }, "Modified": { "msgid": "Modified", "msgstr": ["Módosítva"] }, "Move": { "msgid": "Move", "msgstr": ["Mozgatás"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mozgatás ide: {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Név"] }, "New": { "msgid": "New", "msgstr": ["Új"] }, "New folder": { "msgid": "New folder", "msgstr": ["Új mappa"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Új mappa név"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Itt nincsenek fájlok"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nincs a szűrési feltételeknek megfelelő fájl."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nincs ilyen fájl"] }, "Recent": { "msgid": "Recent", "msgstr": ["Gyakori"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Minden bejegyzés kijelölése"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Bejegyzés kijelölése"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Válassz sort a következőnek: {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Méret"] }, "Undo": { "msgid": "Undo", "msgstr": ["Visszavonás"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Tölts fel tartalmat vagy szinkronizálj az eszközeiddel!"] } } } } }, { "locale": "hy", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sos Aghamiryan <sosavagh@gmail.com>, 2025", "Language-Team": "Armenian (https://app.transifex.com/nextcloud/teams/64236/hy/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hy", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nSos Aghamiryan <sosavagh@gmail.com>, 2025\n" }, "msgstr": ["Last-Translator: Sos Aghamiryan <sosavagh@gmail.com>, 2025\nLanguage-Team: Armenian (https://app.transifex.com/nextcloud/teams/64236/hy/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hy\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["{name} սխալ թղթապանակի անվանում է"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["{name} համարվում է անթույլատրելի թղթապանակի անվանում"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["/ չի թույլատրվում օգտագործել անվանման մեջ"] }, "All files": { "msgid": "All files", "msgstr": ["Բոլոր ֆայլերը"] }, "Choose": { "msgid": "Choose", "msgstr": ["Ընտրել"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Ընտրել {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Ընտրել %n ֆայլ", "Ընտրել %n ֆայլեր"] }, "Copy": { "msgid": "Copy", "msgstr": ["Պատճենել"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Պատճենել {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Չստացվեց ստեղծել նոր թղթապանակը"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Չստացվեց բեռնել ֆայլի կարգավորումները"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Չստացվեց բեռնել ֆայլերի դիտումները"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Ստեղծել դիրեկտորիա"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Ընթացիկ դիտման ընտրիչ"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Նախընտրելիներ"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Այստեղ կցուցադրվեն այն ֆայլերն ու պանակները, որոնք դուք նշել եք որպես նախընտրելիներ:"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Այստեղ կցուցադրվեն այն ֆայլերն ու պանակները, որոնք վերջերս փոխել եք:"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Ֆիլտրել ֆայլերի ցուցակը"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Թղթապանակի անունը չի կարող դատարկ լինել:"] }, "Home": { "msgid": "Home", "msgstr": ["Սկիզբ"] }, "Modified": { "msgid": "Modified", "msgstr": ["Փոփոխված"] }, "Move": { "msgid": "Move", "msgstr": ["Տեղափոխել"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Տեղափոխել {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Անուն"] }, "New": { "msgid": "New", "msgstr": ["Նոր"] }, "New folder": { "msgid": "New folder", "msgstr": ["Նոր թղթապանակ"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Նոր թղթապանակի անվանում"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Այստեղ չկան ֆայլեր"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Ձեր ֆիլտրին համապատասխանող ֆայլերը չեն գտնվել:"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Չկան համապատասխան ֆայլեր"] }, "Recent": { "msgid": "Recent", "msgstr": ["Վերջին"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Ընտրել բոլոր գրառումները"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Ընտրել բոլոր գրառումը"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Ընտրեք տողը {nodename}-ի համար "] }, "Size": { "msgid": "Size", "msgstr": ["Չափ"] }, "Undo": { "msgid": "Undo", "msgstr": ["Ետարկել"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Ներբեռնեք որոշ բովանդակություն կամ համաժամացրեք այն ձեր սարքերի հետ:"] } } } } }, { "locale": "ia", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Interlingua (https://app.transifex.com/nextcloud/teams/64236/ia/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ia", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Interlingua (https://app.transifex.com/nextcloud/teams/64236/ia/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ia\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "id", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Lun May, 2024", "Language-Team": "Indonesian (https://app.transifex.com/nextcloud/teams/64236/id/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "id", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nLinerly <linerly@proton.me>, 2023\nLun May, 2024\n" }, "msgstr": ["Last-Translator: Lun May, 2024\nLanguage-Team: Indonesian (https://app.transifex.com/nextcloud/teams/64236/id/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: id\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" bukan nama folder yang valid.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" merupakan nama folder yang tidak diperbolehkan'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" tidak diperbolehkan di dalam nama folder.'] }, "All files": { "msgid": "All files", "msgstr": ["Semua berkas"] }, "Choose": { "msgid": "Choose", "msgstr": ["Pilih"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Pilih {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Pilih %n file"] }, "Copy": { "msgid": "Copy", "msgstr": ["Salin"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Salin ke {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Tidak dapat membuat folder baru"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Tidak dapat memuat pengaturan file"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Tidak dapat memuat tampilan file"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Buat direktori"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Pemilih tampilan saat ini"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorit"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Berkas dan folder yang Anda tandai sebagai favorit akan muncul di sini."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Berkas dan folder yang Anda ubah baru-baru ini akan muncul di sini."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Saring daftar berkas"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Name berkas tidak boleh kosong."] }, "Home": { "msgid": "Home", "msgstr": ["Beranda"] }, "Modified": { "msgid": "Modified", "msgstr": ["Diubah"] }, "Move": { "msgid": "Move", "msgstr": ["Pindahkan"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Pindahkan ke {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nama"] }, "New": { "msgid": "New", "msgstr": ["Baru"] }, "New folder": { "msgid": "New folder", "msgstr": ["Folder baru"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nama folder baru"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Tidak ada berkas di sini"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Tidak ada berkas yang cocok dengan penyaringan Anda."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Tidak ada berkas yang cocok"] }, "Recent": { "msgid": "Recent", "msgstr": ["Terkini"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Pilih semua entri"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Pilih entri"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Pilih baris untuk {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Ukuran"] }, "Undo": { "msgid": "Undo", "msgstr": ["Tidak jadi"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Unggah beberapa konten atau sinkronkan dengan perangkat Anda!"] } } } } }, { "locale": "ig", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Igbo (https://app.transifex.com/nextcloud/teams/64236/ig/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ig", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Igbo (https://app.transifex.com/nextcloud/teams/64236/ig/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ig\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "is", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sveinn í Felli <sv1@fellsnet.is>, 2025", "Language-Team": "Icelandic (https://app.transifex.com/nextcloud/teams/64236/is/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "is", "Plural-Forms": "nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nSveinn í Felli <sv1@fellsnet.is>, 2025\n" }, "msgstr": ["Last-Translator: Sveinn í Felli <sv1@fellsnet.is>, 2025\nLanguage-Team: Icelandic (https://app.transifex.com/nextcloud/teams/64236/is/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: is\nPlural-Forms: nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" er ógilt möppuheiti.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" er ekki leyfilegt möppuheiti'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" er er ekki leyfilegt innan í skráarheiti.'] }, "All files": { "msgid": "All files", "msgstr": ["Allar skrár"] }, "Choose": { "msgid": "Choose", "msgstr": ["Veldu"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Veldu {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Veldu %n skrá", "Veldu %n skrár"] }, "Copy": { "msgid": "Copy", "msgstr": ["Afrita"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Afrita í {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Get ekki búið til nýju möppuna"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Tókst ekki að hlaða inn stillingum skráa"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Tókst ekki að hlaða inn sýnum skráa"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Búa til möppu"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Núverandi val sýnar"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Eftirlæti"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Skrár og möppur sem þú merkir sem eftirlæti birtast hér."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Skrár og möppur sem þú breyttir nýlega birtast hér."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Sía skráalista"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Möppuheiti má ekki vera tómt."] }, "Home": { "msgid": "Home", "msgstr": ["Heim"] }, "Modified": { "msgid": "Modified", "msgstr": ["Breytt"] }, "Move": { "msgid": "Move", "msgstr": ["Færa"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Færa í {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Heiti"] }, "New": { "msgid": "New", "msgstr": ["Nýtt"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ný mappa"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Heiti nýrrar möppu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Engar skrár hér"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Engar skrár fundust sem passa við síuna."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Engar samsvarandi skrár"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nýlegt"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Velja allar færslur"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Velja færslu"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Veldu röðina fyrir {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Stærð"] }, "Undo": { "msgid": "Undo", "msgstr": ["Afturkalla"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Sendu inn eitthvað efni eða samstilltu við tækin þín!"] } } } } }, { "locale": "it", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sebastiano Furlan, 2024", "Language-Team": "Italian (https://app.transifex.com/nextcloud/teams/64236/it/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "it", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nClaudio Scandella, 2023\nRaffaele Silano <raffaelone@gmail.com>, 2024\nSebastiano Furlan, 2024\n" }, "msgstr": ["Last-Translator: Sebastiano Furlan, 2024\nLanguage-Team: Italian (https://app.transifex.com/nextcloud/teams/64236/it/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: it\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" non è un nome di cartella valido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}"  non è un nome di cartella ammesso'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": [`"/" non è ammesso all'interno del nome di una cartella.`] }, "All files": { "msgid": "All files", "msgstr": ["Tutti i file"] }, "Choose": { "msgid": "Choose", "msgstr": ["Scegli"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Scegli {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Seleziona %n file", "Seleziona %n file", "Seleziona %n file"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copia"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copia in {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Impossibile creare la nuova cartella"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Impossibile caricare le impostazioni dei file"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Impossibile caricare le visualizzazioni dei file"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crea directory"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selettore della vista corrente"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Preferiti"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["I file e le cartelle contrassegnate come preferite saranno mostrate qui."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["I file e le cartelle che hai modificato di recente saranno mostrate qui."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtra elenco file"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Il nome della cartella non può essere vuoto."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificato"] }, "Move": { "msgid": "Move", "msgstr": ["Sposta"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Sposta in {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Nuovo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nuova cartella"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nuovo nome cartella"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nessun file qui"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nessun file che corrisponde al tuo filtro è stato trovato."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nessun file corrispondente"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Scegli tutte le voci"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleziona la voce"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleziona la riga per {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Taglia/dimensioni"] }, "Undo": { "msgid": "Undo", "msgstr": ["Annulla"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Carica qualche contenuto o sincronizza con i tuoi dispositivi!"] } } } } }, { "locale": "ja_JP", "json": { "charset": "utf-8", "headers": { "Last-Translator": "devi, 2024", "Language-Team": "Japanese (Japan) (https://app.transifex.com/nextcloud/teams/64236/ja_JP/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ja_JP", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nUchiyama Takuya <uchiyama@j-wmc.com>, 2023\ntakehito kondo, 2023\nkojima.imamura, 2024\nTakafumi AKAMATSU, 2024\ndevi, 2024\n" }, "msgstr": ["Last-Translator: devi, 2024\nLanguage-Team: Japanese (Japan) (https://app.transifex.com/nextcloud/teams/64236/ja_JP/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ja_JP\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" はフォルダー名に使用できません。'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}"は許可されたフォルダー名ではありません'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["フォルダー名に「/（スラッシュ）」は使用できません。"] }, "All files": { "msgid": "All files", "msgstr": ["すべてのファイル"] }, "Choose": { "msgid": "Choose", "msgstr": ["選択"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} を選択"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n 個のファイルを選択"] }, "Copy": { "msgid": "Copy", "msgstr": ["コピー"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["{target} にコピー"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["新しいフォルダーを作成できませんでした"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["ファイル設定を読み込めませんでした"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["ファイルビューを読み込めませんでした"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["ディレクトリを作成"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["現在のビューセレクタ"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["お気に入り"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["お気に入りとしてマークしたファイルとフォルダがここに表示されます。"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["最近変更したファイルとフォルダがここに表示されます。"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["ファイルリストをフィルタ"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["フォルダ名は空にできません。"] }, "Home": { "msgid": "Home", "msgstr": ["ホーム"] }, "Modified": { "msgid": "Modified", "msgstr": ["変更済み"] }, "Move": { "msgid": "Move", "msgstr": ["移動"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["{target} に移動"] }, "Name": { "msgid": "Name", "msgstr": ["名前"] }, "New": { "msgid": "New", "msgstr": ["新規作成"] }, "New folder": { "msgid": "New folder", "msgstr": ["新しいフォルダー"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新しいフォルダーの名前"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["ファイルがありません"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["フィルタに一致するファイルは見つかりませんでした。"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["一致するファイルはありません"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["すべてのエントリを選択"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["エントリを選択"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["{nodename} の行を選択"] }, "Size": { "msgid": "Size", "msgstr": ["サイズ"] }, "Undo": { "msgid": "Undo", "msgstr": ["元に戻す"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["コンテンツをアップロードするか、デバイスと同期してください！"] } } } } }, { "locale": "ka", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Georgian (https://app.transifex.com/nextcloud/teams/64236/ka/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ka", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Georgian (https://app.transifex.com/nextcloud/teams/64236/ka/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ka\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ka_GE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Georgian (Georgia) (https://app.transifex.com/nextcloud/teams/64236/ka_GE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ka_GE", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Georgian (Georgia) (https://app.transifex.com/nextcloud/teams/64236/ka_GE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ka_GE\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "kab", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Kabyle (https://app.transifex.com/nextcloud/teams/64236/kab/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kab", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Kabyle (https://app.transifex.com/nextcloud/teams/64236/kab/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kab\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Sefsex"] } } } } }, { "locale": "kk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Kazakh (https://app.transifex.com/nextcloud/teams/64236/kk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kk", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Kazakh (https://app.transifex.com/nextcloud/teams/64236/kk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kk\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "km", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Khmer (https://app.transifex.com/nextcloud/teams/64236/km/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "km", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Khmer (https://app.transifex.com/nextcloud/teams/64236/km/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: km\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "kn", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Kannada (https://app.transifex.com/nextcloud/teams/64236/kn/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kn", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Kannada (https://app.transifex.com/nextcloud/teams/64236/kn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kn\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ko", "json": { "charset": "utf-8", "headers": { "Last-Translator": "LEE Hwanyong <hwan@ajou.ac.kr>, 2025", "Language-Team": "Korean (https://app.transifex.com/nextcloud/teams/64236/ko/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ko", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJihwan Ahn, 2023\nBrandon Han, 2024\n이상오, 2024\nHyeongjin Park, 2025\nLEE Hwanyong <hwan@ajou.ac.kr>, 2025\n" }, "msgstr": ["Last-Translator: LEE Hwanyong <hwan@ajou.ac.kr>, 2025\nLanguage-Team: Korean (https://app.transifex.com/nextcloud/teams/64236/ko/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ko\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}"은 사용할 수 없는 폴더명입니다.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}"은 허용되지 않은 폴더명입니다.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/"는 폴더명에 사용할 수 없는 기호입니다.'] }, "All files": { "msgid": "All files", "msgstr": ["모든 파일"] }, "Choose": { "msgid": "Choose", "msgstr": ["선택"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} 선택"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n개의 파일 선택"] }, "Copy": { "msgid": "Copy", "msgstr": ["복사"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["{target}으로 복사"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["새 폴더를 만들 수 없음"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["파일 설정을 불러오지 못함"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["파일 보기를 불러오지 못함"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["디렉토리 만들기"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["현재 뷰 선택자"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["즐겨찾기"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["즐겨찾기로 표시한 파일 및 폴더가 이곳에 표시됩니다."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["최근 수정한 파일 및 폴더가 이곳에 표시됩니다."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["파일 목록 필터링"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["폴더명을 비울 수 없습니다."] }, "Home": { "msgid": "Home", "msgstr": ["홈"] }, "Modified": { "msgid": "Modified", "msgstr": ["수정됨"] }, "Move": { "msgid": "Move", "msgstr": ["이동"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["{target}으로 이동"] }, "Name": { "msgid": "Name", "msgstr": ["이름"] }, "New": { "msgid": "New", "msgstr": ["새로 만들기"] }, "New folder": { "msgid": "New folder", "msgstr": ["새 폴더"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["새 폴더명"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["파일이 없습니다"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["선택한 필터에 해당하는 파일이 없습니다."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["일치하는 파일 없음"] }, "Recent": { "msgid": "Recent", "msgstr": ["최근"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["모두 선택"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["항목 선택"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["{nodename}의 행 선택"] }, "Size": { "msgid": "Size", "msgstr": ["크기"] }, "Undo": { "msgid": "Undo", "msgstr": ["되돌리기"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["기기에서 파일을 업로드 또는 동기화하세요!"] } } } } }, { "locale": "la", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Latin (https://app.transifex.com/nextcloud/teams/64236/la/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "la", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Latin (https://app.transifex.com/nextcloud/teams/64236/la/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: la\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "lb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "VoXaN24ch, 2024", "Language-Team": "Luxembourgish (https://app.transifex.com/nextcloud/teams/64236/lb/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lb", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nVoXaN24ch, 2024\n" }, "msgstr": ["Last-Translator: VoXaN24ch, 2024\nLanguage-Team: Luxembourgish (https://app.transifex.com/nextcloud/teams/64236/lb/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lb\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["{name} ass en ongëlteg Dossier"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["{name} ass net en erlaabten Dossiernumm"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ass net an engem Dossier Numm erlaabt'] }, "All files": { "msgid": "All files", "msgstr": ["All Dateien"] }, "Choose": { "msgid": "Choose", "msgstr": ["Wielt"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Wielt {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Wielt %n Fichieren", "Wielt %n Fichier"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopie"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopie op {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Konnt den neien Dossier net erstellen"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Konnt d'Dateienastellungen net lueden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Konnt d'Dateien net lueden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Erstellt Verzeechnes"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuell Vue selector"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Dateien an Ordner, déi Dir als Favorit markéiert, ginn hei gewisen"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Dateien an Ordner déi Dir viru kuerzem geännert hutt ginn hei op"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter Datei Lëscht"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Dossier Numm kann net eidel sinn"] }, "Home": { "msgid": "Home", "msgstr": ["Wëllkomm"] }, "Modified": { "msgid": "Modified", "msgstr": ["Geännert"] }, "Move": { "msgid": "Move", "msgstr": ["Plënne"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Plënneren {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Numm"] }, "New": { "msgid": "New", "msgstr": ["Nei"] }, "New folder": { "msgid": "New folder", "msgstr": ["Neien dossier"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Neien dossier numm"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Kee fichier hei"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Kee fichier deen äre filter passt gouf fonnt"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Keng passende dateien"] }, "Recent": { "msgid": "Recent", "msgstr": ["Rezent"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Wielt all entréen"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Wielt entrée"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Wielt d'zeil fir {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Gréisst"] }, "Undo": { "msgid": "Undo", "msgstr": ["Undoen"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Luet en inhalt erop oder synchroniséiert mat ären apparater"] } } } } }, { "locale": "lo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Lao (https://app.transifex.com/nextcloud/teams/64236/lo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lo", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Lao (https://app.transifex.com/nextcloud/teams/64236/lo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lo\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "lt_LT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Moo, 2025", "Language-Team": "Lithuanian (Lithuania) (https://app.transifex.com/nextcloud/teams/64236/lt_LT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lt_LT", "Plural-Forms": "nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nPaulius Liškauskas, 2024\nMoo, 2025\n" }, "msgstr": ["Last-Translator: Moo, 2025\nLanguage-Team: Lithuanian (Lithuania) (https://app.transifex.com/nextcloud/teams/64236/lt_LT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lt_LT\nPlural-Forms: nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}“ yra netinkamas aplanko pavadinimas."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}“ yra neleidžiamas aplanko pavadinimas"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/“ yra neleidžiamas aplanko pavadinime."] }, "All files": { "msgid": "All files", "msgstr": ["Visi failai"] }, "Choose": { "msgid": "Choose", "msgstr": ["Pasirinkti"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Pasirinkti {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Pasirinkti %n failą", "Pasirinkti %n failus", "Pasirinkti %n failų", "Pasirinkti %n failą"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopijuoti"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopijuoti į {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nepavyko sukurti naujo aplanko"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nepavyko įkelti failų nustatymų"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nepavyko įkelti failų peržiūrų"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Sukurti katalogą"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Dabartinis peržiūros pasirinkimas"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Populiariausi"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Failai ir aplankai, kuriuos pažymėsite kaip mėgstamiausius, bus rodomi čia."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Čia bus rodomi failai ir aplankai, kuriuos neseniai pakeitėte."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtruoti failų sąrašą"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Aplanko pavadinimas negali būti tuščias."] }, "Home": { "msgid": "Home", "msgstr": ["Pradžia"] }, "Modified": { "msgid": "Modified", "msgstr": ["Pakeista"] }, "Move": { "msgid": "Move", "msgstr": ["Perkelti"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Perkelti į {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Vardas"] }, "New": { "msgid": "New", "msgstr": ["Naujas"] }, "New folder": { "msgid": "New folder", "msgstr": ["Naujas aplankas"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Naujas aplanko pavadinimas"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Čia failų nėra"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nepavyko rasti failų pagal filtro nustatymus"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nėra atitinkančių failų"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nauji"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Žymėti visus įrašus"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Žymėti įrašą"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Pasirinkite eilutę {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Dydis"] }, "Undo": { "msgid": "Undo", "msgstr": ["Atšaukti"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Įkelkite turinio arba sinchronizuokite su savo įrenginiais!"] } } } } }, { "locale": "lv", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Edgars Andersons, 2025", "Language-Team": "Latvian (https://app.transifex.com/nextcloud/teams/64236/lv/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lv", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nPapuass <martinsb@gmail.com>, 2024\nArmīns Jeltajevs <armins.jeltajevs@gmail.com>, 2024\nEdgars Andersons, 2025\n" }, "msgstr": ["Last-Translator: Edgars Andersons, 2025\nLanguage-Team: Latvian (https://app.transifex.com/nextcloud/teams/64236/lv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lv\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" nav derīgs mapes nosaukums.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nav atļauts mapes nosaukums'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" nav atļauts mapes nosaukuma izmantošanā.'] }, "All files": { "msgid": "All files", "msgstr": ["Visas datnes"] }, "Choose": { "msgid": "Choose", "msgstr": ["Izvēlieties"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Izvēlieties {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Izvēlēties %n datņu", "Izvēlēties %n datni", "Izvēlēties %n datnes"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopēt"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopēt uz {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nevarēja izveidot jaunu mapi"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nevarēja ielādēt datņu iestatījumus"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nevarēja ielādēt datņu apskatījumus"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Izveidot direktoriju"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Pašreizēja skata atlasītājs"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorīti"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Šeit parādīsies datnes un mapes, kas tiks atzīmētas kā iecienītas."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Šeit parādīsies datnes un mapes, kuras nesen tika izmainītas."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Atlasīt datņu sarakstu"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mapes nosaukums nevar būt tukšs."] }, "Home": { "msgid": "Home", "msgstr": ["Sākums"] }, "Modified": { "msgid": "Modified", "msgstr": ["Izmaninīta"] }, "Move": { "msgid": "Move", "msgstr": ["Pārvietot"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Pārvietot uz {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nosaukums"] }, "New": { "msgid": "New", "msgstr": ["Jauns"] }, "New folder": { "msgid": "New folder", "msgstr": ["Jauna mape"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Jaunas mapes nosaukums"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Šeit nav datņu"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Netika atrasta neviena datne, kas atbilst atlasei."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nav atbilstošu datņu"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nesenās"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Atlasīt visus ierakstus"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Atlasīt ierakstu"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Atlasīt rindu {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Izmērs"] }, "Undo": { "msgid": "Undo", "msgstr": ["Atsaukt"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Augšupielādē kādu saturu vai sinhronizē savās iekārtās!"] } } } } }, { "locale": "mk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Macedonian (https://app.transifex.com/nextcloud/teams/64236/mk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mk", "Plural-Forms": "nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Macedonian (https://app.transifex.com/nextcloud/teams/64236/mk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mk\nPlural-Forms: nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Врати"] } } } } }, { "locale": "mn", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Mongolian (https://app.transifex.com/nextcloud/teams/64236/mn/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mn", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Mongolian (https://app.transifex.com/nextcloud/teams/64236/mn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mn\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Буцаах"] } } } } }, { "locale": "mr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Marathi (https://app.transifex.com/nextcloud/teams/64236/mr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mr", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Marathi (https://app.transifex.com/nextcloud/teams/64236/mr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mr\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["पूर्ववत करा"] } } } } }, { "locale": "ms_MY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "DT Navy, 2024", "Language-Team": "Malay (Malaysia) (https://app.transifex.com/nextcloud/teams/64236/ms_MY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ms_MY", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nDT Navy, 2024\n" }, "msgstr": ["Last-Translator: DT Navy, 2024\nLanguage-Team: Malay (Malaysia) (https://app.transifex.com/nextcloud/teams/64236/ms_MY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ms_MY\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" adalah nama folder yang tidak sesuai '] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nama folder yang tidak dibenarkan'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" tidak dibenarkan dalam nama folder'] }, "All files": { "msgid": "All files", "msgstr": ["Semua fail"] }, "Choose": { "msgid": "Choose", "msgstr": ["Pilih"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Pilih {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Pilih fail %n"] }, "Copy": { "msgid": "Copy", "msgstr": ["menyalin"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["menyalin ke {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Tidak dapat mewujudkan folder baharu"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Tidak dapat memuatkan tetapan fail"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Tidak dapat memuatkan paparan fail"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["mewujudkan direktori"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["pemilih pandangan semasa"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Pilihan"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Fail dan folder yang anda tanda sebagai pilihan akan dipaparkan di sini."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Fail dan folder yang anda telah ubah suai baru-baru ini dipaparkan di sini."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Menapis senarai fail"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Nama folder tidak boleh kosong."] }, "Home": { "msgid": "Home", "msgstr": ["Utama"] }, "Modified": { "msgid": "Modified", "msgstr": ["Ubah suai"] }, "Move": { "msgid": "Move", "msgstr": ["pindah"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["pindah ke {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nama"] }, "New": { "msgid": "New", "msgstr": ["Baru"] }, "New folder": { "msgid": "New folder", "msgstr": ["Folder Baharu"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nama folder baharu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Tiada fail di sini"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Tiada fail yang sepadan dengan tapisan anda."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Tiada fail yang sepadan"] }, "Recent": { "msgid": "Recent", "msgstr": ["baru-baru ini"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Pilih semua entri"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Pilih entri"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["memilih baris {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Saiz"] }, "Undo": { "msgid": "Undo", "msgstr": ["buat asal"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Muat naik beberapa kandungan atau selaras dengan peranti anda!"] } } } } }, { "locale": "my", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Burmese (https://app.transifex.com/nextcloud/teams/64236/my/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "my", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Burmese (https://app.transifex.com/nextcloud/teams/64236/my/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: my\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["နဂိုအတိုင်းပြန်ထားရန်"] } } } } }, { "locale": "nb_NO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Magnus Granås, 2025", "Language-Team": "Norwegian Bokmål (Norway) (https://app.transifex.com/nextcloud/teams/64236/nb_NO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nb_NO", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nD PE, 2023\nSyvert Fossdal, 2024\narmandg <geirawsm@pm.me>, 2024\nMagnus Granås, 2025\n" }, "msgstr": ["Last-Translator: Magnus Granås, 2025\nLanguage-Team: Norwegian Bokmål (Norway) (https://app.transifex.com/nextcloud/teams/64236/nb_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nb_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» er ikke et gyldig mappenavn."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» er ikke et tillatt mappenavn."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" er ikke tillatt inne i et mappenavn.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle filer"] }, "Choose": { "msgid": "Choose", "msgstr": ["Velg"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Velg {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Velg %n fil", "Velg %n filer"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopier"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopier til {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kunne ikke opprette den nye mappen"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Kunne ikke laste filinnstillinger"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kunne ikke laste filvisninger"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Opprett mappe"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Nåværende visningsvelger"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritter"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Filer og mapper du markerer som favoritter vil vises her."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Filer og mapper du nylig har endret, vil vises her."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrer filliste"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mappenavn kan ikke være tomt."] }, "Home": { "msgid": "Home", "msgstr": ["Hjem"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modifisert"] }, "Move": { "msgid": "Move", "msgstr": ["Flytt"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Flytt til {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Navn"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ny mappe"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nytt mappenavn"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Ingen filer her"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Ingen filer funnet med ditt filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ingen filer samsvarer"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nylige"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Velg alle oppføringer"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Velg oppføring"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Velg raden for {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Størrelse"] }, "Undo": { "msgid": "Undo", "msgstr": ["Angre"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Last opp innhold eller synkroniser med enhetene dine!"] } } } } }, { "locale": "ne", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Nepali (https://app.transifex.com/nextcloud/teams/64236/ne/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ne", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Nepali (https://app.transifex.com/nextcloud/teams/64236/ne/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ne\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "nl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Casper <casper@vrije-mens.org>, 2024", "Language-Team": "Dutch (https://app.transifex.com/nextcloud/teams/64236/nl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nl", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJoost <joho500@hotmail.com>, 2023\nJeroen Gui, 2023\nCasper <casper@vrije-mens.org>, 2024\n" }, "msgstr": ["Last-Translator: Casper <casper@vrije-mens.org>, 2024\nLanguage-Team: Dutch (https://app.transifex.com/nextcloud/teams/64236/nl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" is een ongeldige mapnaam.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" is geen toegestane mapnaam'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" is niet toegestaan binnen een bestandsnaam'] }, "All files": { "msgid": "All files", "msgstr": ["Alle bestanden"] }, "Choose": { "msgid": "Choose", "msgstr": ["Kies"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Kies {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Kies %n bestand", "Kies %n bestanden"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopieer"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopieer naar {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kon de nieuwe map niet maken"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Kon de bestandsinstellingen niet laden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kon de bestandsweergaves niet laden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Maak map"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Huidige weergave keuze"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorieten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Bestanden en mappen die je favoriet maakt, worden hier getoond."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Bestanden en mappen die je recent hebt gewijzigd, worden hier getoond."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter bestandslijst"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mapnaam mag niet leeg zijn."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Gewijzigd"] }, "Move": { "msgid": "Move", "msgstr": ["Verplaatsen"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Verplaats naar {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Naam"] }, "New": { "msgid": "New", "msgstr": ["Nieuw"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nieuwe map"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nieuwe mapnaam"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Geen bestanden hier"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Geen bestanden gevonden die voldoen aan je filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Geen gevonden bestanden"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recent"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecteer alle invoer"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecteer invoer"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecteer de rij voor {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Grootte"] }, "Undo": { "msgid": "Undo", "msgstr": ["Ongedaan maken"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Upload inhoud of synchroniseer met je apparaten!"] } } } } }, { "locale": "nn_NO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Norwegian Nynorsk (Norway) (https://app.transifex.com/nextcloud/teams/64236/nn_NO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nn_NO", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Norwegian Nynorsk (Norway) (https://app.transifex.com/nextcloud/teams/64236/nn_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nn_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "oc", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Occitan (post 1500) (https://app.transifex.com/nextcloud/teams/64236/oc/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "oc", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Occitan (post 1500) (https://app.transifex.com/nextcloud/teams/64236/oc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: oc\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Anullar"] } } } } }, { "locale": "pl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Piotr Strębski <strebski@gmail.com>, 2024", "Language-Team": "Polish (https://app.transifex.com/nextcloud/teams/64236/pl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pl", "Plural-Forms": "nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJUJER wtf, 2023\nM H <haincu@o2.pl>, 2023\nValdnet, 2024\nPiotr Strębski <strebski@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Piotr Strębski <strebski@gmail.com>, 2024\nLanguage-Team: Polish (https://app.transifex.com/nextcloud/teams/64236/pl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pl\nPlural-Forms: nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" jest nieprawidłową nazwą folderu'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nie jest dozwoloną nazwą folderu'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['Znak "/" nie jest dozwolony w nazwie folderu'] }, "All files": { "msgid": "All files", "msgstr": ["Wszystkie pliki"] }, "Choose": { "msgid": "Choose", "msgstr": ["Wybierz"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Wybierz {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Wybierz %n plik", "Wybierz %n pliki", "Wybierz %n plików", "Wybierz %n plików"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiuj"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Skopiuj do {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nie można utworzyć nowego folderu"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nie można wczytać ustawień plików"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nie można wczytać widoków plików"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Utwórz katalog"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Bieżący selektor widoku"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Ulubione"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Pliki i foldery które oznaczysz jako ulubione będą wyświetlały się tutaj"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Pliki i foldery które ostatnio modyfikowałeś będą wyświetlały się tutaj"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtruj listę plików"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Nazwa folderu nie może być pusta"] }, "Home": { "msgid": "Home", "msgstr": ["Strona główna"] }, "Modified": { "msgid": "Modified", "msgstr": ["Zmodyfikowano"] }, "Move": { "msgid": "Move", "msgstr": ["Przenieś"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Przejdź do {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nazwa"] }, "New": { "msgid": "New", "msgstr": ["Nowy"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nowy folder"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nowa nazwa folderu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Brak plików"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nie znaleziono plików spełniających warunki filtru"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Brak pasujących plików"] }, "Recent": { "msgid": "Recent", "msgstr": ["Ostatni"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Wybierz wszystkie wpisy"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Wybierz wpis"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Wybierz wiersz dla {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Rozmiar"] }, "Undo": { "msgid": "Undo", "msgstr": ["Cofnij"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Wyślij zawartość lub zsynchronizuj ze swoimi urządzeniami!"] } } } } }, { "locale": "ps", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Pashto (https://app.transifex.com/nextcloud/teams/64236/ps/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ps", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Pashto (https://app.transifex.com/nextcloud/teams/64236/ps/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ps\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "pt_BR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "F Bausch, 2025", "Language-Team": "Portuguese (Brazil) (https://app.transifex.com/nextcloud/teams/64236/pt_BR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pt_BR", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nFlávio Veras <flaviove@gmail.com>, 2023\nCauan Henrique Zorzenon <cauanzorzenon1@protonmail.com>, 2024\nCristiano Silva, 2024\nF Bausch, 2025\n" }, "msgstr": ["Last-Translator: F Bausch, 2025\nLanguage-Team: Portuguese (Brazil) (https://app.transifex.com/nextcloud/teams/64236/pt_BR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_BR\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" é um nome de pasta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" não é um nome de pasta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" não é permitido dentro de um nome de pasta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos os arquivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escolher"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escolher {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escolher %n arquivo", "Escolher %n arquivos", "Escolher %n arquivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar para {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Não foi possível criar a nova pasta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Não foi possível carregar configurações de arquivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Não foi possível carregar visualições de arquivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Criar diretório"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Seletor de visualização atual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Os arquivos e pastas que você marca como favoritos aparecerão aqui."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Arquivos e pastas que você modificou recentemente aparecerão aqui."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de arquivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["O nome da pasta não pode ser vazio."] }, "Home": { "msgid": "Home", "msgstr": ["Início"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover para {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nova pasta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Novo nome de pasta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nenhum arquivo aqui"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nenhum arquivo correspondente ao seu filtro foi encontrado."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nenhum arquivo correspondente"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecionar todas as entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecionar a linha para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamanho"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfazer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Faça upload de algum conteúdo ou sincronize com seus dispositivos!"] } } } } }, { "locale": "pt_PT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Manuela Silva <mmsrs@sky.com>, 2025", "Language-Team": "Portuguese (Portugal) (https://app.transifex.com/nextcloud/teams/64236/pt_PT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pt_PT", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMiguel Ferreira, 2024\nClaudio Almeida, 2025\nManuela Silva <mmsrs@sky.com>, 2025\n" }, "msgstr": ["Last-Translator: Manuela Silva <mmsrs@sky.com>, 2025\nLanguage-Team: Portuguese (Portugal) (https://app.transifex.com/nextcloud/teams/64236/pt_PT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_PT\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" é um nome de pasta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" não é um nome de pasta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" não é permitido dentro do nome de pasta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos os ficheiros"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escolher"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escolher {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escolha %n ficheiro", "Escolha %n ficheiros", "Escolha %n ficheiros"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar para {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Não foi possível criar a nova pasta "] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Não foi possível carregar as definições dos ficheiros"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Não foi possível carregar as visualizações dos ficheiros"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Criar pasta"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Seletor de visualização atual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Os ficheiros e as pastas que marcar como favoritos aparecerão aqui."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Os ficheiros e as pastas que modificou recentemente aparecerão aqui."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de ficheiros"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["O nome da pasta não pode estar vazio."] }, "Home": { "msgid": "Home", "msgstr": ["Início"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover para {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nova pasta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Novo nome da pasta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Sem ficheiros aqui"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Não foi encontrado nenhum ficheiro correspondente ao seu filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nenhum ficheiro correspondente"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recentes"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecionar todas as entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecione a linha para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamanho"] }, "Undo": { "msgid": "Undo", "msgstr": ["Anular"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Envie algum conteúdo ou sincronize com os seus dispositivos!"] } } } } }, { "locale": "ro", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Daniel MD <dmihaidumitru@gmail.com>, 2023", "Language-Team": "Romanian (https://app.transifex.com/nextcloud/teams/64236/ro/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ro", "Plural-Forms": "nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nDaniel MD <dmihaidumitru@gmail.com>, 2023\n" }, "msgstr": ["Last-Translator: Daniel MD <dmihaidumitru@gmail.com>, 2023\nLanguage-Team: Romanian (https://app.transifex.com/nextcloud/teams/64236/ro/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ro\nPlural-Forms: nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" este un nume de director invalid.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nu este un nume de director permis'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" nu este permis în numele unui director.'] }, "All files": { "msgid": "All files", "msgstr": ["Toate fișierele"] }, "Choose": { "msgid": "Choose", "msgstr": ["Alege"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Alege {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiază"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiază în {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nu s-a putut crea noul director"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Creează director"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selectorul curent al vizualizării"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorite"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Fișiere și directoare pe care le marcați ca favorite vor apărea aici."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Fișiere și directoare pe care le-ați modificat recent vor apărea aici."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrează lista de fișiere"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Numele de director nu poate fi necompletat."] }, "Home": { "msgid": "Home", "msgstr": ["Acasă"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificat"] }, "Move": { "msgid": "Move", "msgstr": ["Mută"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mută către {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nume"] }, "New": { "msgid": "New", "msgstr": ["Nou"] }, "New folder": { "msgid": "New folder", "msgstr": ["Director nou"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Numele noului director"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nu există fișiere"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nu există fișiere potrivite pentru filtrul selectat"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nu există fișiere potrivite"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selectează toate înregistrările"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selectează înregistrarea"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selectează rândul pentru {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Mărime"] }, "Undo": { "msgid": "Undo", "msgstr": ["Anulează"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Încărcați conținut sau sincronizați cu dispozitivele dumneavoastră!"] } } } } }, { "locale": "ru", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Maksim Sukharev, 2024", "Language-Team": "Russian (https://app.transifex.com/nextcloud/teams/64236/ru/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ru", "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMax Smith <sevinfolds@gmail.com>, 2023\nashed <craysy@gmail.com>, 2023\nAlex <kekcuha@gmail.com>, 2024\nR4SAS, 2024\nВлад, 2024\nKitsune R, 2024\nАлександр, 2024\nMaksim Sukharev, 2024\n" }, "msgstr": ["Last-Translator: Maksim Sukharev, 2024\nLanguage-Team: Russian (https://app.transifex.com/nextcloud/teams/64236/ru/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ru\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» — недопустимое имя папки."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» не является разрешенным именем папки"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["Символ «/» не допускается внутри имени папки."] }, "All files": { "msgid": "All files", "msgstr": ["Все файлы"] }, "Choose": { "msgid": "Choose", "msgstr": ["Выбрать"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Выбрать «{file}»"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Выбрать %n файл", "Выбрать %n файла", "Выбрать %n файлов", "Выбрать %n файлов"] }, "Copy": { "msgid": "Copy", "msgstr": ["Копировать"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Копировать в «{target}»"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Не удалось создать новую папку"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Не удалось загрузить настройки файлов"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Не удалось загрузить конфигурацию просмотра файлов"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Создать папку"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Переключатель текущего вида"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Избранное"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Здесь будут отображаться файлы и папки, которые вы пометили как избранные."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Здесь будут отображаться файлы и папки, которые вы недавно изменили."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Фильтровать список файлов"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Имя папки не может быть пустым."] }, "Home": { "msgid": "Home", "msgstr": ["Домой"] }, "Modified": { "msgid": "Modified", "msgstr": ["Изменен"] }, "Move": { "msgid": "Move", "msgstr": ["Переместить"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Переместить в «{target}»"] }, "Name": { "msgid": "Name", "msgstr": ["Имя"] }, "New": { "msgid": "New", "msgstr": ["Новый"] }, "New folder": { "msgid": "New folder", "msgstr": ["Новая папка"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Имя новой папки"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Здесь нет файлов"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Файлы, соответствующие вашему фильтру, не найдены."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Нет подходящих файлов"] }, "Recent": { "msgid": "Recent", "msgstr": ["Недавний"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Выбрать все записи"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Выбрать запись"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Выбрать строку для «{nodename}»"] }, "Size": { "msgid": "Size", "msgstr": ["Размер"] }, "Undo": { "msgid": "Undo", "msgstr": ["Отменить"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Загрузите контент или синхронизируйте его со своими устройствами!"] } } } } }, { "locale": "sc", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Sardinian (https://app.transifex.com/nextcloud/teams/64236/sc/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sc", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Sardinian (https://app.transifex.com/nextcloud/teams/64236/sc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sc\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "si", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Sinhala (https://app.transifex.com/nextcloud/teams/64236/si/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "si", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Sinhala (https://app.transifex.com/nextcloud/teams/64236/si/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: si\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["පෙරසේ"] } } } } }, { "locale": "sk_SK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Tomas Rusnak <linkermail@gmail.com>, 2024", "Language-Team": "Slovak (Slovakia) (https://app.transifex.com/nextcloud/teams/64236/sk_SK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sk_SK", "Plural-Forms": "nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nStanislav Prekop <prekop3@gmail.com>, 2024\nTomas Rusnak <linkermail@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Tomas Rusnak <linkermail@gmail.com>, 2024\nLanguage-Team: Slovak (Slovakia) (https://app.transifex.com/nextcloud/teams/64236/sk_SK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sk_SK\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" je neplatný názov pričinka.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nie je povolený názov priečinka.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" nie je povolené v názve priečinka.'] }, "All files": { "msgid": "All files", "msgstr": ["Všetky súbory"] }, "Choose": { "msgid": "Choose", "msgstr": ["Vybrať"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Vybrať {súbor}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Vybraný %n súbor", "Vybrané %n súbory", "Vybraných %n súborov", "Vybraných %n súborov"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopírovať"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopírovať do {umiestnenia}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nepodarilo sa vytvoriť nový priečinok"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nepodarilo sa načítať nastavenia súborov"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nepodarilo sa načítať pohľady súborov"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Vytvoriť adresár"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Výber aktuálneho zobrazenia"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Obľúbené"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Tu sa zobrazia súbory a priečinky, ktoré označíte ako obľúbené."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Tu sa zobrazia súbory a priečinky, ktoré ste nedávno upravili."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrovať zoznam súborov"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Názov priečinka nemôže byť prázdny."] }, "Home": { "msgid": "Home", "msgstr": ["Domov"] }, "Modified": { "msgid": "Modified", "msgstr": ["Upravené"] }, "Move": { "msgid": "Move", "msgstr": ["Prejsť"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Prejsť na {umiestnenie}"] }, "Name": { "msgid": "Name", "msgstr": ["Názov"] }, "New": { "msgid": "New", "msgstr": ["Pridať"] }, "New folder": { "msgid": "New folder", "msgstr": ["Pridať priečinok"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Pridať názov priečinka"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nie sú tu žiadne súbory"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nenašli sa žiadne súbory zodpovedajúce vášmu filtru."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Žiadne zodpovedajúce súbory"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nedávne"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vybrať všetky položky"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vybrať položku"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vyberte riadok pre {názov uzla}"] }, "Size": { "msgid": "Size", "msgstr": ["Veľkosť"] }, "Undo": { "msgid": "Undo", "msgstr": ["Späť"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Nahrajte nejaký obsah alebo synchronizujte so svojimi zariadeniami!"] } } } } }, { "locale": "sl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Simon Bogina, 2024", "Language-Team": "Slovenian (https://app.transifex.com/nextcloud/teams/64236/sl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sl", "Plural-Forms": "nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nSimon Bogina, 2024\n" }, "msgstr": ["Last-Translator: Simon Bogina, 2024\nLanguage-Team: Slovenian (https://app.transifex.com/nextcloud/teams/64236/sl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sl\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["{name} je neveljavno ime mape."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["{name} ni dovoljeno ime mape"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ni dovoljen v imenu mape.'] }, "All files": { "msgid": "All files", "msgstr": ["Vse datoteke"] }, "Choose": { "msgid": "Choose", "msgstr": ["Izberi"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Izberi {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Izberi %n datoteko", "Izberi %n datoteki", "Izberi %n datotek", "Izberi %n datotek"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiraj"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopiraj v {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nisem mogel ustvariti nove mape"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["NIsem mogel naložiti nastavitev datotek"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nisem mogel naložiti pogledov datotek"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Ustvari mapo"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Izbirnik trenutnega pogleda"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Priljubljene"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Datoteke in mape ki jih označite kot priljubljene se bodo prikazale tukaj."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Daoteke in mape ki ste jih pred kratkim spremenili se bodo prikazale tukaj."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtriraj seznam datotek"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Ime mape ne more biti prazno"] }, "Home": { "msgid": "Home", "msgstr": ["Domov"] }, "Modified": { "msgid": "Modified", "msgstr": ["Spremenjeno"] }, "Move": { "msgid": "Move", "msgstr": ["Premakni"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Premakni v {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Ime"] }, "New": { "msgid": "New", "msgstr": ["Nov"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nova mapa"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Novo ime mape"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Tukaj ni datotek"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Ni bilo najdenih ujemajočih datotek glede na vaš filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ni ujemajočih datotek"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nedavne"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Izberi vse vnose"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Izberi vnos"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Izberi vrstico za {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Velikost"] }, "Undo": { "msgid": "Undo", "msgstr": ["Razveljavi"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Naloži nekaj vsebine ali sinhroniziraj s svojimi napravami!"] } } } } }, { "locale": "sq", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Albanian (https://app.transifex.com/nextcloud/teams/64236/sq/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sq", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Albanian (https://app.transifex.com/nextcloud/teams/64236/sq/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sq\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "sr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Иван Пешић, 2024", "Language-Team": "Serbian (https://app.transifex.com/nextcloud/teams/64236/sr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sr", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nИван Пешић, 2024\n" }, "msgstr": ["Last-Translator: Иван Пешић, 2024\nLanguage-Team: Serbian (https://app.transifex.com/nextcloud/teams/64236/sr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}” није исправно име фолдера."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}” није дозвољено име за фолдер."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/” није дозвољено унутар имена фолдера."] }, "All files": { "msgid": "All files", "msgstr": ["Сви фајлови"] }, "Choose": { "msgid": "Choose", "msgstr": ["Изаберите"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Изаберите {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Изаберите %n фајл", "Изаберите %n фајла", "Изаберите %n фајлова"] }, "Copy": { "msgid": "Copy", "msgstr": ["Копирај"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Копирај у {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Није могао да се креира нови фолдер"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Не могу да се учитају подешавања фајлова"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Не могу да се учитају прикази фајлова"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Креирај директоријум"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Бирач тренутног приказа"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Омиљено"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Овде ће се појавити фајлови и фолдери које сте означили као омиљене."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Овде ће се појавити фајлови и фолдери који се се недавно изменили."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Фитрирање листе фајлова"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Име фолдера не може бити празно."] }, "Home": { "msgid": "Home", "msgstr": ["Почетак"] }, "Modified": { "msgid": "Modified", "msgstr": ["Измењено"] }, "Move": { "msgid": "Move", "msgstr": ["Премести"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Премести у {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Име"] }, "New": { "msgid": "New", "msgstr": ["Ново"] }, "New folder": { "msgid": "New folder", "msgstr": ["Нови фолдер"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Име новог фолдера"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Овде нема фајлова"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Није пронађен ниједан фајл који задовољава ваш филтер."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Нема таквих фајлова"] }, "Recent": { "msgid": "Recent", "msgstr": ["Скорашње"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Изаберите све ставке"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Изаберите ставку"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Изаберите ред за {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Величина"] }, "Undo": { "msgid": "Undo", "msgstr": ["Поништи"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Отпремите нешто или синхронизујте са својим уређајима!"] } } } } }, { "locale": "sr@latin", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Bogdan Vuković, 2024", "Language-Team": "Serbian (Latin) (https://app.transifex.com/nextcloud/teams/64236/sr@latin/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sr@latin", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nBogdan Vuković, 2024\n" }, "msgstr": ["Last-Translator: Bogdan Vuković, 2024\nLanguage-Team: Serbian (Latin) (https://app.transifex.com/nextcloud/teams/64236/sr@latin/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr@latin\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}” je neispravan naziv foldera."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}” je nedozvoljen naziv foldera."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/” se ne može koristiti unutar naziva foldera."] }, "All files": { "msgid": "All files", "msgstr": ["Svi fajlovi"] }, "Choose": { "msgid": "Choose", "msgstr": ["Izaberite"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Izaberite {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Izaberite %n fajl", "Izaberite %n fajla", "Izaberite %n fajlova"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiraj"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopiraj u {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Neuspešno kreiranje novog foldera"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Neuspešno učitavanje podešavanja fajlova"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Neuspešno učitavanje prikaza fajlova"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Kreiraj direktorijum"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Birač trenutnog prikaza"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Omiljeno"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Lista omiljenih fajlova i foldera."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Lista fajlova i foldera sa skorašnjim izmenama."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Fitriranje liste fajlova"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Naziv foldera ne može biti prazan."] }, "Home": { "msgid": "Home", "msgstr": ["Početak"] }, "Modified": { "msgid": "Modified", "msgstr": ["Izmenjeno"] }, "Move": { "msgid": "Move", "msgstr": ["Premesti"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Premesti u {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Naziv"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Novi folder"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Naziv novog foldera"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Bez fajlova"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nema fajlova koji zadovoljavaju uslove filtera."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nema takvih fajlova"] }, "Recent": { "msgid": "Recent", "msgstr": ["Skorašnje"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Izaberite sve stavke"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Izaberite stavku"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Izaberite red za {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Veličina"] }, "Undo": { "msgid": "Undo", "msgstr": ["Vrati"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Otpremite sadržaj ili sinhronizujte sa svojim uređajima!"] } } } } }, { "locale": "sv", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Martin H <pilino+transifex@posteo.de>, 2025", "Language-Team": "Swedish (https://app.transifex.com/nextcloud/teams/64236/sv/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sv", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMagnus Höglund, 2024\nMartin H <pilino+transifex@posteo.de>, 2025\n" }, "msgstr": ["Last-Translator: Martin H <pilino+transifex@posteo.de>, 2025\nLanguage-Team: Swedish (https://app.transifex.com/nextcloud/teams/64236/sv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sv\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" är ett ogiltigt mappnamn.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" är inte ett tillåtet mappnamn'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" är inte tillåtet i ett mappnamn.'] }, "All files": { "msgid": "All files", "msgstr": ["Alla filer"] }, "Choose": { "msgid": "Choose", "msgstr": ["Välj"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Välj {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Välj %n fil", "Välj %n filer"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiera"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopiera till {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kunde inte skapa den nya mappen"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Kunde inte ladda filinställningar"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kunde inte ladda filvyer"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Skapa katalog"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuell vyväljare"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoriter"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Filer och mappar som du markerar som favorit kommer att visas här."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Filer och mappar som du nyligen ändrat kommer att visas här."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrera fillistan"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mappnamnet får inte vara tomt."] }, "Home": { "msgid": "Home", "msgstr": ["Hem"] }, "Modified": { "msgid": "Modified", "msgstr": ["Ändrad"] }, "Move": { "msgid": "Move", "msgstr": ["Flytta"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Flytta till {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Namn"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ny mapp"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nytt mappnamn"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Inga filer här"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Inga filer som matchar ditt filter hittades."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Inga matchande filer"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nyligen"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Välj alla poster"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Välj post"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Välj raden för {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Storlek"] }, "Undo": { "msgid": "Undo", "msgstr": ["Ångra"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Ladda upp lite innehåll eller synkronisera med dina enheter!"] } } } } }, { "locale": "sw", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Swahili (https://app.transifex.com/nextcloud/teams/64236/sw/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sw", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Swahili (https://app.transifex.com/nextcloud/teams/64236/sw/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sw\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ta", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Tamil (https://app.transifex.com/nextcloud/teams/64236/ta/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ta", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Tamil (https://app.transifex.com/nextcloud/teams/64236/ta/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ta\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["செயல்தவிர்"] } } } } }, { "locale": "th_TH", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Thai (Thailand) (https://app.transifex.com/nextcloud/teams/64236/th_TH/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "th_TH", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Thai (Thailand) (https://app.transifex.com/nextcloud/teams/64236/th_TH/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: th_TH\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["เลิกทำ"] } } } } }, { "locale": "tk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Turkmen (https://app.transifex.com/nextcloud/teams/64236/tk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "tk", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Turkmen (https://app.transifex.com/nextcloud/teams/64236/tk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tk\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "tr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Kaya Zeren <kayazeren@gmail.com>, 2024", "Language-Team": "Turkish (https://app.transifex.com/nextcloud/teams/64236/tr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "tr", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nKaya Zeren <kayazeren@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Kaya Zeren <kayazeren@gmail.com>, 2024\nLanguage-Team: Turkish (https://app.transifex.com/nextcloud/teams/64236/tr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" geçersiz bir klasör adı.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" izin verilen bir klasör adı değil'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" karakteri klasör adında kullanılamaz.'] }, "All files": { "msgid": "All files", "msgstr": ["Tüm dosyalar"] }, "Choose": { "msgid": "Choose", "msgstr": ["Seçin"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} seçin"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n dosya seçin", "%n dosya seçin"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopyala"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["{target} üzerine kopyala"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Yeni klasör oluşturulamadı"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Dosyalar uygulamasının ayarları yüklenemedi"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Dosyalar uygulamasının görünümleri yüklenemedi"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Klasör oluştur"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Geçerli görünüm seçici"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Sık kullanılanlar"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Sık kullanılan olarak seçtiğiniz dosyalar burada görüntülenir."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Son zamanlarda değiştirdiğiniz dosya ve klasörler burada görüntülenir."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Dosya listesini süz"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Klasör adı boş olamaz."] }, "Home": { "msgid": "Home", "msgstr": ["Giriş"] }, "Modified": { "msgid": "Modified", "msgstr": ["Değiştirilme"] }, "Move": { "msgid": "Move", "msgstr": ["Taşı"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["{target} üzerine taşı"] }, "Name": { "msgid": "Name", "msgstr": ["Ad"] }, "New": { "msgid": "New", "msgstr": ["Yeni"] }, "New folder": { "msgid": "New folder", "msgstr": ["Yeni klasör"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Yeni klasör adı"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Burada herhangi bir dosya yok"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Süzgece uyan bir dosya bulunamadı."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Eşleşen bir dosya yok"] }, "Recent": { "msgid": "Recent", "msgstr": ["Son kullanılanlar"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Tüm kayıtları seç"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Kaydı seç"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["{nodename} satırını seçin"] }, "Size": { "msgid": "Size", "msgstr": ["Boyut"] }, "Undo": { "msgid": "Undo", "msgstr": ["Geri al"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Bazı içerikler yükleyin ya da aygıtlarınızla eşitleyin!"] } } } } }, { "locale": "ug", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Uyghur (https://app.transifex.com/nextcloud/teams/64236/ug/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ug", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Uyghur (https://app.transifex.com/nextcloud/teams/64236/ug/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ug\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "uk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "O St <oleksiy.stasevych@gmail.com>, 2024", "Language-Team": "Ukrainian (https://app.transifex.com/nextcloud/teams/64236/uk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "uk", "Plural-Forms": "nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nO St <oleksiy.stasevych@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: O St <oleksiy.stasevych@gmail.com>, 2024\nLanguage-Team: Ukrainian (https://app.transifex.com/nextcloud/teams/64236/uk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uk\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" є недійсною назвою для каталогу.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" не є дозволеною назвою для каталогу.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" не дозволено у назві каталогу.'] }, "All files": { "msgid": "All files", "msgstr": ["Всі файли"] }, "Choose": { "msgid": "Choose", "msgstr": ["Вибрати"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Вибрати {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Вибрати %n файл", "Вибрати %n файли", "Вибрати %n файлів", "Вибрати %n файлів"] }, "Copy": { "msgid": "Copy", "msgstr": ["Копіювати"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Копіювати до {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Не вдалося створити новий каталог"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Не вдалося завантажити налаштування файлів"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Не вдалося завантажити подання файлів"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Створити каталог"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Вибір подання"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Із зірочкою"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Тут показуватимуться файли та каталоги, які ви позначите зірочкою."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Тут показуватимуться файли та каталоги, які було нещодавно змінено."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Фільтрувати список файлів"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Ім'я каталогу не може бути порожнім."] }, "Home": { "msgid": "Home", "msgstr": ["Домівка"] }, "Modified": { "msgid": "Modified", "msgstr": ["Змінено"] }, "Move": { "msgid": "Move", "msgstr": ["Перемістити"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Перемістити до {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Ім'я"] }, "New": { "msgid": "New", "msgstr": ["Новий"] }, "New folder": { "msgid": "New folder", "msgstr": ["Новий каталог"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Ім'я нового каталогу"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Тут відсутні файли"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Відсутні збіги за фільтром."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Відсутні збіги файлів."] }, "Recent": { "msgid": "Recent", "msgstr": ["Останні"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Вибрати всі записи"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Вибрати запис"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Вибрати рядок для {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Розмір"] }, "Undo": { "msgid": "Undo", "msgstr": ["Повернути"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Завантажте вміст або синхронізуйте з вашим пристроєм!"] } } } } }, { "locale": "ur_PK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Urdu (Pakistan) (https://app.transifex.com/nextcloud/teams/64236/ur_PK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ur_PK", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Urdu (Pakistan) (https://app.transifex.com/nextcloud/teams/64236/ur_PK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ur_PK\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "uz", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Khurshid Ibatov <Khurshid.Ibatov@tibbiysugurta.uz>, 2025", "Language-Team": "Uzbek (https://app.transifex.com/nextcloud/teams/64236/uz/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "uz", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nKhurshid Ibatov <Khurshid.Ibatov@tibbiysugurta.uz>, 2025\n" }, "msgstr": ["Last-Translator: Khurshid Ibatov <Khurshid.Ibatov@tibbiysugurta.uz>, 2025\nLanguage-Team: Uzbek (https://app.transifex.com/nextcloud/teams/64236/uz/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uz\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" jild nomi yaroqsiz.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ruxsat etilgan jild nomi emas'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" papka nomi ichida ruxsat berilmaydi.'] }, "All files": { "msgid": "All files", "msgstr": ["Barcha fayllar"] }, "Choose": { "msgid": "Choose", "msgstr": ["Tanlang"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Tanlang {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Tanlang %n faylni"] }, "Copy": { "msgid": "Copy", "msgstr": ["Nusxa"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": [" {target} ga nusxa"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Yangi jild yaratib bo‘lmadi"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Fayl sozlamalari yuklanmadi"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Fayllarni koʻrishni yuklab boʻlmadi"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Katalog yaratish"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Joriy ko'rinish selektori"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Tanlanganlar"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Tanlangan deb belgilagan fayl va papkalar shu yerda koʻrinadi."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Siz yaqinda oʻzgartirgan fayl va papkalar shu yerda koʻrinadi."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Fayl ro'yxatini filtrlash"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Jild nomi boʻsh boʻlishi mumkin emas."] }, "Home": { "msgid": "Home", "msgstr": ["Uy"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modifikatsiyalangan"] }, "Move": { "msgid": "Move", "msgstr": ["Ko'chirish"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": [" {target} ga ko'chirish"] }, "Name": { "msgid": "Name", "msgstr": ["Nomi"] }, "New": { "msgid": "New", "msgstr": ["Yangi"] }, "New folder": { "msgid": "New folder", "msgstr": ["Yangi jild"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Yangi jild nomi"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Fayl mavjud emas"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Filtringizga mos keladigan fayl topilmadi."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Mos fayllar yo'q"] }, "Recent": { "msgid": "Recent", "msgstr": ["Yaqinda"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Barcha yozuvlarni tanlang"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Yozuvni tanlang"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["{nodename} uchun qatorni tanlang"] }, "Size": { "msgid": "Size", "msgstr": ["O`lcham"] }, "Undo": { "msgid": "Undo", "msgstr": ["Bekor qilish"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Qurilmangizga ba'zi kontentni yuklang yoki sinxronlang!"] } } } } }, { "locale": "vi", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Trần Đình Tuyển, 2024", "Language-Team": "Vietnamese (https://app.transifex.com/nextcloud/teams/64236/vi/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "vi", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nTran Duc, 2024\nTrần Đình Tuyển, 2024\n" }, "msgstr": ["Last-Translator: Trần Đình Tuyển, 2024\nLanguage-Team: Vietnamese (https://app.transifex.com/nextcloud/teams/64236/vi/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: vi\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" là tên thư mục không hợp lệ.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"1{name}"không phải là tên thư mục được cho phép'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/"không được phép đặt trong tên thư mục.'] }, "All files": { "msgid": "All files", "msgstr": ["Tất cả tệp"] }, "Choose": { "msgid": "Choose", "msgstr": ["Chọn"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Chọn {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Chọn %n tệp"] }, "Copy": { "msgid": "Copy", "msgstr": ["Sao chép"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Sao chép đến {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Không thể tạo thư mục mới"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Không thể tải tập tin cài đặt"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Không thể tải xuống tệp xem"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Tạo thư mục"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Hiện tại chế độ xem của bộ chọn"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Yêu cầu thích"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Các tập tin và thư mục bạn đánh dấu yêu thích sẽ hiển thị ở đây."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Các tập tin và thư mục bạn sửa đổi gần đây sẽ hiển thị ở đây."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter list file"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Thư mục tên không được để trống."] }, "Home": { "msgid": "Home", "msgstr": ["Trang chủ"] }, "Modified": { "msgid": "Modified", "msgstr": ["Đã sửa đổi"] }, "Move": { "msgid": "Move", "msgstr": ["Di chuyển"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Di chuyển đến{target}"] }, "Name": { "msgid": "Name", "msgstr": ["Tên"] }, "New": { "msgid": "New", "msgstr": ["Mới"] }, "New folder": { "msgid": "New folder", "msgstr": ["New thư mục"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["New thư mục tên"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No file at here"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Không tìm thấy tệp nào phù hợp với bộ lọc của bạn."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No file phù hợp"] }, "Recent": { "msgid": "Recent", "msgstr": ["Gần đây"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Choose all items"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Chọn mục nhập"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Choose hang cho{nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Kích cỡ"] }, "Undo": { "msgid": "Undo", "msgstr": ["Hoàn tác"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Tải lên một số nội dung hoặc đồng bộ hóa với thiết bị của bạn!"] } } } } }, { "locale": "zh_CN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Gloryandel, 2024", "Language-Team": "Chinese (China) (https://app.transifex.com/nextcloud/teams/64236/zh_CN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_CN", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nken, 2023\nEric, 2023\nPhonebook3599, 2024\nGloryandel, 2024\n" }, "msgstr": ["Last-Translator: Gloryandel, 2024\nLanguage-Team: Chinese (China) (https://app.transifex.com/nextcloud/teams/64236/zh_CN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_CN\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["“{name}” 是无效的文件夹名称。"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["“{name}” 不是允许的文件夹名称"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["文件夹名称中不允许包含 “/”。"] }, "All files": { "msgid": "All files", "msgstr": ["所有文件"] }, "Choose": { "msgid": "Choose", "msgstr": ["选择"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["选择 {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["选择 %n 个文件"] }, "Copy": { "msgid": "Copy", "msgstr": ["复制"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["复制到 {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["无法创建新文件夹"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["无法加载文件设置"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["无法加载文件视图"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["创建目录"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["当前视图选择器"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["最爱"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["您标记为最爱的文件与文件夹会显示在这里"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["您最近修改的文件与文件夹会显示在这里"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["过滤文件列表"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["文件夹名称不能为空。"] }, "Home": { "msgid": "Home", "msgstr": ["主目录"] }, "Modified": { "msgid": "Modified", "msgstr": ["已修改"] }, "Move": { "msgid": "Move", "msgstr": ["移动"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["移动至 {target}"] }, "Name": { "msgid": "Name", "msgstr": ["名称"] }, "New": { "msgid": "New", "msgstr": ["新建"] }, "New folder": { "msgid": "New folder", "msgstr": ["新文件夹"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新文件夹名称"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["此处无文件"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["找不到符合您过滤条件的文件"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["无符合的文件"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["选择所有条目"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["选择条目"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["选择 {nodename} 的列"] }, "Size": { "msgid": "Size", "msgstr": ["大小"] }, "Undo": { "msgid": "Undo", "msgstr": [" 撤消"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["上传一些项目或与您的设备同步！"] } } } } }, { "locale": "zh_HK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Café Tango, 2025", "Language-Team": "Chinese (Hong Kong) (https://app.transifex.com/nextcloud/teams/64236/zh_HK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_HK", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nCafé Tango, 2025\n" }, "msgstr": ["Last-Translator: Café Tango, 2025\nLanguage-Team: Chinese (Hong Kong) (https://app.transifex.com/nextcloud/teams/64236/zh_HK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_HK\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["「{name}」是無效的資料夾名稱。"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["資料夾名稱「{name}」不符合允許的規範。"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['資料夾名稱中不允許使用 "/"。'] }, "All files": { "msgid": "All files", "msgstr": ["所有檔案"] }, "Choose": { "msgid": "Choose", "msgstr": ["選擇"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["選擇 {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["選擇 %n 個檔案"] }, "Copy": { "msgid": "Copy", "msgstr": ["複製"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["複製到 {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["無法建立新資料夾"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["無法載入檔案設定"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["無法載入檔案視圖"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["建立目錄"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["目前視圖選擇器"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["最愛"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["您標記為最愛的檔案與資料夾將會顯示在此處。"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["您最近修改的檔案與資料夾將會顯示在此處。"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["過濾檔案清單"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["資料夾名稱不能為空。"] }, "Home": { "msgid": "Home", "msgstr": ["首頁"] }, "Modified": { "msgid": "Modified", "msgstr": ["已修改"] }, "Move": { "msgid": "Move", "msgstr": ["移動"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["移動至 {target}"] }, "Name": { "msgid": "Name", "msgstr": ["名稱"] }, "New": { "msgid": "New", "msgstr": ["新"] }, "New folder": { "msgid": "New folder", "msgstr": ["新資料夾"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新資料夾名稱"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["此處無檔案"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["找不到符合您過濾條件的檔案。"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["沒有匹配的檔案"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["選擇所有項目"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["選擇項目"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["選擇 {nodename} 的列"] }, "Size": { "msgid": "Size", "msgstr": ["大小"] }, "Undo": { "msgid": "Undo", "msgstr": ["還原"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["上傳一些內容或與您的裝置同步！"] } } } } }, { "locale": "zh_TW", "json": { "charset": "utf-8", "headers": { "Last-Translator": "黃柏諺 <s8321414@gmail.com>, 2023", "Language-Team": "Chinese (Taiwan) (https://app.transifex.com/nextcloud/teams/64236/zh_TW/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_TW", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\n黃柏諺 <s8321414@gmail.com>, 2023\n" }, "msgstr": ["Last-Translator: 黃柏諺 <s8321414@gmail.com>, 2023\nLanguage-Team: Chinese (Taiwan) (https://app.transifex.com/nextcloud/teams/64236/zh_TW/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_TW\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid file name.': { "msgid": '"{name}" is an invalid file name.', "msgstr": ["「{name}」是無效的檔案名稱。"] }, '"{name}" is not an allowed filetype': { "msgid": '"{name}" is not an allowed filetype', "msgstr": ["「{name}」並非允許的檔案類型"] }, '"/" is not allowed inside a file name.': { "msgid": '"/" is not allowed inside a file name.', "msgstr": ["檔案名稱中不允許使用「/」。"] }, "All files": { "msgid": "All files", "msgstr": ["所有檔案"] }, "Choose": { "msgid": "Choose", "msgstr": ["選擇"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["選擇 {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["複製"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["複製到 {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["無法建立新資料夾"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["建立目錄"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["目前檢視選取器"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["最愛"] }, "File name cannot be empty.": { "msgid": "File name cannot be empty.", "msgstr": ["檔案名稱不能為空。"] }, "Filepicker sections": { "msgid": "Filepicker sections", "msgstr": ["檔案挑選器選取"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["您標記為最愛的檔案與資料夾將會顯示在此處。"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["您最近修改的檔案與資料夾將會顯示在此處。"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["過濾檔案清單"] }, "Home": { "msgid": "Home", "msgstr": ["家"] }, "Mime type {mime}": { "msgid": "Mime type {mime}", "msgstr": ["Mime type {mime}"] }, "Modified": { "msgid": "Modified", "msgstr": ["已修改"] }, "Move": { "msgid": "Move", "msgstr": ["移動"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["移動至 {target}"] }, "Name": { "msgid": "Name", "msgstr": ["名稱"] }, "New": { "msgid": "New", "msgstr": ["新"] }, "New folder": { "msgid": "New folder", "msgstr": ["新資料夾"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新資料夾名稱"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["此處無檔案"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["找不到符合您過濾條件的檔案。"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["無符合的檔案"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["選取所有條目"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["選取條目"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["選取 {nodename} 的列"] }, "Size": { "msgid": "Size", "msgstr": ["大小"] }, "Undo": { "msgid": "Undo", "msgstr": ["復原"] }, "unknown": { "msgid": "unknown", "msgstr": ["未知"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["上傳一些內容或與您的裝置同步"] } } } } }, { "locale": "zu_ZA", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Zulu (South Africa) (https://app.transifex.com/nextcloud/teams/64236/zu_ZA/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zu_ZA", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Zulu (South Africa) (https://app.transifex.com/nextcloud/teams/64236/zu_ZA/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zu_ZA\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }].map((data) => gtBuilder.addTranslation(data.locale, data.json));
const gt = gtBuilder.build();
gt.ngettext.bind(gt);
gt.gettext.bind(gt);
const TOAST_ARIA_LIVE_OFF = "off";
const TOAST_ARIA_LIVE_POLITE = "polite";
const TOAST_ARIA_LIVE_ASSERTIVE = "assertive";
var ToastAriaLive = /* @__PURE__ */ ((ToastAriaLive2) => {
  ToastAriaLive2[ToastAriaLive2["OFF"] = TOAST_ARIA_LIVE_OFF] = "OFF";
  ToastAriaLive2[ToastAriaLive2["POLITE"] = TOAST_ARIA_LIVE_POLITE] = "POLITE";
  ToastAriaLive2[ToastAriaLive2["ASSERTIVE"] = TOAST_ARIA_LIVE_ASSERTIVE] = "ASSERTIVE";
  return ToastAriaLive2;
})(ToastAriaLive || {});
const TOAST_DEFAULT_TIMEOUT = 7e3;
function showMessage(data, options) {
  options = Object.assign({
    timeout: TOAST_DEFAULT_TIMEOUT,
    isHTML: false,
    type: void 0,
    // An undefined selector defaults to the body element
    selector: void 0,
    onRemove: () => {
    },
    onClick: void 0,
    close: true
  }, options);
  if (typeof data === "string" && !options.isHTML) {
    const element = document.createElement("div");
    element.innerHTML = data;
    data = element.innerText;
  }
  let classes = options.type ?? "";
  if (typeof options.onClick === "function") {
    classes += " toast-with-click ";
  }
  const isNode2 = data instanceof Node;
  let ariaLive = ToastAriaLive.POLITE;
  if (options.ariaLive) {
    ariaLive = options.ariaLive;
  } else if (options.type === "toast-error" || options.type === "toast-undo") {
    ariaLive = ToastAriaLive.ASSERTIVE;
  }
  const toast = Toastify({
    [!isNode2 ? "text" : "node"]: data,
    duration: options.timeout,
    callback: options.onRemove,
    onClick: options.onClick,
    close: options.close,
    gravity: "top",
    selector: options.selector,
    position: "right",
    backgroundColor: "",
    className: "dialogs " + classes,
    escapeMarkup: !options.isHTML,
    ariaLive
  });
  toast.showToast();
  return toast;
}
function showError(text, options) {
  return showMessage(text, {
    ...options,
    type: "toast-error"
    /* ERROR */
  });
}
function showSuccess(text, options) {
  return showMessage(text, {
    ...options,
    type: "toast-success"
    /* SUCCESS */
  });
}
const ScopeComponent = (Component) => {
  if (!Component.mounted) {
    Component.mounted = [];
  } else if (!Array.isArray(Component.mounted)) {
    Component.mounted = [Component.mounted];
  }
  Component.mounted.push(function() {
    this.$el.setAttribute(`data-v-${"b77647a"}`, "");
  });
};
var mdiChevronLeft = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
var mdiChevronRight = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
register(t17, t33);
function timer(callback, delay3) {
  let id;
  let started;
  let remaining = delay3;
  let running;
  this.start = function() {
    running = true;
    started = /* @__PURE__ */ new Date();
    id = setTimeout(callback, remaining);
  };
  this.pause = function() {
    running = false;
    clearTimeout(id);
    remaining -= /* @__PURE__ */ new Date() - started;
  };
  this.clear = function() {
    running = false;
    clearTimeout(id);
    remaining = 0;
  };
  this.getTimeLeft = function() {
    if (running) {
      this.pause();
      this.start();
    }
    return remaining;
  };
  this.getStateRunning = function() {
    return running;
  };
  this.start();
}
const _sfc_main$2 = {
  name: "PauseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render19() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon pause-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M14,19H18V5H14M6,19H10V5H6V19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const Pause = __component__$2.exports;
const _sfc_main$1 = {
  name: "PlayIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render25() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon play-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M8,5.14V19.14L19,12.14L8,5.14Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null
);
const Play = __component__$1.exports;
const __default__ = {
  name: "NcModal",
  components: {
    Close,
    Pause,
    Play,
    NcActions,
    NcButton,
    NcIconSvgWrapper
  },
  props: {
    /**
     * Name to be shown with the modal
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Declare if a previous slide is available
     */
    hasPrevious: {
      type: Boolean,
      default: false
    },
    /**
     * Declare if a next slide is available
     */
    hasNext: {
      type: Boolean,
      default: false
    },
    /**
     * Declare if hiding the modal should be animated
     */
    outTransition: {
      type: Boolean,
      default: false
    },
    /**
     * Declare if the slideshow functionality should be enabled
     */
    enableSlideshow: {
      type: Boolean,
      default: false
    },
    /**
     * Declare the slide interval
     */
    slideshowDelay: {
      type: Number,
      default: 5e3
    },
    /**
     * Allow to pause an ongoing slideshow
     */
    slideshowPaused: {
      type: Boolean,
      default: false
    },
    /**
     * Enable swipe between slides
     * @deprecated Will be removed in next version - use `disableSwipe` instead
     */
    enableSwipe: {
      type: Boolean,
      default: true
    },
    /**
     * Disable swipe between slides
     */
    disableSwipe: {
      type: Boolean,
      default: false
    },
    spreadNavigation: {
      type: Boolean,
      default: false
    },
    /**
     * Defines the modal size.
     * Default is 'normal'.
     * Available are 'small', 'normal', 'large' and 'full'.
     * All sizes except 'small' change automatically to full-screen on mobile.
     */
    size: {
      type: String,
      default: "normal",
      validator: (size2) => {
        return ["small", "normal", "large", "full"].includes(size2);
      }
    },
    /**
     * Do not show the close button for the dialog.
     * @default false
     */
    noClose: {
      type: Boolean,
      default: false
    },
    /**
     * Set to false to no show a close button on the dialog
     * @deprecated - Use `noClose` instead. Will be removed in v9.
     * @default true
     */
    canClose: {
      type: Boolean,
      default: true
    },
    /**
     * Close the modal if the user clicked outside the modal
     * Only relevant if `canClose` is set to true.
     */
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    /**
     * Makes the modal backdrop opaque if true.
     * Will be overwritten if some buttons are shown outside.
     */
    dark: {
      type: Boolean,
      default: false
    },
    /**
     * Set light backdrop. Makes the modal header appear light.
     */
    lightBackdrop: {
      type: Boolean,
      default: false
    },
    /**
     * Selector for the modal container, pass `null` to prevent automatic container mounting
     */
    container: {
      type: [String, null],
      default: "body"
    },
    /**
     * Pass in false if you want the modal 'close' button to be displayed
     * outside the modal boundaries, in the top right corner of the window
     */
    closeButtonContained: {
      type: Boolean,
      default: true
    },
    /**
     * Additional elements to add to the focus trap
     */
    additionalTrapElements: {
      type: Array,
      default: () => []
    },
    /**
     * Display x items inline
     *
     * @see Actions component usage
     */
    inlineActions: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: void 0
    },
    /**
     * Id of the element that labels the dialog (the name)
     * Not needed if the `name` prop is set, but if no name is set you need to provide the ID of an element to label the dialog for accessibility.
     */
    labelId: {
      type: String,
      default: ""
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {import('focus-trap').FocusTargetValueOrFalse}
     */
    setReturnFocus: {
      default: void 0,
      type: [HTMLElement, SVGElement, String, Boolean]
    }
  },
  emits: [
    "previous",
    "next",
    "close",
    "update:show"
  ],
  setup() {
    return {
      mdiChevronLeft,
      mdiChevronRight
    };
  },
  data() {
    return {
      mc: null,
      playing: false,
      slideshowTimeout: null,
      focusTrap: null,
      externalFocusTrapStack: [],
      randId: GenRandomId(),
      internalShow: true
    };
  },
  computed: {
    /**
     * slide show delay to set to CSS
     */
    cssSlideshowDelay() {
      return `${this.slideshowDelay}ms`;
    },
    /**
     * True if there are any buttons shown on the backdrop or a name (for accessibility)
     */
    forceDarkBackdrop() {
      return !this.noClose && this.canClose && !this.closeButtonContained || this.hasNext || this.hasPrevious || this.modalName !== "" || Boolean(this.$slots.actions);
    },
    /**
     * Trimmed modal name
     */
    modalName() {
      return this.name.trim();
    },
    /**
     * ID of the element to label the modal
     */
    modalLabelId() {
      return this.labelId || `modal-name-${this.randId}`;
    },
    showModal() {
      return this.show === void 0 ? this.internalShow : this.show;
    },
    modalTransitionName() {
      return `modal-${this.outTransition ? "out" : "in"}`;
    },
    playPauseName() {
      return this.playing ? t$1("Pause slideshow") : t$1("Start slideshow");
    },
    closeButtonAriaLabel() {
      return t$1("Close");
    },
    prevButtonAriaLabel() {
      return t$1("Previous");
    },
    nextButtonAriaLabel() {
      return t$1("Next");
    }
  },
  watch: {
    /**
     * Handle play/pause of an ongoing slideshow
     *
     * @param {boolean} paused is the player paused
     */
    slideshowPaused(paused) {
      if (this.slideshowTimeout) {
        if (paused) {
          this.slideshowTimeout.pause();
        } else {
          this.slideshowTimeout.start();
        }
      }
    },
    additionalTrapElements(elements) {
      if (this.focusTrap) {
        const contentContainer = this.$refs.mask;
        this.focusTrap.updateContainerElements([contentContainer, ...elements]);
      }
    }
  },
  beforeMount() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
    this.mc.stop();
  },
  mounted() {
    if (!this.name && !this.labelId) {
      Vue.util.warn("[NcModal] You need either set the name or set a `labelId` for accessibility.");
    }
    this.useFocusTrap();
    this.mc = useSwipe(this.$refs.mask, {
      onSwipeEnd: this.handleSwipe
    });
    if (this.container) {
      if (this.container === "body") {
        document.body.insertBefore(this.$el, document.body.lastChild);
      } else {
        const container = document.querySelector(this.container);
        container.appendChild(this.$el);
      }
    }
  },
  destroyed() {
    this.clearFocusTrap();
    this.$el.remove();
  },
  methods: {
    t: t$1,
    // Events emitters
    previous(event) {
      if (this.hasPrevious) {
        if (event) {
          this.resetSlideshow();
        }
        this.$emit("previous", event);
      }
    },
    next(event) {
      if (this.hasNext) {
        if (event) {
          this.resetSlideshow();
        }
        this.$emit("next", event);
      }
    },
    close(data) {
      if (!this.noClose && this.canClose) {
        this.internalShow = false;
        this.$emit("update:show", false);
        setTimeout(() => {
          this.$emit("close", data);
        }, 300);
      }
    },
    /**
     * Handle click on modal wrapper
     * If `closeOnClickOutside` is set the modal will be closed
     *
     * @param {MouseEvent} event The click event
     */
    handleClickModalWrapper(event) {
      if (this.closeOnClickOutside) {
        this.close(event);
      }
    },
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    handleKeydown(event) {
      if (event.key === "Escape") {
        const trapStack = getTrapStack();
        if (trapStack.length > 0 && trapStack[trapStack.length - 1] !== this.focusTrap) {
          return;
        }
        return this.close(event);
      }
      const arrowHandlers = {
        ArrowLeft: this.previous,
        ArrowRight: this.next
      };
      if (arrowHandlers[event.key]) {
        if (document.activeElement && !this.$el.contains(document.activeElement)) {
          return;
        }
        return arrowHandlers[event.key](event);
      }
    },
    /**
     * handle the swipe event
     *
     * @param {TouchEvent} e The touch event
     * @param {import('@vueuse/core').SwipeDirection} direction Swipe direction
     */
    handleSwipe(e2, direction) {
      if (this.enableSwipe && !this.disableSwipe) {
        if (direction === "left") {
          this.next(e2);
        } else if (direction === "right") {
          this.previous(e2);
        }
      }
    },
    /**
     * Toggle the slideshow state
     */
    togglePlayPause() {
      this.playing = !this.playing;
      if (this.playing) {
        this.handleSlideshow();
      } else {
        this.clearSlideshowTimeout();
      }
    },
    /**
     * Reset the slideshow timer and keep going if it was on
     */
    resetSlideshow() {
      this.playing = !this.playing;
      this.clearSlideshowTimeout();
      this.$nextTick(function() {
        this.togglePlayPause();
      });
    },
    /**
     * Handle the slideshow timer and next event
     */
    handleSlideshow() {
      this.playing = true;
      if (this.hasNext) {
        this.slideshowTimeout = new timer(() => {
          this.next();
          this.handleSlideshow();
        }, this.slideshowDelay);
      } else {
        this.playing = false;
        this.clearSlideshowTimeout();
      }
    },
    /**
     * Clear slideshowTimeout if ongoing
     */
    clearSlideshowTimeout() {
      if (this.slideshowTimeout) {
        this.slideshowTimeout.clear();
      }
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      if (!this.showModal || this.focusTrap) {
        return;
      }
      const contentContainer = this.$refs.mask;
      await this.$nextTick();
      const options = {
        allowOutsideClick: true,
        fallbackFocus: contentContainer,
        trapStack: getTrapStack(),
        // Esc can be used without stop in content or additionalTrapElements where it should not deactivate modal's focus trap.
        // Focus trap is deactivated on modal close anyway.
        escapeDeactivates: false,
        setReturnFocus: this.setReturnFocus
      };
      this.externalFocusTrapStack = [...options.trapStack];
      for (const trap of this.externalFocusTrapStack) {
        trap.deactivate();
      }
      this.focusTrap = createFocusTrap([contentContainer, ...this.additionalTrapElements], options);
      this.focusTrap.activate();
    },
    clearFocusTrap() {
      if (!this.focusTrap) {
        return;
      }
      this.focusTrap?.deactivate();
      this.focusTrap = null;
      for (const trap of this.externalFocusTrapStack) {
        trap.activate();
      }
      this.externalFocusTrapStack = [];
    }
  }
};
const __injectCSSVars__ = () => {
  useCssVars((_vm, _setup) => ({
    "189d6f6a": _vm.cssSlideshowDelay
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$3 = __default__;
var _sfc_render$3 = function render33() {
  var _vm = this, _c = _vm._self._c;
  return _c("transition", { attrs: { "name": "fade", "appear": "" }, on: { "after-enter": _vm.useFocusTrap, "before-leave": _vm.clearFocusTrap } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.showModal, expression: "showModal" }], ref: "mask", staticClass: "modal-mask", class: {
    "modal-mask--opaque": _vm.dark || _vm.forceDarkBackdrop,
    "modal-mask--light": _vm.lightBackdrop
  }, attrs: { "role": "dialog", "aria-modal": "true", "aria-labelledby": _vm.modalLabelId, "aria-describedby": "modal-description-" + _vm.randId, "tabindex": "-1" } }, [_c("transition", { attrs: { "name": "fade-visibility", "appear": "" } }, [_c("div", { staticClass: "modal-header", attrs: { "data-theme-light": _vm.lightBackdrop, "data-theme-dark": !_vm.lightBackdrop } }, [_vm.modalName ? _c("h2", { staticClass: "modal-header__name", attrs: { "id": "modal-name-" + _vm.randId } }, [_vm._v(" " + _vm._s(_vm.modalName) + " ")]) : _vm._e(), _c("div", { staticClass: "icons-menu" }, [_vm.hasNext && _vm.enableSlideshow ? _c("button", { staticClass: "play-pause-icons", class: { "play-pause-icons--paused": _vm.slideshowPaused }, attrs: { "title": _vm.playPauseName, "type": "button" }, on: { "click": _vm.togglePlayPause } }, [!_vm.playing ? _c("Play", { staticClass: "play-pause-icons__play", attrs: { "size": 20 } }) : _c("Pause", { staticClass: "play-pause-icons__pause", attrs: { "size": 20 } }), _c("span", { staticClass: "hidden-visually" }, [_vm._v(" " + _vm._s(_vm.playPauseName) + " ")]), _vm.playing ? _c("svg", { staticClass: "progress-ring", attrs: { "height": "50", "width": "50" } }, [_c("circle", { staticClass: "progress-ring__circle", attrs: { "stroke": "white", "stroke-width": "2", "fill": "transparent", "r": "15", "cx": "25", "cy": "25" } })]) : _vm._e()], 1) : _vm._e(), _c("NcActions", { staticClass: "header-actions", attrs: { "inline": _vm.inlineActions } }, [_vm._t("actions")], 2), !_vm.noClose && _vm.canClose && !_vm.closeButtonContained ? _c("NcButton", { staticClass: "header-close", attrs: { "aria-label": _vm.closeButtonAriaLabel, "variant": "tertiary" }, on: { "click": _vm.close }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("Close", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 2121748766) }) : _vm._e()], 1)])]), _c("transition", { attrs: { "name": _vm.modalTransitionName, "appear": "" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.showModal, expression: "showModal" }], staticClass: "modal-wrapper", class: [
    `modal-wrapper--${_vm.size}`,
    { "modal-wrapper--spread-navigation": _vm.spreadNavigation }
  ], on: { "mousedown": function($event) {
    if ($event.target !== $event.currentTarget) return null;
    return _vm.handleClickModalWrapper.apply(null, arguments);
  } } }, [_c("transition", { attrs: { "name": "fade-visibility", "appear": "" } }, [_c("NcButton", { directives: [{ name: "show", rawName: "v-show", value: _vm.hasPrevious, expression: "hasPrevious" }], staticClass: "prev", attrs: { "aria-label": _vm.prevButtonAriaLabel, "variant": "tertiary-no-background" }, on: { "click": _vm.previous }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("NcIconSvgWrapper", { attrs: { "directional": "", "path": _vm.mdiChevronLeft, "size": 40 } })];
  }, proxy: true }]) })], 1), _c("div", { staticClass: "modal-container", attrs: { "id": "modal-description-" + _vm.randId } }, [_c("div", { staticClass: "modal-container__content" }, [_vm._t("default")], 2), !_vm.noClose && _vm.canClose && _vm.closeButtonContained ? _c("NcButton", { staticClass: "modal-container__close", attrs: { "aria-label": _vm.closeButtonAriaLabel, "variant": "tertiary" }, on: { "click": _vm.close }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("Close", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 2121748766) }) : _vm._e()], 1), _c("transition", { attrs: { "name": "fade-visibility", "appear": "" } }, [_c("NcButton", { directives: [{ name: "show", rawName: "v-show", value: _vm.hasNext, expression: "hasNext" }], staticClass: "next", attrs: { "aria-label": _vm.nextButtonAriaLabel, "variant": "tertiary-no-background" }, on: { "click": _vm.next }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("NcIconSvgWrapper", { attrs: { "directional": "", "path": _vm.mdiChevronRight, "size": 40 } })];
  }, proxy: true }]) })], 1)], 1)])], 1)]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  "0fc6c354"
);
const NcModal = __component__$3.exports;
ScopeComponent(NcModal);
register(t30);
const _sfc_main = {
  name: "AdminSettings",
  components: {
    NcSelect,
    NcSettingsSection,
    NcCheckboxRadioSwitch,
    NcTextField
  },
  data() {
    return {
      loading: false,
      loadingGroups: false,
      groups: [],
      saveNotification: null,
      adminApproval: false,
      registeredUserGroup: "",
      allowedDomains: "",
      domainsIsBlocklist: false,
      showDomains: false,
      emailIsOptional: false,
      disableEmailVerification: false,
      emailIsLogin: false,
      usernamePolicyRegex: "",
      showFullname: false,
      enforceFullname: false,
      showPhone: false,
      enforcePhone: false,
      additionalHint: "",
      emailVerificationHint: ""
    };
  },
  computed: {
    domainListLabel() {
      if (this.domainsIsBlocklist) {
        return t("registration", "Blocked email domains");
      }
      return t("registration", "Allowed email domains");
    },
    showDomainListLabel() {
      if (this.domainsIsBlocklist) {
        return t("registration", "Show the blocked email domains to users");
      }
      return t("registration", "Show the allowed email domains to users");
    }
  },
  mounted() {
    this.adminApproval = loadState("registration", "admin_approval_required");
    this.registeredUserGroup = loadState("registration", "registered_user_group");
    this.allowedDomains = loadState("registration", "allowed_domains");
    this.domainsIsBlocklist = loadState("registration", "domains_is_blocklist");
    this.showDomains = loadState("registration", "show_domains");
    this.emailIsOptional = loadState("registration", "email_is_optional");
    this.disableEmailVerification = loadState("registration", "disable_email_verification");
    this.emailIsLogin = loadState("registration", "email_is_login");
    this.usernamePolicyRegex = loadState("registration", "username_policy_regex");
    this.showFullname = loadState("registration", "show_fullname");
    this.enforceFullname = loadState("registration", "enforce_fullname");
    this.showPhone = loadState("registration", "show_phone");
    this.enforcePhone = loadState("registration", "enforce_phone");
    this.additionalHint = loadState("registration", "additional_hint");
    this.emailVerificationHint = loadState("registration", "email_verification_hint");
    this.searchGroup("");
  },
  methods: {
    debounceSavingSlow: debounce(function() {
      this.saveData();
    }, 2e3),
    async saveData() {
      this.loading = true;
      if (this.saveNotification) {
        await this.saveNotification.hideToast();
      }
      try {
        const response = await cancelableClient.post(_("/apps/registration/settings"), {
          admin_approval_required: this.adminApproval,
          registered_user_group: this.registeredUserGroup?.id,
          allowed_domains: this.allowedDomains,
          domains_is_blocklist: this.domainsIsBlocklist,
          show_domains: this.showDomains,
          email_is_optional: this.emailIsOptional,
          disable_email_verification: this.emailIsOptional || this.disableEmailVerification,
          email_is_login: !this.emailIsOptional && this.emailIsLogin,
          username_policy_regex: this.usernamePolicyRegex,
          show_fullname: this.showFullname,
          enforce_fullname: this.enforceFullname,
          show_phone: this.showPhone,
          enforce_phone: this.enforcePhone,
          additional_hint: this.additionalHint,
          email_verification_hint: this.emailVerificationHint
        });
        if (response?.data?.status === "success" && response?.data?.data?.message) {
          this.saveNotification = showSuccess(response.data.data.message);
        } else if (response?.data?.data?.message) {
          this.saveNotification = showError(response.data.data.message);
        } else {
          this.saveNotification = showError(t("registration", "An error occurred while saving the settings"));
        }
      } catch (e2) {
        if (e2.response?.data?.data?.message) {
          this.saveNotification = showError(e2.response.data.data.message);
        } else {
          this.saveNotification = showError(t("registration", "An error occurred while saving the settings"));
          console.error(e2);
        }
      }
      this.loading = false;
    },
    searchGroup: debounce(async function(query) {
      this.loadingGroups = true;
      try {
        const response = await cancelableClient.get(v("cloud/groups/details"), {
          search: query,
          limit: 20,
          offset: 0
        });
        this.groups = response.data.ocs.data.groups.sort(function(a, b) {
          return a.displayname.localeCompare(b.displayname);
        });
      } catch (err) {
        console.error("Could not fetch groups", err);
      } finally {
        this.loadingGroups = false;
      }
    }, 500)
  }
};
var _sfc_render = function render20() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { attrs: { "id": "registration_settings_form" } }, [_c("NcSettingsSection", { attrs: { "name": _vm.t("registration", "Registration settings") } }, [_c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.adminApproval, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.adminApproval = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Require administrator approval")) + " ")]), _c("p", [_c("em", [_vm._v(_vm._s(_vm.t("registration", 'Enabling "administrator approval" will prevent registrations from mobile and desktop clients to complete as the credentials cannot be verified by the client until the user was enabled.')))])]), _c("div", [_c("div", { staticClass: "margin-top" }, [_c("label", { attrs: { "for": "registered_user_group" } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Registered users default group")) + " ")])]), _c("NcSelect", { attrs: { "id": "registered_user_group", "placeholder": _vm.t("registration", "Select group"), "options": _vm.groups, "disabled": _vm.loading, "searchable": true, "tag-width": 60, "loading": _vm.loadingGroups, "close-on-select": false, "label": "displayname" }, on: { "search": _vm.searchGroup, "input": _vm.saveData }, model: { value: _vm.registeredUserGroup, callback: function($$v) {
    _vm.registeredUserGroup = $$v;
  }, expression: "registeredUserGroup" } })], 1)], 1), _c("NcSettingsSection", { attrs: { "name": _vm.t("registration", "Email settings") } }, [_c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.emailIsOptional, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.emailIsOptional = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Email is optional")) + " ")]), _c("NcTextField", { attrs: { "label": _vm.domainListLabel, "label-visible": true, "value": _vm.allowedDomains, "disabled": _vm.loading, "placeholder": "nextcloud.com;*.example.com" }, on: { "update:value": function($event) {
    _vm.allowedDomains = $event;
  }, "input": _vm.debounceSavingSlow } }), _c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.domainsIsBlocklist, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.domainsIsBlocklist = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Block listed email domains instead of allowing them")) + " ")]), _c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.showDomains, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.showDomains = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.showDomainListLabel) + " ")]), !_vm.emailIsOptional ? _c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.disableEmailVerification, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.disableEmailVerification = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Disable email verification")) + " ")]) : _vm._e()], 1), _c("NcSettingsSection", { attrs: { "name": _vm.t("registration", "User settings") } }, [!_vm.emailIsOptional ? _c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.emailIsLogin, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.emailIsLogin = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Force email as login name")) + " ")]) : _vm._e(), !_vm.emailIsLogin ? [_c("p", [_c("label", { attrs: { "for": "username_policy_regex" } }, [_vm._v(_vm._s(_vm.t("registration", "Login name policy")))]), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.usernamePolicyRegex, expression: "usernamePolicyRegex" }], attrs: { "id": "username_policy_regex", "type": "text", "name": "username_policy_regex", "disabled": _vm.loading, "placeholder": "E.g.: /^[a-z-]+\\.[a-z-]+$/", "aria-label": _vm.t("registration", "Regular expression to validate login names") }, domProps: { "value": _vm.usernamePolicyRegex }, on: { "input": [function($event) {
    if ($event.target.composing) return;
    _vm.usernamePolicyRegex = $event.target.value;
  }, _vm.debounceSavingSlow] } })]), _c("em", [_vm._v(_vm._s(_vm.t("registration", "If configured, login names will be validated through the regular expression. If the validation fails the user is prompted with a generic error. Make sure your regex is working correctly.")))])] : _vm._e(), _c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.showFullname, "disabled": _vm.loading, "type": "switch" }, on: { "update:checked": [function($event) {
    _vm.showFullname = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Show full name field")) + " ")]), _vm.showFullname ? _c("NcCheckboxRadioSwitch", { staticClass: "indent", attrs: { "checked": _vm.enforceFullname, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.enforceFullname = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Enforce full name field")) + " ")]) : _vm._e(), _c("NcCheckboxRadioSwitch", { attrs: { "checked": _vm.showPhone, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.showPhone = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Show phone field")) + " ")]), _vm.showPhone ? _c("NcCheckboxRadioSwitch", { staticClass: "indent", attrs: { "checked": _vm.enforcePhone, "type": "switch", "disabled": _vm.loading }, on: { "update:checked": [function($event) {
    _vm.enforcePhone = $event;
  }, _vm.saveData] } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Enforce phone field")) + " ")]) : _vm._e()], 2), _c("NcSettingsSection", { attrs: { "name": _vm.t("registration", "User instructions"), "description": _vm.t("registration", "Caution: The user instructions will not be translated and will therefore be displayed as configured below for all users regardless of their actual language.") } }, [_c("h3", [_vm._v(_vm._s(_vm.t("registration", "Registration form instructions")))]), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.additionalHint, expression: "additionalHint" }], attrs: { "type": "text", "name": "additional_hint", "disabled": _vm.loading, "placeholder": _vm.t("registration", `Please create your username following the scheme 'firstname.lastname'.`), "aria-label": _vm.t("registration", "A short message that is shown to the user in the registration process.") }, domProps: { "value": _vm.additionalHint }, on: { "input": [function($event) {
    if ($event.target.composing) return;
    _vm.additionalHint = $event.target.value;
  }, _vm.debounceSavingSlow] } }), _c("p", [_c("em", [_vm._v(_vm._s(_vm.t("registration", "Add additional user instructions (e.g. for choosing their login name). If configured the text is displayed in the account creation step of the registration process.")))])]), _c("h3", [_vm._v(_vm._s(_vm.t("registration", "Verification email instructions")))]), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.emailVerificationHint, expression: "emailVerificationHint" }], attrs: { "type": "text", "name": "email_verification_hint", "disabled": _vm.loading, "placeholder": _vm.t("registration", `Please create your username following the scheme 'firstname.lastname'.`), "aria-label": _vm.t("registration", "A short message that is shown to the user in the verification email.") }, domProps: { "value": _vm.emailVerificationHint }, on: { "input": [function($event) {
    if ($event.target.composing) return;
    _vm.emailVerificationHint = $event.target.value;
  }, _vm.debounceSavingSlow] } }), _c("p", [_c("em", [_vm._v(_vm._s(_vm.t("registration", "Add additional user instructions (e.g. for choosing their login name). If configured the text is embedded in the verification-email.")))])])])], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent$3(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "a36a5777"
);
const AdminSettings = __component__.exports;
Vue.prototype.t = t;
Vue.prototype.OC = OC;
new Vue({
  el: "#registration_settings_form",
  render: (h) => h(AdminSettings)
});
//# sourceMappingURL=registration-settings.mjs.map
