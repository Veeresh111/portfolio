-- Insert Education
INSERT INTO education (institution, degree, location, start_date, end_date, grade) VALUES
('Guru Nanak Dev Engineering College, Bidar', 'Bachelor of Engineering - Computer Science and Engineering', 'Bidar, Karnataka', '2022-11-01', '2026-06-01', 'CGPA: 8.24'),
('Sankalp Independent PU College of Science', 'Pre-University Course (PUC)', 'Karnataka', '2021-06-01', '2022-04-01', 'Result: 75%'),
('Shree Basaveshwar High School, English Medium', 'SSLC (State Board)', 'Karnataka', '2019-06-01', '2020-04-01', 'Result: 84%');

-- Insert Experience
INSERT INTO experience (company, role, location, type, start_date, end_date, description, responsibilities, technologies) VALUES
('InnerCircle Softech Pvt. Ltd.', 'Full Stack Software Engineer Intern', 'Banglore', 'Internship', NULL, NULL, 'Developing full stack web applications with frontend, backend, database, and authentication.', ARRAY['Building and integrating CRUD applications with REST APIs', 'Supporting deployment, CI/CD, and basic DevOps/cloud operations'], ARRAY['React.js', 'JavaScript', 'FastAPI', 'REST APIs', 'DBMS', 'Git', 'Cloud', 'DevOps Tools']),
('InternPe', 'AI/ML Intern', 'Remote', 'Internship', NULL, NULL, 'Worked on machine learning models and AI-based tasks.', ARRAY['Gaining hands-on experience in data processing and model development'], ARRAY['Python', 'Machine Learning']),
('Zetheta Algorithms Private Limited', 'Software Engineer Intern - Remote Project Work Experience Program', 'Remote', 'Part-time', NULL, NULL, 'Selected for the Circa Internship Programme to work on remote software engineering projects.', ARRAY['Work on remote software engineering projects in a professional development environment'], ARRAY[]),
('BrightCHAMPS', 'Coding Educator', 'Remote', 'Freelance', NULL, NULL, 'Conduct coding sessions for Grade 1-10 students.', ARRAY['Teaching programming fundamentals, logic building, and problem-solving in an interactive way'], ARRAY[]);

-- Insert Projects
INSERT INTO projects (title, description, category, tech_stack, features) VALUES
('AI-Driven Mock Interview Application', 'Developed an AI-based interview preparation tool with real-time interaction and feedback.', 'AI', ARRAY['React.js', 'JavaScript', 'REST API', 'Gemini API', 'CNN', 'NLP'], ARRAY['Real-time interaction', 'AI feedback']),
('Enterprise Management System', 'Secure, collaborative task management platform using role-based access control to coordinate workflows between Admins, Team Leads, and team members.', 'Full Stack', ARRAY['React', 'TypeScript', 'Supabase (Auth & PostgreSQL)', 'Vite', 'Git/GitHub'], ARRAY['Role-based access control', 'Coordinate workflows']),
('E-Commerce & Inventory Management System', 'Built a full-stack web application to manage online sales and inventory operations.', 'Full Stack', ARRAY['HTML', 'CSS', 'JavaScript', 'Cloud Backend'], ARRAY['Online sales', 'Inventory operations']),
('AI-Driven Research Misconduct Detection System', 'Designed a machine learning model to detect anomalies in research data.', 'ML', ARRAY['Python', 'Machine Learning'], ARRAY['Detect anomalies']),
('AI-Driven Bon Voyage System', 'Developed an AI travel assistant for route guidance using map integration.', 'AI', ARRAY['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Google Maps API'], ARRAY['Route guidance', 'Map integration']);

-- Insert Skills
INSERT INTO skills (name, category, proficiency) VALUES
('C', 'Programming', 80),
('Java', 'Programming', 80),
('Python', 'Programming', 90),
('HTML', 'Frontend', 90),
('CSS', 'Frontend', 90),
('JavaScript', 'Frontend', 90),
('React', 'Frontend', 85),
('Node.js', 'Backend', 75),
('MySQL', 'Database', 80),
('PostgreSQL', 'Database', 80);

-- Insert Achievements & Certifications
INSERT INTO achievements (title, issuer, date, type) VALUES
('Presented Research Paper at ICETCAI (International Conference)', 'ICETCAI', '2026-04-01', 'Research Paper'),
('Gemini Certified Student', 'Google Gemini', '2025-10-01', 'Certificate'),
('Completed Internship on AI/ML Domain', 'InternPe', '2025-09-01', 'Certificate'),
('Python For Beginners Course In-Depth', 'Udemy', '2025-12-01', 'Certificate'),
('Data Science & Analytics', 'HP LIFE Foundation', '2025-09-01', 'Certificate'),
('Workshop on Cloud Computing & Virtualization', 'IEEE, GNDECB', '2025-04-01', 'Certificate'),
('Workshop on 3-D Printing for Businesses', 'Kritika Institute of Technology', '2023-10-01', 'Certificate');
