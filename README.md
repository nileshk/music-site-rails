# Music Site #

This is a simple Rails 3 app for a web site for hosting music of a
single artist.  It uses [jPlayer][] on the front end to provide an
HTML5 music player with a Flash fallback, and aims to support all
modern browsers including mobile devices.  Music files can also be
downloaded in either MP3 or OGG formats.  Some HTML5 canvas graphics
are animated while the music plays.

[jplayer]: http://www.happyworm.com/jquery/jplayer/
       
## Configuration ##

To be able to use this the following files need to be configured:

* Create a `config/database.yml` file (you can copy
  `config/database.yml.sample` as a starting point)
* Create a `config/initializers/site_config.rb` file by copying
  `config/initializers/site_config.rb.example` and modifying for your
  site
* Create an admin user (using [Devise][] for auth).  I do this with the
  Rails console as [described here][1].
* Once running, browse to `/songs`, and add new songs, uploading MP3 and
  OGG versions of your songs.

[devise]: http://github.com/plataformatec/devise
[1]: http://stackoverflow.com/questions/2708417/creating-an-admin-user-in-devise-on-rails-beta-3/2752839#2752839)

## TODO ##

* Handle case when site_config.rb is not configured or some of the
  variables in it are not configured
* Easier way to initialize admin user
* Alternative layout for mobile devices.
* Test on more browsers
* More animations!

## Web sites using this ##

This is used by:

* [Nilesh D Kapadia's Music](http://nileshk.org)
