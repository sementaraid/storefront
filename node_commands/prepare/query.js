const { gql } = require("graphql-request");

const query = gql`
{
  storeConfig{
    logo_alt
    logo_width
    logo_height
    header_logo_src
    base_url
    base_static_url
    base_media_url
    base_link_url
    secure_base_url
    secure_base_media_url
    secure_base_static_url
    secure_base_link_url
    cms_home_page
    cms_page
    cms_no_route
    cms_no_cookies
    default_title
    default_keywords
    default_description
    store_code
    store_name
    website_code
    timezone
    copyright
    pwa{
      app_name
      image_product_width
      image_product_height
      home_slider_mobile_width
      home_slider_mobile_height
      home_slider_desktop_width
      home_slider_desktop_height
      ves_menu_enable
      ves_menu_alias
      image_category_width
      image_category_height
      page_size
    }
  }
}
`;

module.exports = {
  query: query
}