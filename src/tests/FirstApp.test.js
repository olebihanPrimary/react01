import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"


describe('Pruebas FirstApp', () => { 

    test('Debe hacer match con el snapshot', () => { 

        render(<FirstApp/>);

     })

 })