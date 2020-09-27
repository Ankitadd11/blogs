/*
SQLyog Community v13.1.1 (64 bit)
MySQL - 5.7.23 : Database - blogs
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`blogs` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `blogs`;

/*Table structure for table `articles` */

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) DEFAULT NULL,
  `SubTitle` varchar(250) DEFAULT NULL,
  `Description` varchar(250) DEFAULT NULL,
  `Slug` varchar(300) DEFAULT NULL,
  `AuthorID` int(10) DEFAULT NULL,
  `FeatureImage` varchar(250) DEFAULT NULL,
  `isPublish` tinyint(1) DEFAULT NULL,
  `Status` bigint(10) DEFAULT NULL,
  `CreatedBy` bigint(20) DEFAULT NULL,
  `ModifiedBy` bigint(20) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Table structure for table `categories` */

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `Description` varchar(250) DEFAULT NULL,
  `isParent` tinyint(1) DEFAULT NULL,
  `ParentCategoryID` bigint(20) DEFAULT NULL,
  `Status` bigint(20) DEFAULT NULL,
  `CreatedBy` bigint(20) DEFAULT NULL,
  `ModifiedBy` bigint(20) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `Description` varchar(250) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `isVerified` tinyint(1) DEFAULT NULL,
  `SignUpMethod` varchar(200) DEFAULT NULL,
  `Gender` varchar(6) DEFAULT NULL,
  `Avatar` varchar(200) DEFAULT NULL,
  `Status` bigint(10) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
