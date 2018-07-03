
        window.data = {
        API :() =>{
            let laboratoria ="../laboratoria.json";
            fetch(laboratoria).then(response => {
                return response.json();
                console.log(response.json)
            }).then(computeGenerationStats => {
                let sedes = '';
                //let generacion = '';
                sedes = Object.getOwnPropertyNames(computeGenerationStats);
                for(i=0; i< sedes.length; i++){
                    console.log(sedes[i])
                    //sedes = sedes[i];
                    const generacion = '';
                    for(j=0; j< generacion.length; j++){
                        console.log(generacion[j])
                }
                let generacion = '';
                sedes = sedes[i];
                const generacion = Object.getOwnPropertyNames(computeGenerationStats);
                for(j=0; j< generacion.length; j++){
                    console.log(generacion[j])
            }
        })
    }
};
