

WEB2040 final-exam

1. Which of the following is a valid insert statement in mongodb? (5 pts) 
    i.   db.test.insert({x:2,y:"apple"}) <------AMSWER
    ii.  db.test.push({x:2,y:"apple"}) 
    iii. db.test.insert({"x":2} {"y":"apple"}) 
    iv.  db.test.insert({"x":2}, {"y":"apple"}) 

    ANSWER:  i.  db.test.insert({x:2,y:"apple"})


2. Given a collection named books within a database named library, write the statement you would use to query all the contents of the collection in such a way that the results are displayed in JSON format with one property-value pair per line. (5 pts) 
Dada una coleccion llamada books dentro de una base de datos llamada library, escriba el comando que usted utilizaria para extraer todos los contenidos de la coleccion de tal manera que los resultados salgan en formato JSON con una propiedad por linea (resultados impresos de forma bonita). 
 
 
ANSWER: The find() method with no parameters returns all documents from a collection and returns all fields for the documents. For example, the following operation returns all documents in the bios collection: 
db.bios.find() 
 

3. A query may include a ___________ that specifies the fields from the matching documents to return. (5 pts) 
    a. selection 
    b. projection 
    c. union 
    d. None of the mentioned 
 
ANSWER: b. (projection) 
 
Project Fields to Return from Query - By default, queries in MongoDB return all fields in matching documents. To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return. 
 
projection- A document given to a query that specifies which fields MongoDB returns in the result set.  
 

4. MongoDB stores all documents in: (5 pts) 
    a. tables 
    b. collections 
    c. rows 
    d. All of the mentioned 
 
ANSWER: b. (collections) 

Collection - MongoDB stores documents in collections. Collections are analogous to tables in relational databases. 
 
 
5. If you want to change an existing collection in mongodb, you must use the following command: (5 pts) 
    a. insert 
    b. delete then insert 
    c. update 
    d. None of the above 
 
ANSWER: c. (update)
 
Definition: db.collection.update(query, update, options) 
Modifies an existing document or documents in a collection. The method can modify specific fields of an existing document or documents or replace an existing document entirely, depending on theupdate parameter. 
By default, the update() method updates a single document. Set the Multi Parameter to update all documents that match the query criteria. 
 
 
6. Given a collection named students, where the documents have first_name and last_name properties, how would you write a mondogb query that looks up all students with the last name "Castro"? (5 pts) 
Dada una coleccion llamada students, donde los documentos tienen campos de nombre first_name y last_name, como escribiria un query en mongodb para encontrar a todos los estudiantes que tengan el apellido "Castro"? 
 
ANSWER:  db.students.find({last_name:"castro"},  
 
 
7.  Do all the problems in this page: http://sqlzoo.net/wiki/Guest_House_Assessment_Easy (40 pts) 
 
Q.1  (See screenshots in sql_screenshots file)

SELECT booking_date, nights 
FROM booking JOIN guest ON guest_id = guest.id 
WHERE guest_id = 1183 
 
Q.2 (See screenshots in sql_screenshots file)

SELECT arrival_time, first_name,last_name 
FROM booking JOIN guest ON guest_id = guest.id 
WHERE arrival_time AND booking_date='2016-11-05' 
ORDER BY arrival_time 
 
Q.3 (See screenshots in sql_screenshots file)
 
SELECT booking.booking_id,booking.room_type_requested, 
booking.occupants,rate.amount 
FROM booking 
JOIN rate 
ON booking.booking_id IN (5152,5154,5295) 
WHERE booking.occupants=rate.occupancy AND booking.room_type_requested=rate.room_type ; 
 
Q.4 (See screenshots in sql_screenshots file)

SELECT first_name,last_name, address 
FROM booking JOIN guest ON guest_id = guest.id 
WHERE room_no = 101 AND booking_date='2016-12-03' 
 
Q.5 (See screenshots in sql_screenshots file)
SELECT guest_id, COUNT(nights), SUM(nights)  
FROM booking JOIN guest ON guest_id = guest.id 
WHERE guest_id IN (1185, 1270) 
GROUP BY guest_id  
 
 
8. Do any two of the problems on this page: http://sqlzoo.net/wiki/Guest_House_Assessment_Medium (20pts) 
 
Q.6 
 
SELECT SUM(nights*amount) 
FROM booking 
JOIN rate 
ON booking.room_type_requested=rate.room_type AND booking.occupants=rate.occupancy 
WHERE booking.guest_id= 
(SELECT id 
FROM guest 
WHERE first_name=”Ruth” AND last_name=”Cadbury”) 
 
Q.7 
 
 
Q.8 
 
SELECT g.last_name, g.first_name, g.address, COALESCE(SUM(b.nights),0) AS nights
FROM guest AS g
LEFT JOIN booking AS b ON b.guest_id = g.id
WHERE g.address LIKE '%Edinburgh%'
GROUP BY g.last_name, g.first_name, g.address; 
 
Q.9 
 
SELECT booking_date AS i,count(*) as arrivals 
FROM booking 
WHERE booking_date IN (“2016-11-25″,”2016-11-26″,”2016-11-27″,”2016-11-28″,”2016-11-29″,”2016-11-30″,”2016-12-01”) 
GROUP BY booking_date; 
 
Q.10 
 
 
 
 