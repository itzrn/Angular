import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    selector:'app-forms',
    templateUrl:'./forms.html',
    imports:[ReactiveFormsModule, NgIf,FormsModule]
})

export class FormsAngular{
    name=new FormControl();
    password = new FormControl();


    displayValue(){
        console.log(this.name.value);
        console.log(this.password.value)
    }

    setValues(){
        this.name.setValue('petter');
        this.password.setValue('123');
    }






    profileForm = new FormGroup({
        name:new FormControl(),
        password:new FormControl(),
        email:new FormControl()
    });

    onSubmit(){
        console.log("On Submit called");
        console.log(this.profileForm.value);
    }

    setGroupFormValue(){
        this.profileForm.setValue({
            name:'petter',
            password:'321',
            email:'skbgfbds@mail.com'
        });
    }


    profileForm1 = new FormGroup({
        name1:new FormControl('', [Validators.required]),
        password1:new FormControl('',[Validators.required, Validators.minLength(5)]),
        email1:new FormControl('',[Validators.required, Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9,-]+\.[a-z]{2,4}$')])
    });

    onSubmit1(){
        console.log("On Submit called");
        console.log(this.profileForm1.value);
    }
    get name1(){
        return this.profileForm1.get('name1');
    }
    get password1(){
        return this.profileForm1.get('password1');
    }
    get email1(){
        return this.profileForm1.get('email1');
    }






    userDetails:any={};
    addDetails(val:NgForm){
        console.log(val);
        this.userDetails=val;
    }

}
