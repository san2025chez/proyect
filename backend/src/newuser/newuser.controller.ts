import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Crud } from '@nestjsx/crud';
import { NewuserService } from './newuser.service';
import { User } from './newusers.entity';


@Crud({
    model: {
        type: User,
    },
    routes: {
       
    },
 

  
})
@ApiTags('Users')
@Controller('newuser')
export class NewuserController {
    constructor(public service: NewuserService,
        ) { };
}
