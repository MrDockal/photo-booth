#!/bin/bash

if [ $ACTION == "download" ]; then
	mkdir $PWD/camera

	mv $PWD/$ARGUMENT $PWD/camera/$(date +%s).jpg

	./show-image.sh $PWD/camera/$(date +%s).jpg
fi
