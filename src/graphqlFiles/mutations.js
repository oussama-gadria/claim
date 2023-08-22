import { gql } from '@apollo/client';
export const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomer($input:String) {
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