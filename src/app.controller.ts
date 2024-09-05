import { Controller, Get, Post, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {}

  @Post('api/purchase')
  purchase() {
    return { message: 'API call successful!' };
  }
}
