// function startPongAnimation() {
//     const parent = document.querySelector('header');
//     const elements = [
//         document.querySelector('.circle-1'),
//         document.querySelector('.quote-banner'),
//         document.querySelector('.music-player')
//     ];

//     // Speed control factor
//     const speed = 0.1; // Adjust this value to control the speed

//     // For each element, assign random starting positions and velocity
//     elements.forEach((el) => {
//         el.style.top = `${Math.random() * (parent.offsetHeight - el.offsetHeight)}px`;
//         el.style.left = `${Math.random() * (parent.offsetWidth - el.offsetWidth)}px`;

//         // Assign random velocities for x and y directions, multiplied by the speed factor
//         el.dataset.velocityX = (Math.random() * 4 + 1) * speed; // Velocity between 2 and 10
//         el.dataset.velocityY = (Math.random() * 4 + 1) * speed; // Velocity between 2 and 10
//     });

//     // Function to update position of each element
//     function updatePosition() {
//         elements.forEach((el) => {
//             let x = parseFloat(el.style.left);
//             let y = parseFloat(el.style.top);
//             let velocityX = parseFloat(el.dataset.velocityX);
//             let velocityY = parseFloat(el.dataset.velocityY);

//             // Check for collision with the parent's right or left boundary
//             if (x + el.offsetWidth >= parent.offsetWidth || x <= 0) {
//                 el.dataset.velocityX = -velocityX; // Reverse direction
//             }

//             // Check for collision with the parent's top or bottom boundary
//             if (y + el.offsetHeight >= parent.offsetHeight || y <= 0) {
//                 el.dataset.velocityY = -velocityY; // Reverse direction
//             }

//             // Update the new position
//             el.style.left = `${x + parseFloat(el.dataset.velocityX)}px`;
//             el.style.top = `${y + parseFloat(el.dataset.velocityY)}px`;
//         });

//         // Request next frame for the animation
//         requestAnimationFrame(updatePosition);
//     }

//     // Start the animation loop
//     requestAnimationFrame(updatePosition);
// }

// // Start the animation after the window loads
// window.onload = startPongAnimation;



function startPongAnimation() {
    const parent = document.querySelector('header');
    const circle1 = document.querySelector('.circle-1');
    const circle2 = document.querySelector('.circle-2');
    const elements = [
        circle1,
        document.querySelector('.quote-banner'),
        document.querySelector('.music-player')
    ];

    // Speed control factor
    const speed = 0.1; // Adjust this value to control the speed

    // Initialize positions and velocities for the elements
    elements.forEach((el) => {
        if (el !== circle1) {
            el.style.top = `${Math.random() * (parent.offsetHeight - el.offsetHeight)}px`;
            el.style.left = `${Math.random() * (parent.offsetWidth - el.offsetWidth)}px`;
            el.dataset.velocityX = (Math.random() * 4 + 1) * speed; // Velocity between 2 and 10
            el.dataset.velocityY = (Math.random() * 4 + 1) * speed; // Velocity between 2 and 10
        }
    });

    // Initialize position and velocity for circle-1
    circle1.style.top = `${Math.random() * (parent.offsetHeight - circle1.offsetHeight)}px`;
    circle1.style.left = `${Math.random() * (parent.offsetWidth - circle1.offsetWidth)}px`;
    circle1.dataset.velocityX = (Math.random() * 2 + 1) * speed; // Random velocity for circle-1
    circle1.dataset.velocityY = (Math.random() * 2 + 1) * speed; // Random velocity for circle-1

    // Set initial position and velocity for circle-2
    circle2.style.top = `${Math.random() * (circle1.offsetHeight - circle2.offsetHeight)}px`;
    circle2.style.left = `${Math.random() * (circle1.offsetWidth - circle2.offsetWidth)}px`;
    circle2.dataset.velocityX = (Math.random() * 2 + 1) * speed; // Faster speed
    circle2.dataset.velocityY = (Math.random() * 2 + 1) * speed; // Faster speed

    function updatePosition() {
        // Update position for elements in the header
        elements.forEach((el) => {
            if (el !== circle1) {
                let x = parseFloat(el.style.left);
                let y = parseFloat(el.style.top);
                let velocityX = parseFloat(el.dataset.velocityX);
                let velocityY = parseFloat(el.dataset.velocityY);

                // Check for collision with the parent's right or left boundary
                if (x + el.offsetWidth >= parent.offsetWidth || x <= 0) {
                    el.dataset.velocityX = -velocityX; // Reverse direction
                }

                // Check for collision with the parent's top or bottom boundary
                if (y + el.offsetHeight >= parent.offsetHeight || y <= 0) {
                    el.dataset.velocityY = -velocityY; // Reverse direction
                }

                // Update the new position
                el.style.left = `${x + parseFloat(el.dataset.velocityX)}px`;
                el.style.top = `${y + parseFloat(el.dataset.velocityY)}px`;
            }
        });

        // Update position for circle-1
        let x1 = parseFloat(circle1.style.left);
        let y1 = parseFloat(circle1.style.top);
        let velocityX1 = parseFloat(circle1.dataset.velocityX);
        let velocityY1 = parseFloat(circle1.dataset.velocityY);

        // Check for collision with parent's boundaries
        if (x1 + circle1.offsetWidth >= parent.offsetWidth || x1 <= 0) {
            circle1.dataset.velocityX = -velocityX1; // Reverse direction
        }

        if (y1 + circle1.offsetHeight >= parent.offsetHeight || y1 <= 0) {
            circle1.dataset.velocityY = -velocityY1; // Reverse direction
        }

        // Update the new position for circle-1
        circle1.style.left = `${x1 + parseFloat(circle1.dataset.velocityX)}px`;
        circle1.style.top = `${y1 + parseFloat(circle1.dataset.velocityY)}px`;

        // Update position for circle-2 within circle-1
        let x2 = parseFloat(circle2.style.left);
        let y2 = parseFloat(circle2.style.top);
        let velocityX2 = parseFloat(circle2.dataset.velocityX);
        let velocityY2 = parseFloat(circle2.dataset.velocityY);

        // Check for collision with circle-1 boundaries
        if (x2 + circle2.offsetWidth >= circle1.offsetWidth || x2 <= 0) {
            circle2.dataset.velocityX = -velocityX2; // Reverse direction
        }

        if (y2 + circle2.offsetHeight >= circle1.offsetHeight || y2 <= 0) {
            circle2.dataset.velocityY = -velocityY2; // Reverse direction
        }

        // Update the new position for circle-2
        circle2.style.left = `${x2 + parseFloat(circle2.dataset.velocityX)}px`;
        circle2.style.top = `${y2 + parseFloat(circle2.dataset.velocityY)}px`;

        // Request next frame for the animation
        requestAnimationFrame(updatePosition);
    }

    // Start the animation loop
    requestAnimationFrame(updatePosition);
}

// Start the animation after the window loads
window.onload = startPongAnimation;