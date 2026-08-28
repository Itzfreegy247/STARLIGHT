/* ============================= */
/* STARLIGHT SCALE COUNTERS */
/* ============================= */

const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {

    const target = parseFloat(counter.dataset.target);

    let current = 0;

    const duration = 1800;

    const increment =
        target / (duration / 16);


    const updateCounter = () => {

        current += increment;


        if (current < target) {

            /* ============================= */
            /* GLOBAL VALUATION */
            /* ============================= */

            if (
                counter.dataset.format === 'trillion'
            ) {

                counter.textContent =
                    `$${current.toFixed(1)}T+`;

            }


            /* ============================= */
            /* OTHER COUNTERS */
            /* ============================= */

            else if (target < 10) {

                counter.textContent =
                    current.toFixed(1);

            }

            else {

                counter.textContent =
                    Math.floor(current);

            }


            requestAnimationFrame(
                updateCounter
            );

        }


        else {

            /* ============================= */
            /* FINAL GLOBAL VALUATION */
            /* ============================= */

            if (
                counter.dataset.format === 'trillion'
            ) {

                counter.textContent =
                    `$${target.toFixed(1)}T+`;

            }


            /* ============================= */
            /* FINAL OTHER COUNTERS */
            /* ============================= */

            else if (target < 10) {

                counter.textContent =
                    target.toFixed(1);

            }

            else {

                counter.textContent =
                    target;

            }

        }

    };


    updateCounter();

};


const counterObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.5
    }

);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


