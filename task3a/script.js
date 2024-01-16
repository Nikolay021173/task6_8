const trafficLightEl = document.querySelectorAll('.trafficLight');

function ElemOfTrafficLight(numberOfElem, colorElem, firstElem, secondElem) {

    for(let i = 0; i < trafficLightEl.length; i++) {

        trafficLightEl[i].style.background = ('black');

        if(i === numberOfElem) {
            trafficLightEl[i].style.background = (colorElem);
        }

        trafficLightEl[i].removeEventListener('click', firstElem);
        trafficLightEl[i].addEventListener('click', secondElem); 

    } 
    
}

function firstElemOfTrafficLight() {
    ElemOfTrafficLight(0, 'green', firstElemOfTrafficLight, secondElemOfTrafficLight);
};

function secondElemOfTrafficLight() {
    ElemOfTrafficLight(1, 'yellow', secondElemOfTrafficLight, thirdElemOfTrafficLight);
}

function thirdElemOfTrafficLight() {
    ElemOfTrafficLight(2, 'red', thirdElemOfTrafficLight, firstElemOfTrafficLight);
}

let arrElemOfTrafficLight = [firstElemOfTrafficLight, secondElemOfTrafficLight, thirdElemOfTrafficLight];

  for(let i = 0; i < trafficLightEl.length; i++) {

    trafficLightEl[i].addEventListener('click',arrElemOfTrafficLight[i]);

  }



