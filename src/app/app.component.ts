import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private route: Router) {}
  ngOnInit() {
    if (!this.authService.isValidSession()) {
      this.route.navigate(['/home'])
    } else {
      this.authService.isUser.next(true);
    }
  }
}
