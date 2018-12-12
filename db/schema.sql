drop database if exists gift_help_db;

create database gift_help_db;

use gift_help_db;

create table requests(
id int auto_increment,
req_email varchar(50),
req_msg varchar(1000),
budget int,
answered boolean default false,
createdAt timestamp,
primary key (id)
);

create table answers(
id int auto_increment,
res_msg varchar(500) not null,
shop_link varchar(500),
req_id int not null,
primary key (id),
createdAt timestamp,
foreign key (req_id) references requests(id)
);
