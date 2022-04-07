import React from 'react';
import './blog.css'

const Blogs = () => {
    return (
        <div>
            <div className='semantic mx-auto'>
                <h2>Semantic Tags</h2>
                <p>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents.</p>
            </div>
            <h2>Difference between Inline Block and Inline-Block elements</h2>
            <div className='inline-block mx-auto'>
                <h3>Inline element</h3>
                <p>Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content. Note: An inline element does not start on a new line and only takes up as much width as necessary</p>
                <h3>Block element</h3>
                <p> A block-level element is an HTML element that begins a new line on a web page and extends the full width of the available horizontal space of its parent element. It creates large blocks of content like paragraphs or page divisions. In fact, most HTML elements are block-level elements</p>
                <h3>Inline-Block elements</h3>
                <p>Inline-Block allows to set a width and height on the element.
                    Also, with "display: inline-block", the top and bottom margins/paddings are respected, but with "display: inline" they are not.
                    Compared to "display: block", the major difference is that "display: inline-block" does not add a line-break after the element, so the element can sit next to other elements.
                </p>
            </div>
        </div>
    );
};

export default Blogs;