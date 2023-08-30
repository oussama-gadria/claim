import { gql } from "@apollo/client";

 export const GET_CATEGORIES_QUERY = gql`
  {
    categoryList(filters: {}) {
      children_count
      children {
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

export const GET_PRODUCTS_BY_CATEGORY=gql` 
query get_products_by_category($categoryId:String!) {
	products(filter: { category_uid: { eq: $categoryId} }) {
		total_count
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

`
