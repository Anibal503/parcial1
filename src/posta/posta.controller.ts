import { Controller, Post, Body } from '@nestjs/common';

@Controller('multiplicar')
export class PostaController {
  @Post()
  sumar(@Body() numeros: { numero1: number; numero2: number }): number {
    const { numero1, numero2 } = numeros;
    return numero1 * numero2;
  }
}
// Instrucciones para que funcione:
// crear una solicitud post a esta url http://localhost:3000/multiplicar
// Para agregar los numeros que desea multiplicar define el cuerpo de la solicitud:

//Haz clic en la pestaña "Body" debajo de la barra de URL.
//Selecciona el formato JSON.
//Ingresa los dos números que deseas sumar en el cuerpo de la solicitud dentro de los {} con el formato {
//  {
//  "numero1": ,
//  "numero2": 
//   }
