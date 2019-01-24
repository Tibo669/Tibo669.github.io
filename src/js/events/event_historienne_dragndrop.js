// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener
  });

function dragMoveListener (event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

  // update the position attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

interact('#dropzone-romaine').dropzone({
  // only accept elements matching this CSS selector

  accept: '#colonne-romaine',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  }
});

interact('#dropzone-grecque').dropzone({
  // only accept elements matching this CSS selector

  accept: '#colonne-grecque',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  }
});

interact('#dropzone-medievale').dropzone({
  // only accept elements matching this CSS selector

  accept: '#colonne-medievale',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  }
});

interact('#dropzone-renaissance').dropzone({
  // only accept elements matching this CSS selector

  accept: '#colonne-renaissance',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  }
});

// enable draggables to be dropped into this
interact('.example').dropzone({
  // only accept elements matching this CSS selector

  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
      dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

interact('.drag-drop')
  .draggable({
    inertia: true,
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    onmove: dragMoveListener,
  });

