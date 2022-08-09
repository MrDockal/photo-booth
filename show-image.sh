#!/bin/bash
echo HEJ
echo $1
echo HEJ
eog -f -w -g $1 1>/dev/null 2>&1&
sleep 15
pkill eog
