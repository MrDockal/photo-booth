#!/bin/bash
eog -f -w -g $1 1>/dev/null 2>&1&
sleep 15
pkill eog
