import { h } from "preact";

export default (props) => {

  // Start with r = 0
  let r = 0;

  // Then assign it another value
  r = "0x" + props.foo

  // Finally log r. It shouldn't be transformed to a literal 0
  console.log('Logging r, which should not be zero', r);

  return (
    <div>
      <h1>a marketing landing page</h1>
    </div>
  )
};
