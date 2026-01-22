FROM openjdk:22-jdk
LABEL maintainer="Carlos M. Abreu <magno.mabreu@gmail.com>"
COPY ./target/prompt-creator-0.1.jar /opt/lib/
ENTRYPOINT ["java"]
ENV LANG=pt_BR.utf8 
CMD ["-jar", "/opt/lib/prompt-creator-0.1.jar"]