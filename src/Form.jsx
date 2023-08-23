


function Formulario ({onSubmit}) {
    const hadleSubmit = (e) => {
        e.preventDefault();
        let titulo = e.target.title.value;
        let contenido = e.target.content.value;
        console.log (titulo, contenido);
        onSubmit(titulo, contenido);
        e.target.title.value = '';
        e.target.content.value = '';


    }
    return (
        // EL onSubmit es un evento que sirve junto al hadleSubmit para enviar los datos del formulario y con el console.log loguear los datos.
        <form onSubmit = {hadleSubmit}> 
            <label>titulo</label>
            <input type="text" id= "title"/>
            <br/>
            <br/>
            <label>contenido</label>
            <textarea id="content"></textarea>
            <br/>
            <br/>
            <button type="submit">enviar</button>

        </form>
    )
}

export default Formulario;