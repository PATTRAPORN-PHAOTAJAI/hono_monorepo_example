CREATE TABLE IF NOT EXISTS Licenses (
    LicenseID INTEGER PRIMARY KEY AUTOINCREMENT,
    LicenseNumber TEXT NOT NULL UNIQUE,
    IssueDate TEXT,
    ExpiryDate TEXT,
    Type TEXT
);