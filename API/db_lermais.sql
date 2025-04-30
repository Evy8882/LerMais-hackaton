-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2025 at 06:06 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_lermais`
--
CREATE DATABASE IF NOT EXISTS `db_lermais` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_lermais`;

-- --------------------------------------------------------

--
-- Table structure for table `autores`
--

CREATE TABLE `autores` (
  `id_autor` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `biografia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autores`
--

INSERT INTO `autores` (`id_autor`, `nome`, `data_nascimento`, `biografia`) VALUES
(1, 'Machado de Assis', '1839-06-21', 'Considerado um dos maiores escritores da literatura brasileira.'),
(2, 'Clarice Lispector', '1920-12-10', 'Reconhecida por sua escrita introspectiva e inovadora.'),
(3, 'Carlos Drummond de Andrade', '1902-10-31', 'Poeta modernista brasileiro, autor de obras marcantes.');

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nome_categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nome_categoria`) VALUES
(4, 'Históricos'),
(5, 'Independentes'),
(1, 'Indígenas'),
(6, 'Infantis'),
(3, 'Poesias'),
(2, 'Romances');

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL,
  `nome_usuario` varchar(100) NOT NULL,
  `texto_comentario` text NOT NULL,
  `data_comentario` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_livro`, `nome_usuario`, `texto_comentario`, `data_comentario`) VALUES
(1, 15, 'Giovanna Momesso', 'Olá mundo', '2025-04-30 00:25:11'),
(2, 3, 'Giovanna Momesso', 'Ótimo livro e muito interessante', '2025-04-30 00:55:37');

-- --------------------------------------------------------

--
-- Table structure for table `livros`
--

CREATE TABLE `livros` (
  `id_livro` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `id_autor` int(11) DEFAULT NULL,
  `acesso` enum('gratuito','pago','dominio_publico') NOT NULL,
  `url_pdf` varchar(255) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `capa` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `livros`
--

INSERT INTO `livros` (`id_livro`, `titulo`, `id_autor`, `acesso`, `url_pdf`, `preco`, `capa`) VALUES
(1, 'A Carteira', 1, 'dominio_publico', 'http://www.dominiopublico.gov.br/download/texto/bv000169.pdf', NULL, 'https://m.media-amazon.com/images/I/61I+S5jBwKL._UF894,1000_QL80_.jpg'),
(2, 'A Mulher de Preto', 1, 'dominio_publico', 'http://www.dominiopublico.gov.br/download/texto/ua000186.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpN5wh5p__vZ0ZQUX2bvUYwEgxKBbsoiOlag&s'),
(3, 'A Mão e a Luva', 1, 'dominio_publico', 'http://www.dominiopublico.gov.br/download/texto/bv000213.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDccRyzHxDOOh55pyUlGa8FteRqxNoxPgBHA&s'),
(4, 'A Vida Eterna', 1, 'dominio_publico', 'http://www.dominiopublico.gov.br/download/texto/fs000069pdf.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UYQJKGzYZXODSPMJMqY474wDpmdTUGT3bA&s'),
(5, 'Adão e Eva', 1, 'dominio_publico', 'http://www.dominiopublico.gov.br/download/texto/ua000188.pdf', NULL, 'https://m.media-amazon.com/images/I/813+-GEIXyL._UF894,1000_QL80_.jpg'),
(6, 'Dom Casmurro', 1, 'dominio_publico', 'https://livraria-camara-leg.usrfiles.com/ugd/5ca0e9_77426ca451ec4f60b14af67f925f038e.pdf', NULL, 'https://m.media-amazon.com/images/I/81XpG2iKTlL._AC_UF1000,1000_QL80_.jpg'),
(7, 'Memórias Póstumas de Brás Cubas', 1, 'dominio_publico', 'https://www.bing.com/search?q=memorias+postumas+de+bras+cubas+pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOXujy0g_ll_R_Yc3Z8CkI4moqLKLNd82Fg&s'),
(8, 'Perto do Coração Selvagem', 2, 'dominio_publico', 'https://kbook.com.br/wp-content/files_mf/pertodocora%C3%A7%C3%A3oselvagem.pdf', NULL, 'https://m.media-amazon.com/images/I/71jFv8WMDwL._AC_UF1000,1000_QL80_.jpg'),
(9, 'Laços de Família', 2, 'dominio_publico', 'https://files.ufgd.edu.br/arquivos/centroselecao/cs/Lacos%20de%20Familia%20-%20Clarice%20Lispector.pdf', NULL, 'https://m.media-amazon.com/images/I/71HBiQgPhBL._AC_UF1000,1000_QL80_.jpg'),
(10, 'A Hora da Estrela', 2, 'dominio_publico', 'https://www.assisprofessor.com.br/documentos/livros/Clarice%20Lispector%20-%20A%20Hora%20da%20Estrela.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-URa2ot5LyoxaiZ6llNu3e79LZdtifKlL4Q&s'),
(11, 'A Descoberta do Mundo', 2, 'dominio_publico', 'https://nessageografia.wordpress.com/wp-content/uploads/2016/06/a-descoberta-do-mundo-clarice-lispector.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSchXnTqxm7b090RL0QzLrUanHPw8XS_7Dw&s'),
(12, 'Felicidade Clandestina', 2, 'dominio_publico', 'https://archive.org/details/felicidade-clandestina-clarice-lispector.pdf/page/n3/mode/2up', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgpAfsP3_kgT1Q9zd6MTjSkSS0QLzpRF_Aw&s'),
(13, 'Alguma Poesia', 3, 'dominio_publico', 'https://alfredoreisviegas.wordpress.com/wp-content/uploads/2019/02/alguma-poesia-carlos-drummond-de-andrade.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG9KbzZIibn8qzKsXVYLpMRMDK70TC_mU6g&s'),
(14, 'Sentimento do Mundo', 3, 'dominio_publico', 'https://www.companhiadasletras.com.br/trechos/13273.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0CUmLMkCO_hxW7kuU1ywxvZsEIKLS0kczA&s'),
(15, 'A Rosa do Povo', 3, 'dominio_publico', 'https://portalbiblioteca.ufra.edu.br/images/Ebook/letrasportugues/arosadopovo21edlivro.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX9BIbbzltRphu5hlDZRkhDqBRNazG0wg5g&s'),
(16, 'Claro Enigma', 3, 'dominio_publico', 'https://iedamagri.wordpress.com/wp-content/uploads/2015/04/drummond-claro-enigma.pdf', NULL, 'https://m.media-amazon.com/images/I/813UqyhJu5S.jpg'),
(17, 'Poema \"E Agora, José?\"', 3, 'dominio_publico', 'https://wp.ufpel.edu.br/aulusmm/files/2016/09/JOS%C3%89.pdf', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UW6dWXlyhe4EDLntfUlc_9Tegr9uB1QOnw&s');

-- --------------------------------------------------------

--
-- Table structure for table `livro_categoria`
--

CREATE TABLE `livro_categoria` (
  `id_livro` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `livro_categoria`
--

INSERT INTO `livro_categoria` (`id_livro`, `id_categoria`) VALUES
(1, 2),
(1, 4),
(2, 2),
(2, 5),
(3, 2),
(3, 4),
(4, 2),
(4, 5),
(5, 1),
(5, 2),
(6, 2),
(6, 4),
(6, 5),
(7, 2),
(7, 4),
(7, 5),
(8, 2),
(8, 5),
(9, 2),
(9, 5),
(10, 2),
(10, 5),
(11, 2),
(11, 4),
(11, 5),
(12, 2),
(12, 5),
(13, 3),
(13, 5),
(14, 3),
(14, 4),
(14, 5),
(15, 3),
(15, 4),
(16, 3),
(16, 5),
(17, 3),
(17, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id_autor`);

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `nome_categoria` (`nome_categoria`);

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_livro` (`id_livro`);

--
-- Indexes for table `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id_livro`),
  ADD KEY `id_autor` (`id_autor`);

--
-- Indexes for table `livro_categoria`
--
ALTER TABLE `livro_categoria`
  ADD PRIMARY KEY (`id_livro`,`id_categoria`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autores`
--
ALTER TABLE `autores`
  MODIFY `id_autor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `livros`
--
ALTER TABLE `livros`
  MODIFY `id_livro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livros` (`id_livro`);

--
-- Constraints for table `livros`
--
ALTER TABLE `livros`
  ADD CONSTRAINT `livros_ibfk_1` FOREIGN KEY (`id_autor`) REFERENCES `autores` (`id_autor`);

--
-- Constraints for table `livro_categoria`
--
ALTER TABLE `livro_categoria`
  ADD CONSTRAINT `livro_categoria_ibfk_1` FOREIGN KEY (`id_livro`) REFERENCES `livros` (`id_livro`),
  ADD CONSTRAINT `livro_categoria_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
