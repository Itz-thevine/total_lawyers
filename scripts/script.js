let currentStep = 0; 
showStep(currentStep);

function showStep(n) {
    const steps = document.getElementsByClassName("step");
    const desc = document.getElementById("desc");
    const formTopPadding = document.getElementsByClassName("stepper-form");

    if (n === 4) {
        desc.innerText = 'Enter your details for a free consult.'
        formTopPadding[0].style.paddingTop = "24px";    
    }

    steps[n].classList.add("active");

   
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
