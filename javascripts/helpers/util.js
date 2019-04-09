const printToDom = (divId, text) =>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = text;
};

export default { printToDom };