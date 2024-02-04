import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';


function passwordMatchValidator(g: FormGroup) {
  const password = g.get('password');
  const confirmationPassword = g.get('confirmation_password');
  
  if (password && confirmationPassword) {
    return password.value === confirmationPassword.value ? null : { 'mismatch': true };
  }
  
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  registerForm: FormGroup; // declare the registerForm property
  //crear mensajes de validacion
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email address.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ],
    confirmation_password: [
      { type: 'required', message: 'Confirmation password is required.' },
      { type: 'minlength', message: 'Confirmation password must be at least 6 characters long.' }
    ],
    name: [
      { type: 'required', message: 'Name is required.' }
    ],
    last_name: [
      { type: 'required', message: 'Last name is required.' }
    ]
  };


  
  //mensaje respuesta de registro
  registrationResponse: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService
  ) { 

    
    this.registerForm = this.formBuilder.group({

      
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    }, { validator: passwordMatchValidator });
  }

  
  ngOnInit() {
  }

  register(register_data: any){
    this.authService.registerUser(register_data);
  }

}
