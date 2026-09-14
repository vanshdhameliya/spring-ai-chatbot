# Spring AI Chatbot

An AI-powered chatbot and website builder built with **Spring Boot, Spring AI, Java, and OpenRouter**.

This project was created to explore core Spring AI concepts such as conversation history, chat memory, system instructions, streaming, hallucinations, and AI tool calling.

## Features

* AI-powered chatbot
* Conversation history and chat memory
* System instructions and context handling
* Streaming responses
* REST API integration
* OpenRouter / OpenAI-compatible API support
* External tool calling
* Multiple tool support for multi-step requests
* AI-powered website generation

The AI automatically selects and calls the appropriate tool based on the user's request.

* **Calculator Tool** — Performs arithmetic calculations
* **Currency Exchange Tool** — Handles currency conversion and exchange rates
* **Weather Tool** — Provides current weather information
* **Website Tools** — Creates directories and generates HTML, CSS, and JavaScript files

## AI Website Builder

Describe the website you want in natural language, and the AI can generate the required website files.

Example:

```text
Create a modern portfolio website for a Java developer.
```

The AI can create and manage files inside the `generated-sites` workspace.

## Tech Stack

* Java
* Spring Boot
* Spring AI
* OpenRouter
* Maven
* WeatherAPI
* Frankfurter API
* HTML, CSS, JavaScript

## Configuration

Configure your API keys using environment variables:

```properties
spring.ai.openai.api-key=${OPENROUTER_API_KEY}
weather.api.key=${WEATHER_API_KEY}
```

## Learning

This project helped me understand:

* Spring AI and ChatClient
* system instructions
* Conversation memory
* Tool calling
* External API integration
* Multi-step AI workflows
* AI-assisted website generation
