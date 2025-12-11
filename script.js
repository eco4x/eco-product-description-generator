function generateDescription() {
    const name = document.getElementById("productName").value.trim();
    const tone = document.getElementById("tone").value;
    const output = document.getElementById("output");

    if (name === "") {
        output.innerHTML = "Please enter a product name.";
        return;
    }

    let description = "";

    if (tone === "professional") {
        description = `${name} is engineered with precision and reliability, designed to deliver consistent performance while enhancing efficiency and user experience. Ideal for businesses and professionals seeking long-term value.`;
    }

    if (tone === "friendly") {
        description = `${name} makes your everyday life easier! It's simple, helpful, and designed to give you a smoother experience with zero stress. You’ll love how easy it is to use.`;
    }

    if (tone === "luxury") {
        description = `${name} represents the perfect blend of sophistication, innovation, and elegance. Crafted for individuals who desire premium quality and exceptional performance in every detail.`;
    }

    if (tone === "simple") {
        description = `${name} is easy to use, reliable, and built to help you get things done without complications.`;
    }

    output.innerHTML = description;
}