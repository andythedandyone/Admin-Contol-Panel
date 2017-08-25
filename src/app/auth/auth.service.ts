import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

const PoolId = 'us-east-1_dDw72LYkG';
const ClientId = '6fikflq8ecufd8kk6pi2dl8ndb';

const PoolData = {
  UserPoolId: PoolId,
  ClientId: ClientId
};

const userPool = new CognitoUserPool(PoolData);

@Injectable()
export class AuthService {

  isUser = new BehaviorSubject<boolean>(false);
  stats: boolean = false;

  constructor(private router: Router) {}

  signupUser(user: string, password: string, email: string) {
    const dataEmail = {
      Name: 'email',
      Value: email
    };
    const  emailAtt = [new CognitoUserAttribute(dataEmail)];

    userPool.signUp(user,  password, emailAtt, null, ((err, result) => {
      if (err) {
        console.log('There was an error ', err);
      } else {
        console.log('You have successfully signed up, please confirm your email ')
      }
    }))
  }

  confirmUser(username: string, code: string) {
    const userData = {
      Username: username,
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.log('There was an error -> ', err)
      } else {
        console.log('You have been confirmed ')
      }
    })
  }

  signinUser(username: string, password: string) {
    const authData = {
      Username: username,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        // console.log('You are now Logged in');
        this.isUser.next(true);
        this.router.navigate(['/'])
      },
      onFailure: (err) => {
        console.log('There was an error during login, please try again -> ', err)
      }
    })
  }

  logoutUser() {

    if (this.isValidSession()) {
      console.log('You are now logged out');
      this.isUser.next(false);
      userPool.getCurrentUser().signOut();
      this.router.navigate(['home'])
    }
  }

  getCurrentUser() {
    return userPool.getCurrentUser()
  }

  isValidSession() {
    return this.getCurrentUser() ? true : false
  }

}





