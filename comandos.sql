create database IF NOT EXISTS escola_ingles;

use escola_ingles;

insert into Pessoas(nome, ativo, email, role, createdAt, updatedAt)
values('bastiao', 1, 'bastiao@terra.com', 'estudante', now(), now());

select * from pessoas;