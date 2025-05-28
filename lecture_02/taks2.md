1. CREATE DATABASE library owner oleks;

2. CREATE TABLE persons
   (
        id serial PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        birthday DATE
   );

3. CREATE TABLE readers
   (
        id serial PRIMARY KEY,
        person_id integer NOT NULL REFERENCES persons(id)
   );

4. CREATE TABLE authors
   (
        id serial PRIMARY KEY,
        person_id integer NOT NULL REFERENCES persons(id)
   );

5. CREATE TABLE books
   (
        id serial PRIMARY KEY,
        title VARCHAR(80),
        edition VARCHAR(80),
        reader_id integer NULL REFERENCES readers(id)
   );

6. CREATE TABLE author_book
   (
        author_id integer NOT NULL REFERENCES authors(id),
        book_id integer NOT NULL REFERENCES books(id),
        PRIMARY KEY (author_id, book_id)
   );
