const inputTexto = document.querySelector(".input-texto");
let mensaje = document.querySelector(".mensaje");
let input = document.querySelector(".input-texto").value;
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"
// /* <input class="input"/>
// <h1 class="titulo"></h1> */

function btnEncriptar(){
    console.log(inputTexto.value)
	const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;	
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    btnCopy.style.display = "block";
} 

	

	//let resultEncriptado = document.querySelector(".titulo");
    
    var button_e = document.querySelector(".encriptar");
    var button_d = document.querySelector(".desencriptar");
    var button_c = document.querySelector(".copiar");
    var button_col = document.querySelector(".color");
    
    

	function encriptar(stringEncriptada){

        let listasVocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

            for(let i=0; i < listasVocales.length; i++) {
                if(stringEncriptada.includes(listasVocales[i][0])) {
                    stringEncriptada = stringEncriptada.replaceAll(listasVocales[i][0], listasVocales[i][1])
                }                
            }
            return stringEncriptada;

        
        //alternativa de código
        //let diccionario = {

        //     "a": "ai",
        //     "e": "enter",
        //     "i": "imes",
        //     "o": "ober",
        //     "u": "ufat",
        // }
      
		// switch(l){
		// 	case "a":
		// 		l = "ai";
		// 		encr2.push(l);
		// 		break;
		// 	case "e":
		// 		l = "enter";
		// 		encr2.push(l);
		// 		break;
		// 	case "i":
		// 		l = "imes";
		// 		encr2.push(l);
		// 		break;
		// 	case "o":
		// 		l = "ober";
		// 		encr2.push(l);
		// 		break;
		// 	case "u":
		// 		l = "ufat";
		// 		encr2.push(l);
		// 		break;
		// 	default:
		// 		l;
		// 		encr2.push(l);
		// 		break;
			
				
		// }

        // return stringEncriptada;
	}

	
	function desencriptar(stringDesencriptada){

        let listasVocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

            for(let i=0; i < listasVocales.length; i++) {
                if(stringDesencriptada.includes(listasVocales[i][1])) {
                    stringDesencriptada = stringDesencriptada.replaceAll(listasVocales[i][1], listasVocales[i][0])
                }                
            }
            return stringDesencriptada;

        // alternativa de código
        // var encr = [];
		// let input = document.querySelector(".input").value;

        // for (let i = 0; i <= input.length -1; i++){
        //     encr.push(input[i]);
        // }
        // console.log(encr);

        // for(var l in diccionario){

        //     input = input.replaceAll(diccionario[l], l);

        // }

        // console.log(input);

        // //let encriptado = input.join("");

        // //let resultEncriptado = document.querySelector(".titulo");

        // resultEncriptado.innerHTML += input;

}   

    function btnDesencriptar(){
        const textoEncriptado = desencriptar(inputTexto.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage="none"
        inputTexto.value = ""
        btnCopy.style.display = "block"
    }

    function copiar(){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value = "";
        alert("Texto copiado")
    }

    

    
