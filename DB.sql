CREATE TABLE `dreamvirginmanagement`.`custommers` ( `id` INT(99) NOT NULL AUTO_INCREMENT , `male` INT(21) NULL , `female` INT(21) NULL , `firstname` INT(45) NOT NULL , `middlename` INT(45) NULL , `lastname` INT(45) NOT NULL , `countrycode` INT(21) NULL , `phonecode` INT(21) NULL , `contactnummber` INT(45) NULL , `email` INT(45) NOT NULL , `password` INT(45) NOT NULL , `comments` INT(200) NULL , `status` VARCHAR(21) NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `dreamvirginmanagement`.`custommer` ( `id` INT(99) NOT NULL AUTO_INCREMENT , `male` INT(21) NOT NULL , `female` VARCHAR(21) NOT NULL , `firstname` VARCHAR(45) NOT NULL , `middlename` VARCHAR(45) NOT NULL , `lastname` VARCHAR(45) NOT NULL , `countrycode` INT(21) NOT NULL , `phonecode` INT(21) NOT NULL , `contactnummber` INT(21) NOT NULL , `email` VARCHAR(45) NOT NULL , `password` VARCHAR(45) NOT NULL , `comments` VARCHAR(200) NOT NULL , `status` VARCHAR NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;