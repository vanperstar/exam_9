

CREATE TABLE centers (
    id serial primary key,
    name VARCHAR(50) NOT NULL,
    addres VARCHAR(250) NOT NULL,
    open_date DATE,
    close_date DATE
);

INSERT INTO centers (name, addres) VALUES ("Everest", "chilonzor");


CREATE TABLE departments (
    id serial primary key,
    center_ref_id INT REFERENCES centers(id),
    dep_name VARCHAR(50) NOT NULL,
    create_at TIMESTAMP,
    delete_at TIMESTAMP
);

CREATE TABLE directions (
    id serial primary key,
    dep_ref_id INT REFERENCES departments(id),
    dir_name VARCHAR(50) NOT NULL,
    duration INT,
    salary INT,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);

CREATE TABLE positions (
    id serial primary key,
    dep_ref_id INT REFERENCES departments(id),
    pos_name VARCHAR(50) NOT NULL,
    salary INT
);

CREATE TABLE groups (
    id serial primary key,
    dir_ref_id INT REFERENCES directions(id),
    gr_number INT NOT NULL,
    begin_date date,
    end_date DATE
);

CREATE TABLE users (
    id serial primary key,
    pos_ref_id INT REFERENCES positions(id),
    firs_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    contact VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    come_date date,
    left_date DATE,
    proup_ref_id INT REFERENCES groups(id)
);

CREATE TABLE checks (
    id serial primary key,
    proup_ref_id INT REFERENCES groups(id),
    user_ref_id INT REFERENCES users(id),
    not_in_class TEXT NOT NULL,
    add_date DATE
);

CREATE TABLE incomes (
    id serial primary key,
    user_ref_id INT REFERENCES users(id),
    reason VARCHAR(100) NOT NULL,
    amount INT,
    inc_time DATE
);

CREATE TABLE outlay (
    id serial primary key,
    reason VARCHAR(200) NOT NULL,
    amount INT,
    out_time DATE
);