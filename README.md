# Secure Login System

A modern, secure JavaScript-based login system that replaces a legacy JSP implementation. This project demonstrates best practices for client-side validation, XSS prevention, and modern API communication.

## Features

- **Client-side validation** - Prevents form submission with empty fields
- **XSS Prevention** - Uses textContent instead of innerHTML for displaying messages
- **Modern API Communication** - Uses Fetch API for asynchronous requests
- **Simple Mock Backend** - Includes a simple Express server for testing

## Security Improvements

| Aspect | Old JSP Implementation | New JS Implementation |
|--------|------------------------|------------------------|
| Error Handling | Raw output vulnerable to XSS | Safe textContent display |
| Form Submission | Direct page reload | Asynchronous with preventDefault() |
| Input Validation | None on client-side | Validates before submission |
| API Requests | Traditional form POST | Modern Fetch API |
| Security | XSS vulnerability | XSS protection with textContent |

## Quick Start

### Installation

```bash
# Install dependencies:
npm install

```bash
# Start the server:
npm start

```bash
# Open your browser and navigate to:
npm start

```bash
# Logon with the following credentials:
username: admin
password: 123456