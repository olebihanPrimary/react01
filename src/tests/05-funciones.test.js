import { getUser } from "../base-pruebas/05-funciones";

describe('Prueba 05-test', () => { 
    
    test('Debe retornar usuario activo', () => { 


        const testUser = {
            uid: 'ABC123',
            username: 'Una_Muzza'  };


        const user = getUser();
        
        expect(user).toEqual(testUser);
     
         })

         
     })