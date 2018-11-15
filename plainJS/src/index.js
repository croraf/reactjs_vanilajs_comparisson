
function appendDiv(topDiv) {
    const newElement = document.createElement('div');

    const subElement1 = document.createElement('span');
    const t1 = document.createTextNode("AAA "); 
    subElement1.appendChild(t1);

    const subElement2 = document.createElement('span');
    const t2 = document.createTextNode("BBB "); 
    subElement2.appendChild(t2);

    const subElement3 = document.createElement('span');
    const t3 = document.createTextNode("CCC "); 
    subElement3.appendChild(t3);

    const subElement4 = document.createElement('span');
    const t4 = document.createTextNode("DDD "); 
    subElement4.appendChild(t4);

    const subElement5 = document.createElement('span');
    const t5 = document.createTextNode("EEE "); 
    subElement5.appendChild(t5);
    
    newElement.appendChild(subElement1);
    newElement.appendChild(subElement2);
    newElement.appendChild(subElement3);
    newElement.appendChild(subElement4);
    newElement.appendChild(subElement5);

    topDiv.appendChild(newElement);
}

function myHandler() {
    const topDiv = document.getElementById('top');

    for (let i = 0; i < 50000; i++) {
        appendDiv(topDiv);
    }
}