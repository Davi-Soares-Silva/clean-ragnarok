CREATE DATABASE db_ragnarok;

USE db_ragnarok;

INSERT INTO tb_platform VALUES (
	1,
    'PS4',
    now(),
    now(),
    null
);

CREATE TABLE tb_platform (
	platform_id INTEGER AUTO_INCREMENT PRIMARY KEY, 
	name varchar(50) NOT NULL, 
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	deleted_at datetime DEFAULT NULL
);

CREATE TABLE tb_game (
	game_id INTEGER AUTO_INCREMENT PRIMARY KEY, 
	name varchar(100) NOT NULL,
	description varchar(256) NOT NULL,
	price double NOT NULL,
	platform_id INTEGER NOT NULL,
	image_url varchar(256) NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	deleted_at datetime DEFAULT NULL
);

ALTER TABLE tb_game ADD FOREIGN KEY (platform_id) REFERENCES tb_platform(platform_id);



