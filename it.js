document.addEventListener('DOMContentLoaded', () => {
    const shapeContainer = document.getElementById('shape-container');
    const text = document.getElementsByClassName( 'text');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    function createShape(x, y) {
        const shape = document.createElement('div');
        shape.classList.add('shape');


        const shapeType = getRandomInt(1, 4);
        let size = getRandomInt(20, 100);

        switch(shapeType) {
            case 1:
                shape.classList.add('circle');
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                break;
            case 2:
                shape.classList.add('square');
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                break;
            case 3:
                shape.classList.add('rectangle');
                shape.style.width = `${size}px`;
                shape.style.height = `${size / 2}px`;
                shape.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                break;
            case 4:
                shape.classList.add('text');
                size = getRandomInt(20, 50); // Triangle size adjustment
                shape.style.borderBottomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                break;
                
            
                

        }

        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;

        shapeContainer.appendChild(shape);

        setTimeout(() => {
            shape.style.opacity = 0;
            setTimeout(() => shapeContainer.removeChild(shape), 500);
        }, 2000);
    }

    shapeContainer.addEventListener('mousemove', (event) => {
        createShape(event.clientX, event.clientY);
    });
});
