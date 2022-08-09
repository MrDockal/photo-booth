#!/bin/bash

if [ $ACTION == "download" ]; then
	mkdir $PWD/camera

	mv $PWD/$ARGUMENT $PWD/camera/$(date +%s).jpg
	rsync --delete --ignore-existing -r $PWD/camera/ /tmp/wedding/camera

	./show-image.sh $PWD/camera/$(date +%s).jpg
fi
