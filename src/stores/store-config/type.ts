interface IPWA {
  app_name: string | null
  image_product_width: string | null
  image_product_height: string | null
  home_slider_mobile_width: string | null
  home_slider_mobile_height: string | null
  home_slider_desktop_width: string | null
  home_slider_desktop_height: string | null
  ves_menu_enable: string | null
  ves_menu_alias: string | null
  image_category_width: string | null
  image_category_height: string | null
  page_size: string | null
}

interface IStoreConfig {
  logo_alt: string | null
  logo_width: string | null
  logo_height: string | null
  header_logo_src: string | null
  base_url: string | null
  base_static_url: string | null
  base_media_url: string | null
  base_link_url: string | null
  secure_base_url: string | null
  secure_base_media_url: string | null
  secure_base_static_url: string | null
  secure_base_link_url: string | null
  cms_home_page: string | null
  cms_page: string | null
  cms_no_route: string | null
  cms_no_cookies: string | null
  default_title: string | null
  default_keywords: string | null
  default_description: string | null
  store_code: string | null
  store_name: string | null
  website_code: string | null
  timezone: string | null
  copyright: string | null
  pwa: IPWA|null
}

export type { IStoreConfig, IPWA }
