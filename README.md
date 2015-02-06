Redirector
==========

This is a basic setup to redirect people from http to https. The first and second arguments of the server.js file can be involved with a to_port and a from_port that will change it from 80 and 443 respectively, to whatever you like.

Basic start up command:

    sudo node server.js

Sudo is required in most *nix environments because you're asking for access to privileged ports.

Advanced start up command (wooo!):

    node server.js 8080 8443

Which allows you to set it up for a redirect from/to any port you like.

Happy redirecting!
------------------