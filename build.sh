#!/bin/bash
echo "Building Jekyll site..."
echo ""
output=$(RUBYOPT="-W0" bundle exec jekyll build --strict 2>&1 | grep -v "Warning: Empty")

if echo "$output" | grep -q "Exception\|Error\|Failed\|Warning"; then
    echo "$output" | grep "YAML Exception"
    echo ""
    echo "$output" | grep "Failed to parse BibTeX" | head -1
    echo ""
    echo "$output" | grep "Liquid Warning" | head -1
    echo ""
    echo "💡 Fix the errors above and try again"
    echo ""
    exit 1
else
    echo "Build successful"
fi
