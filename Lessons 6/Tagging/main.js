document.addEventListener('mousedown', function(event) {

  let dragElement = event.target.closest('.tagging-element');
  if (!dragElement) return;
  drag(dragElement, event);

  function drag(elementToDrag, event) {
    let startX = event.clientX, startY = event.clientY,
        origX = elementToDrag.offsetLeft , origY = elementToDrag.offsetTop,
        deltaX = startX - origX, deltaY = startY - origY;

    if (document.addEventListener) {
       document.addEventListener("mousemove", moveHandler, true);
       document.addEventListener("mouseup", upHandler, true);
    }
    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();

    function moveHandler(e) {
        e = e || window.event;
        elementToDrag.style.left = (e.clientX - deltaX) + "px";
        elementToDrag.style.top = (e.clientY - deltaY) + "px";

        if (e.stopPropagation) e.stopPropagation(); 
    }

    function upHandler(e) {
      e = e || window.event;
      if (document.removeEventListener) {
          document.removeEventListener("mouseup", upHandler, true);
          document.removeEventListener("mousemove", moveHandler, true);
      }
      if (e.stopPropagation) e.stopPropagation();
    }
  }
});
