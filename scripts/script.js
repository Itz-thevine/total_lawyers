let currentStep = 0; 
showStep(currentStep);

function showStep(n) {
    const steps = document.getElementsByClassName("step");
    steps[n].classList.add("active");

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == (steps.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next Step";
    }
}

function next(n) {
    const steps = document.getElementsByClassName("step");
    steps[currentStep].classList.remove("active");

    currentStep += n;

    if (currentStep >= steps.length) {
        document.getElementById("stepper-form").submit();
        return false;
    }

    showStep(currentStep);
}
