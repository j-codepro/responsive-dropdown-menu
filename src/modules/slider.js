const automaticSlide = () => {
    let counter = 0;
    setInterval(() => {
        document.getElementById('radio').checked = true;
        counter += 1;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
};

export default automaticSlide;
