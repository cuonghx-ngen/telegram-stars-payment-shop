import { Controller, Get, Post, Render } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Bot } from 'grammy';

@Controller()
export class AppController {
  private readonly bot: Bot;
  constructor(private readonly configService: ConfigService) {
    this.bot = new Bot(this.configService.get('TELEGRAM_BOT_TOKEN'));
  }

  @Get()
  @Render('index')
  async root() {
    const invoiceLink = await this.bot.api.createInvoiceLink(
      'Test Product',
      'Test Description',
      'Test Payload',
      '',
      'XTR',
      [{ label: 'stars', amount: 1 }],
    );
    return { invoiceLink };
  }

  @Post('api/purchase')
  purchase() {}
}
