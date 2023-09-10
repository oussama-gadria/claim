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

export const PLACE_ORDER = gql`
  mutation placeOrder($input: PlaceOrderInput) {
    placeOrder(input: $input) {
      order {
        order_number
      }
    }
  }
`;

export const ADD_BILLING_ADRESSE = gql`
  mutation setBillingAddressOnCart($input: SetBillingAddressOnCartInput!) {
    setBillingAddressOnCart(input: $input) {
      cart {
        billing_address {
          firstname
          lastname
          company
          street
          city
          region {
            code
            region_id
            label
          }
          postcode
          telephone
          country {
            code
            label
          }
        }
      }
    }
  }
`;

export const ADD_SHIPPING_ADDRESS = gql`
  mutation addShippingAddressesOnCart(
    $input: SetShippingAddressesOnCartInput!
  ) {
    setShippingAddressesOnCart(input: $input) {
      cart {
        id
        billing_address {
          firstname
          lastname
          company
          street
          city
          region {
            code
            label
          }
          postcode
          telephone
          country {
            code
            label
          }
        }
        shipping_addresses {
          firstname
          lastname
          company
          street
          city
          region {
            code
            label
          }
          postcode
          telephone
          country {
            code
            label
          }
          available_shipping_methods {
            amount {
              currency
              value
            }
            available
            carrier_code
            carrier_title
            error_message
            method_code
            method_title
            price_excl_tax {
              value
              currency
            }
            price_incl_tax {
              value
              currency
            }
          }
        }
        prices {
          discounts {
            amount {
              value
            }
            label
          }
          applied_taxes {
            amount {
              currency
              value
            }
            label
          }
          subtotal_excluding_tax {
            value
          }
          subtotal_including_tax {
            value
          }
          grand_total {
            value
            currency
          }
        }
      }
    }
  }
`;

export const GENERATE_CUSTOMER_TOKEN = gql`
  mutation genereateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_EMPTY_CART_MUTATION = gql`
  mutation createEmptyCart {
    createEmptyCart
  }
`;

export const ADD_PRODUCTS_TO_CART_MUTATION = gql`
  mutation AddProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        id
        items {
          uid
          product {
            name
            sku
            only_x_left_in_stock
            stock_status
            __typename
          }
          ... on SimpleCartItem {
            customizable_options {
              customizable_option_uid
              label
              values {
                customizable_option_value_uid
                value
              }
            }
          }
          quantity
        }
        prices {
          discounts {
            amount {
              value
            }
            label
          }
          applied_taxes {
            amount {
              currency
              value
            }
            label
          }
          subtotal_excluding_tax {
            value
          }
          subtotal_including_tax {
            value
          }
          grand_total {
            value
            currency
          }
        }
      }
      user_errors {
        code
        message
      }
    }
  }
`;
