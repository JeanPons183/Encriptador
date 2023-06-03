const entrada = document.querySelector(".cuadro_entrada");
const salida = document.querySelector(".cuadro_salida");
const copiarPB = document.querySelector(".CopiarPB"); 


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptarPB()  
    {
        const texto = encriptar(entrada.value);
        salida.value = texto
        entrada.value = "";
        if(texto != "")
            {
                salida.style.backgroundImage  = "none";
                document.getElementById('men1').style.display = 'none';
                document.getElementById('men2').style.display = 'none';
            }
        else
            {
                salida.style.backgroundImage = "url(Images/Muñeco.png)";
                document.getElementById('men1').style.display = 'block';
                document.getElementById('men2').style.display = 'block';
            }
    }

function desencriptarPB()  
    {
        const texto = desencriptar(entrada.value);
        salida.value = texto
        entrada.value = "";
        if(texto != "")
            {
                salida.style.backgroundImage = "none";
                document.getElementById('men1').style.display = 'none';
                document.getElementById('men2').style.display = 'none';
            }
        else
            {
                salida.style.backgroundImage = "url(Images/Muñeco.png)";
                document.getElementById('men1').style.display = 'block';
                document.getElementById('men2').style.display = 'block';

            }    
    }

function encriptar(encriptado)
    {
        let llavesEncriptado = [["e", "enter"],["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        encriptado = encriptado.toLowerCase()
        
        for(let i=0; i < llavesEncriptado.length;i++)
            {
                if(encriptado.includes(llavesEncriptado[i][0]))
                    {encriptado = encriptado.replaceAll(llavesEncriptado[i][0], llavesEncriptado[i][1])}
            }
        return encriptado
    }

function desencriptar(encriptado)
    {
        let llavesEncriptado = [["e", "enter"],["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        encriptado = encriptado.toLowerCase()
        
        for(let i=0; i < llavesEncriptado.length;i++)
            {
                if(encriptado.includes(llavesEncriptado[i][1]))
                    {encriptado = encriptado.replaceAll(llavesEncriptado[i][1], llavesEncriptado[i][0])}
            }
        return encriptado
    }

function copiar() 
    {
        var salida = document.getElementById('salida');
        
        // Seleccionar el contenido del cuadro de texto
        salida.select();
        salida.setSelectionRange(0, salida.value.length);
        
        // Copiar el contenido al portapapeles
        document.execCommand('copy');
        
        // Deseleccionar el texto
        salida.blur();
      }
      