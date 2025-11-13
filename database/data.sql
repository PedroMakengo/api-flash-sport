-- ===========================
-- 1) UTILIZADORES
-- ===========================
CREATE TABLE Utilizador (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Nome VARCHAR(150) NOT NULL,
    Email VARCHAR(150) NOT NULL UNIQUE,
    PasswordHash VARCHAR(256) NOT NULL,
    Perfil VARCHAR(50) NOT NULL DEFAULT 'Leitor',  -- Leitor / Autor / Admin
    Activo BIT DEFAULT 1,
    DataCriacao DATETIME NOT NULL DEFAULT GETDATE()
);

-- ===========================
-- 2) POSTS / ARTIGOS
-- ===========================
CREATE TABLE Post (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Titulo VARCHAR(255) NOT NULL,
    Slug VARCHAR(255) NOT NULL UNIQUE,
    Conteudo TEXT NOT NULL,

    -- IMAGEM (uma das duas pode ser usada, nunca ambas)
    CaminhoImagem VARCHAR(500) NULL,  -- Upload local / S3 / Minio
    UrlImagem VARCHAR(500) NULL,      -- Link externo

    Estado VARCHAR(50) NOT NULL DEFAULT 'Rascunho', 
        -- Rascunho / Publicado / Arquivado

    AutorId UNIQUEIDENTIFIER NOT NULL,
    DataPublicacao DATETIME NULL,
    DataCriacao DATETIME NOT NULL DEFAULT GETDATE(),
    DataAtualizacao DATETIME NULL,

    FOREIGN KEY (AutorId) REFERENCES Utilizador(Id)
);

-- ===========================
-- 3) CATEGORIAS
-- ===========================
CREATE TABLE Categoria (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Nome VARCHAR(100) NOT NULL UNIQUE,
    Slug VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela pivô (Post —— N:N —— Categoria)
CREATE TABLE PostCategoria (
    PostId UNIQUEIDENTIFIER NOT NULL,
    CategoriaId UNIQUEIDENTIFIER NOT NULL,
    PRIMARY KEY (PostId, CategoriaId),

    FOREIGN KEY (PostId) REFERENCES Post(Id) ON DELETE CASCADE,
    FOREIGN KEY (CategoriaId) REFERENCES Categoria(Id) ON DELETE CASCADE
);

-- ===========================
-- 4) COMENTÁRIOS
-- ===========================
CREATE TABLE Comentario (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    PostId UNIQUEIDENTIFIER NOT NULL,
    Nome VARCHAR(150) NOT NULL,
    Email VARCHAR(150) NOT NULL,
    Mensagem TEXT NOT NULL,
    Aprovado BIT DEFAULT 0,
    DataCriacao DATETIME NOT NULL DEFAULT GETDATE(),

    FOREIGN KEY (PostId) REFERENCES Post(Id) ON DELETE CASCADE
);

-- ===========================
-- 5) NEWSLETTER (ASSINANTES)
-- ===========================
CREATE TABLE Newsletter (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Email VARCHAR(150) NOT NULL UNIQUE,
    Nome VARCHAR(150) NULL,
    DataInscricao DATETIME NOT NULL DEFAULT GETDATE(),
    Activo BIT DEFAULT 1
);

-- ===========================
-- 6) HISTÓRICO DE ENVIO DE NOTIFICAÇÕES
-- ===========================
CREATE TABLE NewsletterEnvio (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    NewsletterId UNIQUEIDENTIFIER NOT NULL,
    PostId UNIQUEIDENTIFIER NOT NULL,
    DataEnvio DATETIME NOT NULL DEFAULT GETDATE(),

    FOREIGN KEY (NewsletterId) REFERENCES Newsletter(Id),
    FOREIGN KEY (PostId) REFERENCES Post(Id)
);

-- ===========================
-- 7) ÍNDICES IMPORTANTES
-- ===========================
CREATE INDEX IDX_Post_Estado ON Post(Estado);
CREATE INDEX IDX_Post_DataPublicacao ON Post(DataPublicacao);
CREATE INDEX IDX_Comentario_Aprovado ON Comentario(Aprovado);
CREATE INDEX IDX_Newsletter_Activo ON Newsletter(Activo);