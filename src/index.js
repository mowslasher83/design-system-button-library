export const createButton = (text, type = 'primary') => {
    const button = document.createElement('button');
    button.className = `btn btn-${type}`;
    button.innerText = text;
    return button;
};
