<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u820293657_EloTd' );

/** Database username */
define( 'DB_USER', 'u820293657_XVDzH' );

/** Database password */
define( 'DB_PASSWORD', 'c3BVbJDNPd' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'm*U!@Gk}0{|qT_#%JFnSDsq,Fh/{t{EaSWgL.M<R}y|4Ke$2p)/,EOe{_%vP>geo' );
define( 'SECURE_AUTH_KEY',   'Plp<k*x+edXChF]6hZLQRN:~w;T~q-E*`3GZW6wPRb:iE|!MIs,%e}z`xb+ZcH;N' );
define( 'LOGGED_IN_KEY',     '6d~nIsWX. 2jx(50a)B MT*RH]$)HUP9MCQ S2&7h3,{:+-fe+rF4Q<vE+3knoVP' );
define( 'NONCE_KEY',         '=Vsi_ F*Dp{B@%VU)6D2h!=Duiu/+~?G%v%y%@N2z*jcjH>6d4vtna*|*Fcv[`-T' );
define( 'AUTH_SALT',         'Cy5.FXVnhKTCo^|ZvE|^-xed:T$4m4AZ~1kQF=82/]<?]GHLlz/3T[~?%=eQTlre' );
define( 'SECURE_AUTH_SALT',  '*3Jyzm~]_,hxpbHM)u&}o0/HrEDdUHU72vh:.VT$Dd$5O0)/j&H<8bh1e5moQG5+' );
define( 'LOGGED_IN_SALT',    'D@sJ,Yt?Dlf~kJ[|tgc#=exKU^8}*@J/X~z[noeWpl0&U0j4e|<p6!)8r +ScMJ4' );
define( 'NONCE_SALT',        't&7k3Z@ad{^c(scyLPcq^Coa)Zx>ht/zodp;$i.g?U-Y/9Tp9b_mG!Rt0t CJ-Yo' );
define( 'WP_CACHE_KEY_SALT', '>8kjZobY-S3WfeC*U6.Ny@L?SY{g{[B_FnG8} Tg/pK8QEu6%W8i^KWMOi)n=}jv' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */
define('WP_SITEURL', 'https://www.goltebbusters.store');
define('WP_HOME', 'https://www.goltebbusters.store');


define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
