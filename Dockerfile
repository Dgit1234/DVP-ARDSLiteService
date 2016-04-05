#FROM ubuntu
#RUN apt-get update
#RUN apt-get install -y git nodejs npm
#RUN git clone git://github.com/DuoSoftware/DVP-ARDSLiteService.git /usr/local/src/ardsliteservice
#RUN cd /usr/local/src/ardsliteservice; npm install
#CMD ["nodejs", "/usr/local/src/ardsliteservice/app.js"]

#EXPOSE 8828

FROM node:5.10.0
RUN git clone git://github.com/DuoSoftware/DVP-ARDSLiteService.git /usr/local/src/ardsliteservice
RUN cd /usr/local/src/ardsliteservice;
WORKDIR /usr/local/src/ardsliteservice
RUN npm install
EXPOSE 8828
CMD [ "node", "/usr/local/src/ardsliteservice/app.js" ]
