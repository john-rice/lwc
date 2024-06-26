import _implicitStylesheets from "./deep-data-ref-only.css";
import _implicitScopedStylesheets from "./deep-data-ref-only.scoped.css?scoped=true";
import { freezeTemplate, parseFragment, registerTemplate } from "lwc";
const $fragment1 = parseFragment`<div${3}><div${3}></div><div${3}><div${3}><div${3}></div><div${3}></div></div></div><div${3}></div><div${3}></div></div>`;
const stc0 = {
  ref: "foo",
};
const stc1 = {
  ref: "baz",
};
const stc2 = {
  ref: "bar",
};
const stc3 = {
  ref: "quux",
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const { sp: api_static_part, st: api_static_fragment } = $api;
  return [
    api_static_fragment($fragment1, 1, [
      api_static_part(4, stc0, null),
      api_static_part(5, stc1, null),
      api_static_part(6, stc2, null),
      api_static_part(7, stc3, null),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.hasRefs = true;
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-64u42t5nfmt";
tmpl.legacyStylesheetToken = "x-deep-data-ref-only_deep-data-ref-only";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
