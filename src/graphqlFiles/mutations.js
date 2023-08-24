import { gql } from "@apollo/client";

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomer(
    $firstname: String!
    $lastname: String!
    $email: String!
    $gender: String!
    $password: String!
  ) {
    createCustomerV2(firstname: $firstname,lastname:$lastname,email:$email,gender:$gender,password:$password) {
      customer {
        firstname
        lastname
        email
        date_of_birth
        gender
      }
    }
  }
`;

export  const GENERATE_CUSTOMER_TOKEN = gql`
  mutation genereateCustomerToken($email:String!,$password:String!) {
    generateCustomerToken(email:$email,password:$password) {
      token
    }
  }
`;
