-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: mai 15, 2019 la 09:40 PM
-- Versiune server: 10.1.36-MariaDB
-- Versiune PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `utilizatori`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `cronometru`
--

CREATE TABLE `cronometru` (
  `id` int(100) NOT NULL,
  `Nume` varchar(25) NOT NULL,
  `scor` int(100) NOT NULL,
  `grad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `cronometru`
--

INSERT INTO `cronometru` (`id`, `Nume`, `scor`, `grad`) VALUES
(10, 'Marius', 0, 0),
(13, 'Barosanu', 80, 3),
(14, 'Adevaratul', 50, 2),
(15, 'Cristi', 50, 2),
(16, 'Tudor', 30, 2),
(17, 'Ion', 50, 2),
(18, 'Radu', 70, 3),
(19, 'Silviu', 30, 2),
(20, 'Dan', 80, 3),
(21, 'Victor', 110, 4),
(22, 'Andreea', 20, 1);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `dateutilizatori`
--

CREATE TABLE `dateutilizatori` (
  `id` int(11) NOT NULL,
  `Nume` varchar(255) DEFAULT NULL,
  `scor` int(11) DEFAULT NULL,
  `grad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `dateutilizatori`
--

INSERT INTO `dateutilizatori` (`id`, `Nume`, `scor`, `grad`) VALUES
(2, 'Siviu', 10, 1),
(3, 'Marius', 60, 3),
(4, 'SiviuMicutu', 30, 2),
(5, 'Andreea', 150, 4),
(6, 'Andreea', 60, 3),
(7, 'Picolo', 100, 3),
(9, 'popo', 20, 1),
(10, 'Tulvai', 110, 4),
(11, 'NOOBANU', 0, 1),
(12, 'Plapuma', 100, 3),
(13, 'Mirobolantul', 40, 2),
(14, 'Marinel', 40, 2),
(15, 'Habarnelu', 50, 2),
(16, '', 0, 1),
(17, 'd', 10, 1),
(18, 'yEYE', 50, 2),
(19, 'Anonim', 80, 3),
(20, 'Vadim', 90, 3),
(21, 'Mancaciosu', 60, 3),
(22, 'Orlando', 70, 3),
(23, 'Adevaratul', 0, 1),
(24, 'Mda', 50, 2),
(25, 'Orlando', 0, 1),
(26, 'Porc', 0, 1),
(27, 'Silvianul', 40, 2),
(28, 'otario', 20, 1),
(29, 'Orlando', 20, 1),
(30, 'Pilo', 20, 1);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `grade`
--

CREATE TABLE `grade` (
  `grad` int(11) NOT NULL,
  `Nume_grad` varchar(11) NOT NULL,
  `Culoare` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `grade`
--

INSERT INTO `grade` (`grad`, `Nume_grad`, `Culoare`) VALUES
(1, 'Noob', 'blue'),
(2, 'Descurcaret', 'coral'),
(3, 'Priceput', 'gold'),
(4, 'Veteran', 'royalblue'),
(5, 'Zeu', 'lawngreen');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `modiarna`
--

CREATE TABLE `modiarna` (
  `id` int(100) NOT NULL,
  `Nume` varchar(25) NOT NULL,
  `scor` int(100) NOT NULL,
  `grad` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `modiarna`
--

INSERT INTO `modiarna` (`id`, `Nume`, `scor`, `grad`) VALUES
(4, 'Marinel', 270, 5),
(5, 'Adriana', 80, 3),
(6, 'Siviu', 170, 5),
(7, 'Andrei', 80, 3),
(8, 'Marius', 140, 4),
(9, 'Paula', 130, 4),
(10, 'Tudor', 140, 4),
(11, 'Nicoleta', 60, 3),
(12, 'Edvin', 270, 5),
(13, 'Polina', 30, 2),
(18, 'Paul', 200, 5),
(26, 'Lipova', 0, 1),
(27, 'Zeul', 360, 5),
(28, 'ghica', 60, 3),
(29, 'GhicaIar', 50, 2),
(30, 'Marinar', 150, 4),
(31, 'Haha', 60, 3),
(32, 'Jiu', 230, 5),
(33, 'Mirandola', 250, 5);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `modliber`
--

CREATE TABLE `modliber` (
  `id` int(100) NOT NULL,
  `Nume` varchar(25) NOT NULL,
  `scor` int(100) NOT NULL,
  `grad` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `modliber`
--

INSERT INTO `modliber` (`id`, `Nume`, `scor`, `grad`) VALUES
(7, 'Marius', 70, 3),
(8, 'Silviu', 70, 3),
(9, 'Andrei', 110, 4),
(10, 'Python', 80, 3),
(11, 'Vadim', 110, 4),
(12, 'Picant', 30, 2),
(13, 'Dulce', 40, 2),
(14, 'Sarat', 50, 2),
(15, 'Amar', 50, 2),
(16, 'Amaruie', 40, 2),
(17, 'Silviu', 0, 1),
(18, 'Icarus', 20, 1);

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `modnoob`
--

CREATE TABLE `modnoob` (
  `id` int(100) NOT NULL,
  `Nume` varchar(25) NOT NULL,
  `scor` int(100) NOT NULL,
  `grad` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `modnoob`
--

INSERT INTO `modnoob` (`id`, `Nume`, `scor`, `grad`) VALUES
(0, 'Marius', 0, 0),
(0, 'Siviu', 30, 0),
(0, 'Nicolae', 0, 0),
(0, 'Marinel', 40, 0),
(0, 'Habarnelu', 50, 0),
(0, '', 0, 0),
(0, 'd', 10, 0),
(0, 'Silviu', 170, 5),
(0, 'Andrei', 50, 2),
(0, 'Orlando', 100, 3),
(0, 'Paulinio', 30, 2),
(0, 'Andreea', 40, 2),
(0, 'Eusebiu', 100, 3),
(0, 'Andreea', 0, 1);

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `cronometru`
--
ALTER TABLE `cronometru`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `dateutilizatori`
--
ALTER TABLE `dateutilizatori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `grad` (`grad`);

--
-- Indexuri pentru tabele `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`grad`);

--
-- Indexuri pentru tabele `modiarna`
--
ALTER TABLE `modiarna`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `modliber`
--
ALTER TABLE `modliber`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `cronometru`
--
ALTER TABLE `cronometru`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pentru tabele `dateutilizatori`
--
ALTER TABLE `dateutilizatori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pentru tabele `grade`
--
ALTER TABLE `grade`
  MODIFY `grad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pentru tabele `modiarna`
--
ALTER TABLE `modiarna`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pentru tabele `modliber`
--
ALTER TABLE `modliber`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constrângeri pentru tabele eliminate
--

--
-- Constrângeri pentru tabele `dateutilizatori`
--
ALTER TABLE `dateutilizatori`
  ADD CONSTRAINT `dateutilizatori_ibfk_1` FOREIGN KEY (`grad`) REFERENCES `grade` (`grad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
