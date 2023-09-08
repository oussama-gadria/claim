import { gql } from "@apollo/client";

export const GET_CATEGORIES_QUERY = gql`
  {
    categoryList(filters: {}) {
      children_count
      children {
        id
        uid
        level
        name
        path
        url_path
        url_key
        children {
          uid
          level
          name
          path
          url_path
          url_key
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($categoryId: String!) {
    products(filter: { category_id: { eq: $categoryId } }) {
      total_count
      items {
        name
        sku
        url_key
        stock_status
        price_range {
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
        __typename
      }
    }
  }
`;
export const GET_USER_CONNECT = gql`
  query {
    customer {
      firstname
      lastname
      suffix
      email
      is_subscribed
      default_billing
      default_shipping
      addresses {
        id
        firstname
        lastname
        street
        city
        region {
          region_code
          region
        }
        postcode
        country_code
        telephone
      }
    }
  }
`;

export const GET_PRODUCT_DATA_BY_SKU = gql`
  query GetProductDataBySku($productSku: String!) {
    products(filter: { sku: { eq: $productSku } }) {
      items {
        name
        sku
        url_key
        price_range {
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
        __typename
      }
    }
  }
`;

export const GET_ITEMS_CART = gql`
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      email
      items {
        prices {
          total_item_discount {
            value
          }
          price {
            value
          }
          discounts {
            label
            amount {
              value
            }
          }
        }
        product {
          name
          sku
          only_x_left_in_stock
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
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
          }
        }
        quantity
      }
      gift_message {
        to
        from
        message
      }
      shipping_addresses {
        firstname
        lastname
        street
        city
        region {
          code
          label
        }
        country {
          code
          label
        }
        telephone
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
        selected_shipping_method {
          amount {
            value
            currency
          }
          carrier_code
          carrier_title
          method_code
          method_title
        }
      }
      available_payment_methods {
        code
        title
      }
      selected_payment_method {
        code
        title
      }
      applied_coupons {
        code
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
`;
