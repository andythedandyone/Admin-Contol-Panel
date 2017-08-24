import { CognitoUserPool } from 'amazon-cognito-identity-js';

const PoolId = 'us-east-1_dDw72LYkG';
const ClientId = '6fikflq8ecufd8kk6pi2dl8ndb';

const PoolData = {
  UserPoolId: PoolId,
  ClientId: ClientId
};

const userPool = new CognitoUserPool(PoolData);

export class AuthService {
  attibuteList = [];

  signupUser(data) {
    console.log('form from service', data)
  }

}
