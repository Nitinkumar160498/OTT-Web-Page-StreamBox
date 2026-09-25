document.addEventListener("DOMContentLoaded", function () {

    const toastElement =
        document.getElementById("notificationToast");

    const toast =
        new bootstrap.Toast(toastElement);


    function showNotification(message) {

        const toastBody =
            toastElement.querySelector(".toast-body");

        toastBody.textContent = message;

        toast.show();
    }


    /* Watch Now */

    const watchButton =
        document.getElementById("watchButton");

    if (watchButton) {

        watchButton.addEventListener("click", function () {

            showNotification(
                "Please choose a subscription plan to start watching."
            );

        });

    }


    /* More Info */

    const moreInfoButton =
        document.getElementById("moreInfoButton");

    if (moreInfoButton) {

        moreInfoButton.addEventListener("click", function () {

            showNotification(
                "More information about The Last Horizon is coming soon."
            );

        });

    }


    /* Movie Play Buttons */

    const playButtons =
        document.querySelectorAll(".play-button");

    playButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const movieName =
                button
                    .closest(".movie-card")
                    .querySelector("h3")
                    .textContent
                    .trim();

            showNotification(
                "Selected: " + movieName
            );

        });

    });


    /* Newsletter */

    const newsletterForm =
        document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document.getElementById("email").value;

                if (email.trim() !== "") {

                    showNotification(
                        "Thanks! " +
                        email +
                        " has been added to our newsletter."
                    );

                    newsletterForm.reset();
                }

            }
        );

    }


    /* Search */

    const searchButton =
        document.getElementById("searchButton");

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                const searchTerm =
                    window.prompt(
                        "What would you like to watch?"
                    );

                if (
                    searchTerm &&
                    searchTerm.trim() !== ""
                ) {

                    showNotification(
                        "Searching for: " +
                        searchTerm.trim()
                    );

                }

            }
        );

    }

});