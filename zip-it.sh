#!/bin/bash
TAR_FILE="../compass-property-card-take-home.tar.gz"
FOLDER_TO_TAR="."
tar --exclude="node_modules" --exclude="pnpm-lock.yaml" --exclude=".git" --exclude=".gitignore" --exclude="package-lock.json" -cvzf $TAR_FILE $FOLDER_TO_TAR
echo "Gzipped into $TAR_FILE"
