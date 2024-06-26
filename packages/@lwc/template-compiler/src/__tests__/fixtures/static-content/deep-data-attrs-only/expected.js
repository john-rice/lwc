import _implicitStylesheets from "./deep-data-attrs-only.css";
import _implicitScopedStylesheets from "./deep-data-attrs-only.scoped.css?scoped=true";
import { freezeTemplate, parseFragment, registerTemplate } from "lwc";
const $fragment1 = parseFragment`<div${3}><div${3}></div><div${3}><div${3}><div${"a4:data-name"}${3}></div><div${"a5:data-name"}${3}></div></div></div><div${"a6:data-name"}${3}></div><div${"a7:data-name"}${3}></div></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const { sp: api_static_part, st: api_static_fragment } = $api;
  return [
    api_static_fragment($fragment1, 1, [
      api_static_part(
        4,
        {
          attrs: {
            "data-name": $cmp.foo,
          },
        },
        null
      ),
      api_static_part(
        5,
        {
          attrs: {
            "data-name": $cmp.baz,
          },
        },
        null
      ),
      api_static_part(
        6,
        {
          attrs: {
            "data-name": $cmp.bar,
          },
        },
        null
      ),
      api_static_part(
        7,
        {
          attrs: {
            "data-name": $cmp.quux,
          },
        },
        null
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-4vkge12a0vo";
tmpl.legacyStylesheetToken = "x-deep-data-attrs-only_deep-data-attrs-only";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
