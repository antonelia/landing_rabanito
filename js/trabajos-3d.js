$( document ).ready(function() {
    $('#modal-codigo-qr').modal('hide');
     //document.body.style.overflow = "hidden";
  const rotatebutton = $('#follow-cursor');
  const section = $('.rotado');
  let clicksRotar = 0;
  let darkModeEnabled;

  rotatebutton.on('click', function() {
    clicksRotar ++;
    console.log(clicksRotar);
    if(clicksRotar < 3){
      section.animate({rotate: '+=90deg'}, 500);
    }
    if(clicksRotar >= 2){
      setTimeout(function() {
        rotatebutton.fadeOut();
      }, 500);
    }
    
    const currentRotation = section.css('transform');
      if (currentRotation === 'matrix(1, 0, 0, 1, 0, 0)' || currentRotation === 'none') {
        button.hide();
      }
  });
});

$("#follow-cursor").hide();

$(".rotado").mouseenter(function() {
  $("#follow-cursor").fadeIn();
});

const splitWords = () => {
    const textNode = document.querySelector(".text");
    const text = textNode.textContent;
    const newDomElements = text.split(" ").map((text) => {
      const highlighted =
        text.startsWith(`"30under30"`) ||
        text.startsWith(`CTO`) ||
        text.startsWith(`Mythrill`);
        return `<span class="word ${
          highlighted ? "highlighted" : null
        }">${text}</span>`;
    });
    textNode.innerHTML = newDomElements.join("");
};

const renderCanvas = () => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;
    const params = {
      isStatic: true,
      render: {
        fillStyle: "transparent"
      }
    };
    const canvasSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const engine = Engine.create({});

    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        ...canvasSize,
        background: "transparent",
        wireframes: false
      }
    });
    const floor = Bodies.rectangle(
      canvasSize.width / 2,
      canvasSize.height,
      canvasSize.width,
      50,
      params
    );
    const wall1 = Bodies.rectangle(
      0,
      canvasSize.height / 2,
      50,
      canvasSize.height,
      params
    );
    const wall2 = Bodies.rectangle(
      canvasSize.width,
      canvasSize.height / 2,
      50,
      canvasSize.height,
      params
    );
    const top = Bodies.rectangle(
      canvasSize.width / 2,
      0,
      canvasSize.width,
      50,
      params
    );
    const wordElements = document.querySelectorAll(".word");
    const wordBodies = [...wordElements].map((elemRef) => {
      const width = elemRef.offsetWidth;
      const height = elemRef.offsetHeight;

      return {
        body: Matter.Bodies.rectangle(canvasSize.width / 2, 0, width, height, {
        render: {
          fillStyle: "transparent"
        }
      }),
      elem: elemRef,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x - width / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      }
    };
  });

  const mouse = Matter.Mouse.create(document.body);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  World.add(engine.world, [
    floor,
    ...wordBodies.map((box) => box.body),
    wall1,
    wall2,
    top,
    mouseConstraint
  ]);
  render.mouse = mouse;
  Runner.run(engine);
  Render.run(render);

  (function rerender() {
    wordBodies.forEach((element) => {
      element.render();
    });
    Matter.Engine.update(engine);
    requestAnimationFrame(rerender);
  })();
};

window.addEventListener("DOMContentLoaded", (event) => {
    splitWords();
    renderCanvas();
});

// Esta función cuenta los clicks, cuando se hacen 3 clicks en el sitio se muestra el modal para escanear el qr
(function () {
    var count = 0;
  
    $('body').click(function () {
      count += 1;
  
      if (count == 3) {
        $('#modal-codigo-qr').modal('toggle');
      }
    });
  })();