-- 1. Create the Students Table
CREATE TABLE Students (
    student_id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    sport_primary TEXT, -- e.g., 'Basketball'
    gpa REAL,
    video_highlight_url TEXT
);

-- 2. Create the Universities Table
CREATE TABLE Universities (
    university_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    location TEXT,
    website TEXT
);

-- 3. Create the Sports Table (Standard list of sports)
CREATE TABLE Sports (
    sport_id INTEGER PRIMARY KEY AUTOINCREMENT,
    sport_name TEXT NOT NULL UNIQUE
);

-- 4. Bridge Table: Which universities offer which sports?
CREATE TABLE UniversitySports (
    univ_sport_id INTEGER PRIMARY KEY AUTOINCREMENT,
    university_id INTEGER,
    sport_id INTEGER,
    scholarship_available BOOLEAN DEFAULT 0,
    FOREIGN KEY (university_id) REFERENCES Universities(university_id),
    FOREIGN KEY (sport_id) REFERENCES Sports(sport_id)
);

-- 5. Communications Table: Tracking messages between students and universities
CREATE TABLE Inquiries (
    inquiry_id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    university_id INTEGER,
    message_text TEXT,
    status TEXT DEFAULT 'Sent', -- 'Sent', 'Replied', 'Offer Made'
    sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (university_id) REFERENCES Universities(university_id)
);