import { gql } from "@apollo/client";

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation createCustomerV2($input: CustomerCreateInput!) {
    createCustomerV2(input: $input) {
      customer {
        firstname
        lastname
        middlename
        email
        date_of_birth
        gender
        is_subscribed
        default_billing
        default_shipping
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
