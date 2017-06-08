#!/bin/bash
set -ev
BINROOT=node_modules/.bin
npm i --loglevel=warn
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
