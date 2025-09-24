#!/bin/bash
echo "Building Jekyll site..."
echo ""
output=$(RUBYOPT="-W0" bundle exec jekyll build --strict 2>&1 | grep -v "Warning: Empty")

if echo "$output" | grep -q "Exception\|Error\|Failed\|Warning"; then
    echo "Build errors found:"
    echo "$output" | grep -E "Exception|Error|Failed|Warning" | grep -v "Warning: Empty" | head -5
    echo ""
    echo "💡 Fix the errors above and try again"
    echo ""
    exit 1
else
    echo "Build successful"
fi
