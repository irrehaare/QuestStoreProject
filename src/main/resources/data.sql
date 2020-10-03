insert into item (name, description, cost, type)
values
('Private Mentoring', 'Book private session with one of the mentors', 50, 'BASIC'),
('Extend Assignment', 'Extend SI week assignment deadline by one day', 500, 'BASIC'),
('Rent a Mentor', 'Mentor joins your team for one hour to help you with your project', 1000, 'EXTRA'),
('Off-School Day', 'The whole course goes to an off-school program for a day', 30000, 'EXTRA'),
('Workshop', 'Purchase 60 min workshop with a mentor or mentors on the topic of your choosing', 1000, 'EXTRA'),
('Extra materials', 'Get some extra materials for the topic you are currently studying', 500, 'EXTRA'),
('Dressing Up', 'All mentors should dress up as pirates (or just funny) for the day', 5000, 'EXTRA');



INSERT INTO users (username, name, surname, role, password, email, balance, earnings, enabled)
VALUES
('nodi','Lukasz', 'Lesiuk', 'student', '1', 'lukasz.lesiuk.2@gmail.com', 1000, 3000, true),
('user1','Uesugi', 'Kenshin', 'student', '{noop}1', 'uesugi.genshin@niigata.jp', 1500, 4000, true),
('user2','Miamoto', 'Musashi', 'student', '{noop}1', 'miamoto.mushashi@nitenichi-ryu.jp', 0, 9000, true),
('user3','name1', 'surname1', 'student', '{noop}1', 'mail@mail.com', 3750, 13000, false);


INSERT INTO authorities (username, authority)
VALUES
('nodi', 'USER'),
('user1', 'USER'),
('user2', 'USER'),
('user3', 'USER');
