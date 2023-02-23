# This is dedicated to extra documentation for this repo that does not need to go in the readme. This is to keep the projects resources avaliable and open

## Steps to configure Cloudflare Workers Gateways logs to Elastic Observability using a Logstash pipeline for log parsing


Configure Cloudflare logging: In the Cloudflare dashboard, go to the "Logs" section and enable logging for your worker. You can configure the logs to include various types of information, such as request headers, response headers, and error messages.

Set up a syslog endpoint: Elastic Observability requires that logs be sent to it using the Syslog protocol. Set up a syslog endpoint on a server where you have Elastic Observability installed.

Configure Cloudflare to send logs to the syslog endpoint: In the Cloudflare dashboard, go to the "Logs" section and configure the logs to be sent to the syslog endpoint. This can be done by providing the IP address and port of the syslog endpoint, as well as the protocol (UDP or TCP) to use for sending the logs.

Configure Elastic Observability: In Elastic Observability, you will need to configure the Logstash pipeline to parse the incoming logs. This can be done by creating a new pipeline and specifying the log format, parsing rules, and output destination.

Verify that logs are being received: Verify that logs are being received by Elastic Observability by checking the pipeline status and reviewing the parsed logs in Kibana.

# Extra Notes


# Form-Processing
Started with HTMLPane for preliminary implementations. Will probably move up to Node.js when it makes more sense. More information coming soon! 

### Notes about Relative linking on IPFS... 
Though it is not required, it is strongly recommended that websites hosted on IPFS use only relative links, unless linking to a different domain. This is because data can be accessed in many different (but ultimately equivalent) ways:

From your custom domain: https://ipfs.tech/index.html
From a gateway: https://cloudflare-ipfs.com/ipns/ipfs.tech/index.html
By immutable hash: https://cloudflare-ipfs.com/ipfs/QmNksJqvwHzNtAtYZVqFZFfdCVciY4ojTU2oFZQSFG9U7B/index.html
Using only relative links within a web application supports all of these at once, and gives the most flexibility to the user. The exact method for switching to relative links, if you do not use them already, depends on the framework you use.
