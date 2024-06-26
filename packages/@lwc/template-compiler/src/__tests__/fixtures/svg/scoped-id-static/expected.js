import _implicitStylesheets from "./scoped-id-static.css";
import _implicitScopedStylesheets from "./scoped-id-static.scoped.css?scoped=true";
import {
  freezeTemplate,
  parseSVGFragment,
  registerTemplate,
  sanitizeAttribute,
} from "lwc";
const $fragment1 = parseSVGFragment`<defs${3}><circle${"a1:id"} r="10" cx="10" cy="10" fill="black"${3}/><circle${"a2:id"} r="10" cx="14" cy="14" fill="red"${3}/></defs>`;
const stc0 = {
  attrs: {
    width: "100px",
    height: "100px",
    viewport: "0 0 100 100",
  },
  key: 0,
  svg: true,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    gid: api_scoped_id,
    sp: api_static_part,
    st: api_static_fragment,
    fid: api_scoped_frag_id,
    h: api_element,
  } = $api;
  return [
    api_element("svg", stc0, [
      api_static_fragment($fragment1, 2, [
        api_static_part(
          1,
          {
            attrs: {
              id: api_scoped_id("black"),
            },
          },
          null
        ),
        api_static_part(
          2,
          {
            attrs: {
              id: api_scoped_id("red"),
            },
          },
          null
        ),
      ]),
      api_element("use", {
        attrs: {
          href: sanitizeAttribute(
            "use",
            "http://www.w3.org/2000/svg",
            "href",
            api_scoped_frag_id("#black")
          ),
        },
        key: 3,
        svg: true,
      }),
      api_element("use", {
        attrs: {
          "xlink:href": sanitizeAttribute(
            "use",
            "http://www.w3.org/2000/svg",
            "xlink:href",
            api_scoped_frag_id("#red")
          ),
        },
        key: 4,
        svg: true,
      }),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-1h20vq2uq0o";
tmpl.legacyStylesheetToken = "x-scoped-id-static_scoped-id-static";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
