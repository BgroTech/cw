export type RoadmapTopic = {
  id: string;
  title: string;
  description: string;
  resources: { title: string; url: string }[];
};

export const roadmapData: RoadmapTopic[] = [
  {
    id: "core-java",
    title: "1. Core Java Fundamentals",
    description: "Start with Java basics: syntax, data types, variables, loops, and control flow. This builds your foundation for all advanced topics.",
    resources: [
      { title: "Java Documentation", url: "https://docs.oracle.com/en/java/" },
      { title: "W3Schools Java Tutorial", url: "https://www.w3schools.com/java/" },
      { title: "Coding Wallah: Java Basics (YouTube)", url: "https://youtu.be/-0X0BHLE0Dg?si=CvljNa58DykhLzj4" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "oops",
    title: "2. Object-Oriented Programming (OOP)",
    description: "Learn OOP concepts: Classes, Objects, Inheritance, Polymorphism, Encapsulation, and Abstraction. Essential for real-world Java development.",
    resources: [
      { title: "GeeksforGeeks OOP", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
      { title: "Coding Wallah: OOP Concepts Part-1 (YouTube)", url: "https://youtu.be/wyovxX6ZuGg?si=NVqGNCBPGsWZygCh" },
      { title: "Coding Wallah: OOP Concepts Part-2 (YouTube)", url: "https://youtu.be/886H6S3m1t8?si=MOneFe1mNZnscDMd" },
    ],
  },
  {
    id: "collections",
    title: "3. Collections Framework",
    description: "Learn Lists, Sets, Maps, and other collection classes. Understanding collections is crucial for writing efficient Java programs.",
    resources: [     
      { title: "GeeksforGeeks Collections", url: "https://www.geeksforgeeks.org/collections-in-java-2/" },
      { title: "Coding Wallah: Java Collections Part-1 (YouTube)", url: "https://youtu.be/-712K9rmMOM?si=ZEFwUews8SwjYvsD" },
      { title: "Coding Wallah: Java Collections Part-2 (YouTube)", url: "https://youtu.be/mfzko-XRG7c?si=YYSny3c2fGnUkxeg" },
    ],
  },
  {
    id: "exception-handling",
    title: "4. Exception Handling",
    description: "Master try-catch blocks, throws, custom exceptions, and exception handling best practices. Critical for writing robust code.",
    resources: [     
      { title: "GeeksforGeeks Exception Handling", url: "https://www.geeksforgeeks.org/exceptions-in-java/" },
      { title: "Coding Wallah: Exception Handling (YouTube)", url: "https://youtu.be/q_f3ijW2n2E?si=ITYgJTNMUs_IQgSI" },
    ],
  },
  {
    id: "dsa",
    title: "5. Data Structures & Algorithms (DSA)",
    description: "Learn essential data structures (Arrays, Linked Lists, Trees, Graphs) and algorithms. DSA is crucial for coding interviews and writing efficient code.",
    resources: [
      { title: "Coding Wallah: DSA Playlist (YouTube)", url: "https://youtube.com/@codingwallahsir/playlist" },
      { title: "GeeksforGeeks DSA", url: "https://www.geeksforgeeks.org/data-structures/" },
      { title: "LeetCode DSA Practice", url: "https://leetcode.com/" },
    ],
  },
  {
    id: "java8-features",
    title: "6. Java 8+ Features (Lambdas, Streams)",
    description: "Learn modern Java features: Lambda expressions, Streams, Functional Interfaces, Optional, and Date-Time API. Essential for modern Java development.",
    resources: [
      { title: "Java 8 Features Guide", url: "https://www.baeldung.com/java-8-new-features" },
      { title: "GeeksforGeeks Java 8", url: "https://www.geeksforgeeks.org/java-8-features/" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "multithreading",
    title: "7. Multithreading & Concurrency",
    description: "Learn about Threads, Synchronization, Executors, and Concurrent Collections. Required for scalable and performant apps.",
    resources: [
      { title: "Java Multithreading Tutorial", url: "https://www.tpointtech.com/multithreading-in-java" },
      { title: "GeeksforGeeks Multithreading", url: "https://www.geeksforgeeks.org/multithreading-in-java/" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "jsp-servlet-tomcat",
    title: "8. JSP, Servlet & Tomcat Setup",
    description: "Learn how to build web applications using Java Server Pages (JSP) and Servlets. Set up Apache Tomcat for local development and deployment.",
    resources: [
      { title: "JSP Tutorial", url: "https://www.javatpoint.com/jsp-tutorial" },
      { title: "Servlet Tutorial", url: "https://www.javatpoint.com/servlet-tutorial" },
      { title: "Tomcat Setup Guide", url: "https://www.geeksforgeeks.org/apache-tomcat-server/" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "jdbc",
    title: "9. JDBC & Database Connectivity",
    description: "Learn how to connect Java applications to databases using JDBC. Practice CRUD operations and understand connection pooling.",
    resources: [
      { title: "JDBC Tutorial", url: "https://www.javatpoint.com/jdbc-tutorial" },
      { title: "Baeldung JDBC", url: "https://www.baeldung.com/java-jdbc" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "database-sql",
    title: "10. Databases & SQL",
    description: "Learn SQL basics and database design. Practice queries and normalization. This step is essential for backend development.",
    resources: [
      { title: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
      { title: "Database Design Guide", url: "https://www.geeksforgeeks.org/database-design/" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "build-tools",
    title: "11. Build Tools (Maven/Gradle)",
    description: "Learn how to manage dependencies and build projects using Maven or Gradle. This step comes after you understand how to work with databases and web apps.",
    resources: [
      { title: "Maven Official Guide", url: "https://maven.apache.org/guides/" },
      { title: "Gradle Official Guide", url: "https://docs.gradle.org/current/userguide/userguide.html" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "spring-framework",
    title: "12. Spring Framework - foundation for Spring Boot",
    description: "Learn Dependency Injection (IoC) and Aspect-Oriented Programming (AOP). Spring is the backbone of modern Java enterprise apps. This foundational framework is essential before Spring Boot.",
    resources: [
      { title: "Spring Framework Guide", url: "https://spring.io/guides" },
      { title: "Baeldung Spring", url: "https://www.baeldung.com/spring-framework" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "spring-boot",
    title: "13. Spring Boot - Main Framework for Java Development",
    description: "Learn to build modern Java applications with Spring Boot. Understand auto-configuration, dependency injection, REST APIs, and microservices.",
    resources: [
      { title: "Spring Boot Docs", url: "https://spring.io/projects/spring-boot" },
      { title: "Spring Boot Guide", url: "https://spring.io/guides/gs/spring-boot/" },
      { title: "Coding Wallah Spring Boot ONE SHOT (YouTube)", url: "https://youtu.be/Ga5kRSu-W5Y?si=3K5K9Tf6rBVKf65q" },
    ],
  },
  {
    id: "orm-hibernate-jpa",
    title: "14. ORM (JPA/Hibernate)",
    description: "After mastering Spring Boot, learn Object-Relational Mapping with JPA and Hibernate. Map Java objects to database tables, perform CRUD operations, and optimize queries within Spring Boot apps.",
    resources: [
      { title: "Hibernate Docs", url: "https://hibernate.org/orm/documentation/" },
      { title: "Baeldung JPA Guide", url: "https://www.baeldung.com/jpa-hibernate" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "spring-security",
    title: "15. Spring Security",
    description: "Secure your Java applications using Spring Security. Learn authentication, authorization, JWT, OAuth2, and best practices for protecting APIs. This step builds on Spring Boot and ORM knowledge.",
    resources: [
      { title: "Spring Security Docs", url: "https://spring.io/projects/spring-security" },
      { title: "Spring Security Tutorial", url: "https://www.baeldung.com/spring-security" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "spring-ai",
    title: "16. Spring AI",
    description: "Explore AI integrations in Java using Spring AI. Learn to connect with LLMs, ML APIs, and build intelligent features into your Spring Boot apps. This is an advanced step after Spring Boot, ORM, and Security.",
    resources: [
      { title: "Spring AI Docs", url: "https://docs.spring.io/spring-ai/reference/" },
      { title: "Spring AI GitHub", url: "https://github.com/spring-projects/spring-ai" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "testing",
    title: "17. Testing (JUnit & Mockito)",
    description: "Writing unit tests and mocking dependencies to ensure code quality. Testing is a must for professional development.",
    resources: [
      { title: "JUnit Tutorial", url: "https://www.javatpoint.com/junit-tutorial" },
      { title: "Mockito Guide", url: "https://www.baeldung.com/mockito-junit" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "microservices",
    title: "18. Microservices Architecture",
    description: "Building scalable distributed systems using Spring Cloud. Learn microservices for modern enterprise solutions.",
    resources: [
      { title: "Spring Cloud Guide", url: "https://spring.io/projects/spring-cloud" },
      { title: "Baeldung Microservices", url: "https://www.baeldung.com/spring-cloud" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "git",
    title: "19. Version Control (Git)",
    description: "Managing code versions and collaborating with other developers. Git is essential for teamwork and open source.",
    resources: [
      { title: "Git Tutorial", url: "https://www.geeksforgeeks.org/git/" },
      { title: "GitHub Docs", url: "https://docs.github.com/en" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "coding-profiles",
    title: "20. Coding Profiles & Visibility",
    description: "Build your coding profiles (LeetCode, CodeChef, HackerRank, GitHub) and showcase your projects. Participate in contests, open source, and share your journey on LinkedIn.",
    resources: [
      { title: "Coding Wallah: Coding Profiles Guide (YouTube)", url: "https://youtube.com/@codingwallahsir" },
      { title: "LeetCode", url: "https://leetcode.com/" },
      { title: "GitHub", url: "https://github.com/" },
    ],
  },
  {
    id: "deploy",
    title: "21. Deployment & Cloud (Docker/Cloud)",
    description: "Containerization with Docker and deploying applications to the cloud. Learn how to make your apps production-ready.",
    resources: [
      { title: "Docker Guide", url: "https://www.docker.com/get-started/" },
      { title: "AWS Java Docs", url: "https://docs.aws.amazon.com/sdk-for-java/" },
      { title: "Coding Wallah: Java Playlist (YouTube)", url: "https://www.youtube.com/playlist?list=PLhvdldYcnZMku_viVb2tU7NuW5DZxwIfw" },
    ],
  },
  {
    id: "real-life-project",
    title: "22. Real-Life Project & Industry Preparation",
    description: "Build a real-life project (E-commerce, Blog, Chat App, etc.) and prepare for interviews. Apply all concepts, document your journey, and share on LinkedIn. This step is crucial for both freshers and experienced candidates.",
    resources: [
      { title: "Coding Wallah: Real Project Series (YouTube)", url: "https://youtube.com/@codingwallahsir" },
      { title: "Spring Boot + React Project", url: "https://youtu.be/wCICF9YSWNo?si=dtAgw-DriOhTFebh" },
      { title: "Live Chat Web using Spring Boot + websocket", url: "https://youtu.be/tXn-a88h7dY?si=vpaivUo1l36CjJ6m" },
      { title: "Weather App for Practice API", url: "https://youtu.be/QI4fH7S8tts?si=Ms02JC0JLRt8P4S-" },
    ],
  },
];
