import { NgForm,
         FormGroup,
         FormControl,
         Validators,
         FormBuilder
 } from '@angular/forms';

export class UserModel
    {
        userName:string="";
        password:string="";
        token:string="";

        // formPatientGroup :FormGroup=null;
        // constructor(){
        //     var _builder = new FormBuilder();
        //     this.formPatientGroup = _builder.group({});
        //     //add validation
        //     this.formPatientGroup.addControl("nameControl",new FormControl('',Validators.required));
        //     this.formPatientGroup.addControl("problemDescriptionControl",new FormControl('',Validators.required));
        // }
    
    }