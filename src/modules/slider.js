const automaticSlide = () => {
    let counter = 1;
    setInterval(() => {
        document.getElementById(`radio${counter}`).checked = true;
        counter += 1;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
};

export default automaticSlide;
