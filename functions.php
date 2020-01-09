<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'hello-elementor','hello-elementor','hello-elementor-theme-style' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

function include_custom_scripts() {

	wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', array(), null, true);
    wp_enqueue_script('app', get_stylesheet_directory_uri() . '/inc/app.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'include_custom_scripts');

function include_gmaps_script() {
    if( is_page( 'kontakt' ) || is_page( 'contact' ) ){
    wp_enqueue_script('gmaps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD--JrCG5n1ImJ-4oHD3KdVjCTsPD5hVJw&callback=initMap', array(), null, true);
    }

}
add_action('wp_enqueue_scripts', 'include_gmaps_script');

function add_async_defer_attribute($tag, $handle) {
    if ( 'gmaps' !== $handle )
        return $tag;
    return str_replace( ' src', ' async="async" defer="defer" src', $tag );
}

add_filter('script_loader_tag', 'add_async_defer_attribute', 10, 2);

function add_file_types_to_uploads($file_types){

    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes );
    return $file_types;

}
add_filter('upload_mimes', 'add_file_types_to_uploads');