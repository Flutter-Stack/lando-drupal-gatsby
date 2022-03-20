#!/bin/bash

# Remove the Gatsby cache.
rm -rf gatsby/.cache

cd drupal
vendor/bin/drush --yes site:install demo_umami --db-url=mysql://drupal9:drupal9@database:3306/drupal9 --account-pass=admin --site-name='Drupal-Gatsby'
vendor/bin/drush --yes pm:enable jsonapi gatsby devel devel_generate
vendor/bin/drush --yes pm:uninstall contact
vendor/bin/drush --yes config:import --partial --source=../config
vendor/bin/drush  devel-generate-content 50