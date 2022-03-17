#! /bin/bash
ip=$(hostname -I | awk '{print $1}')
echo "MY_IP=$ip" >.env
expo start
