export function createDiv(divProps) {
    const div = document.createElement('div');
    
    for (const key in divProps) {
        div.setAttribute(key, divProps[key]);
    }
    
    return div;
}

export function createButton(title, buttonProps) {
    const button = document.createElement('button');
    button.textContent = title;

    for (const key in buttonProps) {
        button.setAttribute(key, buttonProps[key]);
    }

    return button;
}
