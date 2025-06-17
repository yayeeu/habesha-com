#!/bin/bash

# Convert SVG to PNG with different sizes
convert -background none -size 16x16 safari-pinned-tab.svg favicon-16x16.png
convert -background none -size 32x32 safari-pinned-tab.svg favicon-32x32.png
convert -background none -size 180x180 safari-pinned-tab.svg apple-touch-icon.png
convert -background none -size 192x192 safari-pinned-tab.svg android-chrome-192x192.png
convert -background none -size 512x512 safari-pinned-tab.svg android-chrome-512x512.png

# Create site.webmanifest
cat > site.webmanifest << EOL
{
  "name": "Habesha.com",
  "short_name": "Habesha",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
EOL 