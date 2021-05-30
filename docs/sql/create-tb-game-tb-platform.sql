USE db_ragnarok;

INSERT INTO tb_platform VALUES (
	uuid(),
    'PS4',
    now(),
    now(),
    null
);

CREATE TABLE tb_platform (
	platform_id INTEGER AUTO_INCREMENT PRIMARY KEY, 
	name varchar(50) NOT NULL, 
	created_at datetime NOT NULL,
	updated_at datetime NOT NULL,
	deleted_at datetime DEFAULT NULL
);

CREATE TABLE tb_game (
	game_id INTEGER AUTO_INCREMENT PRIMARY KEY, 
	name varchar(100) NOT NULL,
	description varchar(256) NOT NULL,
	price double NOT NULL,
	platform_id INTEGER NOT NULL,
	image_url varchar(256) NOT NULL,
	created_at datetime NOT NULL,
	updated_at datetime NOT NULL,
	deleted_at datetime DEFAULT NULL
);

ALTER TABLE tb_game ADD FOREIGN KEY (platform_id) REFERENCES tb_platform(platform_id);

