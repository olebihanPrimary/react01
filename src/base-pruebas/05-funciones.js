export const getUser = () => ({
        uid: 'ABC123',
        username: 'Una_Muzza'
});

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre.toUpperCase()
})
