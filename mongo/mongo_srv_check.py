import srvlookup
import sys
import dns.resolver

host = None

if len(sys.argv) > 1 :
    host = sys.argv[1]

if host :
    services = srvlookup.lookup("mongodb", domain=host)
    for i in services:
        print("%s:%i" % (i.hostname, i.port))
    for txtrecord in dns.resolver.query(host, 'TXT'):
        print("%s: %s" % (host, txtrecord))
else:
    print("No host specified")


# python3 mongo_srv_check.py cluster0-0cory.mongodb.net