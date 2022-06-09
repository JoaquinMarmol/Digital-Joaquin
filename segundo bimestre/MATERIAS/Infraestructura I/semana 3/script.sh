#!/bin/bash

for (( i=1; i<=25; i++));do
		mkdir clase$i
	touch clase$i/teorico.txt
	touch clase$i/practico.txt;	
done
