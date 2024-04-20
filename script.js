

fetchData()

async function fetchData(){
    try{
        const cep = document.getElementById("cep").value;

        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);

        if(!response.ok){
            throw new Error("Cep não pôde ser encontrado ou não existe.")
        }

        const data = await response.json();
        document.getElementById("address").innerHTML = data.address;
        document.getElementById("state").innerHTML = data.state;
        document.getElementById("city").innerHTML = data.city;
        document.getElementById("ddd").innerHTML = data.ddd;

        document.getElementById("stateText").innerHTML = "Estado: ";
        document.getElementById("cityText").innerHTML = "Cidade: ";
        document.getElementById("dddText").innerHTML = "DDD: ";
        document.getElementById("morra").innerHTML = "";
        
        
    }
    catch(error){
        console.error(error)
        document.getElementById("address").innerHTML = "";
        document.getElementById("state").innerHTML = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("ddd").innerHTML = "";

        document.getElementById("stateText").innerHTML = "";
        document.getElementById("cityText").innerHTML = "";
        document.getElementById("dddText").innerHTML = ""
        document.getElementById("morra").innerHTML = "Cep não pôde ser encontrado ou não existe.";;
    }

}

