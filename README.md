# Spring AI Chatbot

A simple AI chatbot built with **Spring Boot, Spring AI, and OpenAI/OpenRouter**.

This is my first Spring AI project, created to understand conversation history, context, system instructions, memory, streaming, hallucinations, and tool calling.

## Features

* AI-powered chatbot
* Conversation history
* System instructions
* Chat memory
* REST API
* OpenAI/OpenRouter API integration
* External tool calling
* Calculator Tool
* Currency Exchange Tool
* Weather Tool
* Multiple tool support for multi-step requests

Get an API key from OpenAI Platform or OpenRouter and configure it in the application.

## External Tools

The chatbot can use external tools when required:

* **Calculator Tool** — Performs arithmetic calculations.
* **Currency Exchange Tool** — Handles currency conversion and exchange-rate requests.
* **Weather Tool** — Provides current weather information.

The AI automatically selects the appropriate tool based on the user's request and uses the tool results to generate the final response.
