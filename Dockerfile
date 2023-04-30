ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine as node_production

ARG EXEC_ENV=production

WORKDIR /app

COPY . ./

RUN set -eux;

COPY ./docker/init-app.sh /init-app.sh
RUN chmod 777 /init-app.sh

ENV HTTPS false

EXPOSE 4200

ENTRYPOINT [ "/init-app.sh" ]

FROM node_production as node_development

ARG EXEC_ENV=development