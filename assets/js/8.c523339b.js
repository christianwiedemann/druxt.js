(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{433:function(t,a,e){t.exports=e.p+"assets/img/umami.fb2904b6.png"},447:function(t,a,e){"use strict";e.r(a);var s=e(52),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("DruxtJS provides an easy connection between a Drupal JSON:API backend and NuxtJS frontend application.")])]),t._v(" "),s("h2",{attrs:{id:"druxtclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#druxtclient"}},[t._v("#")]),t._v(" DruxtClient")]),t._v(" "),s("p",[t._v("The DruxtClient is the communication layer between Nuxt and the Drupal JSON:API.")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DruxtClient "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'druxt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" druxt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DruxtClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://demo-api.druxtjs.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndruxt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCollection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node--page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("Get started with the "),s("RouterLink",{attrs:{to:"/guide/"}},[t._v("Guide")]),t._v(" and "),s("a",{attrs:{href:"/api/client"}},[t._v("API Documentation")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"the-druxt-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-druxt-component"}},[t._v("#")]),t._v(" The Druxt component")]),t._v(" "),s("p",[t._v("Druxt provides a Vue.js component to easily access Drupal's JSON:API data, with a simple Slot based theming system.")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Druxt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":module")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":props-data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("propsData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":wrapper")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Get started with the "),s("RouterLink",{attrs:{to:"/guide/"}},[t._v("Guide")]),t._v(" and "),s("RouterLink",{attrs:{to:"/api/components/Druxt.html"}},[t._v("API Documentation")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"join-the-community"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#join-the-community"}},[t._v("#")]),t._v(" Join the community")]),t._v(" "),s("p",[t._v("DruxtJS is an open source project, built by the comunity for the community.")]),t._v(" "),s("p",[t._v("Find support or get involved in building Druxt via our community channels:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://discord.druxtjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("DruxtJS Discord server"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("#druxt Slack channel on "),s("a",{attrs:{href:"https://drupal.org/slack",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drupal.org slack"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"site-module-drupal-umami-parity-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-module-drupal-umami-parity-project"}},[t._v("#")]),t._v(" Site Module / Drupal Umami Parity project")]),t._v(" "),s("p",[t._v("The DruxtJS Site module provides minimal configuration, decoupled Drupal site functionality.")]),t._v(" "),s("p",[t._v("Take a look at the "),s("a",{attrs:{href:"https://demo.druxtjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Umami Parity project demo"),s("OutboundLink")],1),t._v(", or checkout source for the "),s("a",{attrs:{href:"https://github.com/druxt/demo.druxtjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuxtJS frontend"),s("OutboundLink")],1),t._v(" and the "),s("a",{attrs:{href:"https://github.com/druxt/demo-api.druxtjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drupal 9 backend"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:e(433),alt:"Drupal Umami Parity demo"}})]),t._v(" "),s("p",[t._v("Get involved at the "),s("a",{attrs:{href:"https://github.com/orgs/druxt/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Umami Parity project board"),s("OutboundLink")],1),t._v(" or try out the "),s("a",{attrs:{href:"https://site.druxtjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("DruxtJS Site"),s("OutboundLink")],1),t._v(" module.")])])}),[],!1,null,null,null);a.default=r.exports}}]);