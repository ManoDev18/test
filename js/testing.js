
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
ExpiresByType image/jpg "access 1 month"
ExpiresByType image/jpeg "access 1 month"
ExpiresByType image/gif "access 1 month"
ExpiresByType image/png "access 1 month"
ExpiresByType text/css "access 1 month"
ExpiresByType application/pdf "access 1 month"
ExpiresByType application/javascript "access 1 month"
ExpiresByType application/x-javascript "access 1 month"
ExpiresByType application/x-shockwave-flash "access 1 month"
ExpiresByType image/x-icon "access 1 year"
ExpiresDefault "access 10 days"
</IfModule>
