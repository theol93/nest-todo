import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiServiceUnavailableResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}
  @Get()
  @ApiOkResponse({ description: 'Process is running' })
  live() {
    return { data: { status: 'ok' } };
  }
  @Get('ready')
  @ApiOkResponse({ description: 'Database is reachable' })
  @ApiServiceUnavailableResponse({ description: 'Database is unavailable' })
  async ready() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { data: { status: 'ok', database: 'up' } };
    } catch {
      throw new ServiceUnavailableException('Database is unavailable');
    }
  }
}
