import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from '~/services/example/example.service';
import {
  CreateExampleRequestDto,
  CreateExampleResponseDto,
} from './dto/CreateExample.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller({ path: 'example' })
export class ExampleController {
  constructor(private readonly appService: ExampleService) {}

  @Get()
  @ApiOkResponse({ type: CreateExampleResponseDto, isArray: true })
  getExamples(): Promise<CreateExampleResponseDto[]> {
    return this.appService.getExamples();
  }

  @Post()
  @ApiCreatedResponse({ type: CreateExampleResponseDto })
  createExample(
    @Body() body: CreateExampleRequestDto,
  ): Promise<CreateExampleResponseDto> {
    return this.appService.createExample(body.name);
  }
}
