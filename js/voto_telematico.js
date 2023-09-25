const candidatosData = [
    {
        title: "Partido A ",
        id: "partido_a",
    },
    {
        title: "Partido B ",
        id: "partido_b",
    },
    {
        title: "Partido C ",
        id: "partido_c",
    },
    {
        title: "Partido D ",
        id: "partido_d",
    },
    {
        title: "Partido E ",
        id: "partido_e",
    }
];

const dni_letters_numbers = [
    {
        number: "0",
        letter: "T",
    },
    {
        number: "1",
        letter: "R",
    },
    {
        number: "2",
        letter: "W",
    },
    {
        number: "3",
        letter: "A",
    },
    {
        number: "4",
        letter: "G",
    },
    {
        number: "5",
        letter: "M",
    },
    {
        number: "6",
        letter: "Y",
    },
    {
        number: "7",
        letter: "F",
    },
    {
        number: "8",
        letter: "P",
    },
    {
        number: "9",
        letter: "D",
    },
    {
        number: "10",
        letter: "X",
    },
    {
        number: "11",
        letter: "B",
    },
    {
        number: "12",
        letter: "N",
    },
    {
        number: "13",
        letter: "J",
    },
    {
        number: "14",
        letter: "Z",
    },
    {
        number: "15",
        letter: "S",
    },
    {
        number: "16",
        letter: "Q",
    },
    {
        number: "17",
        letter: "V",
    },
    {
        number: "18",
        letter: "H",
    },
    {
        number: "19",
        letter: "L",
    },
    {
        number: "20",
        letter: "C",
    },
    {
        number: "21",
        letter: "K",
    },
    {
        number: "22",
        letter: "E",
    },
]

const candidatos = document.getElementById('opciones-candidatos');

candidatosData.forEach(candidato => {    
    const input_candidato = document.createElement("input");

    input_candidato.type= "radio";
    input_candidato.id = candidato.id;
    input_candidato.name = "seleccion_candidato";
    input_candidato.value = candidato.title;

    const label_candidato = document.createElement("label");
    label_candidato.textContent = candidato.title;

    label_candidato.for = candidato.id

    const li_candidato = document.createElement("li");

    label_candidato.appendChild(input_candidato)
    li_candidato.appendChild(label_candidato)
    candidatos.appendChild(li_candidato)
});

function onSubmitForm(event){
    event.preventDefault();
    const dni = document.getElementById('dni').value
    let dni_number_letter = parseInt(dni.slice(0, dni.length-1))%23;
    let dni_letter = dni.slice(dni.length-1)
    dni_letters_numbers.forEach(dni_letter_number => {
        if (dni_letter_number.number == dni_number_letter){
            if (dni_letter_number.letter != dni_letter){
                alert("El DNI no es correcto.");
            } else {
                const candidaturas = document.querySelectorAll('input[name="seleccion_candidato"]');
                let candidaturaSeleccionada;
                candidaturas.forEach((candidatura) => {
                    if (candidatura.checked) {
                        candidaturaSeleccionada = candidatura.value;
                    }
                });
                const confirmacion = window.confirm("Has seleccionado la candidatura de " + candidaturaSeleccionada + ". ¿Estas seguro?\nUna vez emitido el voto, ya no se puede cambiar.");
                if (confirmacion) {
                alert("Tu voto ha sido emitido correctamente");
                }
            }
        }
    })
}

const formulario = document.getElementById("voto_telematico");
formulario.addEventListener("submit", onSubmitForm);