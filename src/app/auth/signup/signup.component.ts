import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {setTimeout} from "timers";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  warning: boolean = false;
  confirmation: boolean = false;

  constructor(private authService: AuthService, private router:Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      console.log(param)
    })
  }

  onSubmit(data: NgForm) {

    if (data.value.password === data.value.cpassword) {
      this.confirmation = true;
      this.authService.signupUser(data.value.uname, data.value.password, data.value.email)
    } else {

      // this.router.navigate(['/'])
      this.warning = true;
      console.log('outside timeout after navigate');
      let that = this;
      setTimeout(() => {
        that.warning = false;
        console.log('inside timeout')
      }, 2000);
    }


  }

  onConfirmation(data: NgForm) {
    this.confirmation = false;
    this.authService.confirmUser(data.value.username, data.value.code)
  }

  onPopUpConf() {
    this.confirmation = true
  }



}
