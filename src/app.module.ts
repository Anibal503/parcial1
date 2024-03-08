import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hola/hola.controller';
import { PostaController } from './posta/posta.controller';
import { ParametrosController } from './parametros/parametros.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, PostaController, ParametrosController],
  providers: [AppService],
})
export class AppModule {}
