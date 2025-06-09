INSERT INTO genres (name) VALUES 
('Román'),
('Sci-fi'),
('Fantasy'),
('Detektivka'),
('Thriller'),
('Poezie'),
('Naučná literatura'),
('Biografie'),
('Historický román'),
('Pohádka');

INSERT INTO authors (firstname, lastname, nationality) VALUES 
('Karel', 'Čapek', 'česká'),
('J.K.', 'Rowling', 'britská'),
('George R.R.', 'Martin', 'americká'),
('Agatha', 'Christie', 'britská'),
('Ernest', 'Hemingway', 'americká'),
('Franz', 'Kafka', 'česká'),
('Paulo', 'Coelho', 'brazilská'),
('Stephen', 'King', 'americká'),
('Jane', 'Austen', 'britská'),
('Božena', 'Němcová', 'česká');

INSERT INTO books (title, author_id, genre_id, year) VALUES 
('R.U.R.', 1, 2, 1920),
('Harry Potter a Kámen mudrců', 2, 3, 1997),
('Hra o trůny', 3, 3, 1996),
('Vražda v Orient expresu', 4, 4, 1934),
('Stařec a moře', 5, 1, 1952),
('Proměna', 6, 1, 1915),
('Alchymista', 7, 1, 1988),
('To', 8, 5, 1986),
('Pýcha a předsudek', 9, 1, 1813),
('Babička', 10, 1, 1855);

INSERT INTO borrowers (firstname, lastname, email, phone) VALUES
('Jan', 'Novák', 'jan.novak@email.cz', '123456789'),
('Marie', 'Svobodová', 'marie.s@email.cz', '987654321'),
('Petr', 'Dvořák', 'petr.dvorak@email.cz', '555123456'),
('Lucie', 'Černá', 'lucie@email.cz', '777888999');

INSERT INTO loans (book_id, borrower_id, loan_date, return_date, returned) VALUES
(1, 1, '2023-05-01', '2023-05-15', 1),
(2, 2, '2023-05-10', '2023-06-10', 0),
(3, 3, '2023-05-15', '2023-06-15', 0),
(4, 4, '2023-05-05', '2023-05-20', 1);
