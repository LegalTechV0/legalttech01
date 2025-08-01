const appName = "registration";
const appVersion = "2.7.0";
import { n as normalizeComponent, a as normalizeComponent$1, N as NcTextField, b as NcButton, l as loadState, g as getRequestToken, r as register, t as t27, c as NcInputField, d as debounce, e as cancelableClient, v, f as t$1, h as logger, u as useModelMigration, V as Vue } from "./logger-D3RVzcfQ-Bxv3TsH_.chunk.mjs";
const _sfc_main$4$1 = {
  name: "CheckboxMarkedCircleIcon",
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
var _sfc_render$4$1 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon checkbox-marked-circle-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4$1 = [];
var __component__$4$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4$1,
  _sfc_render$4$1,
  _sfc_staticRenderFns$4$1,
  false,
  null,
  null
);
const CheckboxMarkedCircle = __component__$4$1.exports;
const _sfc_main$3$1 = {
  name: "AlertDecagramIcon",
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
var _sfc_render$3$1 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-decagram-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3$1 = [];
var __component__$3$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3$1,
  _sfc_render$3$1,
  _sfc_staticRenderFns$3$1,
  false,
  null,
  null
);
const AlertDecagram = __component__$3$1.exports;
const _sfc_main$2$2 = {
  name: "AlertIcon",
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
var _sfc_render$2$2 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2$2 = [];
var __component__$2$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2$2,
  _sfc_render$2$2,
  _sfc_staticRenderFns$2$2,
  false,
  null,
  null
);
const Alert = __component__$2$2.exports;
const _sfc_main$1$2 = {
  name: "InformationIcon",
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
var _sfc_render$1$2 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon information-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1$2 = [];
var __component__$1$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1$2,
  _sfc_render$1$2,
  _sfc_staticRenderFns$1$2,
  false,
  null,
  null
);
const Information = __component__$1$2.exports;
const _sfc_main$a = {
  name: "NcNoteCard",
  props: {
    /**
     * Type or severity of the message
     */
    type: {
      type: String,
      default: "warning",
      validator: (type) => ["success", "info", "warning", "error"].includes(type)
    },
    /**
     * Enforce the `alert` role on the note card.
     *
     * The [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
     * should only be used for information that requires the user's immediate attention.
     */
    showAlert: {
      type: Boolean,
      default: false
    },
    /**
     * Optional text to show as a heading of the note card
     */
    heading: {
      type: String,
      default: ""
    },
    /**
     * The message text of the note card
     */
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    shouldShowAlert() {
      return this.showAlert || this.type === "error";
    },
    icon() {
      switch (this.type) {
        case "error":
          return AlertDecagram;
        case "success":
          return CheckboxMarkedCircle;
        case "info":
          return Information;
        case "warning":
          return Alert;
        default:
          return Alert;
      }
    },
    color() {
      switch (this.type) {
        case "error":
          return "var(--color-error)";
        case "success":
          return "var(--color-success)";
        case "info":
          return "var(--color-info)";
        case "warning":
          return "var(--color-warning)";
        default:
          return "var(--color-warning)";
      }
    }
  }
};
var _sfc_render$a = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "notecard", class: `notecard--${_vm.type}`, attrs: { "role": _vm.shouldShowAlert ? "alert" : "note" } }, [_vm._t("icon", function() {
    return [_c(_vm.icon, { tag: "component", staticClass: "notecard__icon", class: { "notecard__icon--heading": _vm.heading }, attrs: { "fill-color": _vm.color, "size": 20 } })];
  }), _c("div", [_vm.heading ? _c("p", { staticClass: "notecard__heading" }, [_vm._v(" " + _vm._s(_vm.heading) + " ")]) : _vm._e(), _vm._t("default", function() {
    return [_c("p", { staticClass: "notecard__text" }, [_vm._v(" " + _vm._s(_vm.text) + " ")])];
  })], 2)], 2);
};
var _sfc_staticRenderFns$a = [];
var __component__$a = /* @__PURE__ */ normalizeComponent(
  _sfc_main$a,
  _sfc_render$a,
  _sfc_staticRenderFns$a,
  false,
  null,
  "7df28e9e"
);
const NcNoteCard = __component__$a.exports;
const _sfc_main$9 = {
  name: "EmailIcon",
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
var _sfc_render$9 = function render6() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon email-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$9 = [];
var __component__$9 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$9,
  _sfc_render$9,
  _sfc_staticRenderFns$9,
  false,
  null,
  null
);
const Email = __component__$9.exports;
const _sfc_main$8 = {
  name: "RegistrationEmail",
  components: {
    NcButton,
    NcTextField,
    NcNoteCard,
    Email
  },
  data() {
    return {
      emailIsOptional: loadState("registration", "emailIsOptional"),
      message: loadState("registration", "message"),
      requesttoken: getRequestToken(),
      disableEmailVerification: loadState("registration", "disableEmailVerification"),
      isLoginFlow: loadState("registration", "isLoginFlow"),
      loginFormLink: loadState("registration", "loginFormLink")
    };
  },
  computed: {
    emailLabel() {
      return this.emailIsOptional ? t("registration", "Email (optional)") : t("registration", "Email");
    },
    submitValue() {
      if (this.emailIsOptional || this.disableEmailVerification) {
        return t("registration", "Continue");
      } else if (this.isLoginFlow) {
        return t("registration", "Request verification code");
      } else {
        return t("registration", "Request verification link");
      }
    }
  }
};
var _sfc_render$8 = function render7() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "guest-box" }, [_c("form", { attrs: { "action": "", "method": "post" } }, [_c("fieldset", [_vm.message !== "" ? _c("NcNoteCard", { attrs: { "type": "error" } }, [_vm._v(" " + _vm._s(_vm.message) + " ")]) : _vm._e(), _c("NcTextField", { attrs: { "name": "email", "type": "email", "label": _vm.emailLabel, "label-visible": true, "required": "", "value": "", "autofocus": "" } }, [_c("Email", { attrs: { "size": 20 } })], 1), _c("div", { attrs: { "id": "terms_of_service" } }), _c("input", { attrs: { "type": "hidden", "name": "requesttoken" }, domProps: { "value": _vm.requesttoken } }), _c("NcButton", { attrs: { "id": "submit", "native-type": "submit", "type": "primary", "wide": true } }, [_vm._v(" " + _vm._s(_vm.submitValue) + " ")]), _c("NcButton", { attrs: { "type": "tertiary", "href": _vm.loginFormLink, "wide": true } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Back to login")) + " ")])], 1)])]);
};
var _sfc_staticRenderFns$8 = [];
var __component__$8 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  "b2af5ce3"
);
const RegistrationEmail = __component__$8.exports;
const _sfc_main$7 = {
  name: "ShieldCheckIcon",
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
var _sfc_render$7 = function render8() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon shield-check-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  null
);
const ShieldCheck = __component__$7.exports;
const _sfc_main$6 = {
  name: "Verification",
  components: {
    NcButton,
    NcTextField,
    NcNoteCard,
    ShieldCheck
  },
  data() {
    return {
      message: loadState("registration", "message"),
      requesttoken: getRequestToken(),
      loginFormLink: loadState("registration", "loginFormLink")
    };
  }
};
var _sfc_render$6 = function render9() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "guest-box" }, [_c("form", { attrs: { "action": "", "method": "post" } }, [_c("fieldset", [_vm.message !== "" ? _c("NcNoteCard", { attrs: { "type": "error" } }, [_vm._v(" " + _vm._s(_vm.message) + " ")]) : _vm._e(), _c("NcTextField", { attrs: { "type": "text", "name": "token", "label": _vm.t("registration", "Verification code"), "label-visible": true, "required": "", "value": "", "autofocus": "" } }, [_c("ShieldCheck", { attrs: { "size": 20 } })], 1), _c("input", { attrs: { "type": "hidden", "name": "requesttoken" }, domProps: { "value": _vm.requesttoken } }), _c("NcButton", { attrs: { "id": "submit", "native-type": "submit", "type": "primary", "wide": true } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Verify")) + " ")]), _c("NcButton", { attrs: { "type": "tertiary", "href": _vm.loginFormLink, "wide": true } }, [_vm._v(" " + _vm._s(_vm.t("registration", "Back to login")) + " ")])], 1)])]);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  "40cd88b1"
);
const Verification = __component__$6.exports;
const _sfc_main$2$1 = {
  name: "EyeIcon",
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
var _sfc_render$2$1 = function render10() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon eye-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2$1 = [];
var __component__$2$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2$1,
  _sfc_render$2$1,
  _sfc_staticRenderFns$2$1,
  false,
  null,
  null
);
const Eye = __component__$2$1.exports;
const _sfc_main$1$1 = {
  name: "EyeOffIcon",
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
var _sfc_render$1$1 = function render22() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon eye-off-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1$1 = [];
var __component__$1$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1$1,
  _sfc_render$1$1,
  _sfc_staticRenderFns$1$1,
  false,
  null,
  null
);
const EyeOff = __component__$1$1.exports;
register(t27);
const passwordPolicy = loadState("core", "capabilities", {}).password_policy || null;
const NcInputFieldProps = new Set(Object.keys(NcInputField.props));
const _sfc_main$5 = {
  name: "NcPasswordField",
  components: {
    NcInputField,
    Eye,
    EyeOff
  },
  // Allow forwarding all attributes
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * Any [NcInputField](#/Components/NcFields?id=ncinputfield) props
     */
    // Not an actual prop but needed to show in vue-styleguidist docs
    // eslint-disable-next-line
    " ": {},
    // Reuse all the props from NcInputField for better typing and documentation
    ...NcInputField.props,
    // Redefined props
    /**
     * Controls whether to display the trailing button.
     */
    showTrailingButton: {
      type: Boolean,
      default: true
    },
    // Removed NcInputField props, defined only by this component
    trailingButtonLabel: void 0,
    // Custom props
    /**
     * Check if the user entered a valid password using the password_policy
     * app if available.
     *
     * Warning: this doesn't replace server side checking and will do nothing
     * if the password_policy app is disabled.
     */
    checkPasswordStrength: {
      type: Boolean,
      default: false
    },
    /**
     * The minlength property defines the minimum number of characters
     * (as UTF-16 code units) the user can enter
     */
    minlength: {
      type: Number,
      default: 0
    },
    /**
     * The maxlength property defines the maximum number of characters
     * (as UTF-16 code units) the user can enter
     */
    maxlength: {
      type: Number,
      default: null
    },
    /**
     * Render as input[type=text] that looks like password field.
     * Allows to avoid unwanted password-specific browser behavior,
     * such as save or generate password prompt.
     * Useful for secret token fields.
     * Note: autocomplete="off" is ignored by browsers.
     */
    asText: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "valid",
    "invalid",
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:value",
    /**
     * Triggers when the value inside the password field is
     * updated.
     *
     * @property {string} The new value
     */
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const model = useModelMigration("value", "update:value");
    return {
      model
    };
  },
  data() {
    return {
      isPasswordHidden: true,
      internalHelpMessage: "",
      isValid: null
    };
  },
  computed: {
    computedError() {
      return this.error || this.isValid === false;
    },
    computedSuccess() {
      return this.success || this.isValid === true;
    },
    computedHelperText() {
      if (this.helperText.length > 0) {
        return this.helperText;
      }
      return this.internalHelpMessage;
    },
    rules() {
      const { minlength } = this;
      return {
        minlength: minlength ?? passwordPolicy?.minLength
      };
    },
    trailingButtonLabelPassword() {
      return this.isPasswordHidden ? t$1("Show password") : t$1("Hide password");
    },
    propsAndAttrsToForward() {
      return {
        // Proxy all the HTML attributes
        ...this.$attrs,
        // Proxy original NcInputField's props
        ...Object.fromEntries(
          Object.entries(this.$props).filter(([key]) => NcInputFieldProps.has(key))
        )
      };
    }
  },
  watch: {
    model(newValue) {
      if (this.checkPasswordStrength) {
        if (passwordPolicy === null) {
          return;
        }
        this.checkPassword(newValue);
      }
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.inputField.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.inputField.select();
    },
    handleInput(event) {
      this.model = event.target.value;
    },
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden;
    },
    checkPassword: debounce(async function(password) {
      try {
        const { data } = await cancelableClient.post(v("apps/password_policy/api/v1/validate"), { password });
        this.isValid = data.ocs.data.passed;
        if (data.ocs.data.passed) {
          this.internalHelpMessage = t$1("Password is secure");
          this.$emit("valid");
          return;
        }
        this.internalHelpMessage = data.ocs.data.reason;
        this.$emit("invalid");
      } catch (e) {
        logger.error("Password policy returned an error", e);
      }
    }, 500)
  }
};
var _sfc_render$5 = function render32() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcInputField", _vm._g(_vm._b({ ref: "inputField", attrs: { "type": _vm.isPasswordHidden && !_vm.asText ? "password" : "text", "trailing-button-label": _vm.trailingButtonLabelPassword, "helper-text": _vm.computedHelperText, "error": _vm.computedError, "success": _vm.computedSuccess, "minlength": _vm.rules.minlength, "input-class": { "password-field__input--secure-text": _vm.isPasswordHidden && _vm.asText } }, on: { "trailing-button-click": _vm.togglePasswordVisibility, "input": _vm.handleInput }, scopedSlots: _vm._u([!!_vm.$scopedSlots.icon || !!_vm.$slots.default || !!_vm.$scopedSlots.default ? { key: "icon", fn: function() {
    return [_vm._t("icon", function() {
      return [_vm._t("default")];
    })];
  }, proxy: true } : null, { key: "trailing-button-icon", fn: function() {
    return [_vm.isPasswordHidden ? _c("Eye", { attrs: { "size": 18 } }) : _c("EyeOff", { attrs: { "size": 18 } })];
  }, proxy: true }], null, true) }, "NcInputField", _vm.propsAndAttrsToForward, false), _vm.$listeners));
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  "09fb8faa"
);
const NcPasswordField = __component__$5.exports;
const _sfc_main$4 = {
  name: "LockIcon",
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
var _sfc_render$4 = function render11() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon lock-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  null
);
const Lock = __component__$4.exports;
const _sfc_main$3 = {
  name: "PhoneIcon",
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
var _sfc_render$3 = function render12() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon phone-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const Phone = __component__$3.exports;
const _sfc_main$2 = {
  name: "AccountIcon",
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
var _sfc_render$2 = function render13() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const Account = __component__$2.exports;
const _sfc_main$1 = {
  name: "KeyIcon",
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
var _sfc_render$1 = function render14() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon key-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null
);
const Key = __component__$1.exports;
const _sfc_main = {
  name: "User",
  components: {
    NcButton,
    NcNoteCard,
    NcTextField,
    NcPasswordField,
    Email,
    Lock,
    Phone,
    Account,
    Key
  },
  data() {
    return {
      email: loadState("registration", "email"),
      emailIsLogin: loadState("registration", "emailIsLogin"),
      emailIsOptional: loadState("registration", "emailIsOptional"),
      loginname: loadState("registration", "loginname"),
      fullname: loadState("registration", "fullname"),
      showFullname: loadState("registration", "showFullname"),
      enforceFullname: loadState("registration", "enforceFullname"),
      Industry: loadState("registration", "Industry"),
      showProfession: loadState("registration", "showProfession"),
      enforceProfession: loadState("registration", "enforceProfession"),
      phone: loadState("registration", "phone"),
      showPhone: loadState("registration", "showPhone"),
      enforcePhone: loadState("registration", "enforcePhone"),
      message: loadState("registration", "message"),
      password: loadState("registration", "password"),
      plan: "",
      period: "",
      additionalHint: loadState("registration", "additionalHint"),
      requesttoken: getRequestToken(),
      loginFormLink: loadState("registration", "loginFormLink"),
      isPasswordHidden: true,
      passwordInputType: "password",
      submitting: false
    };
  },
  mounted() {
    this.plan = localStorage.getItem("plan") || "";
    this.period = localStorage.getItem("period") || "";
  },
  methods: {
    togglePassword() {
      if (this.passwordInputType === "password") {
        this.passwordInputType = "text";
      } else {
        this.passwordInputType = "password";
      }
    },
    onSubmit() {
      this.submitting = true;
    }
  }
};
var _sfc_render = function render15() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "guest-box" }, [_c("form", { attrs: { "action": "", "method": "post" }, on: { "submit": _vm.onSubmit } }, [_c("input", { attrs: { "type": "hidden", "name": "requesttoken" }, domProps: { "value": _vm.requesttoken } }), _c("fieldset", [_vm.message !== "" ? _c("NcNoteCard", { attrs: { "type": "error" } }, [_vm._v(" " + _vm._s(_vm.message) + " ")]) : _c("p", [_vm._v(" " + _vm._s(_vm.t("registration", "Welcome, you can create your account below.")) + " ")]), _vm.additionalHint ? _c("NcNoteCard", { attrs: { "type": "success" } }, [_vm._v(" " + _vm._s(_vm.additionalHint) + " ")]) : _vm._e(), !_vm.emailIsOptional || _vm.email.length > 0 ? _c("NcTextField", { attrs: { "value": _vm.email, "type": "email", "label": _vm.t("registration", "Email"), "label-visible": true, "name": "email", "disabled": "" }, on: { "update:value": function($event) {
    _vm.email = $event;
  } } }, [_c("Email", { staticClass: "input__icon", attrs: { "size": 20 } })], 1) : _vm._e(), !_vm.emailIsLogin ? _c("NcTextField", { attrs: { "value": _vm.loginname, "type": "text", "name": "loginname", "label": _vm.t("registration", "Login name"), "label-visible": true, "required": "" }, on: { "update:value": function($event) {
    _vm.loginname = $event;
  } } }, [_vm.showFullname ? _c("Key", { staticClass: "input__icon", attrs: { "size": 20 } }) : _c("Account", { staticClass: "input__icon", attrs: { "size": 20 } })], 1) : _c("input", { attrs: { "type": "hidden", "name": "loginname" }, domProps: { "value": _vm.email } }), _vm.showFullname ? _c("NcTextField", { attrs: { "value": _vm.fullname, "type": "text", "name": "fullname", "label": _vm.t("registration", "Full name"), "label-visible": true, "required": _vm.enforceFullname }, on: { "update:value": function($event) {
    _vm.fullname = $event;
  } } }, [_c("Account", { staticClass: "input__icon", attrs: { "size": 20 } })], 1) : _c("input", { attrs: { "type": "hidden", "name": "fullname", "value": "" } }), _vm.showProfession ? _c("NcTextField", { attrs: { "value": _vm.Industry, "type": "text", "name": "Industry", "label": _vm.t("registration", "Industry"), "label-visible": true, "required": _vm.enforceProfession }, on: { "update:value": function($event) {
    _vm.Industry = $event;
  } } }, [_c("Account", { staticClass: "input__icon", attrs: { "size": 20 } })], 1) : _c("input", { attrs: { "type": "hidden", "name": "Industry", "value": "" } }), _vm.showPhone ? _c("NcTextField", { attrs: { "value": _vm.phone, "type": "text", "name": "phone", "label": _vm.t("registration", "Phone number"), "label-visible": true, "required": _vm.enforcePhone }, on: { "update:value": function($event) {
    _vm.phone = $event;
  } } }, [_c("Phone", { staticClass: "input__icon", attrs: { "size": 20 } })], 1) : _c("input", { attrs: { "type": "hidden", "name": "phone", "value": "" } }), _c("NcPasswordField", { attrs: { "value": _vm.password, "label": _vm.t("registration", "Password"), "label-visible": true, "name": "password", "required": "" }, on: { "update:value": function($event) {
    _vm.password = $event;
  } } }, [_c("Lock", { staticClass: "input__icon", attrs: { "size": 20 } })], 1), _c("input", { attrs: { "type": "hidden", "name": "plan" }, domProps: { "value": _vm.plan } }), _c("input", { attrs: { "type": "hidden", "name": "period" }, domProps: { "value": _vm.period } }), _c("NcButton", { attrs: { "id": "submit", "native-type": "submit", "type": "primary", "wide": true, "disabled": _vm.submitting || _vm.password.length === 0 } }, [_vm._v(" " + _vm._s(_vm.submitting ? _vm.t("registration", "Loading") : _vm.t("registration", "Create account")) + " ")])], 1)])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "2f8f9e75"
);
const User = __component__.exports;
Vue.prototype.t = t;
Vue.prototype.OC = OC;
if (document.getElementById("registration_email")) {
  new Vue({
    el: "#registration_email",
    render: (h) => h(RegistrationEmail)
  });
}
if (document.getElementById("registration_verification")) {
  new Vue({
    el: "#registration_verification",
    render: (h) => h(Verification)
  });
}
if (document.getElementById("registration_user")) {
  new Vue({
    el: "#registration_user",
    render: (h) => h(User)
  });
}
//# sourceMappingURL=registration-form.mjs.map
