1)Before executing docker-compose file make sure to change the url endpoint of react app to ec2 dns. 2)If it shows this error then add : version: "2.4" above services

ERROR: The Compose file './docker-compose.yaml' is invalid because:
Unsupported config option for services: 'web'

Example:
version: "2.4"
services:
