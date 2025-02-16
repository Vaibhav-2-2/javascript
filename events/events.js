document.getElementById("one").addEventListener("click", function () {
  alert("one me");
});
document.getElementById("two").addEventListener("click", function () {
  alert("two me");
});

// type, timestamp, defaultPrevented, target, srcElement, currentTarget, bubbles, cancelable, eventPhase, composed, cancelBubble, returnValue,
// isTrusted, composedPath,

// Event Propagation Theory:
// 1. Event Bubbling: When an event occurs on an element, it first runs handlers on it,
//    then on its parent, then all the way up to ancestors. Like a bubble rising up.
//    Example: click on <button> -> <div> -> <body> -> <html> -> document

// 2. Event Capturing (opposite of bubbling): Events are first captured by the outermost ancestor,
//    then propagated to the inner elements. (addEventListener's third parameter: true)
//    Example: document -> <html> -> <body> -> <div> -> <button>

// 3. Event Phases:
//    - Capturing Phase (1): Event goes down to the element
//    - Target Phase (2): Event reaches the target element
//    - Bubbling Phase (3): Event bubbles up from the element

// 4. Stop Propagation:
//    - event.stopPropagation() - stops the bubbling
//    - event.stopImmediatePropagation() - stops bubbling and prevents other handlers on same element

// 5. Event Delegation:
//    Pattern where we attach a single event listener to a parent element
//    to handle events on its children (present and future). More efficient
//    than attaching listeners to each child.

// 6. Event Spillover:
//    When events unintentionally affect elements outside their intended target area.
//    Common in nested elements or overlapping UI components. Can be prevented by:
//    - Using event.stopPropagation()
//    - Careful event delegation
//    - Proper z-index management
//    - Using event.preventDefault() for default behaviors
