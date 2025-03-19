document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
    
    if (errorParam) {
        
        const errorElement = document.getElementById('errorMessage');
        errorElement.textContent = errorParam;
    }
    
    
    const loginForm = document.getElementById('loginForm');
    
    
    loginForm.addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        
        const errorElement = document.getElementById('errorMessage');
        
        
        if (!username || !password) {
            errorElement.textContent = 'Username and password are required';
            errorElement.className = 'text-danger text-center'; 
            return;
        }
        
        
        if (username === 'admin' && password === '123456') {
            
            errorElement.textContent = 'Login successful! Redirecting...';
            errorElement.className = 'text-success text-center'; 
            
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            
            errorElement.textContent = 'Invalid username or password';
            errorElement.className = 'text-danger text-center'; 
        }
    });
});