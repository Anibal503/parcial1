import { Controller, Get } from '@nestjs/common';


@Controller('hola')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hola Mundo!';
  }
}
