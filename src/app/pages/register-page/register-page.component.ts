import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { CountryServiceService } from './../../services/country-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  siteKey = "6LeEYTsaAAAAAHSI6lHFMMkUkPZUSdJn74x3h-bI";
  email="";
  confEmail="";
  selectedCountry="";
  errorMsg="";
  constructor(
    private service:CountryServiceService,
    private userService:UserService,
    private route:Router
  ) { }
  captchakey = null
  country:any
  ngOnInit(): void {
    this.service.getAllCountry().subscribe(async data => {
      this.country = data.data.getAllCountry
      
      // console.log(this.country)
    })
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchakey = captchaResponse
  }

  submit(){
    if(this.email !== this.confEmail) this.errorMsg = "Email and confirm email must be the same";
    else if(this.email === "" && this.confEmail === "") this.errorMsg = "fill email and confirm email";
    else if(this.selectedCountry === "" || this.selectedCountry === "0"){
      this.errorMsg = "Select your country"
    }
    else if(this.captchakey == null){
      this.errorMsg = "Are you robot?"
    }
    else{
      this.userService.insertNewAccount(this.email, this.selectedCountry)
      this.errorMsg = ""
      this.route.navigate(['/register/otp'])
    }
  }

}
