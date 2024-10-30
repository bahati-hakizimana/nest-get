import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    // Fist API ENDPONT FOR NEST BACKEND
   @Get ()

   findAll(){

    return "All properties here please"
   }

   @Post()
   @HttpCode(202)
   create(@Body() body){
    return body
   }
@Get(':id')

findOne(@Param('id') id: string) {
    return id;
}
}
