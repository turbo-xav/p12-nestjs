import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'node:fs';

async function bootstrap() {
  const p12 = fs.readFileSync('./certs/certificat.p12');

  // Configuration HTTPS avec le fichier P12 et le mot de passe
  const httpsOptions = {
    pfx: p12,
    passphrase: 'xavier', // Assurez-vous que le mot de passe est correct
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.listen(3000);
}
bootstrap();
