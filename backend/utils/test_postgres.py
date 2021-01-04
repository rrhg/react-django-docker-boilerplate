

print('testing postgres with psycopg2')
import psycopg2

def postgres_test():

    try:
        conn = psycopg2.connect("dbname='django' user='django' host='postgres' password='django' connect_timeout=1 ")
        conn.close()
        print('OK, connection is working')
        #return True
    except:
        print('No Connection detected')
        #return False

postgres_test()


