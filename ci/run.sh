#!/bin/bash
set -ev
BINROOT=node_modules/.bin
npm i --loglevel=warn
$BINROOT/greenkeeper-lockfile-update
case "${TEST}" in
  unit)
    npm t
    ;;
  lint)
    $BINROOT/eslint *.js
    ;;
  *)
    echo "No test suite configured!"
    echo "Make sure to set the TEST environment variable to one of the options above!"
    exit 1
    ;;
esac
$BINROOT/greenkeeper-lockfile-upload
