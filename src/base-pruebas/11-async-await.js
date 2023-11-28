

export const getImagen = async() => {

    try {

        const apiKey = 'e54OpAbJXyr2Ck6RjI8D6rK0khU9MB07P';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro Imagen';
    }
    
    
    
}

 getImagen();



