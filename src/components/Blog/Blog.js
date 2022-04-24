import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Q1. What is context API?</h1>
      <p>
        Context allows us to transfer data down the component tree without
        having to explicitly pass props at each level. Generally, props are used
        to send data from top to bottom, but this might be inconvenient for
        certain sorts of props that are required by multiple components within
        an application. Here, context allows components to share values like
        these without having to pass a prop through each level of the tree
        directly.
      </p>
      <h1>Q2. What is semantic Tag?</h1>
      <p>
        Semantic tags or elements are those that have a meaning to both the
        developer and the browser. Semantic tag helps developer to identify what
        one part represent. Even, search engines and assistive technologies are
        also able to better understand the context and content of one's website,
        meaning a better experience for one's users. Examples of semantic
        elements: 'nav', 'form', 'table', 'article' and so on.
      </p>

      <h1>Q3. Difference betweem Inline, Block and Inline-Block elements</h1>
      <p>
        Inline element are arranged side by side after one take width as
        necessary. Block elements are arranged one after another like in a new
        line no matther how much space one has. Each block-level element will
        take a new line and takes up the full width available. In inline-block
        element we can set a width and height on the element and the top and
        bottom margins/paddings are respected, which is not in inline element.
        Again, inline-block does not add a line-break after the element, so the
        elements can stay beside each other which is not in bolck element.
      </p>
    </div>
  );
};

export default Blog;
