import { useState } from "react";
import Formulario from "./Form";


function Post ({title, content, id, onDelete, onEdit}) {
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    }
    const saveEdit = (titulo, contenido) => {
        setEdit(false);
        onEdit(id, titulo, contenido);
    }
    if (edit) {
        return (
            <Formulario
                oldTitle={title}
                oldContent={content}
                onSubmit={(titulo, contenido)=>saveEdit(titulo, contenido)}
            />
        );
    }
    
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>Eliminar</button>
            <button onClick={handleEdit}>Editar</button>

        </div>
    )
}

export default Post;