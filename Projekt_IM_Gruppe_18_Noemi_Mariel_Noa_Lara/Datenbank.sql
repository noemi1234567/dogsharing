-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 17. Jan 2023 um 14:18
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `796544_5_1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `erfahrung`
--

CREATE TABLE `erfahrung` (
  `id` int(11) NOT NULL,
  `erfahrung` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `erfahrung`
--

INSERT INTO `erfahrung` (`id`, `erfahrung`) VALUES
(1, 'Nein'),
(2, 'Ja');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `pate`
--

CREATE TABLE `pate` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `geburtstag` varchar(10) NOT NULL,
  `beruf` varchar(100) NOT NULL,
  `wohnort` varchar(100) NOT NULL,
  `erfahrung` int(11) NOT NULL,
  `praeferenz_rasse` varchar(100) NOT NULL,
  `praeferenz_alter` varchar(100) NOT NULL,
  `beschreibung` text NOT NULL,
  `bild` varchar(100) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `pate`
--

INSERT INTO `pate` (`id`, `name`, `geburtstag`, `beruf`, `wohnort`, `erfahrung`, `praeferenz_rasse`, `praeferenz_alter`, `beschreibung`, `bild`, `user`) VALUES
(13, 'Sabrina', '24.05.1998', 'Hundesitterin', 'Bern', 2, 'Labrador', '5', 'Ich bin Sabrina und möchte gerne einen Hund hüten. Als Hundesitterin weiss ich, wie ich mich gut um Hunde kümmern kann.', 'https://images.pexels.com/photos/1612846/pexels-photo-1612846.jpeg?auto=compress&cs=tinysrgb&w=1200', 3),
(20, 'Mariel', '15.11.1998', 'Studentin', 'Bern', 2, 'Husky', 'Welpe', 'Ich bin Mariel und mag Hunde. Am liebsten sind mir Welpen, denn die sind so süss!', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=', 1),
(26, 'Nora', '12.03.1978', 'Pflegfachfrau', 'Zürich', 2, 'Dackel', '5', 'Ich habe neben dem Job immer wieder Zeit, mich um einen Hund zu kümmern, da ich in Schichten arbeite.', 'https://images.pexels.com/photos/5214955/pexels-photo-5214955.jpeg?auto=compress&cs=tinysrgb&w=1260&', 5),
(32, 'Lea', '12.04.2000', 'Studentin', 'Zürich', 1, 'Chihuahua', '3', 'Ich bin Lea und habe wegen meines Studiums immer wieder mal Zeit, mich um einen Hund zu kümmern.', 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200', 4),
(33, 'Lars Häuselmann', '10.06.1991', 'Zahnarzt', 'Genf', 2, 'Schäferhund', 'Ausgewachsen', ' Ich liebe Hunde.', 'https://images.pexels.com/photos/159557/leisure-wildlife-photography-pet-photography-dog-159557.jpeg', 6),
(34, 'Max', '01.02.1985', 'Bauarbeiter', 'Thun', 1, 'egal', 'egal', ' Ich möchte mich gerne mit Hunden vertraut machen, da ich bald einen eigenen haben werde.', 'https://images.pexels.com/photos/3772616/pexels-photo-3772616.jpeg?auto=compress&cs=tinysrgb&w=1260&', 7),
(37, 'Kim & Charly', '10.03.1993', 'Sattlerin', 'St. Gallen', 2, 'Schäferhunde', '3 Jahre +', 'Hallo ich bin Kim. Mein Hund Charly und ich würden uns riegig über einen Spielkameraden freuen!', 'https://images.pexels.com/photos/7348934/pexels-photo-7348934.jpeg?auto=compress&cs=tinysrgb&w=1260&', 10);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `pate_hat_wochentage`
--

CREATE TABLE `pate_hat_wochentage` (
  `id` int(11) NOT NULL,
  `pate_id` int(11) NOT NULL,
  `wochentage_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `pate_hat_wochentage`
--

INSERT INTO `pate_hat_wochentage` (`id`, `pate_id`, `wochentage_id`) VALUES
(3, 0, 1),
(4, 0, 4),
(117, 33, 6),
(118, 33, 7),
(119, 13, 1),
(120, 13, 2),
(121, 13, 4),
(122, 13, 5),
(123, 13, 7),
(132, 34, 1),
(133, 34, 4),
(146, 37, 5),
(147, 37, 3),
(148, 20, 1),
(149, 20, 4),
(150, 20, 5);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(42) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`id`, `user_id`, `token`, `timestamp`) VALUES
(42, 4, 'hK5AeN8DYdAuxvtaHbyzdCM3yL7VP9FXmOlaRYLTRg', '2023-01-16 14:06:29');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Mariel', 'mare@mare.ch', '$2y$10$CYtjVKQq3ql4oOzxd5KHt.eMIVwB6RW4bhAClFaft5csX9SpSBhTK'),
(2, 'buchli', 'buchli@buchli', '$2y$10$f2ALBGr2BIoojrbgAM7TDOsihQoxVBXoKdI3t2hAm3w7L4sFIg97O'),
(3, 'Sabrina', 'sabrina@sabrina.ch', '$2y$10$4/A6IUJAWz6SrrMZ1PMLHOuFKcdHggtcWzJhAu4duSWS7f3clp56y'),
(4, 'Lea', 'lea@lea.ch', '$2y$10$aElbOXoIumrO1zbg6jwFke1h8YrI2nUxHUKedg1zCkFJZpN6.NYKi'),
(5, 'Nora', 'nora@nora.ch', '$2y$10$MUgqPgCaDjXH2rt7yNxGjOq9pq3hpi7YkQwfrwX18w6kSB0gDv17u'),
(6, 'Lars', 'lars@lars.ch', '$2y$10$aM1.ems9jChYcDjZeELVi.eE/VHTYZHpJgeBw/RX9BAmgqG8KmUvu'),
(7, 'Max', 'max@max.ch', '$2y$10$eNb64VQnBXqH4PCCWFODvuEdc0Vfk7N.7xQ86C8UEJ6b.WLW7ULrq'),
(8, 'Leon', 'leon@leon.ch', '$2y$10$1yIvi6HwKXT/Maff97fcmuWdNovZQ9grLoeQrK.jECWL72q2Mf8B.'),
(9, 'Anja', 'anja@anja.ch', '$2y$10$OYdPt5f5PBiZ6SuIqef9.eevnbpRAlnAUayiqUT/56zOexh1o15ii'),
(10, 'Kim Mohn', 'kim@kim.ch', '$2y$10$LynYuJcq8dWJYMDDo50n2.8fs/JNQ36lotF1PgaPnB0iGMiXH9lWC'),
(11, 'noa', 'noa.mast', '$2y$10$JLlBDVhmQVXz6Wik9FlPR.0R3DIWZM5HR8oLKlBVO0T1EsL6WfZIi'),
(12, 'noa', 'noa.mast', '$2y$10$9bbF8/7GX2h12eDqk9vhBefan4efTaqYozY6LzhgcVbx4exP/55la'),
(13, 'noa', 'noa.mast', '$2y$10$Laf0dLULyjnivFDe0j8EKuTepwMC9JgHVYDCzlKcacLdLuFdPFAvG'),
(14, 'hund', 'noa@mast', '$2y$10$Uff.GhPehia/PoX585HZnuAX1VPEgbUBbH5no/t35kivS4zTMs.pW');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wochentage`
--

CREATE TABLE `wochentage` (
  `id` int(11) NOT NULL,
  `wochentage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `wochentage`
--

INSERT INTO `wochentage` (`id`, `wochentage`) VALUES
(1, 'Montag'),
(2, 'Dienstag'),
(3, 'Mittwoch'),
(4, 'Donnerstag'),
(5, 'Freitag'),
(6, 'Samstag'),
(7, 'Sonntag');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `erfahrung`
--
ALTER TABLE `erfahrung`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `pate`
--
ALTER TABLE `pate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_erfahrung` (`erfahrung`),
  ADD KEY `fk_user` (`user`);

--
-- Indizes für die Tabelle `pate_hat_wochentage`
--
ALTER TABLE `pate_hat_wochentage`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `wochentage`
--
ALTER TABLE `wochentage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `erfahrung`
--
ALTER TABLE `erfahrung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT für Tabelle `pate`
--
ALTER TABLE `pate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT für Tabelle `pate_hat_wochentage`
--
ALTER TABLE `pate_hat_wochentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;
--
-- AUTO_INCREMENT für Tabelle `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT für Tabelle `wochentage`
--
ALTER TABLE `wochentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `pate`
--
ALTER TABLE `pate`
  ADD CONSTRAINT `fk_erfahrung` FOREIGN KEY (`erfahrung`) REFERENCES `erfahrung` (`id`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user`) REFERENCES `user` (`id`);

--
-- Constraints der Tabelle `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
