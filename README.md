# OpenweatherAPI
HTML/JavaScript/NodeJs/Express

How to Install/Uninstall NodeJS on Ubuntu 18.04

NodeJs PPA

curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -

Install NodeJS on Ubuntu sudo apt-get install nodejs

This command not only installs NodeJS but also NPM (NodeJS Package Manager) and other dependencies as well. Verifying the version of NodeJS and NPM After the successful installation of NodeJS, you can test the version of NodeJS using the simple command below. node -v

For NPM, run npm -v

Uninstall NodeJS from Ubuntu If you wish to uninstall NodeJS from your Ubuntu system, run the command below. sudo apt-get remove nodejs The command will remove the package but retain the configuration files. To remove both the package and the configuration files run: sudo apt-get purge nodejs As a final step, you can run the command below to remove any unused files and free up the disk space sudo apt-get autoremove Great! We have successfully installed and tested the installation of NodeJS. We also learned how to uninstall NodeJS from Ubuntu and clean up space.
