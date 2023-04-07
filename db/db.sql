

create table cliente(
    id int(15) not null auto_incrementable,
    name varchar(50) not null,
    number int(50) not null,
    email varchar(50) default null,
    placeWork varchar(50) default null,
    desc varchar(500) default null,
    primary key (id)
    );