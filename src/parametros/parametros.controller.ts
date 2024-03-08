import { Controller, Get, Param } from '@nestjs/common';

@Controller('saludo')
export class ParametrosController {
  @Get(':nombre')
  saludar(@Param('nombre') nombre: string): string {
    return `¡Saludos, ${nombre}!`;
  }
}
