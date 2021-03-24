-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2021 at 10:43 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tikitz`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'G\r\n'),
(2, 'PG'),
(3, 'PG-13'),
(4, 'R'),
(5, 'NC-17');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `provide` varchar(64) NOT NULL,
  `day` varchar(64) NOT NULL,
  `date` varchar(64) NOT NULL,
  `time` varchar(64) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `name`, `provide`, `day`, `date`, `time`, `createdAt`, `updatedAt`) VALUES
(11, 'Spider-Man: Homecoming', 'cinema', 'tues', '26 April 2021', '19.00', '2021-03-22 15:06:47', '2021-03-22 15:06:47'),
(11, 'Spider-Man: Homecoming', 'imdeal', 'frid', '21 april 2021', '21.00', '2021-03-22 15:06:47', '2021-03-22 15:06:47'),
(11, 'Spider-Man: Homecoming', 'cinema', 'tues', '26 April 2021', '19.00', '2021-03-22 15:06:59', '2021-03-22 15:06:59'),
(11, 'Spider-Man: Homecoming', 'imdeal', 'frid', '21 april 2021', '21.00', '2021-03-22 15:06:59', '2021-03-22 15:06:59');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(200) NOT NULL,
  `genre` varchar(64) NOT NULL,
  `release_date` varchar(64) NOT NULL,
  `directed_by` varchar(64) NOT NULL,
  `cast` varchar(64) NOT NULL,
  `synopsis` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `name`, `image`, `genre`, `release_date`, `directed_by`, `cast`, `synopsis`, `createdAt`, `updatedAt`) VALUES
(1, 'Spider-Man: Homecoming', 'https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg', 'Adventure, Action, Sci-Fi', 'June 28, 2017', 'Jon Watss', 'Tom Holland, Michael Keaton, Robert Downey Jr., ...', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', '2021-03-15 09:53:38', '2021-03-17 21:45:53'),
(2, 'One Piece: Stampede', 'https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_.jpg', 'Action, Adventure, Animation', 'August 9, 2019', 'Jon Watss', 'Felecia Angelle, Greg Ayres, Major Attaway, Tia Lynn Ballard', 'One Piece: Stampede is a movie starring Felecia Angelle, Major Attaway, and Greg Ayres. Pirates from around the world gather at the Pirates Expo to join the hunt for Gol D. Roger\'s lost treasure.', '2021-03-15 09:53:38', '2021-03-17 21:43:58'),
(3, 'Boruto: Naruto The Movie', 'https://m.media-amazon.com/images/M/MV5BNDIwYjg5YzItZTJmMC00YjJhLWFiNjYtMDU5MmQxOTQxODM2XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg', 'Adventure, Action, Sci-Fi', 'June 28, 2017', 'Jon Watss', 'Tom Holland, Michael Keaton, Robert Downey Jr., ...', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ', '2021-03-15 09:53:38', '2021-03-17 21:47:22'),
(4, 'The Chronicles of Narnia', 'https://images-na.ssl-images-amazon.com/images/I/91OgSM0dTdL._SY445_.jpg', 'Adventure, Action, Sci-Fi', '9 December 2005;', 'Andrew Adamson, Michael Apted', 'Edmund Pevensie, Lucy Pevensie, Susan Pevensie, MORE', 'The story follows the four British Pevensie siblings, who are evacuated during the Blitz to the countryside, where they find a wardrobe that leads to the fantasy world of Narnia. There, they must ally with the lion Aslan against the forces of the White Witch, who has placed Narnia in an eternal winter.', '2021-03-15 09:53:38', '2021-03-17 21:52:32'),
(5, 'The Avengers', 'https://upload.wikimedia.org/wikipedia/id/f/f9/TheAvengers2012Poster.jpg', 'Adventure, Action, Sci-Fi', ' May 4, 2012 (Indonesia)', 'Joss Whedon', 'Robert Downey Jr.\r\nChris Evans\r\nMark Ruffalo\r\nChris Hemsworth\r\nS', 'Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.', '2021-03-15 09:53:38', '2021-03-17 21:52:32');

-- --------------------------------------------------------

--
-- Table structure for table `tiket`
--

CREATE TABLE `tiket` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(128) NOT NULL,
  `release_date` varchar(64) NOT NULL,
  `duration` varchar(64) NOT NULL,
  `director` varchar(64) NOT NULL,
  `cast` varchar(64) NOT NULL,
  `synopsis` text NOT NULL,
  `row` varchar(64) NOT NULL,
  `room` varchar(64) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `seat` varchar(64) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tiket`
--

INSERT INTO `tiket` (`id`, `name`, `image`, `release_date`, `duration`, `director`, `cast`, `synopsis`, `row`, `room`, `idCategory`, `seat`, `createdAt`, `updatedAt`, `price`) VALUES
(1, 'Die Hard', '', '05 August 2021', '20.00', '', '', '', 'A', 'Theater 1', 3, '6', '2021-03-06 14:43:39', '2021-03-05 11:20:33', 55000),
(2, 'Die Hard', '', '05 August 2021', '20.00', '', '', '', 'A', 'Theater 1', 3, '6', '2021-03-06 14:43:39', '2021-03-05 11:20:33', 55000),
(5, 'The Witches', '', '05 August 2021', '19.00', '', '', '', 'C', 'Theater 3', 3, '4', '2021-03-06 14:43:51', '2021-03-05 11:20:33', 55000),
(6, 'One piece the series', '', '05 August 2021', '21.00', '', '', '', 'C', 'Theater 3', 3, '5', '2021-03-06 14:43:54', '2021-03-05 11:20:33', 65000),
(22, 'Spiderman: Homecoming', '', '05 August 2021', '21.00', '', '', '', 'C', 'Theater 3', 1, '5', '2021-03-23 10:26:05', '2021-03-21 14:48:11', 65000),
(23, 'Spiderman: Homecoming', '', '05 August 2021', '21.00', '', '', '', 'C', 'Theater 3', 2, '5', '2021-03-23 10:26:08', '2021-03-21 14:50:40', 65000),
(24, 'Spiderman: Homecoming', '', '05 August 2021', '21.00', '', '', '', 'C', 'Theater 3', 5, '5', '2021-03-23 10:26:10', '2021-03-21 14:57:43', 65000),
(26, 'The Witches', 'image-1616315290729-Rectangle141.png', '05 August 2021', '21.00', '', '', '', 'B', 'Theater 3', 4, '5', '2021-03-23 10:26:21', '2021-03-21 15:28:10', 65000),
(27, 'The Witches', 'http://localhost:5400/image/image-1616315613751-Rectangle141.png', '05 August 2021', '21.00', '', '', '', 'B', 'Theater 3', 4, '5', '2021-03-23 10:26:23', '2021-03-21 15:33:33', 65000),
(28, 'The Lion King', 'http://localhost:5400/image/0ac91ff60e00e82c2e3cb7c3f1043071', '05 August 2021', '21.00', '', '', '', 'B', 'Theater 3', 4, '5', '2021-03-23 10:26:25', '2021-03-21 15:56:06', 65000),
(30, 'The Lion King', 'http://localhost:5400/image/image-1616317691537-Rectangle120.png', '05 August 2021', '21.00', '', '', '', 'B', 'Theater 3', 2, '5', '2021-03-23 10:26:26', '2021-03-21 16:08:11', 65000),
(31, 'Black WIdow', 'http://localhost:5400/image/afecf445ab0cbe99ed60a652928abc57', '05 August 2021', '21.00', '', '', '', 'B', 'Theater 3', 5, '5', '2021-03-23 10:26:27', '2021-03-21 16:12:01', 65000),
(32, 'Black WIdow', 'http://localhost:5400/image/image-1616318035328-Rectangle140.png', '05 August 2021', '21.00', '', '', '', 'B', 'Theater 3', 1, '5', '2021-03-23 10:26:28', '2021-03-21 16:13:55', 65000),
(45, 'Tenet', 'http://localhost:5400/image/image-1616470329895-Rectangle 571.png', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 2, '5', '2021-03-23 10:26:31', '2021-03-23 10:32:09', 65000),
(46, 'Tenet', 'http://localhost:5400/image/image-1616470371500-Rectangle 571.png', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 1, '5', '2021-03-23 10:26:33', '2021-03-23 10:32:51', 65000),
(47, 'Tenet', 'http://localhost:5400/image/image-1616470534290-Rectangle 571.png', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 2, '5', '2021-03-23 10:26:35', '2021-03-23 10:35:34', 65000),
(48, 'Tenet', 'http://localhost:5400/image/image-1616470929202-Rectangle 571.png', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 3, '5', '2021-03-23 10:26:38', '2021-03-23 10:42:09', 65000),
(49, 'Tenet', 'http://localhost:5400/image/image-1616470944411-Rectangle 571.png', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 3, '5', '2021-03-23 10:26:40', '2021-03-23 10:42:24', 65000),
(50, 'Tenet', 'http://localhost:5400/image/image-1616471184468-e5a60682df253641c4e49b9feebef3be.jpg', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 1, '5', '2021-03-23 10:26:42', '2021-03-23 10:46:24', 65000),
(51, 'Tenet', 'http://localhost:5400/image/image-1616471516809-kai-dahms-Z5EgSjy-ukk-unsplash.jpg', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 5, '5', '2021-03-23 10:26:44', '2021-03-23 10:51:56', 65000),
(52, 'Tenet', 'http://localhost:5400/image/image-1616471675018-kai-dahms-Z5EgSjy-ukk-unsplash.jpg', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 2, '5', '2021-03-23 10:26:47', '2021-03-23 10:54:35', 65000),
(53, 'Tenet', 'http://localhost:5400/image/image-1616471985412-e5a60682df253641c4e49b9feebef3be.jpg', '05 August 2021', '21.00', 'john due', '', 'blalbalblalblalbal', 'B', 'Theater 3', 2, '5', '2021-03-23 10:26:49', '2021-03-23 10:59:45', 65000);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `transaction_id` varchar(128) NOT NULL,
  `movie` varchar(64) NOT NULL,
  `provider` varchar(64) NOT NULL,
  `location` varchar(64) NOT NULL,
  `date` varchar(64) NOT NULL,
  `time` varchar(64) NOT NULL,
  `category` varchar(64) NOT NULL,
  `count` varchar(64) NOT NULL,
  `seats` varchar(64) NOT NULL,
  `price` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `transaction_id`, `movie`, `provider`, `location`, `date`, `time`, `category`, `count`, `seats`, `price`) VALUES
(1, '', 'Spider-Man: Homecoming', '', '', '28 August', '2 PM', 'PG-13', '3 pieces', 'C4, C5 ,C6', '$30.00'),
(2, '', 'Spider-Man: Homecoming', '', '', '28 August', '2 PM', 'PG-13', '3 pieces', 'C7, C8 ,C9', '$30.00'),
(3, '', 'Ninja Warior Nami Naka Desu', '', '', '28 August', '2 PM', 'PG-13', '3 pieces', 'C4, C5 ,C6', '$40.00'),
(5, '', 'Spider-Man: Homecoming', '', '', '28 August', '7 PM', 'PG-13', '3 pieces', 'C4, C5 ,C6', '$40.00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` varchar(64) NOT NULL,
  `role` int(11) NOT NULL,
  `image` varchar(128) NOT NULL,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `role`, `image`, `firstName`, `lastName`, `email`, `phone_number`, `password`, `createdAt`, `updatedAt`) VALUES
('1', 1, '0', 'Asya', 'Majdiyyah', 'asyamajdiyyah@gmail.com', '', '$2a$10$TYa/HwegFtlVe5PptX4J9O8T.JVCsjp3JaZnXdT7fpzDhVDoo0TtK', '2021-03-20 08:12:38', '2021-03-20 15:12:38'),
('8622e873-55d9-4270-8cd1-0753c7bb9510', 0, '', '', '', 'dianahmad', '', '$2a$10$jXZkE/MvdyaqUAV8lmqVnuFTK5dLd2fEkfBCopIijiPFe8cwIR2ha', '2021-03-22 17:47:37', '2021-03-23 00:47:37'),
('c82c82bd-32e2-43c9-b6b5-858c38ad4834', 0, '', '', '', 'waghupd@gmail.com', '', '$2a$10$7eNDqi3rSe6MheUK6l5/3O4tA7EmEDNXH33o3inf4sBfrfEZ2cQam', '2021-03-23 14:17:19', '2021-03-23 21:17:19'),
('d58fe2bd-7b18-482b-8228-0ac282c90bd3', 0, '0', '', '', 'asyamajdiyyah@gmail.com', '', '$2a$10$TYa/HwegFtlVe5PptX4J9O8T.JVCsjp3JaZnXdT7fpzDhVDoo0TtK', '2021-03-20 08:12:38', '2021-03-20 15:12:38'),
('d6d13222-745c-4d5c-9b48-ff465d810a51', 0, 'http://localhost:5400/image/image-1616434313224-Ellipse 11.png', 'rina', 'norisah', 'rinanorisah@gmail.com', '083164621555', '$2a$10$V3hT.0cMTTkVElbdPP0DnOFa5VLSddsUwttjpMLGQ9AUYy6dKgtlS', '2021-03-22 17:29:00', '2021-03-23 00:29:00'),
('e6eb4773-b983-469f-9dce-f4ac7b07df28', 0, '', '', '', 'w9ghup@gmail.com', '', '$2a$10$VMh.Ofu929Kdvqw2iVJdb.F3xl2nykTZeAKVr.krU8HOd9rv.wrbO', '2021-03-23 14:58:14', '2021-03-23 21:58:14'),
('eaaf0f7e-dd89-4406-acb4-9e750adcefde', 0, '', '', '', 'prasetioad@gmail.com', '', '$2a$10$vU65CSR.DtWy.Mm/H/e51eOfBYeA/s1mbAIONxfnYtoQq6gM8nDNW', '2021-03-23 15:00:52', '2021-03-23 22:00:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tiket`
--
ALTER TABLE `tiket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tiket`
--
ALTER TABLE `tiket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
