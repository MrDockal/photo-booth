#!/bin/bash

mkdir /tmp/wedding
mkdir /tmp/wedding/camera
mkdir /tmp/wedding/website

pqiv --slideshow-interval=1 --end-of-files-action=wrap-no-reshuffle --sort --sort-key=mtime --hide-info-box --watch-directories --slideshow -f /tmp/wedding/camera /tmp/wedding/website

#scrcpy --lock-video-orientation=3

# gphoto2 --keep-raw --capture-tethered --hook-script ./sony-on-photo.sh