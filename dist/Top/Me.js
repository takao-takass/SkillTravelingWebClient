import React, {useState} from "../../_snowpack/pkg/react.js";
function Me() {
  const defaultMe = {
    name: "",
    description: "",
    thumbnail: ""
  };
  const [me, setMe] = useState(defaultMe);
  fetch("/data/me.json").then((response) => response.json()).then((data) => {
    setMe(data);
  }).catch((error) => console.error("Error:", error));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", {
    src: me.thumbnail
  }), /* @__PURE__ */ React.createElement("h3", null, me.name), /* @__PURE__ */ React.createElement("p", null, me.description));
}
export default Me;
