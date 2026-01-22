#! /bin/sh

docker run --rm -it --security-opt seccomp=unconfined \
-v ~/.m2:/root/.m2 \
-v ${PWD}:/home/builder \
magnoabreu/java-builder:java24 mvn clean package

docker ps -a | awk '{ print $1,$2 }' | grep magnoabreu/prompt-creator:1.0 | awk '{print $1 }' | xargs -I {} docker rm -f {}
docker rmi magnoabreu/prompt-creator:1.0
docker build --tag=magnoabreu/prompt-creator:1.0 --rm=true .

docker run --name wan-prompt --hostname=wan-prompt \
-v /etc/localtime:/etc/localtime:ro \
-p 8080:8080 \
-d magnoabreu/prompt-creator:1.0

#docker push magnoabreu/prompt-creator:1.0

