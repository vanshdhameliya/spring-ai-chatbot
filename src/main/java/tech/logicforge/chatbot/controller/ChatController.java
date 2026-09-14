package tech.logicforge.chatbot.controller;

import org.springframework.web.bind.annotation.*;
import tech.logicforge.chatbot.service.ChatService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/chat")
    public String chat(@RequestBody String message) {
        return chatService.chat(message);
    }

    @DeleteMapping
    public void clearChat() {
        chatService.clearHistory();
    }
}