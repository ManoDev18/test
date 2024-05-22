
jQuery.event.special.touchstart = {
setup: function( _, ns, handle ) {
this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
}
};
jQuery.event.special.touchmove = {
setup: function( _, ns, handle ) {
this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
}
};
jQuery.event.special.wheel = {
setup: function( _, ns, handle ){
this.addEventListener("wheel", handle, { passive: true });
}
};
jQuery.event.special.mousewheel = {
setup: function( _, ns, handle ){
this.addEventListener("mousewheel", handle, { passive: true });
}
};


<IfModule mod_expires.c>
ExpiresActive On

# Images
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
ExpiresByType image/x-icon "access plus 1 year"

# Video
ExpiresByType video/webm "access plus 1 year"
ExpiresByType video/mp4 "access plus 1 year"
ExpiresByType video/mpeg "access plus 1 year"

# Fonts
ExpiresByType font/ttf "access plus 1 year"
ExpiresByType font/otf "access plus 1 year"
ExpiresByType font/woff "access plus 1 year"
ExpiresByType font/woff2 "access plus 1 year"
ExpiresByType application/font-woff "access plus 1 year"
ExpiresByType application/font-woff2 "access plus 1 year"

# CSS, JavaScript
ExpiresByType text/css "access plus 1 year"
ExpiresByType text/javascript "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"

# Others
ExpiresByType application/pdf "access plus 1 year"
ExpiresByType image/vnd.microsoft.icon "access plus 1 year"
</IfModule>

## EXPIRES HEADER CACHING ##



# Cache-Control Headers

<IfModule mod_headers.c>
    <FilesMatch "\.(css|jpg|jpeg|png|gif|js|ico)$">
        Header set Cache-Control "max-age=2592000, private"
    </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  # Compress HTML, CSS, JavaScript, Text, XML and fonts
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  AddOutputFilterByType DEFLATE application/x-font
  AddOutputFilterByType DEFLATE application/x-font-opentype
  AddOutputFilterByType DEFLATE application/x-font-otf
  AddOutputFilterByType DEFLATE application/x-font-truetype
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE font/opentype
  AddOutputFilterByType DEFLATE font/otf
  AddOutputFilterByType DEFLATE font/ttf
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE image/x-icon
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml
  # Remove browser bugs (only needed for really old browsers)
  BrowserMatch ^Mozilla/4 gzip-only-text/html
  BrowserMatch ^Mozilla/4\.0[678] no-gzip
  BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
  Header append Vary User-Agent
</IfModule>
# php -- BEGIN cPanel-generated handler, do not edit
# Set the “ea-php81” package as the default “PHP” programming language.
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php81 .php .php8 .phtml
</IfModule>

<script>

jQuery.event.special.touchstart = {
setup: function( _, ns, handle ) {
this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
}
};
jQuery.event.special.touchmove = {
setup: function( _, ns, handle ) {
this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
}
};
jQuery.event.special.wheel = {
setup: function( _, ns, handle ){
this.addEventListener("wheel", handle, { passive: true });
}
};
jQuery.event.special.mousewheel = {
setup: function( _, ns, handle ){
this.addEventListener("mousewheel", handle, { passive: true });
}
};
</script>
