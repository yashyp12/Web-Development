// JavaScript Basics Example
console.log("Welcome to JavaScript!");

// Variables and Data Types
let userName = "Web Developer";
const currentYear = 2024;
let isLearning = true;

// Function to display user info
function displayUserInfo() {
    const userInfo = {
        name: userName,
        year: currentYear,
        status: isLearning ? "Currently Learning" : "Not Learning"
    };
    
    console.log("User Information:", userInfo);
    return userInfo;
}

// Array of programming languages
const languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Loop through languages
function showLearningPath() {
    console.log("Learning Path:");
    languages.forEach((language, index) => {
        console.log(`${index + 1}. ${language}`);
    });
}

// DOM Manipulation (when used in HTML)
function initializeApp() {
    // Check if we're in a browser environment
    if (typeof document !== 'undefined') {
        // Update page title
        document.title = "JavaScript Learning Demo";
        
        // Create and add content
        const container = document.createElement('div');
        container.innerHTML = `
            <h1>Hello, ${userName}!</h1>
            <p>Current Year: ${currentYear}</p>
            <p>Learning Status: ${isLearning ? 'Active' : 'Inactive'}</p>
        `;
        
        // Add to page when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(container);
        });
    }
}

// Event handling example
function setupEventListeners() {
    if (typeof document !== 'undefined') {
        document.addEventListener('click', (event) => {
            console.log('Page clicked at:', event.clientX, event.clientY);
        });
    }
}

// Call functions
displayUserInfo();
showLearningPath();
initializeApp();
setupEventListeners();