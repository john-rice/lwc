import { parseFragment, registerTemplate } from "lwc";
let $fragment1;
const $hoisted1 = parseFragment`<p${1}${2}>Test slot content</p>`;
const stc0 = {
  attrs: {
    name: "secret-slot",
  },
  key: 0,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const { t: api_text, st: api_static_fragment, s: api_slot } = $api;
  return [
    api_slot(
      "secret-slot",
      stc0,
      [
        api_static_fragment(
          $fragment1 || ($fragment1 = $hoisted1()),
          "@secret-slot:2"
        ),
      ],
      $slotset
    ),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["secret-slot"];
tmpl.stylesheets = [];
