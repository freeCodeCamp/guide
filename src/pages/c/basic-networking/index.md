---
title: Basic Networking
---
## Basic Networking

Basic Networking in C mainly involves opening sockets and communicating through them. This begs the question, what is a Socket?

## What is a Socket
A socket is one endpoint of a two-way communication link between two programs running on a network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to. An endpoint is a combination of an IP address and a port number.

When a program is running on a network it is available to access from different locations other than the local location. By different locations I mean all the computers on the same network can access it. But, how will they? Hence every program registers itself with a port number. Think of port number as an apartment number in a huge apartment. If a letter is sent to an apartment, the apartment number tells the post office the specific apartment he should go to.

But, how will it arrive at the apartment? Every apartment will have unique wordings which we call "address." The post office looks at those unique string(Address) and decides the destination of the letter. In this case, every computer connected to a network will have an IP address which is like an address used when sending a letter through the post office. Likewise, a computer connected to a network needs to know the IP addresses of the other computers on the same network to communicate with them. To communicate with a specific program on a specific computer the port number for that program is needed. (Think of the apartment number from our apartment analogy.)

## Example program

`client.c`

```c
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <sys/types.h>
#include <time.h>

int main(int argc, char *argv[])
{
	int listenfd = 0, connfd = 0;
	struct sockaddr_in serv_addr;

	char sendBuff[1025];
	time_t ticks;

	/* creates an unnamed socket inside the kernel and returns
	 * an integer known as socket descriptor
	 */
	listenfd = socket(AF_INET, SOCK_STREAM, 0);
	memset(&serv_addr, '0', sizeof(serv_addr));
	memset(sendBuff, '0', sizeof(sendBuff));

	serv_addr.sin_family = AF_INET;
	serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
	serv_addr.sin_port = htons(5000);

	/* The call to the function "bind()" assigns the details specified
	 * in the structure 『serv_addr' to the socket created in the step above
	 */
	bind(listenfd, (struct sockaddr*)&serv_addr, sizeof(serv_addr));

	/* The call to the function "listen()" with second argument as 10 specifies
	 * maximum number of client connections that server will queue for this listening
	 * socket.
	 */
	listen(listenfd, 10);

	while(1)
	{
		/* In the call to accept(), the server is put to sleep and when for an incoming
		 * client request, the three way TCP handshake* is complete, the function accept()
		 * wakes up and returns the socket descriptor representing the client socket.
		 */
		connfd = accept(listenfd, (struct sockaddr*)NULL, NULL);

		/* As soon as server gets a request from client, it prepares the date and time and
		 * writes on the client socket through the descriptor returned by accept()
		 */
		ticks = time(NULL);
		snprintf(sendBuff, sizeof(sendBuff), "%.24s\r\n", ctime(&ticks));
		write(connfd, sendBuff, strlen(sendBuff));

		close(connfd);
		sleep(1);
	}
}
```

`client.c`

```c
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <arpa/inet.h>

int main(int argc, char *argv[])
{
	int sockfd = 0, n = 0;
	char recvBuff[1024];
	struct sockaddr_in serv_addr;

	if(argc != 2)
	{
		printf("\n Usage: %s <ip of server> \n",argv[0]);
		return 1;
	}

	memset(recvBuff, '0',sizeof(recvBuff));

	/* a socket is created through call to socket() function */
	if((sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
	{
		printf("\n Error : Could not create socket \n");
		return 1;
	}

	memset(&serv_addr, '0', sizeof(serv_addr));

	serv_addr.sin_family = AF_INET;
	serv_addr.sin_port = htons(5000);

	if(inet_pton(AF_INET, argv[1], &serv_addr.sin_addr)<=0)
	{
		printf("\n inet_pton error occured\n");
		return 1;
	}

	/* Information like IP address of the remote host and its port is
	 * bundled up in a structure and a call to function connect() is made
	 * which tries to connect this socket with the socket (IP address and port)
	 * of the remote host
	 */
	if( connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0)
	{
		printf("\n Error : Connect Failed \n");
		return 1;
	}

	/* Once the sockets are connected, the server sends the data (date+time)
	 * on clients socket through clients socket descriptor and client can read it
	 * through normal read call on the its socket descriptor.
	 */
	while ( (n = read(sockfd, recvBuff, sizeof(recvBuff)-1)) > 0)
	{
		recvBuff[n] = 0;
		if(fputs(recvBuff, stdout) == EOF)
		{
			printf("\n Error : Fputs error\n");
		}
	}

	if(n < 0)
	{
		printf("\n Read error \n");
	}

	return 0;
}
```


*Source:* https://gist.github.com/browny/5211329

