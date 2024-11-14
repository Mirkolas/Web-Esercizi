CREATE TABLE piatto
(
    nome        VARCHAR(100) PRIMARY KEY,
    ingredienti VARCHAR(250)
);


CREATE TABLE ristorante
(
    nome        VARCHAR(100) PRIMARY KEY,
    descrizione VARCHAR(250),
    ubicazione VARCHAR(250)
);


CREATE TABLE ristorante_piatto
(
    ristorante_nome VARCHAR(100),
    piatto_nome     VARCHAR(100),
    PRIMARY KEY (ristorante_nome, piatto_nome),
    FOREIGN KEY (ristorante_nome) REFERENCES ristorante(nome) ON DELETE CASCADE,
    FOREIGN KEY (piatto_nome) REFERENCES piatto(nome) ON DELETE CASCADE
);


-- Inserisci piatti
INSERT INTO piatto (nome, ingredienti) VALUES
                                           ('Pizza Margherita', 'Pomodoro, Mozzarella, Basilico'),
                                           ('Carbonara', 'Pasta, Uova, Guanciale, Pecorino, Pepe');

-- Inserisci ristoranti
INSERT INTO ristorante (nome, descrizione, ubicazione) VALUES
                                                           ('Le Casette di Zio Santino', 'Ristorante/Pizzeria', 'Rende'),
                                                           ('Fratelli la Frode', 'Pizzeria', 'Rende');

-- Associa piatti ai ristoranti
INSERT INTO ristorante_piatto (ristorante_nome, piatto_nome) VALUES
                                                                 ('Le Casette di Zio Santino', 'Pizza Margherita'),
                                                                 ('Fratelli la Frode', 'Carbonara');


SELECT * FROM ristorante;
SELECT * FROM piatto;
SELECT * FROM ristorante_piatto;
