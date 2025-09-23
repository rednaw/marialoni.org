#!/bin/bash
echo "Starting Jekyll server..."
RUBYOPT="-W0" bundle exec jekyll serve 2>&1 | grep -v "Warning: Empty"
