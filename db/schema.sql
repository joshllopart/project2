use gift_help_db;

create table links(
id int auto_increment,
provided_link varchar(500) not null,
converted_link varchar(500) not null,
req_id int not null,
primary key (id),
createdAt timestamp,
updatedAt timestamp,
foreign key (req_id) references requests(id)
);
