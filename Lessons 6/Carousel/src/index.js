const carousel = document.getElementById("carousel"),
      carouselItems = document.getElementById("slides"),
      prev = document.getElementById("prev"),
      next = document.getElementById("next");

slide(carousel, carouselItems, prev, next);

function slide(wrapper, items, prev, next) {
  let posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName("slide"),
      slideLength = slides.length,
      slideWidth = items.getElementsByClassName("slide")[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slideLength - 1],
      cloneFirst = firstSlide.cloneNode(),
      cloneLast = lastSlide.cloneNode(),
      index = 0,
      allowShift = true;

      //cloning first and last slides
      items.appendChild(cloneFirst);
      items.insertBefore(cloneLast, firstSlide);
      wrapper.classList.add("loaded");

      //lets define events
      items.onmousedown = dragStart;
      items.addEventListener('touchstart', dragStart);
      items.addEventListener('touchend', dragEnd);
      items.addEventListener('touchmove', dragAction);
      prev.addEventListener('click', function () { shiftSlide(-1) });
      next.addEventListener('click', function () { shiftSlide(1) });
      items.addEventListener('transitionend', checkIndex);
      
      function dragStart(e) {
        console.log("dragStart");
        e = e || window.event;
        e.preventDefault();

        posInitial = items.offsetLeft;
        if (e.type === "touchstart") {
          posX1 = items.touches[0].clientX;
        } else {
          posX1 = e.clientX;
          document.onmouseup = dragEnd;
          document.onmousemove = dragAction;
        }
      }

      function dragEnd(e) {
        console.log("dragEnd");
        posFinal = items.offsetLeft;

        if (posFinal - posInitial < -threshold) {
          console.log("slide 1");
          shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
          console.log("slide -1");
          shiftSlide(-1, 'drag');
        } else {
          items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;

      }

      function dragAction(e) {
        console.log("dragAction");
        e = e || window.event;

        if (e.type == 'touchmove') {
          posX2 = posX1 - e.touches[0].clientX;
          posX1 = e.touches[0].clientX;
        } else {
          posX2 = posX1 - e.clientX;
          posX1 = e.clientX;
        }

        items.style.left = (items.offsetLeft - posX2) + "px";
      }

      function shiftSlide(direction, action) {
        console.log("shiftSlide: " + direction);
        items.classList.add("shifting");

        if (allowShift) {
          if(!action) posInitial = items.offsetLeft;

          if (direction === 1) {
            items.style.left = (posInitial - slideWidth) + "px";
            index++;
          } else if (direction === -1) {
            items.style.left = (posInitial + slideWidth) + "px";
            index--;
          }
        }
        console.log(index);
        allowShift = false;
      }

      function checkIndex() {
        console.log("checkIndex");
        items.classList.remove("shifting");

        if (index === -1) {
          items.style.left = -(slideLength * slideWidth) + "px";
          index = slideLength - 1;
        }

        if (index === slideLength) {
          items.style.left = -(1 * slideWidth) + "px";
          index = 0;
        }
        allowShift = true;
      }
}
