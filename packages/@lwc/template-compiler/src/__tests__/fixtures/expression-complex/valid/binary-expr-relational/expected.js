import _implicitStylesheets from "./binary-expr-relational.css";
import _implicitScopedStylesheets from "./binary-expr-relational.scoped.css?scoped=true";
import _xPert from "x/pert";
import { freezeTemplate, registerTemplate } from "lwc";
const stc0 = {
  key: 0,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    d: api_dynamic_text,
    t: api_text,
    c: api_custom_element,
    h: api_element,
  } = $api;
  return [
    api_element("section", stc0, [
      api_custom_element(
        "x-pert",
        _xPert,
        {
          props: {
            attr: $cmp.foo > $cmp.bar,
          },
          key: 1,
        },
        [api_text(api_dynamic_text($cmp.foo > $cmp.bar))]
      ),
      api_custom_element(
        "x-pert",
        _xPert,
        {
          props: {
            attr: $cmp.foo < $cmp.bar,
          },
          key: 2,
        },
        [api_text(api_dynamic_text($cmp.foo < $cmp.bar))]
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-39eucbo25ji";
tmpl.legacyStylesheetToken = "x-binary-expr-relational_binary-expr-relational";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
