CREATE TABLE tb_user (
	user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(150) NOT NULL,
    user_type_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW(),
    deleted_at DATETIME DEFAULT NULL
);