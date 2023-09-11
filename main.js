function Indide_Masa() {
    var Peso = parseFloat($("#Peso").val());
    var altura = parseFloat($("#Altura").val());
    var r1 = document.getElementById("kilograms");
    var r2 = document.getElementById("Metros");
    let IMC;

    console.log(Peso);
    console.log(altura);
    console.log(r2.checked);

    if (r1.checked == true && r2.checked == true) {
        IMC = (Peso) / (altura * altura);

    } else if (r1.checked == true && r2.checked == false) {
        console.log("Segundo if R2 " + r2.checked);
        altura = altura / 100;
        IMC = (Peso) / (altura * altura);

    } else if (r1.checked == false && r2.checked == true) {
        Peso = Peso / 2;
        IMC = (Peso) / (altura * altura);

    } else {
        altura = altura / 100;
        Peso = Peso / 2;
        IMC = (Peso) / (altura * altura);
    }

    return IMC
}

function Calcular() {
    var Nombre = $("#Nombre").val();
    var r1 = $("#kilograms");
    let IMC;
    let dato;

    IMC = Indide_Masa();
    console.log(IMC);
    console.log(r1);

    if (IMC < 18.5) {
        dato = "Peso Bajo";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        dato = "Peso Normal";
    } else if (IMC >= 25 && IMC <= 29.9) {
        dato = "Sobrepeso";
    } else {
        dato = "Obesidad";
    }
    $("#Mostrar").text(Nombre + ", Tu IMC: " + IMC + " Usted esta en " + dato);
}

//Funciones del Juego Piedra, Papel O Tijeras

const Opciones = ["PIEDRA", "PAPEL", "TIJERAS"];

function Option_Aleatoria() {
    let indice = Math.floor(Math.random() * 3);
    return indice;
}

function MostarImg() {
    var Opcion = $("#opcion").val();
    var Indice;
    var Op_random;
    console.log(Opcion);

    switch (Opcion) {
        case "Opcion1":
            document.querySelector("#Piedra").style.display = "none";
            document.querySelector("#piedra2").style.display = "none";
            document.querySelector("#papel2").style.display = "none";
            document.querySelector("#tijeras").style.display = "none";
            document.querySelector("#papel").style.display = "none";
            document.querySelector("#tijeras2").style.display = "none";
            document.querySelector("#opcion1").style.display = "block";
            document.querySelector("#opcion2").style.display = "block";
            break;
        case "Piedra":
            document.querySelector("#Piedra").style.display = "block";
            document.querySelector("#papel").style.display = "none";
            document.querySelector("#tijeras").style.display = "none";
            document.querySelector("#opcion1").style.display = "none";
            document.querySelector("#opcion2").style.display = "none";

            Indice = Option_Aleatoria();
            Op_random = Opciones[Indice];
            $("#Mostrar2").text(Op_random);

            if (Indice == 0) {
                document.querySelector("#piedra2").style.display = "block";
                document.querySelector("#papel2").style.display = "none";
                document.querySelector("#tijeras2").style.display = "none"

            } else if (Indice == 1) {
                document.querySelector("#papel2").style.display = "block";
                document.querySelector("#tijeras2").style.display = "none"
                document.querySelector("#piedra2").style.display = "none";

            } else {
                document.querySelector("#tijeras2").style.display = "block"
                document.querySelector("#piedra2").style.display = "none";
                document.querySelector("#papel2").style.display = "none"
            }

            Res = Ganar(Opcion, Op_random);
            console.log(Res);
            $("#Ganar").text(Ganar(Opcion, Op_random));
            //alert(Res);
            break;
        case "papel":
            document.querySelector("#papel").style.display = "block";
            document.querySelector("#Piedra").style.display = "none";
            document.querySelector("#tijeras").style.display = "none";
            document.querySelector("#opcion1").style.display = "none";
            document.querySelector("#opcion2").style.display = "none";

            Indice = Option_Aleatoria();
            Op_random = Opciones[Indice];
            $("#Mostrar2").text(Op_random);

            if (Indice == 0) {
                document.querySelector("#piedra2").style.display = "block";
                document.querySelector("#papel2").style.display = "none";
                document.querySelector("#tijeras2").style.display = "none"

            } else if (Indice == 1) {
                document.querySelector("#papel2").style.display = "block";
                document.querySelector("#tijeras2").style.display = "none"
                document.querySelector("#piedra2").style.display = "none";

            } else {
                document.querySelector("#tijeras2").style.display = "block"
                document.querySelector("#piedra2").style.display = "none";
                document.querySelector("#papel2").style.display = "none"
            }
            Res = Ganar(Opcion, Op_random);
            console.log(Res);
            $("#Ganar").text(Ganar(Opcion, Op_random));
            //alert(Res);
            break;
        case "tijeras":
            document.querySelector("#Piedra").style.display = "none";
            document.querySelector("#tijeras").style.display = "block";
            document.querySelector("#papel").style.display = "none";
            document.querySelector("#opcion1").style.display = "none";
            document.querySelector("#opcion2").style.display = "none";

            Indice = Option_Aleatoria();
            Op_random = Opciones[Indice];
            $("#Mostrar2").text(Op_random);

            if (Indice == 0) {
                document.querySelector("#piedra2").style.display = "block";
                document.querySelector("#papel2").style.display = "none";
                document.querySelector("#tijeras2").style.display = "none";

            } else if (Indice == 1) {
                document.querySelector("#papel2").style.display = "block";
                document.querySelector("#tijeras2").style.display = "none"
                document.querySelector("#piedra2").style.display = "none";

            } else {
                document.querySelector("#tijeras2").style.display = "block"
                document.querySelector("#piedra2").style.display = "none";
                document.querySelector("#papel2").style.display = "none";
            }
            Res = Ganar(Opcion, Op_random);
            console.log(Res);
            $("#Ganar").text(Ganar(Opcion, Op_random));
            //alert(Res);
            break;
    }

}

function Ganar(Jug1, Jug2) {
    var Res;
    if (Jug1 == "Piedra" && Jug2 == "PIEDRA") {
        Res = "EL Juego Termino en Empate";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "papel" && Jug2 == "PIEDRA") {
        Res = "--¡Enhorabuena! Has Ganado el Juego Jugador Uno--";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "papel" && Jug2 == "TIJERAS") {
        Res = "--¡Enhorabuena! Has Ganado el Juego Jugador Dos --";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "Piedra" && Jug2 == "PAPEL") {
        Res = "--¡Enhorabuena! Has Ganado el Juego Jugador Dos--";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "Piedra" && Jug2 == "TIJERAS") {
        Res = "--¡Enhorabuena! Has Ganado el Juego Jugador Uno--";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "tijeras" && Jug2 == "PIEDRA") {
        Res = "--¡Enhorabuena! Has Ganado el Juego Jugador Dos--";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "tijeras" && Jug2 == "PAPEL") {
        Res = "--¡Enhorabuena! Has Ganado el Juego Jugador Uno--";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "papel" && Jug2 == "PAPEL") {
        Res = "--EL Juego Termino en Empate--";
        document.querySelector("#Ganar").style.display = "block";

    } else if (Jug1 == "tijeras" && Jug2 == "TIJERAS") {
        Res = "--EL Juego Termino en Empate--";
        document.querySelector("#Ganar").style.display = "block";
    }
    return Res;
}

//Funciones de el Html Adivinar

var Num_Aleatorio;

function Gen_Num() {
    Num_Aleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(Num_Aleatorio)
        //document.getElementById("Numero").style.color = "Green";
    $("#Numero").text("LISTO");
}

function Adivinar() {
    let Numero = parseInt($("#Ad_num").val());
    let Alt;
    console.log("Num1 " + Num_Aleatorio);
    console.log("Num2 " + Numero)

    if (Num_Aleatorio == Numero) {
        $("#Show").text("¡Enhorabuena! Has adivinado correctamente");
        alert("¡Enhorabuena! Has adivinado correctamente");

    } else {
        if ((Num_Aleatorio > Numero)) {
            Alt = Num_Aleatorio - Numero;
            if (Alt >= 15) {
                $("#Show").text("Pista: El Numero es Mucho Mas Grande");
            } else {
                $("#Show").text("Pista: Estas Muy Cerca,  Pero el Numero aun es Mayor");
            }
        } else {
            Alt = Numero - Num_Aleatorio;
            if (Alt >= 15) {
                $("#Show").text("Pista: El Numero es Mucho Menor");
            } else {
                $("#Show").text("Pista: Estas Muy Cerca, Pero el Numero aun es Menor");
            }
        }
    }
}