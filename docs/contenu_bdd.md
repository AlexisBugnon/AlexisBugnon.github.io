# ball_traps
- id (unique, unsigned, auto-increment, not null, bigint)
- ville (string, not null)
- organisation (string, not null)
- adresse (string, not null)
- contenu (text, not null)
- restauration (string)
- affiche (image)
- status (tiny int, default = 0, not null)
- created_at (timestamp)
- updated_at (timestamp)

# users
- id (unique, unsigned, auto-increment, not null, bigint)
- email (unique, not null)
- password (string)
- firstname (string, not null)
- lastname (string, not null)
- role (string, not null)
- status (tiny int, default = 0, not null)
- created_at (timestamp)
- updated_at (timestamp)

# dates
- id (unique, unsigned, auto-increment, not null, bigint)
- date (timestamp, not null)
- horaire (timestamp, not null)
- ball_trap_id (unsigned, not null, bigint)
- user_id (unsigned, not null, bigint)
- status (tiny int, default = 0, not null)
- created_at (timestamp)
- updated_at (timestamp)


# pour modoco.net
BALL_TRAPS: id, ville, organisation, affiche, adresse_ball_trap, contenu_principal, organisateur_id, restauration, status, created_at, updated_at
APPARTIEN, 11 DATES, 1N BALL_TRAPS
DATES: id, date, horaire, ball_trap_id, user_id, status, created_at, updated_at
LIE, 11 DATES, 1N USERS
USERS: id, email, password, firstname, lastname,  role,  status, created_at, updated_at

# code sql pour générer la bdd


        -- Table ball_traps
        CREATE TABLE ball_traps (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        ville VARCHAR(255) NOT NULL,
        organisation VARCHAR(255) NOT NULL,
        adresse VARCHAR(255) NOT NULL,
        contenu TEXT NOT NULL,
        restauration VARCHAR(255),
        affiche VARCHAR(255),
        status TINYINT DEFAULT 0 NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );

        -- Table users
        CREATE TABLE users (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255),
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        status TINYINT DEFAULT 0 NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );

        -- Table dates
        CREATE TABLE dates (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        date TIMESTAMP NOT NULL,
        horaire TIMESTAMP NOT NULL,
        ball_trap_id BIGINT UNSIGNED NOT NULL,
        user_id BIGINT UNSIGNED NOT NULL,
        status TINYINT DEFAULT 0 NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (ball_trap_id) REFERENCES ball_traps(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
        );

# déclencheur lors de la suppression d'une ligne dans la table ball_traps

        DELIMITER //

        CREATE TRIGGER delete_dates_trigger
        BEFORE DELETE ON ball_traps
        FOR EACH ROW
        BEGIN
        DELETE FROM dates WHERE ball_trap_id = OLD.id;
        END;

        //

        DELIMITER ;



