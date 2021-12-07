-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Dec 02. 11:34
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `fociadatb`
--
CREATE DATABASE IF NOT EXISTS `fociadatb` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `fociadatb`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kerdesek`
--

CREATE TABLE `kerdesek` (
  `kerdesek_id` int(11) NOT NULL,
  `kerdesek_kerdes` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `kerdesek_kep` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `kerdesek_valasz1` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `kerdesek_valasz2` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `kerdesek_valasz3` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `kerdesek_valasz4` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `kerdesek_helyes` varchar(255) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kerdesek`
--

INSERT INTO `kerdesek` (`kerdesek_id`, `kerdesek_kerdes`, `kerdesek_kep`, `kerdesek_valasz1`, `kerdesek_valasz2`, `kerdesek_valasz3`, `kerdesek_valasz4`, `kerdesek_helyes`) VALUES
(1, 'Ki nyerte a korábbi copa americat?', '', 'Argentina', 'Brazilia', 'Perui', 'Paraguayi', 'Argentina'),
(2, 'Ki Látható a képen?', '1.jpg', 'Robert Lewandowski\r\n', 'Erling Braut Håland', 'Kylian Mbappé', 'Mohamed Szaláh', 'Mohamed Szaláh'),
(3, 'Ki nyerte a legutóbbi bajnokok ligáját?', '', 'Liverpool FC', 'Real Madrid CF', 'Sporting CP', 'AFC AJAX', 'Real Madrid CF'),
(4, 'Ki a leggyorsabb labdarúgó?', '', 'Vinicius Jr', 'Cristiano Ronaldo', 'Alphonso Davies', 'Adama Traore', 'Alphonso Davies'),
(5, 'Hogy hívják ezt a focistát?', '2.jpg', 'Dzsudzsák Balázs', 'Neymar Jr', 'Ángel Di María', 'Mesut Özil', 'Dzsudzsák Balázs'),
(6, 'Melyik válogatott nyerte a 2016-os Európa Bajnokságot?', '', 'Anglia', 'Magyarország', 'Ukrajna', 'Portugalia', 'Portugalia');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kerdesek`
--
ALTER TABLE `kerdesek`
  ADD PRIMARY KEY (`kerdesek_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `kerdesek`
--
ALTER TABLE `kerdesek`
  MODIFY `kerdesek_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
