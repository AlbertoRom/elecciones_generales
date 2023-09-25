const data = [
    { 
        label: 'Partido A', 
        value: 35,
        color: "red",
    },
    { 
        label: 'Partido B', 
        value: 23,
        color: "yellow",
    },
    { 
        label: 'Partido C', 
        value: 18,
        color: "green",
    },
    { 
        label: 'Partido D', 
        value: 14,
        color: "blue",
    },
    { 
        label: 'Partido E', 
        value: 10,
        color: "purple",
    },
];

// Función para generar las barras
function generateBars() {
    const barContainer = document.getElementById('barContainer');

    data.forEach(item => {
        const bar = document.createElement('div');

        const span = document.createElement('span');
        const span_text = document.createTextNode(item.label);
        span.style.textAlign = "left"
        span.appendChild(span_text);
        barContainer.appendChild(span);

        bar.className = 'bar';
        bar.style.width = item.value + '%';
        bar.style.backgroundColor = item.color;
        barContainer.appendChild(bar);
    });
}

// Llamar a la función para generar las barras
generateBars();