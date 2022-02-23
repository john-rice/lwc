(function (lwc) {
    'use strict';

    function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
      var hostSelector = token ? ("[" + token + "-host]") : "";
      return (useActualHostSelector ? ":host {color: var(--lwc-my-color);}" : [hostSelector, " {color: var(--lwc-my-color);}"].join(''));
      /*LWC compiler vX.X.X*/
    }
    var _implicitStylesheets = [stylesheet];

    var _implicitScopedStylesheets = undefined;

    const stc0$1 = {
      key: 0
    };
    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
      return [api_element("div", stc0$1, [api_text(api_dynamic_text($cmp.x))])];
      /*LWC compiler vX.X.X*/
    }
    var _tmpl$1 = lwc.registerTemplate(tmpl$1);


    if (_implicitStylesheets || _implicitScopedStylesheets) {
      lwc.registerStylesheets(tmpl$1, "ts-foo_foo", _implicitStylesheets, _implicitScopedStylesheets);
    }

    class Foo extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.x = void 0;
      }
      /*LWC compiler vX.X.X*/


    }

    lwc.registerDecorators(Foo, {
      publicProps: {
        x: {
          config: 0
        }
      }
    });

    var _tsFoo = lwc.registerComponent(Foo, {
      tmpl: _tmpl$1
    });

    const stc0 = {
      classMap: {
        "container": true
      },
      key: 0
    };
    const stc1 = {
      props: {
        "x": "1"
      },
      key: 1
    };
    function tmpl($api, $cmp, $slotset, $ctx) {
      const {c: api_custom_element, h: api_element} = $api;
      return [api_element("div", stc0, [api_custom_element("ts-foo", _tsFoo, stc1)])];
      /*LWC compiler vX.X.X*/
    }
    var _tmpl = lwc.registerTemplate(tmpl);

    class App extends lwc.LightningElement {
      constructor() {
        super();
      }
      /*LWC compiler vX.X.X*/


    }

    var App$1 = lwc.registerComponent(App, {
      tmpl: _tmpl
    });

    function doNothing() {
      return;
    }

    // @ts-ignore
    const container = document.getElementById('main');
    const element = lwc.createElement('ts-app', {
      is: App$1
    });
    container.appendChild(element); // testing relative import works

    console.log('>>', doNothing());

})(LWC);
