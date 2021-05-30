CREATE TABLE tb_user_type (
	user_type_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(30) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW(),
    deletd_at DATETIME DEFAULT NULL
);

ALTER TABLE tb_user ADD FOREIGN KEY (user_type_id) REFERENCES tb_user_type(user_type_id);