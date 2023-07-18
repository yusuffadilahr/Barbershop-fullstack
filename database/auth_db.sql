-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2023 at 08:18 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Yusuf F', 'usup@gmail.com', '$2b$10$66NW6n1XNazPEXaxvCUSEOtBiwHtgzQoiF6xv0SZaV1LzyD8wsNB6', NULL, '2023-07-01 08:54:05', '2023-07-03 09:36:07'),
(2, 'Yusuf F', 'usup@gmail.com', '$2b$10$mZ76VAbyNIzicMO9IrfV1.oqA40CSmTtIJjK0URckQ5MBBZP6zg6m', NULL, '2023-07-01 08:54:06', '2023-07-01 08:54:06'),
(3, 'Yusuf F', 'usup@gmail.com', '$2b$10$HnF/sAWs0nitRvSbgMPY4.3Fak6wcEMQTLv7yP/XJ9mioJYR5xmh.', NULL, '2023-07-01 08:54:59', '2023-07-01 08:54:59'),
(4, 'Yusuf F', 'usup@gmail.com', '$2b$10$3SQttYX1ZEbFIunkUKX6sO7bJUl0i9axlHeOwjJzFPIKGd0QEsHrW', NULL, '2023-07-01 08:55:00', '2023-07-01 08:55:00'),
(5, 'Yusuf F2', 'usupgmail.com', '$2b$10$seBwhpkbilOHKbA/IQ8Ndu00NJICckyJCO/71aFKi0scpHY/OWrUK', NULL, '2023-07-01 09:21:56', '2023-07-01 09:21:56'),
(6, 'Yusuf F2', 'usupgmail.com', '$2b$10$DgQ1DpScUl0KPJ4nNd1WXuPVG8efbovaQ1e8HFlQ/hXbvqkrZbD7y', NULL, '2023-07-01 09:22:36', '2023-07-01 09:22:36'),
(7, 'Yusuf F2', 'usupgmail.com', '$2b$10$BIADyDT0i40irvrQX9NuGuaoybn1l5YXyRBjHhG8sudJo4fZUo.V.', NULL, '2023-07-01 09:36:55', '2023-07-01 09:36:55'),
(8, ' ', ' ', '$2b$10$8uumikdLQ42kirD6zyTwXOzPIiXR4AreZKdTiM3/.rb391NhYlZQq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsIm5hbWUiOiIgIiwiZW1haWwiOiIgIiwiaWF0IjoxNjg4MjMyMjY2LCJleHAiOjE2ODgzMTg2NjZ9.LHdvDkzWF8JwHmKnFY9AUihpkm9BKHh7tP5dL9UCy40', '2023-07-01 16:25:50', '2023-07-01 17:24:26'),
(9, ' ususu', 'ssusus', '$2b$10$72y.CPTyW9OmRekvat0wsurw26PxD3J435oxKeb.SXVpuiBg/u/gK', NULL, '2023-07-01 16:25:59', '2023-07-01 16:25:59'),
(10, ' Jon Snow', 'Jonsnow@gmail.com', '$2b$10$.NQd6vkmOuPoANbNbY1FVezcnpUXPVHlmcgewnQ22GX8GL/k7qL4O', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiIEpvbiBTbm93IiwiZW1haWwiOiJKb25zbm93QGdtYWlsLmNvbSIsImlhdCI6MTY4ODIzMzQ2NCwiZXhwIjoxNjg4MzE5ODY0fQ.mtPleltp__clD0wax9YuRyPfJlNaiIg7MonYORGphyg', '2023-07-01 16:29:17', '2023-07-01 17:44:24'),
(11, ' Jon', 'Jon@gmail.com', '$2b$10$7iPKxx/Daibmbc6EP98nW.aUz/PSOqqwlfMdx3M8/9FNnrZZMZXOG', NULL, '2023-07-01 16:36:59', '2023-07-18 17:32:24'),
(12, ' jon', 'jon222@gmail.com', '$2b$10$EoG41Qpm3Azt9makjFg7VeZm/xBUcUUGySAnH7S8cyTDDuZFzKdIi', NULL, '2023-07-01 16:38:26', '2023-07-01 16:38:26'),
(13, 'tester', 'tester123@gmail.com', '$2b$10$ZvC6rrljWJfbaLCAvDKmd.F/rX9GDAiri0sMpBB0PrYBj.Yk.xeLq', NULL, '2023-07-18 13:18:58', '2023-07-18 13:50:18'),
(14, '', '', '$2b$10$xLtzw/W4aN1irSigVWJsSuxgL1tpvB7v683NKQun6GAv.R4pKwEi2', NULL, '2023-07-18 18:14:06', '2023-07-18 18:14:06'),
(15, 'z', 'z', '$2b$10$B9XeAJBEjr6i3gaIzAdISuWuQFgD2J4GNx8yeMstkjgbVdpwjpofu', NULL, '2023-07-18 18:14:18', '2023-07-18 18:14:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
