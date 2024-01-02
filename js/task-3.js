function getElementWidth(content, padding, border) { 
    const fullContent = Number.parseFloat(content);
    const fullPadding = Number.parseFloat(padding);
    const fullBorder = Number.parseFloat(border);
    return fullContent + fullPadding * 2 + fullBorder * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200