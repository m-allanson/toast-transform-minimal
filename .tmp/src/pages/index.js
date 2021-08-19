import { h } from "preact";
export default ((props)=>{
    // Start with r = 0
    let r;
    // Then assign it another value
    r = "0x" + props.foo;
    // Finally log r. It shouldn't be transformed to a literal 0
    console.log('Logging r, which should not be zero', 0);
    return h("div", null, h("h1", null, "a marketing landing page"));
});
